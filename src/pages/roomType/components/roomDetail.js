import { useState, useRef } from "react";
import { useLoaderData } from "react-router-dom";

// 自撰套件
import Slider from "react-slick";
import { NumSVG, BedSVG, SizeSVG } from "./SVG";
import { BtnList } from "../../../components/btnList";
import { TopBtn } from "../../../components/topBtn";

// icon圖示
import { PiCoffeeLight } from "react-icons/pi";
import { CiGlass } from "react-icons/ci";
import { MdOutlineCleanHands } from "react-icons/md";
import { PiTelevisionLight } from "react-icons/pi";
import { PiBathtubLight } from "react-icons/pi";
import { AiOutlineFire } from "react-icons/ai";
import { RiSafe2Line } from "react-icons/ri";
import { CgSmartHomeRefrigerator } from "react-icons/cg";

// css檔案
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./roomDetail.css";

export function RoomDetail() {
  const [contentType, setType] = useState(1);
  const sliderRef = useRef(null);
  const data = useLoaderData();

  return (
    <>
      <div className="graphics">
        <h2>{data.name}</h2>
        <Slider
          arrows={false}
          autoplay={true}
          ref={sliderRef}
          className="slider"
        >
          <div>
            <img src={data.src} alt="pic" />
          </div>
          <div>
            <img src="/hotel-offical-web/images/room/bathroom.png" alt="pic" />
          </div>
        </Slider>
        <div className="thumbnail">
          <ul className="pics">
            <li>
              <img
                src={data.src}
                alt="pic"
                onClick={() => sliderRef.current.slickGoTo(0)}
              />
            </li>
            <li>
              <img
                src="/hotel-offical-web/images/room/bathroom.png"
                alt="pic"
                onClick={() => sliderRef.current.slickGoTo(1)}
              />
            </li>
          </ul>
          <ul className="icons">
            <li>
              <NumSVG />
              <p>入住人數: {data.num}</p>
            </li>
            <li>
              <BedSVG />
              <p>床型: {data.bed}</p>
            </li>
            <li>
              <SizeSVG />
              <p>坪數: {data.squareSize} 坪</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="roomContent">
        <BtnList
          clicked={contentType}
          setClick={setType}
          list={[
            { id: 1, text: "客房介紹" },
            { id: 2, text: "價目表" },
            { id: 3, text: "住/訂須知" },
          ]}
        />
        {contentType === 1 && <RoomTable />}
        {contentType === 2 && <PriceTable />}
        {contentType === 3 && <CheckNotice />}
      </div>
      <TopBtn />
    </>
  );
}

function RoomTable() {
  return (
    <div className="roomTable">
      <h2>客房設施</h2>
      <table>
        <tr>
          <td>
            <PiCoffeeLight />
            <p>國際知名茶包</p>
          </td>
          <td>
            <PiCoffeeLight />
            <p>嚴選掛式咖啡</p>
          </td>
          <td>
            <CiGlass />
            <p>礦泉水與點心</p>
          </td>
        </tr>
        <tr>
          <td>
            <MdOutlineCleanHands />
            <p>洗沐用品</p>
          </td>
          <td>
            <PiTelevisionLight />
            <p>液晶電視</p>
          </td>
          <td>
            <PiBathtubLight />
            <p>衛浴設備</p>
          </td>
        </tr>
        <tr>
          <td>
            <AiOutlineFire />
            <p>熱水壺</p>
          </td>
          <td>
            <RiSafe2Line />
            <p>保險箱</p>
          </td>
          <td>
            <CgSmartHomeRefrigerator />
            <p>小冰箱</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

function PriceTable() {
  return (
    <table className="priceTable">
      <thead>
        <tr>
          <th scope="col">房型</th>
          <th scope="col">床型</th>
          <th scope="col">床尺寸</th>
          <th scope="col">坪數</th>
          <th scope="col">入住人數</th>
          <th scope="col">定價</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">普通雙人房</th>
          <td>一大床</td>
          <td>180*200 (6尺*7尺)x1</td>
          <td>12坪</td>
          <td>2</td>
          <td>$13,000+10%</td>
        </tr>
        <tr>
          <th scope="row">日式雙人房</th>
          <td>一大床</td>
          <td>180*200 (6尺*7尺)x1</td>
          <td>12坪</td>
          <td>2</td>
          <td>$15,000+10%</td>
        </tr>
        <tr>
          <th scope="row">普通四人房</th>
          <td>兩大床</td>
          <td>180*200 (6尺*7尺)x2</td>
          <td>19坪</td>
          <td>4</td>
          <td>$19,500+10%</td>
        </tr>
        <tr>
          <th scope="row">日式四人房</th>
          <td>兩大床</td>
          <td>180*200 (6尺*7尺)x2</td>
          <td>19坪</td>
          <td>4</td>
          <td>$21,500+10%</td>
        </tr>
      </tbody>
    </table>
  );
}

function CheckNotice() {
  return (
    <div className="checkNotice">
      <ul>
        <li>入住時間：15:00 後</li>
        <li>退房時間：11:00 前</li>
        <li>櫃檯服務時間：24小時</li>
        <li>早餐：07:00~10:00</li>
      </ul>
      <p>入住與退房手續</p>
      <ol>
        <li>以上房價均為房型之標準人數作為計價總額。</li>
        <li>所有房價已包含稅金、服務費。</li>
        <li>
          加人加價：大人$1,200元/位皆含早餐及備品、6~12歲小孩加人$800/位含早餐及備品、6歲以下不佔床免費；部分房型恕無法加床，每房僅提供加一人。
        </li>
        <li>提供嬰兒澡盆、床圍、嬰兒床及奶瓶消毒鍋(皆需事先預約)。</li>
        <li>
          入住期間若有任何問題或租借用品時，請至一樓大廳櫃台向服務人員詢問。
        </li>
        <li>
          若您預定的房間有包含早餐，如有特殊需求(如:過敏食材)請於入住前約三天事先告知。
        </li>
        <li>
          入住時間為下午15：00後，退房時間為上午11：00以前，為確保房客的住宿品質及法規規定，房內一律禁止吸菸，如經查屬於實酌收一日房租作為清潔費用。
        </li>
        <li>
          退房時請將房卡繳交給櫃檯人員，如有遺失卡片收費為一張房卡 $300 元。
        </li>
        <li>以上內容若有變動，恕不另行通知，並以酒店公告為主。</li>
      </ol>
    </div>
  );
}
