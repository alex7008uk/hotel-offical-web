// 引用組件
import { useState, useEffect } from "react";
import { Banner } from "../../components/banner.js";
import { BtnList } from "../../components/btnList.js";
import { RoomList } from "./components/roomList.js";
import { TopBtn } from "../../components/topBtn.js";

import "./indexRoom.css";

export function PageRoom() {
  const [roomType, setType] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner title={"ROOMS"} intro={"房型介紹"} />
      <BtnList
        clicked={roomType}
        setClick={setType}
        list={[
          { id: 1, text: "所有房型" },
          { id: 2, text: "雙人套房" },
          { id: 3, text: "四人套房" },
        ]}
      />
      <TopBtn />
      <RoomList roomType={roomType} />
    </>
  );
}
