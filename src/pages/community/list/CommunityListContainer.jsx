import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Posts from './components/Posts';
import Page from './components/Page';
import { colorCSS } from '../style';
import { flexCenterRow } from '../../../styles/common';
import useSearchStore from './useSearchStore';

const myStyle = {}

myStyle.wrapper = styled.div`
    width: 984px;
`

myStyle.pageWrapper = styled.div`
    width: 100%;
    height: 136px;
    ${flexCenterRow}
`

const stripHtml = (html) => {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
};

const extractFirstImage = (html) => {
    if (!html) return null;
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.getAttribute('src') : null;
};

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return dateStr.slice(0, 10).replace(/-/g, '.');
};

const CommunityListContainer = () => {

    const {order1, order2, category, page, content, setPage, resetSearch} = useSearchStore();
    const [postList, setPostList] = useState([]);
    const [maxPage, setMaxPage] = useState(1);

    const isMounted = useRef(false);

    const fetchPosts = async ({ order, order2Val, cat, pg, cont }) => {
        const query = new URLSearchParams({ order, order2: order2Val, page: pg, category: cat });
        if (cont) query.set('content', cont);
        const res = await fetch(`http://localhost:10000/api/posts?${query}`);
        if (!res.ok) return;
        const json = await res.json();
        if (!json.success) return;
        const mapped = json.data.posts.map(p => ({
            id: p.id,
            category: p.categoryId - 1,
            title: p.postTitle,
            content: stripHtml(p.postContent),
            date: formatDate(p.postCreatedAt),
            profile: p.memberProfileImageUrl,
            author: p.memberNickname,
            views: p.postReadCount,
            likes: p.likeCount,
            comments: p.replyCount,
            thumbnail: extractFirstImage(p.postContent),
        }));
        setPostList(mapped);
        setMaxPage(Math.ceil(json.data.total / 6) || 1);
    };

    const a = () => {
        fetchPosts({ order: 0, order2Val: 0, cat: 0, pg: 1, cont: '' });
    };

    const b = () => {
        fetchPosts({ order: order1, order2Val: order2, cat: category, pg: page, cont: content });
    };

    useEffect(() => {
        resetSearch();
        a();
    }, []);

    useEffect(() => {
        if (!isMounted.current) { isMounted.current = true; return; }
        b();
    }, [order1, order2, category, page, content]);

    const handleChange = (pg) => {
        setPage(pg);
    };

    return (
        <myStyle.wrapper>
            <Posts postData={postList} search={content} />
            <myStyle.pageWrapper>
                <Page minPage={1} maxPage={maxPage} onPageChange={handleChange} page={page}/>
            </myStyle.pageWrapper>
        </myStyle.wrapper>
    );

};

export default CommunityListContainer;
