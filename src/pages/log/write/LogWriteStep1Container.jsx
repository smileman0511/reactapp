import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LogWriteStep1Container = () => {
  const path = useLocation().pathname // uri
  return (
    <div>
      작성 페이지1
      <Link to={"/logs/new/step1"}>이전</Link>
      <Link to={"/logs/new/step2"}>다음</Link>
    </div>
    )
};

export default LogWriteStep1Container;
