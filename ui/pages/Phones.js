import React from 'react';
import { fetchData } from '../utils/fetchData';

const PHONE_DATA_URL = 'iphones';
const Phones = () => {
  const [phoneData, setPhoneData] = React.useState([]);

  React.useEffect(() => {
    fetchData(PHONE_DATA_URL).then((data) => {
      setPhoneData(data);
    });
  }, []);

  return (
    <>
      <h1>List of Phones</h1>
      {phoneData.length && (
        <ul>
          {phoneData.map((phone, i) => (
            <li key={i}>{phone.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Phones;
