import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import heartIcon from '../result_icon/heart.svg';
import checkCircleIcon from '../result_icon/check_circle.svg';

const LogDetailContainer = () => {
  const { liked, likeCount, handleLike, selectedLog } = useOutletContext();

  if (!selectedLog) return null;

  return (
    <S.Container>
      {/* Badges */}
      <S.BadgeRow>
        {selectedLog.badges.map((badge, idx) => (
          <S.Badge key={idx} $color={badge.color} $bg={badge.bg}>
            {badge.label === "분석 완료" && (
              <S.CheckIcon src={checkCircleIcon} alt="check circle" />
            )}
            {badge.label}
          </S.Badge>
        ))}
      </S.BadgeRow>

      {/* Title & Date */}
      <S.TitleRow>
        <S.LogTitle>{selectedLog.title}</S.LogTitle>
        <S.Date>{selectedLog.date}</S.Date>
      </S.TitleRow>

      {/* Author & Actions (Like button always shown now) */}
      <S.MetaRow>
        <S.AuthorInfo>
          <S.AuthorName>{selectedLog.author.name}</S.AuthorName>
        </S.AuthorInfo>

        <S.LikeButton onClick={handleLike} $liked={liked}>
          <S.HeartIcon $liked={liked}>
            <S.HeartImg src={heartIcon} alt="heart" $liked={liked} />
          </S.HeartIcon>
          <span>{likeCount}</span>
        </S.LikeButton>
      </S.MetaRow>

      {/* Vision */}
      <S.VisionBox>
        <S.VisionLabel>이루고 싶은 비전</S.VisionLabel>
        <S.VisionValue>{selectedLog.vision}</S.VisionValue>
      </S.VisionBox>

      {/* Content */}
      <S.ContentBox>
        <S.ContentText>{selectedLog.content}</S.ContentText>
      </S.ContentBox>
    </S.Container>
  );
};

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 1096px;
  margin: 0 auto;
`;

S.BadgeRow = styled.div`
  display: flex;
  gap: 8px;
`;

S.Badge = styled.span`
  width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ $color }) => $color};
  background-color: ${({ $bg }) => $bg};
`;

S.TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

S.LogTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3_2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  line-height: 1.3;
  letter-spacing: -0.5px;
`;

S.Date = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  color: ${({ theme }) => theme.GRAYSCALE[5]};
  flex-shrink: 0;
  margin-left: 20px;
`;

S.MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
  border-bottom: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
`;

S.AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

S.AuthorName = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
  }
`;

S.HeartIcon = styled.div`
  width: 18px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.CheckIcon = styled.img`
  width: 17px;
  height: 17px;
`;

S.HeartImg = styled.img`
  width: 18px;
  height: 16px;
  filter: ${({ $liked }) => $liked ? 'none' : 'grayscale(100%) brightness(200%)'};
`;

S.VisionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.GRAYSCALE[1]};
`;

S.VisionLabel = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  color: ${({ theme }) => theme.GRAYSCALE[9]};
  white-space: nowrap;
`;

S.VisionValue = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.ContentBox = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.PALETTE.white};
`;

S.ContentText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  line-height: 2;
  white-space: pre-line;
  letter-spacing: -0.2px;
`;

export default LogDetailContainer;