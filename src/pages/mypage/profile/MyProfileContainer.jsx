import React, { useEffect, useState } from 'react';

// heroSection 폴더 위치가 src/pages/heroSection 인 경우
import HeroSection from '../heroSection/HeroSectionComponent';
import HeroBanner from '../heroSection/HeroBannerComponent';
import QuickMenuCard from '../heroSection/QuickMenuCardComponent';

// components 폴더 위치가 src/pages/mypage/profile/components 인 경우
import ProfileCardComponent from './components/ProfileCardComponent';
import AccountDataComponent from './components/AccountDataComponent';
import { useNavigate } from 'react-router-dom';

const MyProfileContainer = () => {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState({
    memberNickname: '', // 초기값 빈 문자열
    memberProfileImageUrl: '', 
    memberEmail: '',
    memberName: '',
    memberPhone: '',
    memberPhoneVerified: 0 // 인증 미완료 상태(0)로 초기화
  });

  // 로그인 로직(일단은 꺼두고 작업할 것)
//   useEffect(() => {
//     const checkAuth = () => {
//         const isLoggedIn = false; TODO:

//         if (!isLoggedIn) {
//             alert('로그인이 필요한 서비스입니다.');
//             navigate('/login');
//         }
//     };
    
//     checkAuth();
//   }, [navigate]);

  // 핸들러 함수
  const handleNicknameChange = () => console.log("닉네임 변경");
  const handleImageChange = () => console.log("이미지 업로드");
  const handlePasswordChange = () => console.log("비밀번호 변경 페이지 이동");

  return (
    <div className="MyPageWrapper">
      <HeroSection>
        <HeroBanner 
          title="페일로그 바로가기" 
          description="실패를 기록하고 성장의 발판으로 삼으세요." 
        />
        <div className="QuickMenuGroup">
          <QuickMenuCard title="마이 페일로그"/>
          <QuickMenuCard title="좋아요 한 페일로그" />
          <QuickMenuCard title="페일로그 방명록" />
        </div>
      </HeroSection>

      <section className="InfoManagementSection">
        <div className="InfoGridContainer">
          <ProfileCardComponent 
            memberNickname={memberInfo.memberNickname}
            memberProfileImageUrl={memberInfo.memberProfileImageUrl}
            onNicknameChange={handleNicknameChange}
            onImageChange={handleImageChange}
          />

          <AccountDataComponent 
            memberEmail={memberInfo.memberEmail}
            memberName={memberInfo.memberName}
            memberPhone={memberInfo.memberPhone}
            memberPhoneVerified={memberInfo.memberPhoneVerified}
            onPasswordChange={handlePasswordChange}
          />
        </div>
      </section>
    </div>
  );
};

export default MyProfileContainer;