import { axiosInstance } from ".";

const usersBaseUrl = "/api/users";

export const registerUser = async (values) => {
  try {
    const response = await axiosInstance.post(
      `${usersBaseUrl}/register`,
      values,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
};

export const loginUser = async (values) => {
  try {
    const response = await axiosInstance.post(`${usersBaseUrl}/login`, values);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.get(`${usersBaseUrl}/logout`);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.post(
      `${usersBaseUrl}/get-current-user`,
      {},
    );
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
