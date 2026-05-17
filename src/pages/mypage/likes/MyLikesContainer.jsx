import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageS from '../profile/styles/MyPageWrapper';
import LogS from './styles/LikesLogStyles'; // 좋아요 전용 합본 스타일
import RecentLogsComponent from './components/RecentLogsComponent';

// 💡 기존 컴포넌트 아키텍처 규칙 및 공통 컴포넌트 연동
import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import { getHeroContent } from '../heroSection/HeroData';

import SearchbarComponent from '../../../components/commons/SearchbarComponent';
import PagenationComponent from '../../../components/commons/PagenationComponent';
import useSearchStore from '../../../components/useSearchStore';

import cardGraphicIcon from './resources/fail-log-card.png'; 

const MyLikesContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // 💡 기존 설계 구조 및 전역 검색 스토어 연동
  const { mainContent, quickMenus } = getHeroContent(pathname);
  const { content, setContent, setPage } = useSearchStore();

  // 📌 상태 관리 정의 (기존 1번 코드의 데이터 흐름 아키텍처 반영)
  const [allLikedLogs, setAllLikedLogs] = useState([
    { id: 1, title: '"붉은사막 30시간 해봤다" 게임주 영업익 10% 뛸 증거', author: "필기마스터", createdAt: "7시간 전", isLiked: true },
    { id: 2, title: "React 공통 컴포넌트 설계의 어려움 분석", author: "세종", createdAt: "1일 전", isLiked: true },
    { id: 3, title: "스타일 컴포넌트 레이어 연동 실패 원인", author: "개발뉴비", createdAt: "2일 전", isLiked: true },
    { id: 4, title: "z-index와 가상요소 속성 분석 오류", author: "토끼", createdAt: "3일 전", isLiked: true },
    { id: 5, title: "Asunica 면접 준비 중 발견한 예외 처리 버그", author: "세종", createdAt: "5일 전", isLiked: true },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchOption, setSearchOption] = useState('제목+내용'); // 확장성을 위한 검색 옵션 상태 유지

  const cardThemes = [
    { bg: "#F8FAFC", text: "#1E293B" }, 
    { bg: "#DCE6F2", text: "#1E293B" }, 
    { bg: "#94A3B8", text: "#FFFFFF" }, 
    { bg: "#475569", text: "#FFFFFF" }, 
  ];

  const recentLogs = [
    { id: 101, title: '"붉은사막 30시간 해봤다" 게임주 영업익 10% 뛸 증거', author: "필기마스터", date: "10분 전" },
    { id: 102, title: '"붉은사막 30시간 해봤다" 게임주 영업익 10% 뛸 증거', author: "필기마스터", date: "1일 전" },
    { id: 103, title: '"붉은사막 30시간 해봤다" 게임주 영업익 10% 뛸 증거', author: "필기마스터", date: "3일 전" },
  ];

  // 🎯 [이식 핵심] 검색어 필터링을 useMemo로 최적화 (불필요한 2차 렌더링 방지)
  const filteredLogs = useMemo(() => {
    if (!content) return allLikedLogs;
    const keyword = content.toLowerCase().trim();

    return allLikedLogs.filter((log) => {
      // 추후 '내용' 필드가 추가될 것을 대비한 유연한 필터 구축
      const titleMatch = log.title.toLowerCase().includes(keyword);
      const contentMatch = log.content ? log.content.toLowerCase().includes(keyword) : false;

      if (searchOption === '제목') return titleMatch;
      if (searchOption === '내용') return contentMatch;
      return titleMatch || contentMatch;
    });
  }, [allLikedLogs, content, searchOption]);

  // 🎯 [이식 핵심] 총 페이지 수 계산 및 현재 페이지 슬라이싱 로직 추가 (한 페이지당 4개 배치)
  const ITEMS_PER_PAGE = 4;
  const totalPages = useMemo(() => Math.ceil(filteredLogs.length / ITEMS_PER_PAGE) || 1, [filteredLogs]);

  const pagedLogs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredLogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredLogs, currentPage]);

  // 검색 조건이나 전역 검색어가 변경되면 페이지를 1페이지로 리셋하는 가드레일 효과
  useEffect(() => {
    setCurrentPage(1);
  }, [content, searchOption]);

  const handleSearchSubmit = (val) => {
    setContent(val);
    setCurrentPage(1);
    setPage(1);
  };

  // ⚡ 좋아요 토글 핸들러 (내부 State 반영 및 이벤트 전파 차단 적용)
  const handleToggleLike = (id, e) => {
    e.stopPropagation(); // 카드 상세 이동 링크와 이벤트 겹침 방지
    setAllLikedLogs((prev) =>
      prev.map((log) => (log.id === id ? { ...log, isLiked: !log.isLiked } : log))
    );
  };

  return (
    <PageS.MainWrapper>
      {/* 공통 히어로 컨텐츠 주입 */}
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} />

      {/* [섹션 1] 최근 확인한 페일로그 섹션 */}
      <RecentLogsComponent logs={recentLogs} />

      {/* [섹션 2] 좋아요 한 페일로그 섹션 */}
      <LogS.LogSection>
        <h3>좋아요 한 페일로그 모음</h3>
        <p className="sub-desc">내가 좋아요한 다른 사람들의 페일로그를 확인 할 수 있습니다.</p>

        {/* 필터 및 검색 바 인터페이스 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <select 
            value={searchOption}
            onChange={(e) => setSearchOption(e.target.value)}
            style={{ padding: "10px 16px", borderRadius: "12px", border: "1px solid #E2E8F0", color: "#475569", outline: "none", fontSize: "14px" }}
          >
            <option value="제목+내용">제목+내용</option>
            <option value="제목">제목</option>
          </select>
          <div style={{ width: "420px" }}>
            <SearchbarComponent placeholder="검색어를 입력하세요." onSubmit={handleSearchSubmit} />
          </div>
        </div>

        {pagedLogs.length > 0 ? (
          <>
            <LogS.PostGrid>
              {pagedLogs.map((log, index) => {
                const theme = cardThemes[index % 4];
                return (
                  <LogS.LikeCard 
                    key={log.id} 
                    bgColor={theme.bg} 
                    onClick={() => navigate(`/logs/detail/${log.id}`)}
                  >
                    <LogS.LikeOverlay className="like-film-overlay" />

                    <LogS.LikeContent textColor={theme.text}>
                      <h4>{log.title}</h4>
                      <div className="AuthorArea">
                        <img src={`https://api.dicebear.com/7.x/bottts/svg?seed=${log.author}`} alt="avatar" />
                        <span>@{log.author}</span>
                      </div>
                      
                      <div className="CardMainImage">
                        <img src={cardGraphicIcon} alt="데이터 분석 그래픽" />
                      </div>

                      <div className="CardFooter">
                        <span className="TimeText">{log.createdAt}</span>
                        <div className="LikeIconArea" onClick={(e) => handleToggleLike(log.id, e)}>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill={log.isLiked ? "#FF5A5A" : "none"} 
                            viewBox="0 0 24 24" 
                            stroke={log.isLiked ? "#FF5A5A" : theme.text} 
                            opacity={log.isLiked ? 1 : 0.4}
                            style={{ transition: "all 0.2s ease" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg>
                        </div>
                      </div>
                    </LogS.LikeContent>
                  </LogS.LikeCard>
                );
              })}
            </LogS.PostGrid>

            {/* 📌 페이지네이션 연동 */}
            <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
              <PagenationComponent 
                minPage={1} 
                maxPage={totalPages} 
                page={currentPage} 
                onPageChange={(page) => setCurrentPage(page)} 
              />
            </div>
          </>
        ) : (
          <LogS.EmptyStateWrapper>
            <LogS.EmptyTitle>데이터를 찾을 수 없습니다.</LogS.EmptyTitle>
          </LogS.EmptyStateWrapper>
        )}
      </LogS.LogSection>
    </PageS.MainWrapper>
  );
};

export default MyLikesContainer;