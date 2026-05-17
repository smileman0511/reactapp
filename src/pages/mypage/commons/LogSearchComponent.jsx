import React from 'react';
import SearchbarComponent from '../../../components/commons/SearchbarComponent';
import SearchDropdownComponent from '../../../components/commons/SearchDropdownComponent';

/**
 * @param {string} currentOption - 현재 선택된 검색 옵션 ('제목', '내용', '제목+내용')
 * @param {function} onOptionChange - 드롭다운 변경 시 실행할 상태 변경 함수
 * @param {function} onSearchSubmit - 검색어 제출 시 실행할 훅/핸들러
 * @param {object} styles - 외부 스타일 객체 (LogS)
 */
const LogSearchComponent = ({ currentOption, onOptionChange, onSearchSubmit, styles }) => {
  return (
    <styles.SearchControlBlock>
      <styles.DropdownWrapper>
        <SearchDropdownComponent 
          defaultValue={currentOption} 
          onChange={onOptionChange} 
        />
      </styles.DropdownWrapper>
      
      <styles.SearchbarWrapper>
        <SearchbarComponent 
          placeholder="내 페일로그 검색..." 
          onSubmit={onSearchSubmit}
        />
      </styles.SearchbarWrapper>
    </styles.SearchControlBlock>
  );
};

export default LogSearchComponent;