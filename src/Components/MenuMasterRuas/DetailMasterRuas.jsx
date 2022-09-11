import React, { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
const DetailMasterRuas = ({ dataDetail, detailOpen, setDetailOpen }) => {
  return (
    <div>
      <Transition appear show={detailOpen} as={Fragment}>
        <Dialog
          as="div"
          className="w-80 relative z-10"
          onClose={() => setDetailOpen(false)}
        >
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
                    className="text-lg font-medium leading-6 mb-8 text-gray-900"
                  >
                    Detail Ruas
                  </Dialog.Title>

                  <div>
                    <div className="mb-4">
                      <p className="font-bold">Unit Kerja</p>
                      <p>{dataDetail.unitKerja}</p>
                    </div>
                    <div className="mb-4">
                      <p className="font-bold">Ruas</p>
                      <p>{dataDetail.ruas}</p>
                    </div>
                    <div className="mb-4">
                      <p className="font-bold">Gambar</p>
                      <p>{dataDetail.gambar}</p>
                    </div>
                    <div className="mb-4">
                      <p className="font-bold">Tanggal</p>
                      <p>{dataDetail.tanggal}</p>
                    </div>
                  </div>

                  <div className="w-full flex justify-end gap-4 mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={() => setDetailOpen(false)}
                    >
                      OK
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DetailMasterRuas;
