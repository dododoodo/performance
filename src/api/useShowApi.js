import { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_APIURL}/kcisa`;

function useShowApi() {
  const [latestList, setLatestList] = useState([]);
  const [musicalList, setMusicalList] = useState([]);
  const [classicList, setClassicList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}?numOfRows=100&pageNo=1`);
        let items = res.data?.items || [];
        
        const allItems = Array.isArray(items) ? items : [items];
        const withImage = allItems.filter(item => item.IMAGE_OBJECT);
        const filterGenre = genre => withImage.filter(item => item.GENRE?.includes(genre));

        setLatestList(withImage.slice(0, 20));
        setMusicalList(filterGenre('뮤지컬'));
        setClassicList(filterGenre('클래식'));
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };
    fetchData();
  }, []);
  return { latestList, musicalList, classicList };
}

export default useShowApi;
