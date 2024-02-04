import { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

import "./topBtn.css";

export function TopBtn() {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  function backTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button className="btnTop" onClick={backTop}>
      {isShow && <BsArrowUpSquareFill />}
    </button>
  );
}
