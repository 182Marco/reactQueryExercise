import { IWait, IgenRandom } from './models';

export const wait: IWait = time =>
  new Promise(res => setTimeout(() => res(`Waited ${time} millisec`), time));

export const genRandom: IgenRandom = (min = 0, max = 9999999) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
