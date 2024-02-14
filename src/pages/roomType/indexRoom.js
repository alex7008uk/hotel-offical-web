// 引用組件
import { useState, useEffect } from "react";
import { Banner } from "../../components/banner.js";
import { BtnList } from "../../components/btnList.js";
import { RoomList } from "./components/roomList.js";
import { TopBtn } from "../../components/topBtn.js";
import { API_HOST } from "../../global/urlAPI.js";
import { useLoaderData } from "react-router-dom";

import "./indexRoom.css";

export async function getRoomDatas({ params }) {
  const res = await fetch(`${API_HOST}/roomDatas.json`);
  const data = await res.json();
  return params.roomId ? data.roomDatas[params.roomId - 1] : data.roomDatas;
}

export function PageRoom() {
  const [roomType, setType] = useState(1);
  const roomData = useLoaderData();

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
      <RoomList roomType={roomType} roomData={roomData} />
    </>
  );
}
