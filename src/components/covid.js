import React, { useEffect } from "react";
import axios from "axios";
const Covid = () => {
  const getCovidData = async () => {
    try {
      const res = await axios.get(`https://api.covid19india.org/data.json`)
      console.log(res.data)

      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1>🔴 LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    </>
  );
};
export default Covid;
