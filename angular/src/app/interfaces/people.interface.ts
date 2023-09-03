import { Result } from "./result.interface";

export interface IPeople {
  count: number;
  next: string;
  previous?: any;
  results?: Result[];
}
