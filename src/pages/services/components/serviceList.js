import { Link } from "react-router-dom";
import "./serviceList.css";

export function ServiceList({ serviceType, serviceData }) {
  const serviceprocess =
    serviceType === 1
      ? serviceData
      : serviceData.filter((item) => item.type === serviceType);

  return (
    <ul className="ulService">
      {serviceprocess.map((service) => {
        return (
          <li key={service.id} className="liService">
            <Link to={service.id}>
              <img src={service.src1} alt="pic" className="imgService" />
            </Link>
            <div className="textAreaService">
              <h2>{service.name}</h2>
              <div className="verticalLine"></div>
              <p>使用時間: {service.time}</p>
              <p>付費辦法: {service.price}</p>
              <p>
                <Link to={service.id} className="moreService">
                  More...
                </Link>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
