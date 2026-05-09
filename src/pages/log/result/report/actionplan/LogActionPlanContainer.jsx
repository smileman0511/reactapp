import React from 'react';
import styled from 'styled-components';

const LogActionPlanContainer = () => {
    return (
        <S.Container>
            {/* Main Header / Summary Section */}
            <S.SummaryHeader>
                <S.Badge>도전을 위한 액션 플랜</S.Badge>
                <S.MainTitle>주도적인 환경 제어와 기초 역량 강화</S.MainTitle>
                <S.Description>
                    실패 패턴에서 벗어나기 위해 스스로 제어 가능한 환경을 구축하고, 
                    응용력을 높일 수 있는 이론적 기반을 탄탄히 다지는 것을 목표로 합니다.
                </S.Description>
            </S.SummaryHeader>

            {/* Core Strategy Section */}
            <S.SectionHeader>핵심 개선 전략</S.SectionHeader>
            <S.StrategyBox>
                <S.StrategyItem>
                    <S.StrategyNumber>01</S.StrategyNumber>
                    <S.StrategyContent>
                        <S.StrategyTitle>이론 40% : 기출 60% 비중 조정</S.StrategyTitle>
                        <S.StrategyDesc>단순 암기에서 벗어나 원리를 이해하는 시간을 반드시 확보합니다.</S.StrategyDesc>
                    </S.StrategyContent>
                </S.StrategyItem>
                <S.StrategyItem>
                    <S.StrategyNumber>02</S.StrategyNumber>
                    <S.StrategyContent>
                        <S.StrategyTitle>고립된 학습 환경 확보</S.StrategyTitle>
                        <S.StrategyDesc>외부 연락을 차단하고 오로지 학습에만 집중할 수 있는 오전 3시간을 고정합니다.</S.StrategyDesc>
                    </S.StrategyContent>
                </S.StrategyItem>
            </S.StrategyBox>

            {/* Action Rules Section */}
            <S.SectionHeader>실천 수칙</S.SectionHeader>
            <S.AccordionList>
                <S.AccordionItem>
                    <S.AccordionHeader>
                        <S.IconWrapper $bg="#E8F9FF">
                           ✍️
                        </S.IconWrapper>
                        <S.AccordionTitle>오답 노트 작성 및 변형 문제 풀이</S.AccordionTitle>
                        <S.Chevron>∨</S.Chevron>
                    </S.AccordionHeader>
                </S.AccordionItem>

                <S.AccordionItem>
                    <S.AccordionHeader>
                        <S.IconWrapper $bg="#FFF8E8">
                            📅
                        </S.IconWrapper>
                        <S.AccordionTitle>주간 학습 목표 달성 여부 체크리스트</S.AccordionTitle>
                        <S.Chevron>∨</S.Chevron>
                    </S.AccordionHeader>
                </S.AccordionItem>

                <S.AccordionItem>
                    <S.AccordionHeader>
                        <S.IconWrapper $bg="#E8FFE8">
                            🤝
                        </S.IconWrapper>
                        <S.AccordionTitle>전문가 멘토링 또는 스터디 그룹 참여</S.AccordionTitle>
                        <S.Chevron>∨</S.Chevron>
                    </S.AccordionHeader>
                </S.AccordionItem>
            </S.AccordionList>

            <S.BottomLinkWrapper>
                <S.BottomLink href="#">프로젝트 계획 수정하기 →</S.BottomLink>
            </S.BottomLinkWrapper>
        </S.Container>
    );
};

const S = {};

S.Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

S.SummaryHeader = styled.div`
    margin-bottom: 48px;
`;

S.Badge = styled.span`
    display: inline-block;
    padding: 6px 16px;
    background-color: ${({ theme }) => theme.PALETTE.third.light};
    color: ${({ theme }) => theme.PALETTE.third.main};
    border: 1px solid #E0C3FF;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    margin-bottom: 20px;
`;

S.MainTitle = styled.h2`
    font-size: ${({ theme }) => theme.FONT_SIZE.h6};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    margin-bottom: 16px;
`;

S.Description = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    color: ${({ theme }) => theme.GRAYSCALE[7]};
    line-height: 1.6;
    max-width: 600px;
`;

S.SectionHeader = styled.h3`
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    margin-bottom: 16px;
    padding-left: 12px;
    border-left: 3px solid ${({ theme }) => theme.PALETTE.third.main};
`;

S.StrategyBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 48px;
`;

S.StrategyItem = styled.div`
    display: flex;
    align-items: center;
    background-color: #F9FAFB;
    border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
    border-radius: 12px;
    padding: 24px;
`;

S.StrategyNumber = styled.span`
    font-size: ${({ theme }) => theme.FONT_SIZE.h5};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.extrabold};
    color: ${({ theme }) => theme.PALETTE.third.main};
    opacity: 0.3;
    margin-right: 24px;
`;

S.StrategyContent = styled.div`
    display: flex;
    flex-direction: column;
`;

S.StrategyTitle = styled.span`
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    margin-bottom: 4px;
`;

S.StrategyDesc = styled.span`
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    color: ${({ theme }) => theme.GRAYSCALE[7]};
`;

S.AccordionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

S.AccordionItem = styled.div`
    border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
    border-radius: 12px;
    background-color: ${({ theme }) => theme.PALETTE.white};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: ${({ theme }) => theme.PALETTE.third.main};
    }
`;

S.AccordionHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 24px;
`;

S.IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: ${({ $bg }) => $bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
`;

S.AccordionTitle = styled.span`
    flex: 1;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.Chevron = styled.span`
    color: ${({ theme }) => theme.GRAYSCALE[5]};
    font-size: 18px;
`;

S.BottomLinkWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
`;

S.BottomLink = styled.a`
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export default LogActionPlanContainer;