import React from 'react';

const MyFailLogsContainer = () => {
    return (
        <div className="MyFailLogsContainer">
            <div className="HeroSection">
                <div className="BannerCard">마이 페일로그</div>
                <div className="SubCardsContainer">
                    <div className="SubCardItem">좋아요 한 페일로그</div>
                    <div className="SubCardItem">페일로그 방명록</div>
                    <div className="SubCardItem">페일로그 바로가기</div>
                </div>
            </div>

            <h1 className="MainTitle">나의 페일로그</h1>

            <div className="HighlightSection">
                <div className="HighlightListWrapper">
                    <h2 className="HighlightTitle">당신의 가장 빛났던 실패 이야기</h2>
                    <p className="HighlightDescription">조회수가 높았던 게시글입니다.</p>
                    <ul className="HighlightList">
                        <li className="HighlightItem">텍스트루의 성공 엔진...</li>
                        <li className="HighlightItem">기획자와 디자이너의...</li>
                        <li className="HighlightItem">문제의식에서 시작된...</li>
                    </ul>
                </div>
                <div className="HighlightMainCard">
                    <div className="HighlightCardImage">
                        <div className="HighlightCardOverlay">
                            <p className="QuoteText">"더 나은 방법을 찾아야 한다는 문제의식이 생겼습니다."</p>
                            <span className="QuoteAuthor">- 필기마스터</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="LogFilterBar">
                <div className="SelectionGroup">
                    <input type="checkbox" className="AllSelectCheckbox" />
                    <span className="SelectionText">전체 선택</span>
                    <button className="DeleteButton">삭제</button>
                </div>
                <div className="SearchGroup">
                    <select className="SearchTypeSelect">
                        <option>제목+내용</option>
                    </select>
                    <input type="text" className="SearchInput" placeholder="검색어를 입력하세요" />
                    <button className="SearchSubmitBtn">🔍</button>
                </div>
            </div>

            {/* 작성 중인 로그 섹션 (그리드 레이아웃) */}
            <div className="WritingSection">
                <h3 className="SectionSubTitle">아직 작성중인 페일로그가 있어요.</h3>
                <div className="WritingCardsGrid">
                    <div className="WritingCard">작성중인 페일로그 1</div>
                    <div className="WritingCard">작성중인 페일로그 2</div>
                    <div className="WritingCard">작성중인 페일로그 3</div>
                    <div className="WritingCard">작성중인 페일로그 4</div>
                </div>
            </div>
            
            {/* 전체 로그 그리드 섹션 */}
            <div className="TotalLogSection">
                <div className="LogCardsGrid">
                    {/* 일반 로그 카드들이 4열로 들어갈 자리 */}
                </div>
            </div>
        </div>
    );
};

export default MyFailLogsContainer;