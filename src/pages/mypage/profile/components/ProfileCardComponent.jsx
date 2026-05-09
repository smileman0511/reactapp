import React from 'react';

const ProfileCardComponent = ({
  memberNickname,
  memberProfileImageUrl,
  onNicknameChange,
  onImageChange

}) => {

  const profileSrc = memberProfileImageUrl || '/default.jpg';  

  return (

    <div className="info-card profile-card">
      <div className="profileImageContainer">
        <div className="profileImageCircle">
        
        </div>
        <button 
            className="image-edit-btn" 
            onClick={onImageChange}
            type="button"
          >
            📸
          </button>
      </div>

          <div className="nickname-area">
            <input type="text"
            className="nickname-input"
            value={memberNickname || ''}
            readOnly
            placeholder='닉네임을 설정해주세요.'
            />
          <button className="nickname-change-btn"
            onClick={onNicknameChange}
            type="button">
              변경
          </button>
          </div>

          <p className="profile-card-footer-text">
            * FailLog에서 사용할 내 프로필 이미지를 설정해주세요.
          </p>
    </div>
  );
};

export default ProfileCardComponent;