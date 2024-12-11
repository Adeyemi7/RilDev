/* eslint-disable react/no-unescaped-entities */
import avatar from "../assets/avatar-jessica.jpeg";

const AdeyemiDetails = () => {
  return (
    <div className="pb-1 bg-[rgba(31,31,31,1)] text-white">
      <div className="mx-auto w-[90%] block text-center mb-12">
        <div className="pt-8">
          <img
            src={avatar}
            alt="Ayodele Quadril Adeyemi"
            className="rounded-full mx-auto block w-[100px]"
          />
        </div>
        <p className="mt-4">
          Hi, I'm{" "}
          <span className="text-[rgba(197,248,42,1)] px-1">
            Ayodele Quadril Adeyemi,
          </span>{" "}
          a Frontend Developer with a passion for crafting scalable and user-friendly applications.
        </p>
        <p className="mt-4">
          <span className="text-[rgba(197,248,42,1)] mr-1">
            I’m a frontend developer with 2+ years of experience
          </span>
          creating responsive, user-centric web applications.
        </p>
        <p className="text-[rgba(197,248,42,1)]">
          Skilled in HTML, CSS, JavaScript, Vue.js, React, Tailwind CSS, and state management tools like Pinia and Redux,
        </p>
        <p>
          I have worked on diverse projects, from personal projects to cloning banking apps. Passionate about crafting seamless user experiences and constantly improving, I thrive in collaborative environments and enjoy exploring new technologies to push the boundaries of frontend development.
        </p>
      </div>
    </div>
  );
};

export default AdeyemiDetails;
