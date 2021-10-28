export interface Option {
    id: any;
    value: string;
}

export interface Input {
    id: any;
    name: string;
    label: string;
    placeHolder: string;

    field: string
}

export interface Question {
    id: any;
    title: string;
    type: 'input' |
          'checkbox' |
          'multiple-inputs' |
          'address' |
          'options' |
          'date' |
          'category-selects' |
          'select' |
          'radio';
    label?: string;
    placeHolder?: string;
    options?: Option[];
    inputs?: Input[];

    field: string
}

export interface QuestionsGroup {
    id: any;
    questions: Question[];
}

export interface SurveyModel {
    id: any;
    surveyTitle: string;
    backgroundColor: string;
    questionsGroups: QuestionsGroup[];

    isExpanded?: boolean
}
