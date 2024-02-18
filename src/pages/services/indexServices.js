import { useState, useEffect } from "react";
import { Banner } from "../../components/banner";
import { BtnList } from "../../components/btnList";
import { TopBtn } from "../../components/topBtn";
import { API_HOST } from "../../global/urlAPI.js";
import { useLoaderData } from "react-router-dom";
import { ServiceList } from "./components/serviceList.js";

export async function getServiceDatas({ params }) {
  const res = await fetch(`${API_HOST}/serviceDatas.json`);
  const data = await res.json();
  return params.serviceId
    ? data.serviceDatas[params.serviceId - 1]
    : data.serviceDatas;
}

export function PageServices() {
  const [serviceType, setType] = useState(1);
  const data = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner title={"FACILITIES"} intro={"設施介紹"} />
      <BtnList
        clicked={serviceType}
        setClick={setType}
        list={[
          { id: 1, text: "所有設施" },
          { id: 2, text: "一樓設施" },
          { id: 3, text: "二樓設施" },
        ]}
      />
      <TopBtn />
      <ServiceList serviceType={serviceType} serviceData={data} />
    </>
  );
}
