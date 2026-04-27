import React from 'react';
import { Outlet } from 'react-router-dom';
import MyPageTebMenu from './MyPageTebMenu';

const MyPageContainer = () => {
    return (
        <div>
            마이페이지 컨테이너
            <MyPageTebMenu />
            <Outlet />
        </div>
    );
};

export default MyPageContainer;