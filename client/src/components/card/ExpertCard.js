import React, { useState, useEffect } from "react";

const ExpertCard = () => {
  const [serviceCardData, setServiceCardData] = useState([]);

  const fetchData = () => {
    fetch("https://sheetdb.io/api/v1/9lb8slzko1vn8;lvna;lv")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          console.log(data);
          setServiceCardData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();

    // Set up interval to fetch data every 5 minutes (adjust the interval as needed)
    // const intervalId = setInterval(fetchData, 10 * 1000);

    // Clean up the interval when the component unmounts
    // return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="card-container">
      {serviceCardData.map((record) => (
        <div className="expert-card" key={record.id}>
          <div className="expert-card-image">
            <img src={record.image} alt="" />
          </div>
          <div className="content-wrapper">
            <div className="expert-card-title">{record.title}</div>
            <div className="expert-card-description">{record.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertCard;
