import "./styles.css";
import React, { useEffect, useState } from "react";

const restMenu = [
  {
    id: 1,
    source: "",
    altTxt: "Restaurant 1",
    foodType: "veg"
  },
  {
    id: 2,
    source: "",
    altTxt: "Restaurant 2",
    foodType: "non veg"
  },
  {
    id: 3,
    source: "",
    altTxt: "Restaurant 3",
    foodType: "veg"
  },
  {
    id: 4,
    source: "",
    altTxt: "Restaurant 4",
    foodType: "non veg"
  },
  {
    id: 5,
    source: "",
    altTxt: "Restaurant 5",
    foodType: "veg"
  },
  {
    id: 6,
    source: "",
    altTxt: "Restaurant 6",
    foodType: "non veg"
  },
  {
    id: 7,
    source: "",
    altTxt: "Restaurant 7",
    foodType: "veg"
  },
  {
    id: 8,
    source: "",
    altTxt: "Restaurant 8",
    foodType: "non veg"
  },
  {
    id: 9,
    source: "",
    altTxt: "Restaurant 9",
    foodType: "veg"
  },
  {
    id: 10,
    source: "",
    altTxt: "Restaurant 10",
    foodType: "non veg"
  }
];

export default function App() {
  const [data, setData] = useState(restMenu);

  const handleData = (arg) => {
    const ele = data.filter((item) => {
      return item.foodType === arg;
    });
    setData(ele);
  };

  useEffect(() => {
    console.log("daad", data);
  }, [data]);

  return (
    <>
      <button onClick={() => handleData("veg")}>Heloo Veg</button>
      <button onClick={() => handleData("non veg")}>Heloo non Veg</button>
      {data.map((item, index) => {
        return (
          <div className="App" key={index}>
            <h3>{item.altTxt}</h3>
            <p>{item.foodType}</p>
          </div>
        );
      })}
    </>
  );
}