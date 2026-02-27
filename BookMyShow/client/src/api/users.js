import { axiosInstance } from ".";

const usersBaseUrl = "/api/users";

export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${usersBaseUrl}/register`,
      payload,
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post(`${usersBaseUrl}/login`, payload);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
