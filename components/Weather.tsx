import React, { ReactElement } from "react";
import useSWR from "swr";
import { getCurrentWeather } from "../lib/api";
import { ThemeType } from "../lib/types";
import ChangeRegionBtn from "./ChangeRegionBtn";
import Box from "./common/Box";

function ChangeRegionModal() {
  return <div style={{ backgroundColor: "red" }}>Modal</div>;
}
interface Props {
  theme: ThemeType;
}

function Weather({ theme }: Props): ReactElement {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  console.log("isOpenModal :>> ", isOpenModal);

  const { data, error } = useSWR("/weather", () => getCurrentWeather("seoul"));

  const ABS_ZERO = 273.15;
  const temperatures = (data?.main.temp - ABS_ZERO).toFixed(2);

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <Box
        title="날씨"
        theme={theme}
        button={<ChangeRegionBtn handleClick={openModal} />}
      >
        <div>
          <div>{data?.name}</div>
          <div>{temperatures}°C</div>
          <div>{data?.weather[0].main}</div>
        </div>
      </Box>
      {isOpenModal && <ChangeRegionModal />}
    </>
  );
}

export default Weather;
