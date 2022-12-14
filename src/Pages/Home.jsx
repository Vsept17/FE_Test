import React, { useEffect, useState } from "react";
import SideMenu from "../Components/SideMenu";
import { HomeChart, HomeImage, HomeList } from "../Components/MenuHome";
import { getDataRuas } from "../Utils/ApiData";
const Home = () => {
  const [dataRuas, setDataRuas] = useState([]);

  const getDataRuasAPI = () => {
    getDataRuas()
      .then((res) => {
        setDataRuas(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataRuasAPI();
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row">
        <div style={{ width: "10%" }}>
          <SideMenu />
        </div>
        <div style={{ width: "90%" }} className="p-4">
          <p className="font-bold text-lg">Chart</p>
          <HomeChart dataRuas={dataRuas} />
          <p className="font-bold text-xl">Image Gallery</p>
          <HomeImage dataRuas={dataRuas} />
          <HomeList dataRuas={dataRuas} />
        </div>
      </div>
    </div>
  );
};

export default Home;
