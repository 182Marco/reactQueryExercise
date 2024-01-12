import { FormEvent } from 'react';

export type ISendPost = (event: FormEvent<HTMLFormElement>) => void;

export interface IPost {
  title: string;
  body: string;
  id: number;
}
