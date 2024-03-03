import "./roomList.css";

export function RoomList({ remainRoom, setFormShow, setType }) {
  return (
    <div className="roomArea">
      <ul>
        {remainRoom.doubleRoom && (
          <li
            onClick={() => {
              setFormShow(true);
              setType("普通雙人房");
            }}
          >
            <img
              src="/hotel-offical-web/images/room/doubleRoom.png"
              alt="pic"
            />
            <div>
              <h2>普通雙人房</h2>
              <span>一般旅館風味雙人房, 可供雙人住宿</span>
            </div>
          </li>
        )}
        {remainRoom.doubleRoomJP && (
          <li
            onClick={() => {
              setFormShow(true);
              setType("日式雙人房");
            }}
          >
            <img
              src="/hotel-offical-web/images/room/doubleRoomJP.png"
              alt="pic"
            />
            <div>
              <h2>日式雙人房</h2>
              <span>日式旅館風味雙人房, 可供雙人住宿</span>
            </div>
          </li>
        )}
        {remainRoom.quadrupleRoom && (
          <li
            onClick={() => {
              setFormShow(true);
              setType("普通四人房");
            }}
          >
            <img
              src="/hotel-offical-web/images/room/quadrupleRoom.png"
              alt="pic"
            />
            <div>
              <h2>普通四人房</h2>
              <span>一般旅館風味四人房, 可供四人住宿</span>
            </div>
          </li>
        )}
        {remainRoom.quadrupleRoomJP && (
          <li
            onClick={() => {
              setFormShow(true);
              setType("日式四人房");
            }}
          >
            <img
              src="/hotel-offical-web/images/room/quadrupleRoomJP.png"
              alt="pic"
            />
            <div>
              <h2>日式四人房</h2>
              <span>日式旅館風味四人房, 可供四人住宿</span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
