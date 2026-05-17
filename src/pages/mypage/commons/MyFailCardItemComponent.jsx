import React from 'react';
import S from './styles/MyFailCardItemStyles'; // 📌 실제 파일 경로에 맞게 확인해 주세요

/**
 * @param {object} log - 페일로그 데이터 객체
 * @param {boolean} isSelected - 체크박스 선택 여부 State
 * @param {string} iconSrc - 카드 중앙에 들어갈 이미지 주소
 * @param {function} onClick - 카드 클릭 핸들러 (선택 토글용)
 */
const MyFailCardItemComponent = ({ log, isSelected, iconSrc, onClick }) => {
  return (
    /* 🎯 겉돌던 인라인 테두리/배경 스타일을 완전히 걷어내고, 
       styled-components 본체에만 props를 깨끗하게 전달합니다. */
    <S.MyFailCard 
      isSelected={isSelected} 
      onClick={onClick}
      bgColor={log.bgColor} // 혹시 데이터에 개별 배경색이 있다면 연동
    >
      <S.MyFailContent>
        
        {/* 🔥 [레이어 3] 텍스트 및 인터랙션 요소 그룹 */}
        <div className="ContentGroup">
          <h4>{log.title}</h4>
          
          <div className="AuthorArea">
            {/* 프로필 이미지가 있다면 노출, 없다면 기본 처리 */}
            {log.profileImg && (
              <img className="ProfileIcon" src={log.profileImg} alt="profile" />
            )}
            <span>{log.author || '나의 기록'}</span>
          </div>

          {/* 🔥 [레이어 1] 본체 중앙 메인 일러스트 이미지 */}
          <div className="CardMainImage">
            <img src={iconSrc} alt="fail-log-illustration" />
          </div>

          {/* 하단 푸터 영역 (작성 시간 및 좋아요) */}
          <div className="CardFooter">
            <span className="TimeText">{log.createdAt || '방금 전'}</span>
            
            {/* 좋아요 레이아웃 규격 유지 */}
            {log.likeCount !== undefined && (
              <div className="LikeArea">
                <span>{log.isLiked ? '❤️' : '🤍'}</span>
                <span>{log.likeCount}</span>
              </div>
            )}
          </div>
        </div>

      </S.MyFailContent>
    </S.MyFailCard>
  );
};

export default MyFailCardItemComponent;