import React from 'react';
import LogReportTebMenu from './LogReportTebMenu';
import { Outlet } from 'react-router-dom';

const LogReportContainer = () => {
    return (
        <div>
            <LogReportTebMenu />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default LogReportContainer;