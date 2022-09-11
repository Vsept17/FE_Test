import React, { useEffect, useState } from "react";
import ListMasterRuas from "../Components/MenuMasterRuas/ListMasterRuas";
import SideMenu from "../Components/SideMenu";
import {
  getDataRuas,
  postDataRuas,
  putDataRuas,
  deleteDataRuas,
} from "../Utils/ApiData";

const MasterRuas = () => {
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
        <div className="p-4" style={{ width: "90%" }}>
          <ListMasterRuas dataRuas={dataRuas} getDataRuasAPI={getDataRuasAPI} />
        </div>
      </div>
    </div>
  );
};

export default MasterRuas;
