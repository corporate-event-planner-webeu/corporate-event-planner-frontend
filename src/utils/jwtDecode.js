import jwtDecode from "jwt-decode";

export const getUserId = () => {
  const token = localStorage.getItem("userToken");
  const decoded = jwtDecode(token);
  return decoded;
};
