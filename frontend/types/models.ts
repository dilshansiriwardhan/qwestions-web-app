export interface CreateExamRequest {
	examName: string;
}

export interface Exam {
	id: string;
	examName: string;
	createdAt: string;
	updatedAt: string;
}

type AnswerProps = {
	num: number;
	correct: boolean;
	answer: string;
};


export type QuestionFormProps = {
	question: string;
	answers: AnswerProps[];
};

export interface QuestionRequest {
	id: string;
	data: QuestionFormProps;
}

interface Answer {
	_id: string;
	num?: number;
	correct: boolean;
	answer: string;
  }

export interface GetQuestion {
	_id: string;
	questionId: string;
	questionNumber: number; 
	question: string;
	answers: Answer[];    
	examId: string; 
  }