import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CommunityDetailContainer = () => {
    const {id} = useParams()
    return (
        <div>
            커뮤니티 디테일 페이지
            <h1>{id}번 게시글</h1>
            <Link to={"/community"}>목록으로</Link>
            <Link to={`/community/edit/${id}`}>수정</Link>
        </div>
    );
};

export default CommunityDetailContainer;