// 引用組件
import { useEffect, useState } from "react";
import { API_HOST } from "../../../global/urlAPI.js";
import { NumSVG, BedSVG, SizeSVG } from "./SVG";

// 引用CSS
import "./roomList.css";

export function RoomList({ roomType }) {
  const [roomData, setRoom] = useState([]);

  useEffect(() => {
    fetch(`${API_HOST}/roomDatas${roomType === 1 ? "" : `?type=${roomType}`}`)
      .then((res) => res.json())
      .then((data) => {
        setRoom(data);
      });
  }, [roomType]);

  return (
    <>
      <ul>
        {roomData.map((room) => {
          return (
            <li key={room.id}>
              <img src={room.src} alt="pic" />
              <div className="textArea">
                <h2>{room.name}</h2>
                <p className="cardList">
                  <div className="iconCard">
                    <NumSVG />
                    <span>入住人數: {room.num}</span>
                  </div>
                  <div className="iconCard">
                    <BedSVG />
                    <span>床型: {room.bed}</span>
                  </div>
                  <div className="iconCard">
                    <SizeSVG />
                    <span>坪數: {room.squareSize}坪</span>
                  </div>
                </p>
                <p>
                  <button className="roomBtn">BOOK NOW</button>
                  <button className="roomBtn">MORE DETAIL</button>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
