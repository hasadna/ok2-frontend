
export enum ToolId {
  OneMinuteSpeech = 'OneMinuteSpeech',
  StandardQuery = 'StandardQuery',
  UrgentQuery = 'UrgentQuery',
  DirectQuery = 'DirectQuery',
  SuggestionToOrder = 'SuggestionToOrder'
}

export interface ToolEvent {
  date: Date;
  text: string;
}
