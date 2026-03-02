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
