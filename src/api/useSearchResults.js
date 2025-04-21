import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_APIURL}/kcisa`;

function useSearchResults(keyword) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!keyword) {
      setData([]);
      setHasSearched(false);
      return;
    }

    const fetchSearchResults = async () => {
      setLoading(true);
      setHasSearched(true);
      try {
        const response = await axios.get(`${API_BASE_URL}?numOfRows=100&pageNo=1`);

        const items = response.data?.items || [];

        const filteredItems = items.filter(item =>
          item.TITLE?.toLowerCase().includes(keyword.toLowerCase())
        );

        const processedItems = filteredItems.map(item => ({
          title: item.TITLE || '제목 없음',
          image: item.IMAGE_OBJECT || null,
          genre: item.GENRE || '장르 없음',
          audience: item.AUDIENCE || '연령 정보 없음',
          period: item.PERIOD || '기간 정보 없음',
          eventPeriod: item.EVENT_PERIOD || '정보 없음',
          charge: item.CHARGE || '요금 정보 없음', 
          description: item.DESCRIPTION || '설명 없음',
          url: item.URL || '', 
        }));

        setData(processedItems);
      } catch (error) {
        console.error('검색 결과를 가져오는 중 오류 발생:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [keyword]);

  return { data, loading, hasSearched };
}

export default useSearchResults;
