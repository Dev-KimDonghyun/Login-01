import React from 'react';
import './../main.css';
import { FaGithub } from "react-icons/fa";

const LoginMain = () => {
  return (
    <div className='w-screen min-h-screen bg-gray-900 flex flex-col justify-center items-center'>
      <div className='lg:w-4xl md:w-2xl sm:w-84 w-[90%] sm:lg lg:h-128 md:h-96 h-128 md:mt-0 mt-16 rounded-4xl text-center bg-gray-800 shadow-lg shadow-gray-950 flex md:flex-row flex-col'>
        <div className='md:w-[50%] w-90% md:h-full h-[50%] p-0 flex flex-col justify-center items-center'>
          <h1 className='lg:text-6xl md:text-5xl text-4xl text-green-400 lg:mb-2 mb-0.5'>Log In</h1>
          <p className='lg:text-2xl md:text-xl text-lg text-green-300 lg:mt-2 mt-0.5'>Developed By<br/>Dev-KimDonghyun</p>
        </div>
        <div className='md:w-[50%] w-full h-full mx-[0] flex flex-col justify-center items-center'>
          <label className='text-left self-start md:pb-3 pb-1.5 flex md:ml-15 ml-13 md:text-lg text-md text-green-300'>아이디</label>
          <input className='w-[75%] lg:h-15 h-12 rounded-2xl bg-gray-900 shadow-inner shadow-gray-950 text-center text-3xl text-green-400'></input>
          <label className='text-left self-start md:pb-3 pb-1.5 md:pt-3 pt-1.5 flex md:ml-15 ml-13 md:text-lg text-md text-green-300'>비밀번호</label>
          <input className='w-[75%] lg:h-15 h-12 rounded-2xl bg-gray-900 shadow-inner shadow-gray-950 text-center text-3xl text-green-400'></input>
          <div className='md:mt-3 mt-1.5 md:mr-30 mr-25 w-full text-right flex-row space-x-4 lg:text-md text-sm text-green-200'>
            <label>회원가입</label>
            <label>ID/PW 찾기</label>
          </div>
          <button className='w-[75%] lg:h-15 h-12 md:mb-0 mb-10 text-xl rounded-2xl lg:mt-12 mt-6 bg-green-400'>로그인</button>
        </div>
      </div>
      <footer className='md:mt-20 mt-10 bg-gray-900 text-gray-300 text-center md:text-xl text-lg mx-4 items-center w-auto h-auto pb-4'>
        <p>&copy; 2025 Dev-KimDonghyun. All rights reserved.</p>
        <div className='relative flex justify-center items-center mt-2 space-x-2'>
          <label>Github</label>
          <a><FaGithub /></a>
        </div>
      </footer>
    </div>
  )
}

export default LoginMain;