import React from 'react';
import { Outlet } from 'react-router-dom';

const AccountLayout = () => {
    return (
        <div style={{display: "flex"}}>
            
            <div style={{flex:1}}>
                공통 회원가입 레이아웃
            </div>
            <div style={{flex:1}}>
                <Outlet />
            </div>
        </div>
    );
};

export default AccountLayout;