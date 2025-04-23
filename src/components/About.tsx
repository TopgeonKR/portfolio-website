// src/components/About.tsx
import Image from 'next/image'

export default function About() {
    return (
      <section 
        id="about"
        className="w-full py-60 mb-40">
        {/* 제목 + 소개 텍스트 */}
        <div className="max-w-6xl mx-auto px-4 md:flex md:justify-between md:items-start mb-16">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-extrabold mb-4">Three <span className="text-purple-500">C</span>
                ountries </h2>
            <h2 className="text-5xl font-extrabold mb-4 ml-50">in my life</h2>
          </div>
          <div className="md:w-1/2 text-gray-600 leading-relaxed mt-6">
            <p>
              Throughout my life, three countries have shaped who I am today.
              Each place brought unique experiences, challenges, and opportunities 
              that defined my values and aspirations.
            </p>
          </div>
        </div>
  
        {/* 나라별 박스 3개 */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Box 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <Image src="/kr.svg" alt="South Korea" width={24} height={16} />
            <h3 className="text-xl font-semibold mb-2">🇰🇷 SOUTH KOREA</h3>
            <h2 className="text-lg mb-2">
                My birthplace, where I built my foundational values and cultural identity.
            </h2>
            <div className="flex justify-center mt-5 hover:scale-105">
                <Image src="/mortarboard.png" alt="Study" width={200} height={200} />
            </div>
           </div>
  
          {/* Box 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <Image src="/ca.svg" alt="Canada" width={24} height={16} />
            <h3 className="text-xl font-semibold mb-2">🇨🇦 CANADA</h3>
            <h2 className="text-lg mb-2">
                A country that broadened my perspective through new education and multicultural experiences.
            </h2>
            <div className="flex justify-center mt-5 hover:scale-105">
                <Image src="/bartender.png" alt="work" width={200} height={200} />
            </div>
          </div>
  
          {/* Box 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <Image src="/us.svg" alt="United States" width={24} height={16} />
            <h3 className="text-xl font-semibold mb-2">🇺🇸 UNITED STATES</h3>
            <h2 className="text-lg mb-2">
                My current home, where I study, grow, and challenge myself as a future global contributor.
            </h2>
            <div className="flex justify-center mt-5 hover:scale-105">
                <Image src="/worldwide.png" alt="global" width={200} height={200} />
            </div>
          </div>
        </div>
      </section>
    );
  }
  