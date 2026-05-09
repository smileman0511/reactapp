import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import LogOtherHero from './LogOtherHero';
import LogOtherSearch from './LogOtherSearch';

import viewIcon from './otherLog_icon/hugeicons--view.svg';
import heartIcon from './otherLog_icon/ph--heart-light.svg';

import ProfileImg1 from './otherLog_profile/IMAGE.png';
import ProfileImg2 from './otherLog_profile/image 338.png';

import Thumb1 from './otherLog_thumbNail/image 277.png';
import Thumb2 from './otherLog_thumbNail/image 340.png';

const LOGS = [
    {
        id: 1,
        category: '인간관계',
        categoryVariant: 'pink',
        date: '2026.03.03',
        title: '작은 실수로 멀어져버린 우리 사이',
        vision: '말은 언제나 생각하고 조심해서 말하기',
        nickname: '친구가필요한나',
        profileImg: ProfileImg1,
        views: 45,
        likes: 35,
        thumbnail: Thumb1,
    },
    {
        id: 2,
        category: '공부/취업',
        categoryVariant: 'blue',
        date: '2026.03.03',
        title: '정보처리기사 실기, 필기 붙고 나서 방심했다가 또 떨어졌다.',
        vision: '올해 안에 정보처리기사 최종 합격하기',
        nickname: '필기마스터',
        profileImg: ProfileImg2,
        views: 45,
        likes: 35,
        thumbnail: Thumb2,
    },
    {
        id: 3,
        category: '공부/취업',
        categoryVariant: 'blue',
        date: '2026.03.03',
        title: '정보처리기사 실기, 필기 붙고 나서 방심했다가 또 떨어졌다.',
        vision: '올해 안에 정보처리기사 최종 합격하기',
        nickname: '필기마스터',
        profileImg: ProfileImg2,
        views: 45,
        likes: 35,
        thumbnail: Thumb2,
    },
];

const CATEGORY_STYLE = {
    pink:   { bg: theme.PALETTE.fourth.light, color: theme.PALETTE.fourth.main },
    blue:   { bg: theme.PALETTE.primary.light, color: theme.PALETTE.primary.main },
    green:  { bg: theme.PALETTE.secondary.light, color: theme.PALETTE.secondary.main },
    purple: { bg: theme.PALETTE.third.light, color: theme.PALETTE.third.main },
};

const LogOtherListContainer = () => {
    return (
        <div>
            <LogOtherHero />
            <LogOtherSearch />
            <S.ListWrapper>
                <S.CardGrid>
                    {LOGS.map((log) => (
                        <Link to={`/logs/result/${log.id}/detail`} key={log.id} style={{ textDecoration: 'none' }}>
                            <S.Card>
                                {/* 상단 텍스트 영역 */}
                                <S.CardBody>
                                    <S.CardTop>
                                        <S.Category $variant={log.categoryVariant}>
                                            {log.category}
                                        </S.Category>
                                        <S.Date>{log.date}</S.Date>
                                    </S.CardTop>

                                    <S.Title>{log.title}</S.Title>
                                    <S.Vision>{log.vision}</S.Vision>

                                    <S.CardBottom>
                                        <S.Profile>
                                            <S.AvatarWrap>
                                                <S.Avatar src={log.profileImg} alt={log.nickname} />
                                            </S.AvatarWrap>
                                            <S.Nickname>{log.nickname}</S.Nickname>
                                        </S.Profile>
                                        <S.Stats>
                                            <S.Stat>
                                                <img src={viewIcon} alt="views" width="16" height="16" />
                                                {log.views}
                                            </S.Stat>
                                            <S.Stat>
                                                <img src={heartIcon} alt="likes" width="16" height="16" />
                                                {log.likes}
                                            </S.Stat>
                                        </S.Stats>
                                    </S.CardBottom>
                                </S.CardBody>

                                {/* 썸네일 */}
                                <S.Thumbnail src={log.thumbnail} alt={log.title} />
                            </S.Card>
                        </Link>
                    ))}
                </S.CardGrid>
            </S.ListWrapper>
        </div>
    );
};

/* ──────────────────────────────────────────
   Styled Components
────────────────────────────────────────── */
const S = {};

S.ListWrapper = styled.div`
    width: 100%;
    background-color: #f8f9fa;
    padding: 0 0 100px ;
`;

S.CardGrid = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

S.Card = styled.div`
    width: 344px;
    min-width: 344px;
    max-width: 344px;
    height: 406px;
    border-radius: 20px;
    background: ${theme.PALETTE.white};
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
        transform: translateY(-8px);
        border: 2px solid ${theme.PALETTE.third.main};
        box-shadow: 0 16px 40px rgba(171, 71, 255, 0.15);
    }
`;

S.CardBody = styled.div`
    flex: 1;
    padding: 24px 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 0;
`;

S.CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

S.Category = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 28px;
    border-radius: 8px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.bold};
    background-color: ${({ $variant }) => CATEGORY_STYLE[$variant]?.bg || theme.GRAYSCALE[2]};
    color: ${({ $variant }) => CATEGORY_STYLE[$variant]?.color || theme.GRAYSCALE[10]};
`;

S.Date = styled.span`
    font-size: ${theme.FONT_SIZE.h10};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[9]};
`;

S.Title = styled.p`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
    margin: 0 0 20px 0;
    line-height: 1.4;
    word-break: keep-all;
    overflow-wrap: break-word;
`;

S.Vision = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.5;
    flex: 1;
`;

S.CardBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`;

S.Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

S.AvatarWrap = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

S.Avatar = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
`;

S.Nickname = styled.span`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
`;

S.Stats = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

S.Stat = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
`;

S.Thumbnail = styled.img`
    width: 344px;
    height: 162px;
    object-fit: cover;
    flex-shrink: 0;
`;

export default LogOtherListContainer;