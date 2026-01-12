
export enum ViewState {
  INITIAL = 'INITIAL',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
  MAIN_SITE = 'MAIN_SITE'
}

export interface Question {
  id: number;
  text: string;
  options: string[];
}
