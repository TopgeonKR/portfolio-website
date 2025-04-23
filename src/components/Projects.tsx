import Image from 'next/image';

export default function Projects() {
  return (
    <section 
        id="projects"
        className="max-w-6xl mx-auto px-6 py-60 grid md:grid-cols-2 gap-16 items-center mb-100 ">
      
      
      <div className="space-y-6">
        <div>
          <h2 className="text-5xl font-extrabold mb-2">
            Frontend <span className="text-purple-500">r</span>elated
          </h2>
          <h2 className="text-5xl font-extrabold">Projects</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          I have built frontend-focused projects to improve usability, accessibility, and performance.
          These works showcase my skills in UI/UX, component design, and user interaction logic.
        </p>
        <div className="mt-6 justify-center">
          <Image
            src="/backlog.png"
            alt="Frontend Project Illustration"
            width={350}
            height={280}
          />
        </div>
      </div>

      {/* Card list */}
      <div className="space-y-8">
        {/* Card 1 */}
        <div className="flex items-start gap-4">
        <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
            01
        </div>
        <div>
            <h3 className="font-semibold text-lg mb-1">Personal Portfolio Website</h3>
            <p className="text-gray-600 text-sm">
            A personal website built with Next.js and Tailwind CSS. Includes responsive layout, animations, and component design to showcase my frontend skills.
            </p>
        </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4">
        <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
            02
        </div>
        <div>
            <h3 className="font-semibold text-lg mb-1">Recycling Barcode Reader Application</h3>
            <p className="text-gray-600 text-sm">
            Designed and built a simple frontend interface to display real-time barcode scan results. Prioritized usability and clarity by structuring output in a mobile-friendly layout using HTML, CSS, and JavaScript.
            </p>
        </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4">
        <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
            03
        </div>
        <div>
            <h3 className="font-semibold text-lg mb-1">Full-Stack Chat Application</h3>
            <p className="text-gray-600 text-sm">
            Developed a React.js-based frontend chat client that interacts with a Flask REST API. Implemented message rendering, state management, and basic user authentication UI.
            </p>
        </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start gap-4">
        <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
            04
        </div>
        <div>
            <h3 className="font-semibold text-lg mb-1">Student Check-In System</h3>
            <p className="text-gray-600 text-sm">
            Built an admin dashboard with React.js to monitor student check-in data. Designed components for viewing logs, searching records, and managing status.
            </p>
        </div>
        </div>
        
        <div className="mt-8">
        <a
            href="https://github.com/TopgeonKR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
        >
            View More on GitHub →
        </a>
       </div>
      </div>


    </section>
  );
}
