import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardTemplate from '../components/card_template';
import MovieButton from '../components/movie_button';
import T1 from '../assets/t1.jpg';
import T2 from '../assets/t2.jpg';
import T3 from '../assets/t3.jpg';
import T4 from '../assets/t4.jpg';

function Welcome() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <MovieButton />
      <CardTemplate>
        {step === 1 && (
          <div>
            <h1 className="text-4xl leading-relaxed">สวัสดีครับ ผมเท็นเอง</h1>
            <span className='text-5xl leading-relaxed'>😊</span>
            <p className="text-lg text-violet-50 leading-relaxed">ผมรู้ว่าคุณกำลังอ่านอยู่</p>
            <p className="text-lg text-violet-100 leading-relaxed">ผมรู้ว่าคุณกำลังอ่านอยู่</p>
            <p className="text-lg text-violet-200 leading-relaxed">ผมรู้ว่าคุณกำลังอ่านอยู่</p>
            <p className="text-lg text-violet-300 leading-relaxed">ผมรู้ว่าคุณกำลังอ่านอยู่</p>
            <p className="text-lg text-violet-400 leading-loose">ผมรู้ว่าคุณกำลังอ่านอยู่</p>
            <p className="text-lg text-purple-400 leading-loose">งงละสิ แปปนึงนะ อย่าเพิ่งกดปุ่มถัดไปนะ</p>
            <button
              onClick={() => setStep(2)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0">ถัดไป</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-lg text-violet-400 leading-loose">แหนะๆ เค้าบอกอย่าเพิ่งกด</p>
            <button
              onClick={() => setStep(1)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(3)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-lg text-violet-400 leading-loose">ยังๆ อย่าเพิ่งกดสิครับ</p>
            <button
              onClick={() => setStep(2)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(4)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="text-lg text-violet-400 leading-100">อ่ะๆ ยอมแล้วครับ</p>

            <p className="text-lg text-rose-400 leading-loose">*ก่อนอื่นเลย เตรียมใจก่อนกดด้วยนะครับ*</p>
            <button
              onClick={() => setStep(3)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(5)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="text-2xl text-pink-400 leading-loose">จำวันแรกที่พั้นช์ทักมาได้ไหม</h2>
            <p className="text-lg text-violet-400 leading-normal">เค้าดีใจมากๆเลยที่พั้นช์ทักมา ตอนนั้นเค้าบอกเลยว่าตัวเองไม่มีความกล้าอะไรเลย และไม่คิดว่าตัวเองดีพอหรืออะไรเลย</p>
            <button
              onClick={() => setStep(4)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(6)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>
        )}

        {step === 6 && (
          <div>
            <p className="text-lg text-violet-400 leading-normal">เค้าอยากบอกว่าขอบคุณนะครับที่เข้ามาในชีวิตเค้า เค้าขอบคุณในใจไปวันละล้านรอบ</p>
            <button
              onClick={() => setStep(5)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(7)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>
        )}

        {step === 7 && (
          <div>
            <h2 className="text-2xl text-rose-400 leading-loose">วันที่ 20 สิงหาคม 2024</h2>
            <p className="text-lg text-violet-400 leading-normal">วันที่เค้าขอพั้นช์เป็นแฟน ตอนนั้นเค้านั่งรถตู้อยู่กำลังกลับบ้าน เค้าแบบว่ามันน่าจะดีนะถ้าเราได้คบกัน เพราะเค้าฝันถึงพั้นช์ทุกวันเลยตั้งแต่ทักมา หรือว่าสิ่งนี้มันเรียกว่า</p>
            <button
              onClick={() => setStep(6)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(8)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>
        )}

        {step === 8 && (
          <div>
            <h2 className="text-2xl text-rose-400 leading-loose">"การตกหลุมรักใครซักคน"</h2>
            <button
              onClick={() => setStep(7)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(9)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>
        )}

        {step === 9 && (
          <div>
            <p className="text-lg text-violet-400 leading-normal">เอาจริงๆ ว่ามันก็ค่อนข้างเขินนะที่ต้องพิมพ์อะไรแแบบนี้ แต่ถ้าคนที่เค้ากำลังพูดด้วยคือพั้นช์ เค้าทำได้ทั้งวันเลย ซึ่งเค้าจะบอกว่า</p>
            <button
              onClick={() => setStep(8)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(10)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>
        )}

        {step === 10 && (
          <div>
            <img src="https://thethaiger.com/th/wp-content/uploads/2025/12/%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1-%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B8%B4%E0%B8%A7-%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%95-%E0%B8%AA%E0%B8%81%E0%B8%B4%E0%B8%99-2.jpg" className="" />
            <p className="text-lg text-violet-400 leading-loose pb-8">"เอ็มออนิวรักปูเป้ที่สุดในสามโลกเล้ยยยย"</p>
            <button
              onClick={() => setStep(9)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(11)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>
        )}

        {step === 11 && (
          <div>
            <h2 className="text-2xl text-rose-400 leading-loose">เดี๋ยว บทผมครับพี่</h2>
            <button
              onClick={() => setStep(10)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(12)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>

        )}

        {step === 12 && (
          <div>
            <img
              src={T1}
              alt="1st Photobooth"
              className="h-32 object-cover mx-auto shadow-md" />
            <p className="text-lg text-violet-400 leading-loose">"เค้ารักพั้นช์นะครับ"</p>
            <button
              onClick={() => setStep(11)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(13)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>

        )}

        {step === 13 && (
          <div>
            <img
              src={T2}
              alt="1st Selfie"
              className="h-32 object-cover mx-auto shadow-md" />
            <p className="text-lg text-violet-400 leading-loose">นี่คือรูปแรกที่เราถ่ายด้วยกัน</p>
            <button
              onClick={() => setStep(12)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(14)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>

        )}

        {step === 14 && (
          <div>
            <img
              src={T3}
              alt="1st Selfie"
              className="h-32 object-cover mx-auto shadow-md" />
            <p className="text-lg text-violet-400 leading-loose">เห็นข้อความนี้แล้วใจสั่นสุดๆ</p>
            <button
              onClick={() => setStep(13)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(15)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>

        )}

        {step === 15 && (
          <div>
            <img
              src={T3}
              alt="1st Selfie"
              className="h-32 object-cover mx-auto shadow-md" />
            <p className="text-lg text-violet-400 leading-loose">เห็นข้อความนี้แล้วใจสั่นสุดๆ</p>
            <button
              onClick={() => setStep(14)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(16)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>

        )}

        {step === 16 && (
          <div>
            <p className="text-lg text-violet-400 leading-loose">แปปนึงนะเค้ากำลังเขิน อย่าเพิ่งกดปุ่มถัดไปนะ ขอทำใจแปปนึง</p>
            <button
              onClick={() => setStep(15)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(17)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              ถัดไป
            </button>
          </div>

        )}

        {step === 17 && (
          <div>
            <p className="text-lg text-violet-400 leading-loose">มาๆ พร้อมละ กดเปิดได้เลย</p>
            <button
              onClick={() => setStep(16)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
            >
              ย้อนกลับ
            </button>
            <button
              onClick={() => setStep(18)}
              className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              กดเพื่อเปิดคลิป
            </button>
          </div>

        )}

        {step === 18 && (
          <div>
            <h2 className="text-2xl font-bold text-rose-500 mb-2">เพลงนี้ให้พั้นช์นะ</h2>
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-rose-100 bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/018UMWioeW4?autoplay=1&rel=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setStep(17)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={() => setStep(19)}
                className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
              >
                ถัดไป
              </button>
            </div>
          </div>
        )}

        {step === 19 && (
          <div>
            <h2 className="text-2xl font-bold text-rose-500 mb-2">Happy 2nd Anniversary Kub❤️</h2>
            <p className="text-lg text-violet-400 leading-loose">ขอบคุณที่เข้ามาในชีวิตเค้าและรักเค้านะครับ เค้ารักพั้นช์มากๆ</p>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setStep(18)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={() => setStep(20)}
                className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
              >
                ถัดไป
              </button>
            </div>
          </div>
        )}

        {step === 20 && (
          <div>
            <h2 className="text-2xl font-bold text-rose-500 mb-2">รักนะคะคุณภรณ์ชนกของเค้า</h2>
            <p className="text-lg text-violet-400 leading-loose">ไว้ไปหาของอร่อยกินกันเยอะๆนะครับ จุ้บๆ</p>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setStep(19)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={() => setStep(21)}
                className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
              >
                ถัดไป
              </button>
            </div>
          </div>
        )}

        {step === 21 && (
          <div>
            <img
              src={T4}
              alt="1st Selfie"
              className="h-100 object-cover mx-auto shadow-md" />
            <p className="text-lg text-violet-400 leading-loose">รักนะคะ จาก เท็น</p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setStep(20)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-6 rounded-full transition-colors text-sm"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={() => navigate('/movie')}
                className="bg-linear-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md transition-all text-sm"
              >
                หนังที่ดูด้วยกัน
              </button>
            </div>
          </div>
        )}
      </CardTemplate>
    </>
  );
}

export default Welcome;