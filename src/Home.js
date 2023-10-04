import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import './Home.css';

function Home() {
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
          console.log(username, password);
        const response = await axios.post('http://localhost:3003/login', userData);
  

        const data = response.data;
        // 회원가입 성공 시 처리
        if (response.status === 201) {
          alert('로그인이 완료되었습니다.');


          window.location.href='/2';
          localStorage.setItem('id',data.id );
          localStorage.setItem('username', data.username);
          // 원하는 리디렉션 또는 다른 작업 수행
        }
      } catch (error) {
        console.error('로그인 오류:', error);
        alert('로그인에 실패했습니다.');
      }
    };

  return (
    <div>
      <h1 className='log'>로그인 페이지</h1><br></br>
      <div>
        <label htmlFor="username">아이디</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleSubmit}>로그인</button>
      <Link to="/1">회원가입</Link>
    </div>
  );
}

export default Home;