import React from 'react';
import { Link } from 'react-router-dom';

const LogWriteStep2Container = () => {
  return (
    <div>
      2페이지
      <Link to={"/logs/new/step1"}>이전</Link>
      <Link to={"/logs/new/step2"}>다음</Link>
     <button>분석하기</button>
    </div>  
    )
};

export default LogWriteStep2Container;
