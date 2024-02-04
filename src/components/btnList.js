import "./btnList.css";

export function BtnList({ clicked, setClick, list }) {
  return (
    <p className="btnList">
      {list.map((item) => {
        return (
          <button
            key={item.id}
            className={`btn ${clicked === item.id ? "btnActive" : ""}`}
            onClick={() => setClick(item.id)}
          >
            {item.text}
          </button>
        );
      })}
    </p>
  );
}
