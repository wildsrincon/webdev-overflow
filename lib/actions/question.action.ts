"use server"
// import Question from "@/database/question.model";
// import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose"
// import { CreateQuestionParams } from "./shared.types";
// import User from "@/database/user.model";
// import { revalidatePath } from "next/cache";

// export async function getQuestions(params: GetQuestionsParams) {
//   try {
//     connectToDatabase();

//     const questions = await Question.find({})
//       .populate({ path: 'tags', model: Tag })
//       .populate({ path: 'author', model: User })
//       .sort({ createdAt: -1 })

//     return { questions };
//   } catch (error) {
//     console.log(error)
//     throw error;
//   }
// }

export async function createQuestion(params: any) {
  try {
    connectToDatabase();

    // const { title, content, tags, author, path } = params;

    // // Create the question
    // const question = await Question.create({
    //   title,
    //   content,
    //   author
    // });
  } catch (error) {
    
  }
}