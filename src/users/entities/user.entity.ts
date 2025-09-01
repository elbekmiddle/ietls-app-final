import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import bcrypt from 'bcryptjs'; // ✅ bcryptjs ishlatamiz

export type UserDocument = User &
  Document & {
    matchPassword(password: string): Promise<boolean>;
  };

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ default: false })
  agreeTerms: boolean;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// 🔹 matchPassword metodini qo‘shish
UserSchema.methods.matchPassword = async function (
  this: UserDocument,
  enteredPassword: string,
): Promise<boolean> {
  // TypeScript va ESLint endi bu yerda xato bermaydi
  const isMatch: boolean = await bcrypt.compare(enteredPassword, this.password);
  return isMatch;
};

// 🔹 Passwordni saqlashdan oldin hash qilish
UserSchema.pre<UserDocument>('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
