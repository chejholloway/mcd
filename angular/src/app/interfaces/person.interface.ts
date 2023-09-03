import { Result } from "./result.interface";

export interface IPerson {
  count: number;
  next: string;
  previous?: any;
  results?: Result[];
}
