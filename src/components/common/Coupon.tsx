import React from "react";
import { Goods } from "../../page/Home/types";
import { createSearchParams, useNavigate } from "react-router-dom";

//props 타입
interface Props {
  passGood: Goods;
  type: string;
}

export function Coupon(props: Props): React.ReactElement {
  const { passGood, type } = props;
  const navigate = useNavigate();
  return (
    <>
      <p key={passGood.id}>{passGood.name}</p>
      <button
        onClick={() =>
          navigate({
            pathname: "/like/detail",
            search: createSearchParams({
              goodsNo: passGood.id.toString(),
            }).toString(),
          })
        }
      >
        자세히보기
      </button>
    </>
  );
}
