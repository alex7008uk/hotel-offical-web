import { useState } from "react";
import { TopBtn } from "../../../components/topBtn.js";
import { BtnList } from "../../../components/btnList.js";
import "./content.css";

export function Content() {
  const [clicked, setClick] = useState(1);

  const key = "AIzaSyB_Q1R45GlM44ybB2FIVll3OQTyesJqKCQ";

  return (
    <div className="content">
      <BtnList
        clicked={clicked}
        setClick={setClick}
        list={[
          { id: 1, text: "關於我們" },
          { id: 2, text: "交通位置" },
        ]}
      />
      <TopBtn />
      {clicked === 1 ? (
        <article className="article1">
          <section>
            <img src="images/hotel/hotel2.png" alt="pic" />
            <div>
              <h2>複雜的軌道盤繞於樓宇之間，將五彩繽紛的夢連為一體</h2>
              <p>
                造訪過匹諾康尼的賓客一定會讚同，「建於美夢之上」並非浮誇譬喻，而是千真萬確的陳述。富麗堂皇的酒店不過是盛會之星的冰山一角，「下榻入夢」才算是正式踏入匹諾康尼。自此，由十二片夢境構成的夢之國度在客人眼前緩緩鋪開。
                初到的客人一時或為這狂歡的舞台無所適從。但不必驚慌，擡頭看看，在重樓飛閣間交錯的金屬軌道，和軌道上飛快滾動的「球籠」，乃是這座夢境城市最為矚目的交通方式，眾賓客們遊歷城市各處的向導。
              </p>
            </div>
          </section>
          <section>
            <img src="images/hotel/lobby.png" alt="pic" />
            <div>
              <h2>在此下榻的賓客將去往美夢的世界，享受纸醉金迷的盛宴</h2>
              <p>
                夢為一切披上輕薄曼妙的質感，一顆顆堅果般的「球籠」被視作夢想之地的載具和玩具。卻極少有人記得：「球籠」本是「囚籠」。通往美夢的車流，原是關押犯人的囚具。
                但今時不同往日，和平與自由誕下樂觀的精神：與其一遍遍銷毀揮之不去的噩夢，不如為其添上這里應有的色彩，將之吸納、包容——於是過去的「囚籠」，變作今日的「球籠」。
              </p>
            </div>
          </section>
        </article>
      ) : (
        <article className="article2">
          <section>
            <iframe
              title="Hotel google map"
              style={{
                border: "2px solid #416788",
                borderRadius: "5px",
                width: "70rem",
                height: "40rem",
              }}
              load="lazy"
              allowfullscreen
              src={`https://www.google.com/maps/embed/v1/search?q=%E5%84%84%E8%BC%89%E9%87%91%E5%9F%8E&key=${key}`}
            ></iframe>
          </section>
          <section>
            <div>
              <h2>太空站「黑塔」→ 白日夢旅館</h2>
              <p>
                行經站名：支援艙段→白日夢旅館
                <br />
                行車時間：約120分鐘
                <br />
                票價資訊：NT$200 (支援艙段-白日夢旅館)
                <br />
                時刻資訊：30~60分鐘1班次(太空站發車：首班車00：30、末班車23：30)
              </p>
              <h2>雅利洛-VI → 白日夢旅館</h2>
              <p>
                城郊雪原(1960車次)→白日夢旅館(白日夢旅館站)
                <br />
                <br />
                行經站名：城郊雪原→邊緣通道→行政區→大礦區→白日夢旅館站
                <br />
                行車時間：約60分鐘
                <br />
                票價資訊：NT$145
                <br />
                時刻資訊：20~30分鐘1班次(首班車00：25、末班車23：45)
              </p>
              <h2>仙洲「羅浮」→ 白日夢旅館</h2>
              <p>
                星槎海中樞→白日夢旅館站
                <br />
                <br />
                行經站名：星槎海中樞站→白日夢旅館站站
                <br />
                行車時間：約60分鐘
                <br />
                票價資訊：NT$96 / 單程單人
                <br />
                時刻資訊：15~20分鐘1班次(首班車07：00、末班車23：00)
                車站下車後，穿過車站旁的仙洲遊客中心，5分鐘內即可抵達旅館
              </p>
            </div>
          </section>
        </article>
      )}
    </div>
  );
}
