import axios from "axios";

import type { CookieJar } from "tough-cookie";

export const Primary = async () => {
  // @ts-ignore: Unreachable code error
  const res = await axios({
    url: "https://rsom-recruitment.azurewebsites.net/areas/primary",
    method: "get",
    headers: {
      Cookie:
        "csrftoken=zcXMnNGEk8viaVmLBYlp5msfSusBcpDI5b74WKZiAgUGB9OioLbi7PGwjOWBr85w; sessionid=l16gsye1vt7wc5mxss51frdhe1a1l27v",
    },
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

  return res;
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
