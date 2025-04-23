import React from 'react'
import Image from 'next/image'

export default function Contacts() {
  return (
    <section 
      id="contact" 
      className="max-w-6xl mx-auto px-6 py-60 grid md:grid-cols-2 gap-12 items-center mb-100"
    >
      {/* 왼쪽: 제목 + 설명 */}
      <div>
        <h2 className="text-5xl font-extrabold mb-4">
          Contact <span className="text-purple-500">Me!</span>
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Feel free to reach out for any opportunity where I can contribute to building a better world.
          I’m open to projects, collaborations, or even a quick chat.
        </p>
      </div>

      {/* 오른쪽: 연락 정보 */}
      <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
        <div>
          <h3 className="font-bold text-lg text-gray-800">Name</h3>
          <p className="text-gray-600">Sanggeon Jung</p>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-800">Email</h3>
          <p className="text-gray-600">saj032@ucsd.edu</p>
          <p className="text-gray-600">jsk010914@gmail.com</p>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-800">Telephone</h3>
          <p className="text-gray-600">(858) 241-6120</p>
        </div>

        {/* 아이콘 */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/TopgeonKR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black text-2xl"
          >
            <Image
                        src="/github.png"
                        alt="Github"
                        width={100}
                        height={100}
                      />
          </a>
          <a
            href="https://www.linkedin.com/in/topgeon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 text-2xl"
          >
            <Image
                        src="/linkedin.png"
                        alt="LinkedIn"
                        width={100}
                        height={100}
                      />
          </a>
        </div>
      </div>
    </section>
  )
}
