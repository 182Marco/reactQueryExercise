export interface Post {
  id?: number | string;
  auth?: string;
  title?: string;
  abstract?: string;
}

export interface Author {
  fullname: string;
  birthdate: string;
  age: number;
  fiscalcode: string;
  address: string;
  placeOfBirth: string;
  nationality: string;
  bio: string;
  sex: 'M' | 'F';
  eyeColor: string;
  hairColor: string;
  height: number;
  publishedArticles: number;
  firstPublishDate: number;
  specialization: string;
}

export type IWait = (n: number) => Promise<string>;

export type IgenRandom = (min?: number, max?: number) => number;
