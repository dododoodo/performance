import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_APIURL}/kcisa`;

export const publicData = async ({ numOfRows = 100, pageNo = 1 } = {}) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: { numOfRows, pageNo },
    });
    return response.data;
  } catch (error) {
    console.error("데이터 요청 오류:", error);
    throw error;
  }
};
