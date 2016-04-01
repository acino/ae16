import {Session} from './session';

export interface Block {
  startTime: string;
  endTime: string;
  duration: number;
  onlyOneSession: boolean;
  type: string;
  sessions: Session[];
}
