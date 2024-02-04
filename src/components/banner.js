// import { useState } from "react";
import "./banner.css";

export function Banner({ title, intro }) {
  // const optionNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const date = new Date();
  // const year = date.getFullYear();
  // const month =
  //   date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  // const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
  // const [dayOfCheckIn, setCheckIn] = useState(`${year}-${month}-${day}`);
  // const [dayOfCheckOut, setCheckOut] = useState(`${year}-${month}-${day + 2}`);
  // const [numOfPeople, setPeople] = useState(1);
  return (
    <div className="banner">
      <div className="bannerTitle">
        <p>{title}</p>
        <p>- {intro} -</p>
      </div>
      {/* <div>
        <input
          type="date"
          value={dayOfCheckIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <input
          type="date"
          value={dayOfCheckOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
        <select value={numOfPeople} onChange={(e) => setPeople(e.target.value)}>
          {optionNumArray.map((num, index) => {
            return (
              <option key={index} value={num}>
                {num}
              </option>
            );
          })}
        </select>
        <button>立即訂房</button>
      </div> */}
    </div>
  );
}
