// MyPage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MyPage() {
  const [profile, setProfile] = useState({}); // 프로필 정보를 저장할 상태

  // 서버에서 프로필 정보 가져오기 (실제로는 서버 요청 필요)
  useEffect(() => {
    // 실제로는 서버에서 데이터를 가져오는 API 요청을 보내야 합니다.
    // 이 예제에서는 더미 데이터를 사용합니다.
    const dummyProfile = {
      username: '사용자 이름',
    };
    setProfile(dummyProfile);
  }, []);

  return (
    <div>
      <h2>마이페이지</h2>
      <div>
        <p>아이디: {profile.username}</p>
      </div>
      <button onClick={() => alert('로그아웃 되었습니다.')}>로그아웃</button>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}

export default MyPage;
