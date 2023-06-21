import React, { useEffect } from "react";

const CovidData = async () => {
  try {
    const res = await fetch("https://api.covid19india.org/data.json");
    console.log(res);
  } catch (err) {
    console.log(err);
  }

useEffect(() => {
  getCovidData();
}, []);
return (
  <>
    <h1>LIVE</h1>
    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
  </>
)};

export default Covid;
