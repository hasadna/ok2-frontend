
export enum ToolId {
  OneMinuteSpeech = 'OneMinuteSpeech',
  StandardQuery = 'StandardQuery',
  UrgentQuery = 'UrgentQuery',
  DirectQuery = 'DirectQuery',
  GenrealAgenda = 'GenrealAgenda'
}

export interface ToolEvent {
  date: Date;
  text: string;
}
