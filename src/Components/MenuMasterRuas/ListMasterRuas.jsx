import React, { useState, useEffect, Fragment } from "react";
import { MDBDataTable } from "mdbreact";
import { Dialog, Transition } from "@headlessui/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import AddMasterRuas from "./AddMasterRuas";
import DetailMasterRuas from "./DetailMasterRuas";
import DeleteMasterRuas from "./DeleteMasterRuas";
import { postDataRuas, putDataRuas, deleteDataRuas } from "../../Utils/ApiData";

const ListMasterRuas = ({ dataRuas, getDataRuasAPI }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [dataDetail, setDataDetail] = useState([]);
  const [id, setId] = useState("");

  const [ruas, setRuas] = useState("");
  const [unitKerja, setUnitKerja] = useState("");
  const [gambar, setGambar] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e, type) => {
    if (type === "ruas") {
      setRuas(e);
    } else if (type === "unitkerja") {
      setUnitKerja(e);
    } else if (type === "gambar") {
      setGambar(e);
    } else if (type === "tanggal") {
      setTanggal(e);
    } else if (type === "status") {
      setStatus(e);
    }
  };

  const clear = () => {
    setRuas("")
    setUnitKerja("")
    setGambar("")
    setTanggal("")
    setStatus("")
  }

  const addDataRuas = () => {
    postDataRuas({ ruas, unit: unitKerja, picture: gambar, tanggal, status })
      .then((res) => {
        getDataRuasAPI();
        closeModal()
        clear()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editDataRuas = () => {
    putDataRuas({ ruas, unit: unitKerja, picture: gambar, tanggal, status, id })
      .then((res) => {
        getDataRuasAPI();
        setIsEdit(false)
        closeModal()
        clear()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const delDataRuas = () => {
    deleteDataRuas(id)
      .then((res) => {
        getDataRuasAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function closeModal() {
    setIsOpen(false);
    setIsEdit(false)
    clear()
  }

  function openModal() {
    setIsOpen(true);
  }

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
        width: 280,
      },
      {
        label: "Tanggal",
        field: "tanggal",
        sort: "asc",
        width: 280,
      },
      {
        label: "Aksi",
        field: "aksi",
        sort: "asc",
        width: 180,
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
        aksi: (
          <div className="w-full flex justify-center items-center gap-3">
            <button
              className=""
              onClick={() => {
                setIsEdit(true);
                setIsOpen(true);
                setDataDetail({
                  ruas: e.ruas,
                  unitKerja: e.unit,
                  gambar: e.picture,
                  tanggal: e.date_create,
                });
                setId(e.id)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
            <button
              className=""
              onClick={() => {
                setDataDetail({
                  ruas: e.ruas,
                  unitKerja: e.unit,
                  gambar: e.picture,
                  tanggal: e.tanggal,
                  status: e.status,
                });
                setDetailOpen(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                setIsDelete(true);
                setId(e.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        ),
      })),
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Ruas</h1>
        <button
          className="bg-green-500 px-8 py-2 rounded-2xl font-bold focus:outline-none hover:text-white"
          onClick={openModal}
        >
          Tambah Ruas
        </button>
      </div>
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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="w-80 relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {isEdit ? "Edit Ruas" : "Tambah Ruas"}
                  </Dialog.Title>
                  <AddMasterRuas
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    handleChange={handleChange}
                    ruas={ruas}
                    dataDetail={dataDetail}
                    unitKerja={unitKerja}
                    gambar={gambar}
                    tanggal={tanggal}
                    status={status}
                  />

                  <div className="w-full flex justify-end gap-4 mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={isEdit ? editDataRuas : addDataRuas}
                    >
                      Simpan
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <DetailMasterRuas
        dataDetail={dataDetail}
        detailOpen={detailOpen}
        setDetailOpen={setDetailOpen}
      />
      <DeleteMasterRuas
        isDelete={isDelete}
        setIsDelete={setIsDelete}
        delDataRuas={delDataRuas}
      />
    </div>
  );
};

export default ListMasterRuas;
