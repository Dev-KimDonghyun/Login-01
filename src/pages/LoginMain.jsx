import React from 'react';
import './../main.css';
import { FaGithub } from "react-icons/fa";

const LoginMain = () => {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col justify-center items-center'>
      <div className='w-4xl h-128 rounded-4xl text-center bg-gray-800 shadow-lg shadow-gray-950 flex'>
        <div className='w-[50%] h-full mx-[0] flex flex-col justify-center items-center'>
          <h1 className='text-6xl text-green-400 mb-2'>Log In</h1>
          <div>
            <p className='text-2xl text-green-300 mt-2'>Developed By<br/>Dev-KimDonghyun</p>
          </div>
        </div>
        <div className='w-[50%] h-full mx-[0] flex flex-col justify-center items-center'>
          <label className='text-left self-start pb-3 flex ml-15 text-lg text-green-300'>아이디</label>
          <input className='w-[75%] h-15 rounded-2xl bg-gray-900 shadow-inner shadow-gray-950 text-center text-3xl text-green-400'></input>
          <label className='text-left self-start pb-3 pt-3 flex ml-15 text-lg text-green-300'>비밀번호</label>
          <input className='w-[75%] h-15 rounded-2xl bg-gray-900 shadow-inner shadow-gray-950 text-center text-3xl text-green-400'></input>
          <div className='mt-3 mr-30 w-full text-right flex-row space-x-4 text-md text-green-200'>
            <label>회원가입</label>
            <label>ID/PW 찾기</label>
          </div>
          <button className='w-[75%] h-15 text-xl rounded-2xl mt-12 bg-green-400'>로그인</button>
        </div>
      </div>
      <footer className='mt-20 bg-gray-900 text-gray-300 text-center text-xl items-center w-auto h-auto pb-4'>
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