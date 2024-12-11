import { FaHtml5, FaCss3Alt, FaVuejs, FaReact, FaCheckCircle } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiRedux, SiVuetify } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { GiPineapple } from "react-icons/gi"; 
import { FaGitAlt } from "react-icons/fa";


const TechStack = () => {
    const techs = [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl md:text-6xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl md:text-6xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl md:text-6xl" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl md:text-6xl" /> },
      { name: "Vue", icon: <FaVuejs className="text-green-400 text-5xl md:text-6xl" /> },
      { name: "React", icon: <FaReact className="text-blue-400 text-5xl md:text-6xl hover:rotate-180 transition-transform" /> },
      { name: "Pinia", icon: <GiPineapple className="text-yellow-400 text-5xl md:text-6xl" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500 text-5xl md:text-6xl hover:rotate-180 transition-transform" /> },
      { name: "ShadCN", icon: <SiShadcnui className="text-gray-400 text-5xl md:text-6xl" /> },
      { name: "Vuetify", icon: <SiVuetify className="text-blue-300 text-5xl md:text-6xl" /> },
      { name: "Vuelidate", icon: <FaCheckCircle className="text-green-300 text-5xl md:text-6xl" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-400 text text-5xl md:text-6xl hover:rotate-45 transition-transform" /> },
  
    ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[rgba(31,31,31,1)]">
      <div className="text-center mb-12">
        <h2 className="text-3xl mt-12 md:text-4xl font-bold text-white">My Tech Stack</h2>
        <p className="text-gray-400 mt-2">
          These are the tools and technologies I regularly work with.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
          >
            {tech.icon}
            <p className="text-gray-200 mt-2 text-sm md:text-base">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack