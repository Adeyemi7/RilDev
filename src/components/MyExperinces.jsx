

const MyExperinces = () => {
  return (
    <>
        <div className="max-w-4xl mx-auto p-6">
      <div className="text-sm mb-6">
          <p className="text-white text-3xl text-center uppercase font-bold">My Experiences</p>
        </div>

      <div className=" grid gap-8 md:grid-cols-2">
        {/* FastCredit Limited */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-green-500">Frontend Developer Intern</h3>
              <p className="text-sm text-gray-400 font-extrabold">Fast Credit Limited</p>
            </div>
            <p className="text-sm text-gray-500">Nov 2024 - Present</p>
          </div>
          <p className="mt-3 text-gray-300">
            Currently building responsive user interfaces, utilizing React.js, Tailwind CSS, and Redux for state management in a hybrid work environment.
          </p>
          <div className="mt-4 grid gap-4 grid-cols-3 text-center">
            <span className=" p-3 text-xs bg-blue-500 text-white rounded-full">React.js</span>
            <span className="p-3 text-xs bg-teal-500 text-white rounded-full">Tailwind CSS</span>
            <span className="p-3  text-xs bg-purple-500 text-white rounded-full">Redux</span>
          </div>
        </div>

        {/* Parkway Projects (Apr 2024 - Jul 2024) */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-green-500">Frontend Developer Intern</h3>
              <p className="text-sm text-gray-400 font-extrabold">Parkway Projects</p>
            </div>
            <p className="text-sm text-gray-500">Apr 2024 - Jul 2024</p>
          </div>
          <p className="mt-3 text-gray-300">
            Built the Swwipe banking app, collaborated with the backend team to integrate APIs, and gained valuable experience in Vue.js and state management.
          </p>
          <div className="mt-4 grid gap-4 grid-cols-3 text-center">
            <span className="p-3  text-xs bg-green-500 text-white rounded-full">Vue.js</span>
            <span className="p-3  text-xs bg-blue-500 text-white rounded-full">Pinia</span>
            <span className="p-3 text-xs bg-purple-500 text-white rounded-full">JWT</span>
          </div>
        </div>

        {/* Parkway Projects (Sep 2022 - Oct 2022) */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-green-500">Frontend Developer Intern</h3>
              <p className="text-sm text-gray-400 font-extrabold">Parkway Projects</p>
            </div>
            <p className="text-sm text-gray-500">Sep 2022 - Oct 2022</p>
          </div>
          <p className="mt-3 text-gray-300">
            Learned the fundamentals of frontend development, including HTML, CSS, and JavaScript, while contributing to minor tasks and projects.
          </p>
          <div className="mt-4 grid gap-4 grid-cols-3 text-center">
            <span className="p-3 text-xs bg-orange-500 text-white rounded-full ">HTML</span>
            <span className="p-3 text-xs bg-blue-500 text-white rounded-full">CSS</span>
            <span className="p-3 text-xs bg-yellow-500 text-white rounded-full">JavaScript</span>
          </div>
        </div>

        {/* ALAT by Wema */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-green-500">HR Assistant</h3>
              <p className="text-sm text-gray-400 font-extrabold">ALAT by Wema</p>
            </div>
            <p className="text-sm text-gray-500">Aug 2023</p>
          </div>
          <p className="mt-3 text-gray-300">
            Coordinated over 200 personnel for interviews and onboarding processes, improving efficiency and training effectiveness at ALAT by Wema.
          </p>
          <div className="mt-4 grid gap-4 grid-cols-2 text-center">
            <span className="p-3 text-xs bg-red-500 text-white rounded-full">HR</span>
            <span className="p-3 text-xs bg-gray-500 text-white rounded-full">Team Coordination</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyExperinces