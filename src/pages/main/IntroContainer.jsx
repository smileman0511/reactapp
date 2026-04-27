import { useNavigate } from 'react-router-dom';

const CARDS = [
  { label: '성장 연대기', desc: '자신의 발전 과정을 확인하기', path: '/chronology' },
  { label: '커뮤니티', desc: '다른 사람들과 경험을 공유하고 소통하기', path: '/community' },
  { label: '로그 목록', desc: '모두의 기록들을 한눈에 모아보기', path: '/log/result' },
  { label: '로그 작성', desc: '새로운 실패 경험을 구조화하여 기록하세요', path: '/log/write/1' },
  { label: '마이페이지', desc: '내 정보 관리', path: '/mypage' },
];

const IntroContainer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>실패가 성장의 자산이 되는 공간, FailLog</h1>
        <p>실패를 기록하고, 나만의 성공 데이터를 만들어 보세요.</p>
        <p>무엇을 도전했나요?</p>
      </div>

      <div>
        {CARDS.map((card) => (
          <div key={card.label} onClick={() => navigate(card.path)}>
            <p>{card.label}</p>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroContainer;
