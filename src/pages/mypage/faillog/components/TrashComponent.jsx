import React from 'react';
import CommS from '../../profile/styles/CommunityStyles';
import failLogIcon from '../resources/fail-log-card.png';
import MyFailCardItemComponent from '../../commons/MyFailCardItemComponent';
import S from '../styles/MyFailLogStyles';
import ProfileS from '../../profile/styles/MyProfileStyle'; 

import PostControlBarComponent from '../../commons/ControlBarComponent';
import PagenationComponent from '../../../../components/commons/PagenationComponent';

const TrashComponent = ({ 
  trashedLogs = [], 
  isTrashEditMode,
  onToggleEditMode,
  selectedTrashIds = [], 
  onSelectOneTrash, 
  onSelectAllTrash, 
  onRestoreSelected, 
  onDeleteForeverSelected 
}) => {
  return (
    <>
      {/* 📌 휴지통 타이틀 영역 옆에 편집 모드를 활성화할 체크박스 배치 */}
      <S.SectionHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2><span>페일로그</span>휴지통</h2>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            id="trash-edit-toggle" 
            checked={isTrashEditMode} 
            onChange={onToggleEditMode}
            style={{ width: '16px', height: '16px', cursor: 'pointer' }}
          />
          <label htmlFor="trash-edit-toggle" style={{ fontSize: '14px', fontWeight: '600', color: '#64748B', cursor: 'pointer' }}>
            휴지통 관리 모드 켜기
          </label>
        </div>
      </S.SectionHeader>

      {trashedLogs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0', color: '#94A3B8' }}>
          <p style={{ fontSize: '16px', fontWeight: '500' }}>휴지통이 비어 있습니다.</p>
        </div>
      ) : (
        <>
          {/* 카드 그리드 */}
          <CommS.PostGrid 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '30px', 
              justifyContent: 'flex-start', 
              width: '100%',
              marginTop: '30px'
            }}
          >
            {trashedLogs.map((log, index) => {
              // 🎯 관리 모드가 켜져 있고 + 선택된 아이디 배열에 포함되어 있어야 진정한 '선택' 상태입니다
              const isSelected = isTrashEditMode && selectedTrashIds.includes(log.id);

              return (
                /* 🎯 [청소 완료] 겉돌던 가짜 테두리와 배경 인라인 스타일을 완전히 제거했습니다.
                   오직 리스트 정렬을 위한 고유 key값과 최소한의 형태만 유지합니다. */
                <div key={log.id} style={{ position: 'relative' }}>
                  <MyFailCardItemComponent 
                    log={log}
                    index={index}
                    iconSrc={failLogIcon}
                    isSelected={isSelected} // 📌 판단된 결과값을 자식 컴포넌트에게 온전히 넘겨 스타일을 통제합니다.
                    onClick={() => {
                      // 관리 모드가 켜져 있을 때만 클릭 시 토글 선택 동작이 가능하도록 방어 코드 구축
                      if (isTrashEditMode) {
                        onSelectOneTrash?.(log.id);
                      }
                    }} 
                  />
                </div>
              );
            })}
          </CommS.PostGrid>

          {/* 하단 제어 바 영역 */}
          <div style={{ 
            position: 'relative',
            width: '100%',
            marginTop: '40px', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            opacity: isTrashEditMode ? 1 : 0.5, 
            pointerEvents: isTrashEditMode ? 'auto' : 'none' 
          }}>
            <PagenationComponent minPage={1} maxPage={1} page={1} onPageChange={() => {}} />

            <div style={{ position: 'absolute', right: 0, bottom: '-10px' }}>
              <PostControlBarComponent 
                isAllChecked={selectedTrashIds.length === trashedLogs.length && trashedLogs.length > 0}
                onSelectAll={onSelectAllTrash}
                selectedCount={selectedTrashIds.length} 
                totalCount={trashedLogs.length}         
                showRestore={true} 
                onRestore={onRestoreSelected} 
                onDelete={onDeleteForeverSelected} 
                styles={ProfileS} 
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TrashComponent;