import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import LogS from '../styles/LikesLogStyles'; 
import cardGraphicIcon from '../resources/fail-log-card.png'; 

const RecentLogsComponent = ({ logs = [] }) => {
  const navigate = useNavigate(); 

  const cardThemes = [
    { bg: "#F8FAFC", text: "#1E293B" }, 
    { bg: "#94A3B8", text: "#FFFFFF" }, 
    { bg: "#475569", text: "#FFFFFF" }, 
  ];

  return (
    <LogS.RecentSection>
      {/* 💡 정렬선을 맞추기 위해 래퍼 클래스로 감쌈 */}
      <div className="ContentHeader">
        <h2>최근 <span>확인한 페일로그</span></h2>
        <p className="sub-desc">최근에 읽은 페일로그를 확인 할 수 있습니다.</p>
      </div>
      
      <LogS.RecentGrid>
        {logs.map((log, index) => {
          const theme = cardThemes[index % 3];
          const isFirst = index === 0; 

          return (
            <LogS.RecentCard 
              key={log.id} 
              bgColor={theme.bg}
              onClick={() => navigate(`/logs/detail/${log.id}`)}
            >
              <LogS.RecentOverlay className={`card-film-overlay ${isFirst ? 'active' : ''}`} />

              <LogS.RecentContent textColor={theme.text}>
                <div className="TitleArea">
                  <h4>{log.title}</h4>
                  <p>“실기시험 실패의 원인을 찾아서” 역시 술을 마시면 안됐던 걸까?</p>
                </div>

                <div className="AuthorArea">
                  <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Felix" alt="profile" />
                  <span>@{log.author}</span>
                </div>

                <div className="CardMainImage">
                  <img src={cardGraphicIcon} alt="데이터 분석 그래픽" />
                </div>

                <div className="CardFooter">
                  <span className="TimeText">최근 조회 : {log.date}</span>
                  <div className="LikeIconArea" onClick={(e) => e.stopPropagation()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={isFirst ? "#FF5A5A" : "none"} viewBox="0 0 24 24" stroke={isFirst ? "#FF5A5A" : theme.text} opacity={isFirst ? 1 : 0.4}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                </div>
              </LogS.RecentContent>
            </LogS.RecentCard>
          );
        })}
      </LogS.RecentGrid>
    </LogS.RecentSection>
  );
};

export default RecentLogsComponent;