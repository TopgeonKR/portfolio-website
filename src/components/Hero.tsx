import Image from 'next/image'
import React from 'react'   

export default function Hero() {
    return (
    <>   
        <section
            id="home"
            className="flex flex-col items-center text-center px-4 py-24"
        >
            <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl w-full gap-12">
                {/* Main text */}
                <div className="flex flex-col gap-4 max-w-4xl w-full">
                    <h1 className="self-start text-5xl sm:text-6xl font-extrabold">
                    HI, THE<span className="text-purple-500">R</span>E.
                    </h1>
                    <h1 className="self-center text-5xl sm:text-6xl font-extrabold">
                    MY NAME IS
                    </h1>
                    <h1 className="self-end text-5xl sm:text-6xl font-extrabold">
                    SANGGEON <span className="text-cyan-500">J</span>UNG.
                    </h1>
                </div>
                        
            </div>

            <div className="mt-8 grid md:grid-cols-[3fr_1fr] gap-60 max-w-5xl w-full items-center pb-10">
                {/* sub text */}
                <div className="text-left max-w-xl text-mid text-gray-600 space-y-2">
                    <p>
                        I'm a junior majoring in <span className="text-cyan-500">Computer Science </span> 
                        at <span className="text-purple-500">UC San Diego</span>. 
                    </p>
                    <p>
                        Currently seeking opportunities to grow and collaborate on impactful projects.
                    </p>
                </div>
                
                {/* picture */}
                <div className="w-48 h-70 relative overflow-hidden hover:scale-105">
                <Image
                    src="/SanggeonJung_Picture.png"
                    alt="Sanggeon's profile photo"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="192px"
                    />
                </div> 
            </div>

        </section>
        
      </>
    )
  }
  