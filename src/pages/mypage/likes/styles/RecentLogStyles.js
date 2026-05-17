import styled from "styled-components";
// 📌 디자인 시스템 가이드 규격 연동
import { sizeCSS, colorCSS } from "../../../../components/style"; 

const S = {};

// ==========================================
// ── [상단] 최근 확인한 페일로그 섹션 전체 래퍼 ──
// ==========================================
S.RecentSection = styled.section`
  padding: 78px 0 60px 0; /* DraftSection 스펙 준수 */
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .ContentHeader {
    margin-bottom: 30px;
    text-align: left;

    h2 {
      ${sizeCSS["h6-bold"]}
      margin: 0 0 12px 0;
      color: ${colorCSS["faillog-black"]};
      span { color: ${colorCSS["faillog_purple"]}; }
    }
    
    .sub-desc {
      ${sizeCSS["h9-regular"]}
      color: #64748B;
      margin: 0;
      line-height: 1.5;
    }
  }
`;

// ==========================================
// ── 최근 확인한 페일로그 그리드 (DraftGrid 스펙 일치) ──
// ==========================================
S.RecentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 38px; 
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

// ==========================================
// ── 최근 확인한 페일로그 카드 본체 (DraftCard 스펙 완벽 이식) ──
// ==========================================
S.RecentCard = styled.div`
  width: 100%;
  max-width: 410px; 
  height: 534px; 
  /* 🎯 props.bgColor 대신 props.$bgColor 사용 */
  background: ${(props) => props.$bgColor || "#94A3B8"}; 
  border-radius: 24px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
  border: 3px solid transparent; 
  transition: border-color 0.25s ease, transform 0.2s ease, background-color 0.25s ease;

  /* 🔥 [레이어 2] 암전 필름 오버레이 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(25, 34, 49, 0.45); 
    z-index: 2; 
    transition: opacity 0.25s ease;
  }

  /* 🔥 [레이어 3] 최상단 콘텐츠 그룹 */
  .ContentGroup {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    height: 100%;
    pointer-events: none; /* 클릭 이벤트를 부모 카드가 온전히 받도록 제어 */
    
    * {
      pointer-events: auto;
    }
  }

  .CardHeader {
    text-align: left;
    
    h3 {
      ${sizeCSS["h7-bold"]}
      color: ${colorCSS["faillog_white"]};
      margin: 0 0 12px 0;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    p {
      ${sizeCSS["h9-regular"]}
      color: ${colorCSS["faillog_white"]};
      opacity: 0.85;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  /* 🔥 [레이어 1] 피그마 우하단 고정 일러스트 (z-index: 1) */
  .CardImage {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1; 
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    pointer-events: none;

    img { 
      width: 278px !important;
      height: 209px !important;
      margin-top: 340px !important; /* 밀어내기 정밀 마진 유지 */
      object-fit: contain;
      filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15));
      transition: filter 0.25s ease;
    }
  }

  /* 🎯 피그마 안착 푸터 레이아웃 규격 (하트 버튼 패키징 통합) */
  .CardFooter {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; /* 수평 정밀 일치 */
    
    .InfoText {
      ${sizeCSS["h9-bold"]}
      color: ${colorCSS["faillog_white"]};
      opacity: 0.9;
      line-height: 1.6;
      transition: color 0.25s ease;
    }

    /* 하트 인터랙션 버튼 스타일에 매칭 */
    .HeartButton {
      background: none;
      border: none;
      padding: 0;
      margin-bottom: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease;

      &:active {
        transform: scale(0.85); 
      }
      
      .filled-heart, .empty-heart {
        width: 18px;
        height: 18px;
        object-fit: contain;
        transition: filter 0.25s ease, opacity 0.25s ease;
      }

      .filled-heart {
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
      }
    }
  }

  /* ✨ 마우스 호버 인터랙션 반전 액션 */
  &:hover {
    border-color: ${colorCSS["faillog_purple"]}; 
    transform: translateY(-8px); 
    background-color: ${colorCSS["faillog_white"]} !important; 
    
    &::before {
      opacity: 0; /* 필름 투명화 */
    }
    
    /* 글자 및 푸터 정보를 공통 폰트 컬러로 일괄 반전 */
    .CardHeader h3, 
    .CardHeader p, 
    .CardFooter .InfoText {
      color: ${colorCSS["faillog-black"]} !important;
      opacity: 1 !important;
    }

    .CardImage img {
      filter: drop-shadow(0 15px 20px rgba(0, 0, 0, 0.08));
    }

    /* 호버 시 빈 하트 이미지가 화이트 배경 위에서 묻히지 않도록 다크 틴트 적용 */
    .HeartButton .empty-heart {
      filter: brightness(0.3); 
    }
  }
`;

export default S;