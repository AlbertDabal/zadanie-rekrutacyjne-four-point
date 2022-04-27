import axios from "axios";

import type { CookieJar } from "tough-cookie";

export const Primary = async () => {
  const res = await axios({
    url: "https://rsom-recruitment.azurewebsites.net/areas/primary",
    method: "get",
  }).catch((error) => {
    console.log(error);
  });

  return res;
};

export const Secondary = async (key: string) => {
  const res = await axios({
    url: "https://rsom-recruitment.azurewebsites.net/areas/secondary",
    method: "get",
    headers: {
      Authorization: `Token ${key}`,
    },
  }).catch((error) => {
    console.log(error);
  });

  return res.data;
};

export const Data = async (key: string) => {
  const res = await axios({
    url: "https://rsom-recruitment.azurewebsites.net/areas/data",
    method: "get",
    headers: {
      Authorization: `Token ${key}`,
    },
  }).catch((error) => {
    console.log(error);
  });

  return res;
};
