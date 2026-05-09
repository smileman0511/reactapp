import React from 'react';
import styled from 'styled-components';

const LogPatternsContainer = () => {
    return (
        <S.Container>
            {/* Main Header / Summary Section */}
            <S.SummaryHeader>
                <S.Badge>환경 적응형 실패 (외부 요인 70%)</S.Badge>
                <S.MainTitle>외부 환경 변화에 휩쓸린 실패</S.MainTitle>
                <S.Description>
                    시장 상황이나 타인의 압박 같은 외부 요인에 영향을 많이 받았습니다. 
                    스스로 주도권을 잡지 못하고 환경에 적응하지 못한 채 내린 결정들이 
                    반복적인 실패 패턴을 만들고 있습니다.
                </S.Description>
            </S.SummaryHeader>

            {/* One Line Summary */}
            <S.SectionHeader>한 줄 요약</S.SectionHeader>
            <S.QuoteBox>
                <S.QuoteText>
                    "환경이 어려워질 때, 당신은 주로 집중력을 잃고 회피하는 결정을 내립니다."
                </S.QuoteText>
                <S.QuoteSubText>
                    이 로그에서 찾은 핵심 실패 근거였어요. 다음 실천에서 내리는 결정을 한 번 더 점검해보세요.
                </S.QuoteSubText>
            </S.QuoteBox>

            {/* Detailed Analysis Section */}
            <S.SectionHeader>분석 세부 사항</S.SectionHeader>
            <S.AccordionList>
                <S.AccordionItem>
                    <S.AccordionHeader>
                        <S.IconWrapper $bg="#F3E8FF">
                           📊
                        </S.IconWrapper>
                        <S.AccordionTitle>요인별 영향도 & 나의 실패 패턴</S.AccordionTitle>
                        <S.Chevron>∨</S.Chevron>
                    </S.AccordionHeader>
                </S.AccordionItem>

                <S.AccordionItem>
                    <S.AccordionHeader>
                        <S.IconWrapper $bg="#E8F1FF">
                            ⏰
                        </S.IconWrapper>
                        <S.AccordionTitle>자주 반복되는 습관 & 요인에 따른 실패 분류</S.AccordionTitle>
                        <S.Chevron>∨</S.Chevron>
                    </S.AccordionHeader>
                </S.AccordionItem>

                <S.AccordionItem>
                    <S.AccordionHeader>
                        <S.IconWrapper $bg="#FFE8F1">
                            🔗
                        </S.IconWrapper>
                        <S.AccordionTitle>실패 흐름 & 로그에 나타난 내용</S.AccordionTitle>
                        <S.Chevron>∨</S.Chevron>
                    </S.AccordionHeader>
                </S.AccordionItem>
            </S.AccordionList>

            <S.BottomLinkWrapper>
                <S.BottomLink href="#">프로젝트 작성하러 가기 →</S.BottomLink>
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
    background-color: #FFF0ED;
    color: #F53102;
    border: 1px solid #FFD8D0;
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

S.QuoteBox = styled.div`
    background-color: ${({ theme }) => theme.PALETTE.white};
    border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
    border-radius: 12px;
    padding: 32px;
    margin-bottom: 48px;
`;

S.QuoteText = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    margin-bottom: 8px;
    text-align: center;
`;

S.QuoteSubText = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.h10};
    color: #F53102;
    text-align: center;
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

export default LogPatternsContainer;