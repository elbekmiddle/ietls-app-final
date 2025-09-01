// src/data/ielts-data.ts
export const courseQuestions = {
    reading: {
      color: "bg-blue-500",
      subject: "Academic Vocabulary",
      question: "Choose the correct meaning of 'analyze'",
      options: [
        "to examine in detail",
        "to memorize completely",
        "to ignore purposefully",
        "to write quickly",
      ],
      correctAnswer: 1,
    },
    writing: {
      color: "bg-purple-500",
      subject: "Essay Structure",
      question: "What is the main purpose of an introduction paragraph?",
      options: [
        "to provide detailed examples",
        "to introduce the topic and thesis statement",
        "to conclude the argument",
        "to list all references",
      ],
      correctAnswer: 2,
    },
    listening: {
      color: "bg-green-500",
      subject: "Audio Comprehension",
      question: "What should you do first when listening to an audio passage?",
      options: [
        "start writing immediately",
        "read the questions first",
        "close your eyes and focus",
        "take notes on everything",
      ],
      correctAnswer: 2,
    },
    speaking: {
      color: "bg-orange-500",
      subject: "Pronunciation Practice",
      question: "Which technique helps improve English pronunciation?",
      options: [
        "speaking very fast",
        "mimicking native speakers",
        "avoiding difficult words",
        "speaking only in your head",
      ],
      correctAnswer: 2,
    },
  };
  
  export const contentMap = {
    reading: {
      title: "Reading: True/False/Not Given Questions",
      content: [
        { type: "section", title: "Understanding Question Types", text: "In IELTS Reading, you'll encounter three types of responses for statements about the passage:" },
        { type: "definition", title: "TRUE", text: "The statement agrees with the information in the passage." },
        { type: "definition", title: "FALSE", text: "The statement contradicts the information in the passage." },
        { type: "definition", title: "NOT GIVEN", text: "The information is not provided in the passage - you cannot determine if it's true or false." },
        { type: "tip", title: "Key Strategy", text: "Don't use your own knowledge! Base your answers only on what's written in the passage. If the passage doesn't mention something, the answer is 'Not Given'." },
        { type: "example", title: "Example", text: "Passage: 'The library opens at 9 AM on weekdays.' Statement: 'The library opens at 9 AM on Saturday.' Answer: NOT GIVEN (Saturday isn't mentioned)" },
      ],
    },
    writing: {
      title: "Writing: Essay Structure and Development",
      content: [
        { type: "section", title: "IELTS Writing Task Structure", text: "Learn the essential components of a high-scoring IELTS essay." },
        { type: "definition", title: "Introduction", text: "Paraphrase the question and present your thesis statement clearly." },
        { type: "definition", title: "Body Paragraphs", text: "Develop your main ideas with examples and explanations." },
        { type: "definition", title: "Conclusion", text: "Summarize your main points and restate your position." },
      ],
    },
  },
  listening: {
      title: "Listening: Note-taking and Prediction Strategies",
      content: [
        { type: "section", title: "Effective Listening Techniques", text: "Master these strategies to improve your IELTS Listening performance." },
        { type: "definition", title: "Prediction", text: "Read questions before listening to predict what information you need." },
        { type: "definition", title: "Key Words", text: "Listen for keywords and synonyms that signal important information." },
      ],
    },
    speaking: {
      title: "Speaking: Fluency and Coherence",
      content: [
        { type: "section", title: "Speaking Assessment Criteria", text: "Understand how your speaking is evaluated in IELTS." },
        { type: "definition", title: "Fluency", text: "Speak smoothly without too many pauses or hesitations." },
        { type: "definition", title: "Coherence", text: "Organize your ideas logically and use linking words effectively." },
      ],
    };
    }
  export const tipsMap = {
    reading: { title: "IELTS Reading Tips", tips: [{ number: "01", title: "Skim First, Read Later", description: "Spend 2-3 minutes skimming the passage." }] },
    writing: { title: "IELTS Writing Tips", tips: [{ number: "01", title: "Plan Before You Write", description: "Spend 5 minutes planning your essay structure." }] },
    listening: { title: "IELTS Listening Tips", tips: [{ number: "01", title: "Read Questions First", description: "Read questions to predict what you'll hear." }] },
    speaking: { title: "IELTS Speaking Tips", tips: [{ number: "01", title: "Extend Your Answers", description: "Don't give one-word answers; explain and elaborate." }] },
  };
  