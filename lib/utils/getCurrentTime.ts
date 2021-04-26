import { months } from "../constants/months";

type ReturnType = {
  year: number;
  month: string;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

export const getCurrentTime = (): ReturnType => {
  const currentTime = new Date();

  const month = months[currentTime.getMonth()]; // 시간, 월만 let으로 지정
  const year = currentTime.getFullYear();
  const day = currentTime.getDate();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  return { year, month, day, hour, minute, second };
};
