import React from 'react';

const IntroHeroSection = ({ onLoginClick, onChatbotClick }) => {
    return (
        <section>
            <button onClick={onLoginClick}>시작하기</button>
            <button onClick={onChatbotClick}>챗봇</button>
        </section>
    );
};

export default IntroHeroSection;