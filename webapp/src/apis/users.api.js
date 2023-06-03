import axios from "./axios";
import { EndpointConfig } from "../configs/endpoint.config";

export const getUsers = async () => {
  const params = {};

  const data = await axios.get(EndpointConfig.GET_USERS, {
    params: {
      ...params,
    },
  });

  return data;
};

export const getUserById = async (id) => {
  const params = {};

  const data = await axios.get(`${EndpointConfig.GET_USERS}/${id}`, {
    params: {
      ...params,
    },
  });

  return data;
};
