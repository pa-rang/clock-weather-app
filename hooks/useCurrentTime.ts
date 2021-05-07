import React, { useState } from "react";
import { months } from "../lib/constants/months";

interface ReturnType {
  year: number;
  month: string;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export const useCurrentTime = (): ReturnType => {
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const tick = () => setCurrentTime(new Date());
    const updateTime = setInterval(() => tick(), 1000);

    return () => clearInterval(updateTime);
  });

  const month = months[currentTime.getMonth()];
  const year = currentTime.getFullYear();
  const day = currentTime.getDate();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  return { year, month, day, hour, minute, second };
};
