import React from 'react';
import styled from 'styled-components';
import SearchbarComponent from '../../../components/commons/SearchbarComponent';
import CommunitySearchOrderComponent from '../../community/list/components/CommunitySearchOrderComponent';

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 24px;
`;

const LogSearchComponent = ({ currentOption, onOptionChange, onSearchSubmit, placeholder = '내 페일로그를 검색해볼까요?' }) => {
  return (
    <SearchRow>
      <SearchbarComponent onSubmit={onSearchSubmit} placeholder={placeholder} />
      <CommunitySearchOrderComponent defaultValue={currentOption} onChange={onOptionChange} />
    </SearchRow>
  );
};

export default LogSearchComponent;
