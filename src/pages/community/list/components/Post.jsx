import React from 'react';
import styled from 'styled-components';
import { h11Bold, h8Extrabold, h9Regular, h10Regular, h11Regular, flexCenterRow } from '../../../../styles/common';
import S, { colorCSS } from '../../style';

const Post = ({
  category,
  title,
  content,
  date,
  thumbnail,
  profile,
  author,
  views,
  likes,
  comments,
  isHrHidden
}) => {
  return (
    <div>
      <Wrapper>
        <Card>
          <Thumbnail src={thumbnail} alt={title} />
          <Info>
            <TopRow>
              <CategoryBadge>
                <S.Span size={"h11Bold"} color={"faillog_blue"}>
                  {category}
                </S.Span> 
              </CategoryBadge>
              <S.Span size={"h10Regular"} color={"faillog_gray9"}>{date}</S.Span>
            </TopRow>
            <S.Span size={"h8Extrabold"} color={"faillog-black"}>{title}</S.Span>
            <S.Span size={"h9Regular"} color={"faillog_black"}>{content}</S.Span>
            <BottomRow>
              <AuthorWrap>
                <AuthorImg src={profile} alt={author} />
                <AuthorName>{author}</AuthorName>
              </AuthorWrap>
              <Stats>
                <StatItem>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color={colorCSS["faillog-black"]}>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  {views}
                </StatItem>
                <StatItem>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color={colorCSS["faillog-red"]}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  {likes}
                </StatItem>
                <StatItem>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color={colorCSS["faillog-black"]}>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  {comments}
                </StatItem>
              </Stats>
            </BottomRow>
          </Info>
        </Card>
      </Wrapper>
      { isHrHidden || <Divider />}
    </div>
  );
};

const Wrapper = styled.div`
  width: 984px;
  padding: 27px
`;

const Card = styled.div`
  display: flex;
  gap: 27px;
  align-items: flex-start;
`;

const Thumbnail = styled.img`
  width: 324px;
  height: 184px;
  /* object-fit: cover; */
  border-radius: 15px 0px 15px 0px

  /* flex-shrink: 0; */
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  /* height: 184px; */
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryBadge = styled.div`
  /* ${h11Bold}
  color: #ffffff; */
  background-color: ${colorCSS["faillog_light_blue"]};
  width: 52px;
  height: 20px;
  ${flexCenterRow}
  border-radius: 15px;
`;

// 삭제예정
const DateText = styled.span`
  ${h10Regular}
  color: ${({ theme }) => theme.GRAYSCALE?.[8] || '#999999'};
`;

//삭제예정
const Title = styled.h2`
  ${h8Extrabold}
  margin: 0;
  color: ${({ theme }) => theme.PALETTE?.black || '#333333'};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

//삭제예정
const Content = styled.p`
  ${h9Regular}
  margin: 0;
  flex: 1;
  color: ${({ theme }) => theme.GRAYSCALE?.[10] || '#555555'};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  gap: 4px;
`;

const AuthorImg = styled.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  /* object-fit: cover; */
`;

// 삭제예정
const AuthorName = styled.span`
  ${h11Regular}
  color: ${({ theme }) => theme.PALETTE?.black || '#333333'};
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const StatItem = styled.span`
  ${h11Regular}
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${colorCSS["faillog-black"]}
`;

const Divider = styled.hr`
  /* padding-bottom: 27px; */
  margin: 0px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.GRAYSCALE?.[2] || '#E6E6E6'};
`;

export default Post;
