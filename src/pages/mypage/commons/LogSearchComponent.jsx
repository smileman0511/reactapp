import React from 'react';
import styled from 'styled-components';
import SearchComponent from '../../community/list/components/SearchComponent';
import CommunitySearchOrderComponent from '../../community/list/components/CommunitySearchOrderComponent';

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 24px;
`;

const LogSearchComponent = ({ currentOption, onOptionChange, onSearchSubmit, placeholder = '내 페일로그 검색...' }) => {
  return (
    <SearchRow>
      <SearchComponent onSubmit={onSearchSubmit} placeholder={placeholder} />
      <CommunitySearchOrderComponent defaultValue={currentOption} onChange={onOptionChange} />
    </SearchRow>
  );
};

export default LogSearchComponent;
