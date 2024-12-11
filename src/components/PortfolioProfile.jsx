import avatar from "../assets/avatar-jessica.jpeg"
import ButtonUi from "../ui/buttonUI"
import { useNavigate } from "react-router-dom"


const PortfolioProfile = () => {
   const navigate = useNavigate();

   const handleMePage = () => {
      navigate('/AboutMePage')
   }

   
   const handleNextPage = () => {
      navigate('/MyTechStack')
   }

   const handleExperiencePage = () => {
      navigate('/MyWorkExperience')
   }

   const handleLinkedInPage = () => {
      window.location.href = 'https://www.linkedin.com/in/ayodele-adeyemi-1b46ba226/'
   }

   const handleGitHubPage = () => {
      window.location.href = 'https://github.com/Adeyemi7'
   }


  return (
    <div  className=" bg-container w-[90%] mx-auto block mt-8">
     <div className=" pt-8">
        <img src={avatar} alt="" className=" rounded-full mx-auto block w-[100px]" />
     </div>
     <div className="pt-6 font-bold">
     <p className=" text-center text-3xl text-white pb-2">
        ADEYEMI AYODELE
     </p>

     <p className="text-center  text-[rgba(197,248,42,1)] pb-4">
        Lagos, Nigeria.
     </p>

     <p className="text-white text-center text-2xl">
        Frontend Developer 
     </p>
     </div>

     <div className="mt-4">
      <ButtonUi text="about me" onClick={() =>handleMePage()} className="rounded-full bg-[rgba(31,31,31,1)]" />
      <ButtonUi text="projects"  className="rounded-full bg-[rgba(31,31,31,1)]" />
      <ButtonUi text="Tech Stack"  onClick={() =>handleNextPage()} className="rounded-full bg-[rgba(31,31,31,1)]" />
      <ButtonUi text="My Experiences"  onClick={() =>handleExperiencePage()} className="rounded-full bg-[rgba(31,31,31,1)]" />
      <ButtonUi text="Github" onClick={()=> handleGitHubPage()}  className="rounded-full bg-[rgba(31,31,31,1)]" />
      <ButtonUi text="LinkedIn" onClick={()=> handleLinkedInPage()} className="rounded-full bg-[rgba(31,31,31,1)]" />
     </div>
    </div>
  )
}

export default PortfolioProfile