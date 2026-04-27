import React from 'react';
import MainMenuContainer from './MainMenuContainer';
import IntroContainer from './IntroContainer';

const MainContainer = () => {
    // const {isAuthenticated} = useAuthStore()

    return (
        <>
            {true ? <MainMenuContainer /> : <IntroContainer />}
        </>
    );
};

export default MainContainer;