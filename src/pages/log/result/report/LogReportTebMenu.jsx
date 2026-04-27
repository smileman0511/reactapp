import React from 'react';
import { Link, useParams } from 'react-router-dom';

const LogReportTebMenu = () => {
    
    const {id} = useParams()

    return (
        <div>
            <Link to={`/logs/result/${id}/report/patterns`}>패턴 분석</Link>
            <Link to={`/logs/result/${id}/report/action-plan`}>행동 계획</Link>
        </div>
    );
};

export default LogReportTebMenu;