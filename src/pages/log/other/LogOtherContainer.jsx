import React from 'react';
import { Outlet } from 'react-router-dom';
import LogOtherSearch from './LogOtherSearch';

const LogOtherContainer = () => {
    return (
        <div>
            다른 사람의 로그
            <LogOtherSearch />
            <Outlet />
        </div>
    );
};

export default LogOtherContainer;