import React from 'react';
import S from './styles/MyFailCardItemStyles';

/**
 * @param {object} log - 페일로그 데이터 객체
 * @param {boolean} isSelected - 체크박스 선택 여부 State
 * @param {string} iconSrc - 카드 우하단에 들어갈 이미지 주소
 * @param {function} onClick - 카드 클릭 핸들러 (선택 토글용)
 */
const MyFailCardItemComponent = ({ log, isSelected, iconSrc, onClick }) => {
  return (
    <S.MyFailCard 
      $isSelected={isSelected} // 🎯 Transient Prop ($) 적용
      onClick={onClick}
      $bgColor={log.bgColor}   // 🎯 Transient Prop ($) 적용
    >
      <S.MyFailContent>
        
        {/* 🔥 [레이어 3] 최상단 텍스트 및 인터랙션 요소 그룹 (z-index: 3) */}
        <div className="ContentGroup">
          <h4>{log.title}</h4>
          
          <div className="AuthorArea">
            {log.profileImg && (
              <img className="ProfileIcon" src={log.profileImg} alt="profile" />
            )}
            <span>{log.author || '나의 기록'}</span>
          </div>

          {/* 하단 푸터 영역 (작성 시간 및 좋아요) */}
          <div className="CardFooter">
            <span className="TimeText">{log.createdAt || '방금 전'}</span>
            
            {log.likeCount !== undefined && (
              <div className="LikeArea">
                <span>{log.isLiked ? '❤️' : '🤍'}</span>
                <span>{log.likeCount}</span>
              </div>
            )}
          </div>
        </div>

        {/* 🔥 [요구사항 3 & 5 반영] 
          [레이어 1] 우하단 메인 일러스트 이미지를 ContentGroup 바깥으로 추출!
          이렇게 해야 ::before(필터, z-index: 2) 밑으로 완벽하게 깔립니다.
        */}
        <div className="CardMainImage">
          <img src={iconSrc} alt="fail-log-illustration" />
        </div>

      </S.MyFailContent>
    </S.MyFailCard>
  );
};

export default MyFailCardItemComponent;