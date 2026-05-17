import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageS from '../profile/styles/MyPageWrapper';

import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import FeaturedLogComponent from './components/FeaturedLogComponent';
import DraftLogsComponent from './components/DraftLogsComponent'; 
import MyFailLogListSectionComponent from './components/MyFailLogListSectionComponent';
import TrashComponent from './components/TrashComponent'; 

import { getHeroContent } from '../heroSection/HeroData';
import useSearchStore from '../../../components/useSearchStore';

const MyFailLogsContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mainContent, quickMenus } = getHeroContent(pathname);
  const { content, setContent, setPage } = useSearchStore();
  
  // 📌 메인 활성 카드 데이터
  const [allLogs, setAllLogs] = useState([
    { id: 1, title: "1페이지 - Asunica 최종 면접 준비 중 발견한 코드 오류", content: "오늘 프로젝트를 정리하다가 스타일 경로가 꼬인 것을 발견했다.", createdAt: "2026-05-14", isLiked: false },
    { id: 2, title: "1페이지 - React 공통 컴포넌트 설계의 어려움", content: "페이지네이션 컴포넌트를 만들면서 그룹화 로직을 구현하는 게 까다로웠다.", createdAt: "2026-05-13", isLiked: true },
    { id: 3, title: "1페이지 - 오늘의 실패: 커피를 쏟은 키보드", content: "코딩에 집중하다가 커피를 쏟았다. 하드웨어 관리는 정말 중요하다.", createdAt: "2026-05-12", isLiked: false },
    { id: 4, title: "스타일 컴포넌트 레이어 연동 실패 분석", content: "z-index와 가상요소 속성의 원리를 분석한다.", createdAt: "2026-05-11", isLiked: false },
  ]);

  // 📌 휴지통 보관소 데이터
  const [trashedLogs, setTrashedLogs] = useState([]);

  const [filteredLogs, setFilteredLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchOption, setSearchOption] = useState('제목+내용');
  
  // 상단 목록용 선택 상태
  const [selectedDeleteIds, setSelectedDeleteIds] = useState([]);
  
  // 🎯 [핵심 기획 반영] 휴지통 전용 편집 모드 상태 및 선택 상태
  const [isTrashEditMode, setIsTrashEditMode] = useState(false);
  const [selectedTrashIds, setSelectedTrashIds] = useState([]);

  const draftLogs = [
    { id: 1, title: "작성중인 페일로그 1", content: '"신기시험 실패의 원인을 찾아서"', progress: 80, date: "3일 전", color: "#A5B4C3" },
  ];

  // 검색어 필터링 효과
  useEffect(() => {
    let filtered = allLogs;
    if (content) {
      const keyword = content.toLowerCase().trim();
      filtered = allLogs.filter((log) => {
        if (searchOption === '제목') return log.title.toLowerCase().includes(keyword);
        if (searchOption === '내용') return log.content.toLowerCase().includes(keyword);
        return log.title.toLowerCase().includes(keyword) || log.content.toLowerCase().includes(keyword);
      });
    }
    setFilteredLogs(filtered);
    setTotalPages(Math.ceil(filtered.length / 4) || 1); 
  }, [allLogs, content, searchOption]);

  useEffect(() => {
    setSelectedDeleteIds([]);
  }, [currentPage]);

  const handleSearchSubmit = (val) => {
    setContent(val);
    setCurrentPage(1);
    setPage(1);
  };

  // --- [상단 목록 제어 핸들러] ---
  const handleSelectOneLog = (id) => {
    setSelectedDeleteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAllLogs = (e) => {
    if (e.target.checked) {
      setSelectedDeleteIds(filteredLogs.map((log) => log.id));
    } else {
      setSelectedDeleteIds([]);
    }
  };

  const handleDeleteLogs = () => {
    if (selectedDeleteIds.length === 0) return alert("삭제할 페일로그를 선택해주세요.");
    if (window.confirm(`선택한 ${selectedDeleteIds.length}개의 페일로그를 휴지통으로 이동하시겠습니까?`)) {
      const logsToTrash = allLogs.filter((log) => selectedDeleteIds.includes(log.id));
      setTrashedLogs((prev) => [...prev, ...logsToTrash]);
      setAllLogs((prev) => prev.filter((log) => !selectedDeleteIds.includes(log.id)));
      setSelectedDeleteIds([]);
      setCurrentPage(1);
    }
  };

  // --- 🎯 [하단 휴지통 제어 핸들러 - 가드레일 반영] ---
  
  // 편집 모드 토글 (체크박스를 끄면 선택했던 내역도 안전하게 리셋)
  const handleToggleTrashEditMode = (e) => {
    const isChecked = e.target.checked;
    setIsTrashEditMode(isChecked);
    if (!isChecked) {
      setSelectedTrashIds([]);
    }
  };

  // 개별 카드 클릭 핸들러 (편집 모드가 켜져 있을 때만 작동)
  const handleSelectOneTrash = (id) => {
    if (!isTrashEditMode) return;
    setSelectedTrashIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 하단바 전체 선택 핸들러 (켜면 대기 상태로 전환, 끄면 비움)
  const handleSelectAllTrash = (e) => {
    if (!isTrashEditMode) return;
    if (e.target.checked) {
      setSelectedTrashIds(trashedLogs.map((log) => log.id));
    } else {
      setSelectedTrashIds([]);
    }
  };

  // 선택 그룹 복구 실행 (최종 클릭 장치)
  const handleRestoreSelectedLogs = () => {
    if (selectedTrashIds.length === 0) return alert("복구할 페일로그를 선택해주세요.");
    
    const targets = trashedLogs.filter((log) => selectedTrashIds.includes(log.id));
    setAllLogs((prev) => [...targets, ...prev]);
    setTrashedLogs((prev) => prev.filter((log) => !selectedTrashIds.includes(log.id)));
    setSelectedTrashIds([]);
    setIsTrashEditMode(false); // 처리 후 모드 종료
    alert("선택한 페일로그가 목록으로 복구되었습니다.");
  };

  // 선택 그룹 영구 삭제 실행 (최종 클릭 장치)
  const handleDeleteForeverSelectedLogs = () => {
    if (selectedTrashIds.length === 0) return alert("영구 삭제할 페일로그를 선택해주세요.");
    
    if (window.confirm(`선택한 ${selectedTrashIds.length}개의 페일로그를 영구 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`)) {
      setTrashedLogs((prev) => prev.filter((log) => !selectedTrashIds.includes(log.id)));
      setSelectedTrashIds([]);
      setIsTrashEditMode(false); // 처리 후 모드 종료
    }
  };

  return (
    <PageS.MainWrapper>
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} />
      <DraftLogsComponent draftLogs={draftLogs} />
      <FeaturedLogComponent />

      <MyFailLogListSectionComponent 
        searchOption={searchOption}
        setSearchOption={setSearchOption}
        handleSearchSubmit={handleSearchSubmit}
        filteredLogs={filteredLogs}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={(page) => setCurrentPage(page)}
        navigate={navigate}
        selectedDeleteIds={selectedDeleteIds}
        onSelectOneLog={handleSelectOneLog}
        onSelectAllLogs={handleSelectAllLogs}
        onDeleteLogs={handleDeleteLogs}
      />

      {/* 📌 하단 대칭 휴지통 섹션 */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '100px auto 40px',
        borderTop: '1px dashed #CBD5E1',
        paddingTop: '60px'
      }}>
        <TrashComponent 
          trashedLogs={trashedLogs}
          isTrashEditMode={isTrashEditMode}
          onToggleEditMode={handleToggleTrashEditMode}
          selectedTrashIds={selectedTrashIds}
          onSelectOneTrash={handleSelectOneTrash}
          onSelectAllTrash={handleSelectAllTrash}
          onRestoreSelected={handleRestoreSelectedLogs}
          onDeleteForeverSelected={handleDeleteForeverSelectedLogs}
        />
      </div>
    </PageS.MainWrapper>
  );
};

export default MyFailLogsContainer;