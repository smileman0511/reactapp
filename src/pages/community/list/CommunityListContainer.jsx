import React from 'react';
import { Link } from 'react-router-dom';

const CommunityListContainer = () => {

    const testId = new Array(10).fill(0).map((_, i) => i + 1).map((n) => (
        <li><Link to={`/community/detail/${n}`}>{n}번 게시글</Link></li>
    ))
    return (
        <div>
            커뮤니티 목록
            {testId}
        </div>
    );
};

export default CommunityListContainer;