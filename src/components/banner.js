import { RiArrowDownSLine } from "react-icons/ri";
import { useRef } from "react";
import "./banner.css";
import "animate.css";

export function Banner({ title, intro }) {
  const bannerRef = useRef(null);

  function scrollDown() {
    window.scrollTo({
      top: bannerRef.current.offsetHeight - 60,
      behavior: "smooth",
    });
  }

  return (
    <div className="banner" ref={bannerRef}>
      <div className="bannerTitle">
        <p>{title}</p>
        <p>- {intro} -</p>
      </div>
      <RiArrowDownSLine className="downBtn downBtn1" onClick={scrollDown} />
      <RiArrowDownSLine className="downBtn downBtn2" onClick={scrollDown} />
      <RiArrowDownSLine className="downBtn downBtn3" onClick={scrollDown} />
    </div>
  );
}
