import axios from "axios";

const BASE_URL = "https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas";

export let getDataRuas = async (param) => {
  const url = `${BASE_URL}/ruas`;
  const res = await axios.get(url);
  return res.data;
};

export let postDataRuas = async (param) => {
  const { ruas, unit, picture, tanggal, status, } = param;
  const url = `${BASE_URL}/ruas`;
  const formData = new FormData()
  formData.append('ruas', ruas)
  formData.append('unit', unit)
  formData.append('picture', picture)
  formData.append('tanggal', tanggal)
  formData.append('status', status)
  const res = await axios.post(url, formData);
  return res;
};

export let putDataRuas = async (param) => {
  const { ruas, unit, picture, tanggal, status, id} = param;
  const url = `${BASE_URL}/ruas/${id}`;
  const formData = new FormData()
  formData.append('ruas', ruas)
  formData.append('unit', unit)
  formData.append('picture', picture)
  formData.append('tanggal', tanggal)
  formData.append('status', status)
  const res = await axios.put(url, formData);
  return res;
};

export let deleteDataRuas = async (id) => {
  const url = `${BASE_URL}/ruas/${id}`;
  const res = await axios.delete(url);
  return res;
};
