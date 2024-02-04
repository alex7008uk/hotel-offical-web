// 引用組件
import { Banner } from "../../components/banner.js";
import { Content } from "./components/content";
import { useEffect } from "react";

export function PageIntro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner title={"ABOUT US"} intro={"關於白日夢旅館"} />
      <Content />
    </>
  );
}
