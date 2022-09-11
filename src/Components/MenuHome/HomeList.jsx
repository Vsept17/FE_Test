import React from "react";
import { MDBDataTable } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const HomeList = ({ dataRuas }) => {
  const dataMDB = {
    columns: [
      {
        label: "No",
        field: "no",
        sort: "asc",
        width: 80,
      },
      {
        label: "Ruas",
        field: "ruas",
        sort: "asc",
        width: 120,
      },
      {
        label: "Unit Kerja",
        field: "unitKerja",
        sort: "asc",
        width: 200,
      },
      {
        label: "Gambar",
        field: "gambar",
        sort: "asc",
        width: 200,
      },
      {
        label: "Tanggal",
        field: "tanggal",
        sort: "asc",
        width: 200,
      },
    ],
    rows:
      dataRuas &&
      dataRuas.map((e, i) => ({
        no: i + 1,
        ruas: e.ruas,
        unitKerja: e.unit,
        gambar: (
          <div className="flex justify-center items-center w-full py-2">
            <img className="rounded-lg" src={e.picture} />
          </div>
        ),
        tanggal: e.date_create,
      })),
  };

  return (
    <div>
      <div className="flex flex-col w-full mb-8 shadow-xl rounded-md h-max bg-white-chart-bg border-sidemenu-gray border-2">
        <div className="p-4 bg-white rounded-md">
          <MDBDataTable
            scrollX
            maxHeight="78vh"
            exportToCSV
            striped
            bordered
            hover
            data={dataMDB}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeList;
