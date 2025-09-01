import mongoose from 'mongoose';
import { CourseQuestionSchema } from './schemas/course-question.schema';
import { CourseContentSchema } from './schemas/course-content.schema';
import { CourseTipSchema } from './schemas/course-tip.schema';

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ielts-app');
  const connection = mongoose.connection;

  console.log('MongoDB ga ulandi');

  const CourseQuestionModel = connection.model('CourseQuestion', CourseQuestionSchema);
  const CourseContentModel = connection.model('CourseContent', CourseContentSchema);
  const CourseTipModel = connection.model('CourseTip', CourseTipSchema);

  // Masalan, courseQuestions obyektini arrayga aylantirish
  const courseQuestionsArray = Object.values(courseQuestions);
  const courseContentsArray = Object.values(contentMap);
  const courseTipsArray = Object.values(tipsMap);

  await CourseQuestionModel.deleteMany({});
  await CourseContentModel.deleteMany({});
  await CourseTipModel.deleteMany({});

  await CourseQuestionModel.insertMany(courseQuestionsArray);
  await CourseContentModel.insertMany(courseContentsArray);
  await CourseTipModel.insertMany(courseTipsArray);

  console.log('Data muvaffaqiyatli qo‘shildi');

  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
