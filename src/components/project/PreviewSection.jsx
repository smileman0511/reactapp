import React from 'react';
import PreviewTabs from '../../components/project/PreviewTabs';
import CaseCardList from '../../components/project/CaseCardList';

const PreviewSection = ({ activeTab, onTabChange, cases, onCaseClick }) => {
    return (
        <div>
            <PreviewTabs activeTab={activeTab} onTabChange={onTabChange} />
            <CaseCardList cases={cases} onCaseClick={onCaseClick} />
        </div>
    );
};

export default PreviewSection;