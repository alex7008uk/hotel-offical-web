import { NumSVG, BedSVG, SizeSVG } from "./SVG";
import { Link } from "react-router-dom";
import "./roomList.css";

export function RoomList({ roomType, roomData }) {
  const roomprocess =
    roomType === 1
      ? roomData
      : roomData.filter((item) => item.type === roomType);

  function linkTo(id) {
    window.location.href = `./${id}`;
  }

  return (
    <ul>
      {roomprocess.map((room) => {
        return (
          <li key={room.id}>
            <img
              src={room.src}
              alt="pic"
              className="imgRoom"
              onClick={() => linkTo(room.id)}
            />
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
                <Link to={room.id}>
                  <button className="roomBtn">MORE DETAIL</button>
                </Link>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
