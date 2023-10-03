import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MyPage() {
  const [profile, setProfile] = useState({});
  const username = localStorage.getItem('username');

  useEffect(() => {
    const dummyProfile = {
      username: '사용자 이름',
    };
    setProfile(dummyProfile);
  }, []);

  // 로그아웃 버튼을 클릭할 때 실행되는 함수
  const handleLogout = () => {
    // 로컬 스토리지에서 사용자 정보 제거
    localStorage.removeItem('username');

    // 로그아웃 알림
    alert('로그아웃 되었습니다.');
    
    // 원하는 페이지로 리디렉션
    // 예를 들어, 홈 페이지로 이동하려면 다음과 같이 사용합니다.
     window.location.href = '/';
  };

  return (
    <div>
      <h2>마이페이지</h2>
      <div>
        <p>아이디: {username}</p>
      </div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}

export default MyPage;
