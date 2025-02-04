import { useMutation, useQuery } from '@tanstack/react-query';
import api from '@/services/api';
import {
	CreateExamRequest,
	Exam,
	QuestionRequest,
	GetQuestion,
} from '../types/models';

const createExam = async (data: CreateExamRequest): Promise<Exam> => {
	const response = await api.post<Exam>('/exam', data);
	return response.data;
};

export const useCreateExam = () => {
	return useMutation(createExam, {
		onSuccess: (data) => {
			console.log('Exam created successfully:', data);
		},
		onError: (error: any) => {
			console.error(
				'Error creating exam:',
				error?.response?.data || error.message
			);
		},
	});
};

const sendQuestions = async ({
	questions,
	examId,
}: {
	examId: string;
	questions: QuestionRequest[];
}) => {
	const response = await api.put('/question/many', { questions, examId });
	return response.data;
};

export const useSendQuestions = () => {
	return useMutation(sendQuestions, {
		onSuccess: (data) => {
			console.log('Questions sent successfully:', data);
		},
		onError: (error: any) => {
			console.error(
				'Error sending questions:',
				error?.response?.data || error.message
			);
		},
	});
};

const getQuestions = async (examId: string) => {
	const response = await api.get<GetQuestion[]>(`/question/${examId}`);
	return response.data;
};

export const useGetQuestions = (examId: string) => {
  return useQuery(['questions', examId], () => getQuestions(examId), {
    enabled: !!examId,
  });
};