import React from 'react';
import styled from 'styled-components';
import S, { colorCSS, boxShadow } from '../../style';
import { flexCenterRow } from '../../../../styles/common';

const AiPost = ({ date, category, title, profile, author, views, likes, comments }) => {
  return (
    <Card>
      <TopRow>
        <S.Span size="h11Bold" color="faillog_gray8">{date}</S.Span>
        <CategoryBadge>
          <S.Span size="h11Extrabold" color="faillog_blue">{category}</S.Span>
        </CategoryBadge>
      </TopRow>

      <TitleWrap>
        <S.Span2 size="h10Bold" color="faillog-black" display="block">{title}</S.Span2>
      </TitleWrap>

      <BottomRow>
        <AuthorWrap>
          <AuthorImg src={profile} alt={author} />
          <S.Span size="h10Regular" color="faillog-black">{author}</S.Span>
        </AuthorWrap>
        <Stats>
          <StatItem>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={colorCSS["faillog-black"]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <S.Span size="h11Regular" color="faillog-black">{views}</S.Span>
          </StatItem>
          <StatItem>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={colorCSS["faillog-red"]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <S.Span size="h11Regular" color="faillog-black">{likes}</S.Span>
          </StatItem>
          <StatItem>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={colorCSS["faillog-black"]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <S.Span size="h11Regular" color="faillog-black">{comments}</S.Span>
          </StatItem>
        </Stats>
      </BottomRow>
    </Card>
  );
};

const Card = styled.div`
  width: 300px;
  height: 148px;
  border-radius: 15px;
  border: 1px solid ${colorCSS["faillog_gray2"]};
  background-color: #ffffff;
  /* ${boxShadow["boxBasic"]} */
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryBadge = styled.div`
  background-color: ${colorCSS["faillog_light_blue"]};
  padding-top: 1px;
  width: 60px;
  height: 20px;
  ${flexCenterRow}
  border-radius: 15px;
`;

const TitleWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AuthorImg = styled.img`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default AiPost;
