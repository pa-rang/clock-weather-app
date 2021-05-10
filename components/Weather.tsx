import React, { ReactElement } from "react";
import useSWR from "swr";
import { getCurrentWeather } from "../lib/api";
import ChangeRegionBtn from "./ChangeRegionBtn";
import Box from "./common/Box";

function ChangeRegionModal() {
  return <div style={{ backgroundColor: "red" }}>Modal</div>;
}

function Weather(): ReactElement {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const { data } = useSWR("/weather", () => getCurrentWeather("seoul"));

  const ABS_ZERO = 273.15;
  const temperatures = (data?.main.temp - ABS_ZERO).toFixed(2);

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <Box title="날씨" button={<ChangeRegionBtn handleClick={openModal} />}>
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
