import React from 'react';
import { fetchData } from '../utils/fetchData';

export const WATCH_DATA_URL = 'watches';
const Watches = () => {
  const [watchData, setWatchData] = React.useState([]);

  React.useEffect(() => {
    fetchData(WATCH_DATA_URL).then((data) => {
      setWatchData(data);
    });
  }, []);

  return (
    <div>
      <h1>List of Watches</h1>
      {watchData.length && (
        <ul>
          {watchData.map((watch, i) => (
            <li key={i}>{watch.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watches;
