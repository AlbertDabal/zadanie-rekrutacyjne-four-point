import axios from "axios";

declare module "axios" {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

export const Login = async () => {
  const res = await axios({
    url: "https://rsom-recruitment.azurewebsites.net/users/login/",
    method: "post",
    data: {
      username: "admin",
      password: "123",
    },
  }).catch((error) => {
    console.log(error);
  });

  return res.data;
};
