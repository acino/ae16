import {Block} from "./block";

export interface Schedule {
  availableTracks: string[];
  tracks: any; // TODO: How do we map the string=>Track?
  blocks: Block[];
}
