import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardTemplate from '../components/card_template';
import MovieButton from '../components/movie_button';

function Second() {
  const navigate = useNavigate();

  return (
    <>
    <MovieButton />
    <CardTemplate>
        <h1 className="text-4xl leading-relaxed">สวัสดีครับ ผมเท็นเอง</h1>
        <span className='text-5xl leading-relaxed'>😊</span>
        <p className="text-lg text-violet-50 leading-relaxed">ผมรู้ว่าคุณกำลังอ่านอยู่</p>
        <p className="text-lg text-violet-100 leading-relaxed">ผมรู้ว่าคุณกำลังอ่านอยู่</p>
        <p className="text-lg text-violet-200 leading-relaxed">ผมรู้ว่าคุณกำลังอ่านอยู่</p>
        <p className="text-lg text-violet-300 leading-relaxed">ผมรู้ว่าคุณกำลังอ่านอยู่</p>
        <p className="text-lg text-violet-400 leading-loose">ผมรู้ว่าคุณกำลังอ่านอยู่</p>
        <p className="text-lg text-purple-400 leading-loose">งงละสินี่คืออะไร รอแปปนึงน่ะ อย่าเพิ่งกดปุ่มถัดไปนะ</p>
        <button
          onClick={() => navigate('/movie')}
         className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0">ถัดไป</button>
    </CardTemplate>
    </>
  );
}

export default Welcome;