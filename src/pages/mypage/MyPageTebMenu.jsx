import React from 'react';
import { Link } from 'react-router-dom';

const MyPageTebMenu = () => {
    return (
        <div>
            <Link to={"/my-page/profile"}>내 정보 관리</Link>
            <Link to={"/my-page/fail-logs"}>마이 페일 로그</Link>
            <Link to={"/my-page/posts"}>내 게시글</Link>
            <Link to={"/my-page/likes"}>좋아요 한 로그</Link>
            <Link to={"/my-page/guestbook"}>내 방명록</Link>
            <Link to={"/my-page/trash"}>휴지통</Link>
        </div>
    );
};

export default MyPageTebMenu;