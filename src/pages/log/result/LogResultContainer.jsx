import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const LogResultContainer = () => {

  const {id} = useParams()


  return (
    <>
      <div>
          <Link to={`/logs/result/${id}/detail`}>작성 내용</Link>
          <Link to={`/logs/result/${id}/report/patterns`}>분석 결과</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default LogResultContainer;