export const wait = (time: number) =>
  new Promise((res) => setTimeout(() => res(`Waited ${time} millisec`), time));
