import React from 'react';
import { useParams } from 'react-router-dom';

const CommunityEditContainer = () => {
    const {id} = useParams()
    return (
        <div>
            커뮤니티 수정 페이지
            <h1>{id}번 수정 게시글</h1>
        </div>
    );
};

export default CommunityEditContainer;