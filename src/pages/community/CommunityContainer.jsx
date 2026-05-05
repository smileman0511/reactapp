import React from 'react';
//import CommunitySearch from './CommunityPostListContainer';
import { Link, Outlet } from 'react-router-dom';

const CommunityContainer = () => {
    return (
        <div>
            {/* <CommunitySearch /> */}
            커뮤니티 컨테이너
            <Link to={"/community/new"}>새글 작성하기</Link>
            <Outlet />
            {/* 컴포넌트 분리 */}

        </div>
    );
};

export default CommunityContainer;