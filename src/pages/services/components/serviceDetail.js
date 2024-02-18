import { useState, useRef, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

// 自撰套件
import Slider from "react-slick";
import { BtnList } from "../../../components/btnList";
import { TopBtn } from "../../../components/topBtn";

// css檔案
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./serviceDetail.css";

export function ServiceDetail() {
  const [contentType, setType] = useState(1);
  const sliderRef = useRef(null);
  const data = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <img src={data.src1} alt="pic" />
          </div>
          <div>
            <img src={data.src2} alt="pic" />
          </div>
        </Slider>
        <div className="thumbnail">
          <ul className="pics">
            <li>
              <img
                src={data.src1}
                alt="pic"
                onClick={() => sliderRef.current.slickGoTo(0)}
              />
            </li>
            <li>
              <img
                src={data.src2}
                alt="pic"
                onClick={() => sliderRef.current.slickGoTo(1)}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="roomContent">
        <BtnList
          clicked={contentType}
          setClick={setType}
          list={[{ id: 1, text: "設施說明" }]}
        />
        <div className="introService">
          <p>
            開放時間: <p>{data.time}</p>
          </p>
          <p>
            付費辦法: <p>{data.price}</p>
          </p>
          <p>備註:</p>
          <ol>
            {data.intro.map((item) => {
              return <li>{item}</li>;
            })}
          </ol>
        </div>
      </div>
      <TopBtn />
    </>
  );
}
