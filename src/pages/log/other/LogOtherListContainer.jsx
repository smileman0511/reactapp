import React from 'react';
import { Link } from 'react-router-dom';

const LogOtherListContainer = () => {

    return (
        <div>
            {new Array(10).fill(0).map((_, i) => (<li><Link to={`/logs/result/${i + 1}/detail`}>{i + 1}번 작성된 로그</Link></li>))}
        </div>
    );
};

export default LogOtherListContainer;