import { useState, useEffect } from "react";
import { Banner } from "../../components/banner";
import { SearchList } from "./components/searchList.js";
import { RoomList } from "./components/roomList";
import { Form } from "./components/form.js";
import { TopBtn } from "../../components/topBtn.js";
import "./indexBooking.css";

export function PageBooking() {
  const [checkInDate, setCheckIn] = useState(getDate());
  const [checkOutDate, setCheckOut] = useState(getDate());
  const [numOfPeople, setPeople] = useState("1");
  const [roomType, setType] = useState("");

  const [remainRoom, setRoom] = useState({
    doubleRoom: false,
    doubleRoomJP: false,
    quadrupleRoom: false,
    quadrupleRoomJP: false,
  });
  const [formShow, setFormShow] = useState(false);

  function getDate(last = 0) {
    const date = new Date();
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    const day =
      date.getDate() < 10
        ? "0" + (date.getDate() + last)
        : date.getDate() + last;
    const dateFormat = year + "-" + month + "-" + day;

    return dateFormat;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner title="RESERVE" intro="訂房系統" />
      <div className="roomSearch">
        <SearchList
          today={getDate()}
          checkInDate={checkInDate}
          setCheckIn={setCheckIn}
          checkOutDate={checkOutDate}
          setCheckOut={setCheckOut}
          setPeople={setPeople}
          setRoom={setRoom}
        />
        <RoomList
          remainRoom={remainRoom}
          setFormShow={setFormShow}
          setType={setType}
        />
        {formShow && (
          <Form
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            numOfPeople={numOfPeople}
            roomType={roomType}
            setFormShow={setFormShow}
          />
        )}
      </div>
      <TopBtn />
    </>
  );
}
