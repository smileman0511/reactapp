import React from 'react';

const AccountDataComponent = ({
  memberEmail,
  memberName,
  memberPhone,
  memberPhoneVerified,
  onEmailChange,
  onPhoneVerify,
  onPasswordChange,
  onUnregister
}) => {
  return (
    <div className="info-card account-data-card">
      <h3 className="card-title">계정 정보</h3>
      
      <div className="account-list">
        {/* 아이디 (이메일) */}
        <div className="account-item">
          <div className="item-label">아이디</div>
          <div className="item-content">
            <span className="email-text">{memberEmail}</span>
          </div>
          <button className="item-btn" onClick={onEmailChange}>연락처 변경</button>
        </div>

        {/* 본인인증 상태 */}
        <div className="account-item">
          <div className="item-label">본인인증</div>
          <div className="item-content">
            {memberPhoneVerified === 1 ? (
              <div className="verified-status">
                <span className="status-badge">인증됨</span>
                <span className="user-info">{memberName} / {memberPhone}</span>
              </div>
            ) : (
              <span className="unverified-text">인증이 필요합니다.</span>
            )}
          </div>
          <button className="item-btn" onClick={onPhoneVerify}>
            {memberPhoneVerified === 1 ? '실명 수정' : '인증하기'}
          </button>
        </div>

        {/* 비밀번호 변경 */}
        <div className="account-item">
          <div className="item-label">비밀번호</div>
          <div className="item-content">
            <span className="password-masking">********</span>
          </div>
          <button className="item-btn" onClick={onPasswordChange}>비밀번호 변경</button>
        </div>

        {/* 회원 탈퇴 */}
        <div className="account-item unregister-item">
          <div className="item-label">회원탈퇴</div>
          <div className="item-content">
            <span className="notice-text">계정을 삭제하면 모든 데이터가 복구되지 않습니다.</span>
          </div>
          <button className="item-btn delete-btn" onClick={onUnregister}>탈퇴하기</button>
        </div>
      </div>
    </div>
  );
};

export default AccountDataComponent;