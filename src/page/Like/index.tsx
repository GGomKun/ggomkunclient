import React from "react";
import { useNavigate } from "react-router-dom";

export function Like(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <>
      <p onClick={() => navigate("/like/detail")}>찜목록 페이지입니다.</p>
    </>
  );
}
