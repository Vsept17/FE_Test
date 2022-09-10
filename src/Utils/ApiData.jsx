import axios from "axios";

const BASE_URL = 'https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas'

export let getDataRuas = async (param) => {
    const url = `${BASE_URL}/ruas`;
    const { nip, password } = param;
    const formData = {
      nip,
      password,
    };
    const res = await axios.post(url, formData);
    return res.data;
  };

  export let postDataRuas = async (param) => {
    const url = `${BASE_URL}/ruas`;
    const { nip, password } = param;
    const formData = {
      nip,
      password,
    };
    const res = await axios.post(url, formData);
    return res.data;
  };

  export let putDataRuas = async (param) => {
    const url = `${BASE_URL}/ruas/${id}`;
    const { nip, password } = param;
    const formData = {
      nip,
      password,
    };
    const res = await axios.post(url, formData);
    return res.data;
  };

  export let deleteDataRuas = async (param) => {
    const url = `${BASE_URL}/ruas/${id}`;
    const { nip, password } = param;
    const formData = {
      nip,
      password,
    };
    const res = await axios.post(url, formData);
    return res.data;
  };