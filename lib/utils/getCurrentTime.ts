import { months } from "../constants/months";

export const getCurrentTime = () => {
  const currentTime = new Date();

  const month = months[currentTime.getMonth()]; // 시간, 월만 let으로 지정
  const year = currentTime.getFullYear();
  const day = currentTime.getDate();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  return { year, month, day, hour, minute, second };
};
