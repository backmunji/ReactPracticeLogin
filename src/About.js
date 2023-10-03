import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // axios 라이브러리 추가

function About() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const userData = {
  username,
  password};
     
    try {
        // 서버로 HTTP POST 요청 보내기
      const response = await axios.post('http://localhost:3003/register', userData);

      // 회원가입 성공 시 처리
      if (response.status === 201) {
        alert('회원가입이 성공적으로 완료되었습니다.');
        window.location.href='/'
        // 원하는 리디렉션 또는 다른 작업 수행
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <div>
      <h2>회원가입 페이지</h2>
      
        <div>
          <label htmlFor="username">아이디:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleSubmit}>회원가입</button>
      
      <Link to="/">로그인</Link>
    </div>
  );
}

export default About;