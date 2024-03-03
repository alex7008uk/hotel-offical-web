import { useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./searchList.css";

export function SearchList({
  today,
  checkInDate,
  setCheckIn,
  checkOutDate,
  setCheckOut,
  setPeople,
  setRoom,
}) {
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  async function searchRoom() {
    // const res = await fetch(`http://localhost:3000/reservations`);
    // const data = await res.json();
    // console.log(data);
    setRoom({
      doubleRoom: true,
      doubleRoomJP: true,
      quadrupleRoom: true,
      quadrupleRoomJP: true,
    });
  }

  return (
    <div className="dateArea">
      <div className="picker">
        <label for="checkIn">入住日期</label>
        <p
          onClick={() => {
            checkInRef.current.showPicker();
          }}
        >
          {checkInDate}
          <MdOutlineKeyboardArrowDown className="downarrow" />
        </p>
        <input
          ref={checkInRef}
          type="date"
          value={checkInDate}
          min={today}
          id="checkIn"
          onChange={(e) => {
            setCheckIn(e.target.value);
          }}
        />
      </div>
      <div className="picker">
        <label for="checkOut">退房日期</label>
        <p
          onClick={() => {
            checkOutRef.current.showPicker();
          }}
        >
          {checkOutDate}
          <MdOutlineKeyboardArrowDown className="downarrow" />
        </p>
        <input
          ref={checkOutRef}
          type="date"
          value={checkOutDate}
          min={checkInDate}
          id="checkOut"
          onChange={(e) => {
            setCheckOut(e.target.value);
          }}
        />
      </div>
      <div className="picker">
        <label for="numOfPeople">入住人數</label>
        <select id="numOfPeople" onChange={(e) => setPeople(e.target.value)}>
          <option value="" disabled selected>
            選擇入住人數
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="searchBtn">
        <button onClick={searchRoom}>立即訂房</button>
      </div>
    </div>
  );
}
