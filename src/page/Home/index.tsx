import React, { useState } from "react";
import { GoodsData } from "./_mockdata";
import { Goods } from "./types";
import { Coupon } from "../../components/common/Coupon";
import { useNavigate } from "react-router-dom";

function Home(): React.ReactElement {
  const [tab, setTab] = useState("Home");

  const [originalData, setOriginalData] = useState(GoodsData);
  const [likeData, setLikeData] = useState<Goods[]>([]);
  const navigate = useNavigate();

  const handleClickButton = (tab: string) => {
    setTab(tab);

    // tab이 Like일때 새로운 배열을 만들어서 넣어준다
    if (tab === "like") {
      const newArray = originalData.filter((x) => x.likeYn === true);
      setLikeData(newArray);
    }
  };

  return (
    <>
      <h1>홈화면입니다.</h1>
      <button onClick={() => handleClickButton("home")}>홈</button>
      <button onClick={() => handleClickButton("like")}>찜</button>

      {tab === "home" &&
        GoodsData.map((good: Goods) => {
          return <Coupon key={good.id} passGood={good} type="home" />;
        })}

      {tab === "like" &&
        likeData.map((good: Goods) => {
          return <Coupon key={good.id} passGood={good} type="like" />;
        })}

      <button onClick={() => navigate(`/${tab}`)}>목록으로 이동하기</button>
    </>
  );
}

export default Home;
