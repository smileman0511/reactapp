import React from 'react';
import { Link } from 'react-router-dom';
import S, { colorCSS } from '../style';
import styled from 'styled-components';
import Posts from './components/Posts';
import Page from './components/Page';
import { flexCenterRow } from '../../../styles/common';

const myStyle = {}

myStyle.wrapper = styled.div`
    width: 984px;
    /* height: 1434px;
    background-color: ${colorCSS["faillog_white"]};
    border-radius: 15px; */
`

myStyle.pageWrapper = styled.div`
    width: 100%;
    height: 136px;
    ${flexCenterRow}
`

const CommunityListContainer = () => {

    // const testId = new Array(10).fill(0).map((_, i) => i + 1).map((n) => (
    //     <li><Link to={`/community/detail/${n}`}>{n}번 게시글</Link></li>
    // ))
    // return (
    //     <div>
    //         커뮤니티 목록
    //         {testId}
    //     </div>
    // );

    const handleChange = (page) => {
        console.log(page);
    }

    return (
        <myStyle.wrapper>
            <Posts />
            <myStyle.pageWrapper>
                <Page minPage={1} maxPage={12} onPageChange={handleChange}/>
            </myStyle.pageWrapper>
        </myStyle.wrapper>
    );

};

export default CommunityListContainer;