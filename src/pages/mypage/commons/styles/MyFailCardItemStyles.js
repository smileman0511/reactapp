import styled from "styled-components";
import { sizeCSS, colorCSS } from "../../../../components/style"; 

const S = {};

/* 🎯 [전면 개편] 최외각 카드 틀 자체를 핑크색 배경의 본체로 만듭니다 */
S.MyFailCard = styled.div`
  width: 258px;
  height: 336px;
  
  /* 🎯 border와 padding이 width/height 크기에 포함되도록 설정하여 크기 계산을 직관적으로 바꿉니다 */
  box-sizing: border-box; 
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  /* 🎯 transitions를 가장 중요한 속성들로 정비 */
  transition: all 0.2s ease-in-out;
  
  /* 🔥 [레이어 1] 본체 배경색 설정: 최외각 틀 자체의 배경색을 직접 바꿉니다 */
  /* 선택(isSelected) 시 테마 대신 #FFE4E6 계열을 테두리까지 포함한 틀 전체에 강제 적용 */
  background-color: ${(props) => 
    props.isSelected 
      ? (colorCSS["faillog_light_red"] || "#FFE4E6") 
      : (props.bgColor || colorCSS["faillog_gray8"])
  };
  
  /* 🎯 [핵심] 선택 시 외각 테두리를 자연스러운 로즈빛 라인으로 밀착시킵니다 */
  border: 2px solid ${(props) => props.isSelected ? "#FDA4AF" : "transparent"}; 


  /* 🔥 [레이어 2] 암전 필름 오버레이 */
  &::before {
    content: '';
    position: absolute;
    /* 🎯 border 두께(2px)만큼 바깥으로 확장하여 테두리 위까지 완벽히 덮어버림 */
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    
    background: rgba(25, 34, 49, 0.45); 
    z-index: 2; 
    
    /* 🎯 카드의 곡률과 완벽하게 일치시킴 */
    border-radius: 20px; 
    
    opacity: ${(props) => props.isSelected ? 0 : 1};
    transition: opacity 0.2s ease;
  }

  /* ✨ 마우스 호버 액션 */
  &:hover {
    /* 선택되지 않은 일반 카드만 호버 시 화이트로 반전시킵니다 */
    background-color: ${(props) => props.isSelected ? (colorCSS["faillog_light_red"] || "#FFE4E6") : colorCSS["faillog_white"]} !important; 
    border-color: ${(props) => props.isSelected ? "#FDA4AF" : colorCSS["faillog_purple"]}; 
    transform: translateY(-4px);
    
    &::before {
      opacity: 0; 
    }
    
    /* 호버 시 텍스트 컬러 반전 제어 */
    h4, .TimeText, .AuthorArea span {
      color: ${(colorCSS["faillog_black"] || colorCSS["faillog-black"] || "#000000")} !important;
      opacity: 1 !important;
    }

    .CardMainImage img {
      filter: drop-shadow(0 15px 20px rgba(0, 0, 0, 0.08));
    }
  }

  /* 🎯 선택된 상태의 카드 내부 텍스트 가독성 확보 */
  ${(props) => props.isSelected && `
    h4, .TimeText, .AuthorArea span {
      color: ${(colorCSS["faillog_black"] || colorCSS["faillog-black"] || "#000000")} !important;
      opacity: 1 !important;
    }
  `}
`;

S.MyFailContent = styled.div`
  /* 🎯 내부 콘텐츠 영역은 최외각 틀 크기를 그대로 다 채웁니다 (수축 방지) */
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;

  /* 🔥 [레이어 3] 최상단 텍스트 및 콘텐츠 레이어 그룹 */
  .ContentGroup {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    height: 100%;
    pointer-events: none;
    
    * {
      pointer-events: auto;
    }
  }

  h4 {
    ${sizeCSS["h8-bold"]}
    margin: 0 0 8px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.2s ease;
  }

  .AuthorArea {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: auto;
    
    .ProfileIcon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      object-fit: cover;
    }

    span {
      ${sizeCSS["h10-regular"]}
      transition: color 0.2s ease;
    }
  }

  /* 🔥 [배경] 내부 이미지 센터링 박스 */
  .CardMainImage {
    position: absolute;
    left: 50%;
    top: 52%;
    transform: translate(-50%, -50%);
    z-index: 1; 
    width: 110px;
    height: 110px;
    display: flex;
    justifyContent: center;
    align-items: center;
    
    img { 
      width: 100%; 
      height: 100%; 
      object-fit: contain; 
      filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15));
      transition: filter 0.25s ease;
    }
  }

  /* 하단 푸터 영역 */
  .CardFooter {
    margin-top: auto;
    display: flex;
    justifyContent: space-between;
    align-items: center;
    
    .TimeText { 
      ${sizeCSS["h9-regular"]}
      transition: color 0.2s ease;
    }

    /* 🎯 원래 존재하던 하트 레이아웃 정렬 규격 */
    .LikeArea {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

export default S;