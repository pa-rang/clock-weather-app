import React, { ReactElement } from "react";
import useSWR from "swr";
import { getCurrentWeather } from "../lib/api";
import { ThemeType } from "../lib/types";
import Box from "./common/Box";

interface Props {
  theme: ThemeType;
}

function Weather({ theme }: Props): ReactElement {
  const { data, error } = useSWR("/weather", () => getCurrentWeather("seoul"));

  const ABS_ZERO = 273.15;
  const temperatures = (data?.main.temp - ABS_ZERO).toFixed(2);

  return (
    <Box title="날씨" theme={theme}>
      <div>
        <div>{data?.name}</div>
        <div>{temperatures}°C</div>
        <div>{data?.weather[0].main}</div>
      </div>
    </Box>
  );
}

export default Weather;
