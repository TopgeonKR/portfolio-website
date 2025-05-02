import React from 'react';
import Image from 'next/image';

export default function LogoSlider() {
  return (
    <section className="w-full bg-gray-50 py-2 border-t border-b border-gray-300 mb-30">
      <div className="grid grid-cols-[1fr_2fr] items-center gap-8 px-8 max-w-6xl 
      mx-auto overflow-hidden group">
        
        {/* 왼쪽 텍스트 */}
        <div className="text-mid text-gray-600 whitespace-nowrap text-left">
            The one and only company I aspire to work for!
        </div>

        {/* 오른쪽 슬라이드 로고들 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <Image src="/HelloSky.png" alt="logo" width={200} height={200} />
                <Image src="/HelloSky.png" alt="logo" width={200} height={200} />
                <Image src="/HelloSky.png" alt="logo" width={200} height={200} />
                <Image src="/HelloSky.png" alt="logo" width={200} height={200} />
                <Image src="/HelloSky.png" alt="logo" width={200} height={200} />
                <Image src="/HelloSky.png" alt="logo" width={200} height={200} />
                <Image src="/HelloSky.png" alt="logo" width={200} height={200} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
