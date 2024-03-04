import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./form.css";

export function Form({
  checkInDate,
  checkOutDate,
  numOfPeople,
  roomType,
  setFormShow,
}) {
  const [name, setName] = useState("");
  const [tele, setTele] = useState("");
  const [note, setNote] = useState("");

  async function submit() {
    let body = {
      id: crypto.randomUUID(),
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      numOfPeople: numOfPeople,
      roomType: roomType,
      name: name,
      tele: tele,
      note: note,
    };
    console.log(body);
    const res = await fetch(`http://localhost:3000/reservations`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="dataArea">
      <div className="shady" onClick={() => setFormShow(false)}></div>
      <form>
        <p className="cancel">
          <RxCross2 className="cancelBtn" onClick={() => setFormShow(false)} />
        </p>
        <h2>預訂房間</h2>
        <div className="bookingDetail">
          <p className="info">
            入住時間: <span>{checkInDate}</span> ~ <span>{checkOutDate}</span>
          </p>
          <p className="info">
            入住人數: <span>{numOfPeople}</span>
          </p>
          <p className="info">
            入住房型: <span>{roomType}</span>
          </p>
          <p className="info">
            姓名:{" "}
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p className="info">
            電話:{" "}
            <input
              type="tele"
              required
              onChange={(e) => setTele(e.target.value)}
            />
          </p>
          <p className="info">
            備註:{" "}
            <textarea
              rows="5"
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </p>
          <p>
            <button
              type="submit"
              onClick={(e) => {
                if (name !== "" && tele !== "") {
                  e.preventDefault();
                  submit();
                  setFormShow(false);
                  window.scrollTo(0, 0);
                  alert("訂房成功!");
                }
              }}
              className="bookBtn"
            >
              預定房間
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
