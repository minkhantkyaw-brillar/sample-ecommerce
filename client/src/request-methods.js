import axios from "axios";

const BASE_URL = "http://192.168.0.54:1234/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGEzOGUwYjczZTg5NTczZDAxNmZmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzA3NTI3OSwiZXhwIjoxNjYzMTYxNjc5fQ.sLeBTfgAymobkEF1rcOzexB8-ixEXKWat-7lRFfaKVQ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
