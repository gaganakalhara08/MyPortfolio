import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import ScrollAnimation from "../components/scrollAnimation";
import { fadeUp, fadeLeft, scaleIn} from "../util/animation";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaPython, FaJava} from "react-icons/fa";
/* import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa"; */
import { SiC, SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiFigma, SiPostman } from "react-icons/si";


function Portfolio() {

  const [mobileView, setMobileView] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.id]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "myPortfolio2003",      
      "template_rtrj7un",     
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "yt16dUm-Plecxm2I_"    
    )
    .then(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      toast.error("Failed to send message!");
      console.error(err);
    });
  };

  /* const followLinks = [
    { name: "LinkedIn", icon: <FaLinkedin />, URL: "https://www.linkedin.com/in/gagana-kalhara-7b5602376", target: "_blank" },
    { name: "GitHub", icon: <FaGithub />, URL: "https://github.com/gaganakalhara08", target: "_blank" },
    { name: "WhatsApp", icon: <FaWhatsapp />, URL: "https://wa.me/94701825519", target: "_blank" },
    { name: "Instagram", icon: <FaInstagram />, URL: "https://www.linkedin.com/in/gagana-kalhara-7b5602376", target: "_blank" },
    { name: "Facebook", icon: <FaFacebook />, URL: "https://www.linkedin.com/in/gagana-kalhara-7b5602376", target: "_blank" },
  ]; */

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-7xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className=" text-7xl text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-7xl text-cyan-400" /> },
    { name: "Java", icon: <FaJava className=" text-7xl text-orange-400" /> },
    { name: "Python", icon: <FaPython className=" text-7xl text-yellow-600" /> },
    { name: "React", icon: <FaReact className=" text-7xl text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className=" text-7xl text-green-500" /> },
    { name: "Express", icon: <SiExpress className=" text-7xl text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-7xl text-green-500" /> },
    { name: "Figma", icon: <SiFigma className=" text-7xl" /> },
    { name: "GitHub", icon: <FaGithub className=" text-7xl text-white-600" /> },
    { name: "Postman", icon: <SiPostman className=" text-7xl text-orange-500" /> },
    {name: "C", icon: <SiC className=" text-7xl text-blue-600" /> },
    {name: "C++", icon: <SiCplusplus className=" text-7xl text-blue-600" /> },
  ];

  return (
    <div className="w-full font-poppins min-h-screen bg-gradient-to-b from-[#0f1724] to-[#071020] text-[#e6eef8] pb-20">
      {/* NAVBAR */}
      <div className="sticky top-0 pt-2 max-w-7xl z-10 items-center mx-auto">
        <div className="backdrop-blur rounded-2xl bg-white/5 shadow-xl md:gap-20 px-5 py-3 text-xl flex items-center justify-between">
          <a href="#"><h1 className="text-3xl font-bold ml-5 bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent">GK.</h1></a>
          <nav className="text-white ml-20 hidden sm:flex items-center gap-20 md:gap-30">
              {["Home", "Skills", "Projects", "Follow On"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="px-3 py-2 text-white rounded-md hover:text-white hover:bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition">
                {item}
              </a>
              ))}
          </nav>
          
          <div className="hidden text-white sm:block mr-20 hover:scale-105 transition-transform duration-300">
            <a
              href="#contact-with-me"
              className="px-3 py-2 text-white rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-500">
                Contact With Me
            </a>
          </div>

          <button className="sm:hidden text-3xl" onClick={() => setMobileView(!mobileView)}>
            ☰
          </button>
        </div>

        {mobileView && (
          <div className="backdrop-blur rounded-2xl bg-white/5 sm:hidden p-5">
            {["Home", "Skills", "Projects", "Follow On" , "Contact-with-me"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block py-2 px-5 mt-10  text-white text-lg hover:bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md"
                onClick={() => setMobileView(false)}>
                {item}
              </a>
              ))}
          </div>
        )}
      </div>
      
      <main className="max-w-7xl mx-auto p-3">
        <section id="home" className="pt-24 -mt-24 mb-10">
          {/* Profile Card */}
          <aside className=" p-5 rounded-xl">
            <div className="w-60 h-60 rounded-full overflow-hidden 
                      transition-transform duration-300 hover:scale-105 
                      border-4 border-white/10 mx-auto mb-4 bg-black">
                      
              <img
                src="/profile1.jpeg"
                alt="Profile"
                className="w-full object-contain rounded-full"
              />
            </div>

            <ScrollAnimation variant={scaleIn}>
            <div className="justify-center flex flex-col md:flex-row font-semibold">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">I'M Gagana Kalhara,  </h1>
              <h1 className="text-3xl md:text-4xl font-bold md:pl-2">  Full stack Developer & UI/UX Designer</h1>
            </div>
            </ScrollAnimation>
          </aside>

          <div className="p-6 shadow-inner text-center font-semibold">
            <h1 className="text-7xl font-bold ">About Me</h1>
            <p className="text-white mt-10 md:text-lg">
              Hi! I'm an undergraduate at SLIIT, currently in my 2nd year, 2nd semester, following the BSc (Hons) specialization in Information Technology. I love creating digital solutions, exploring new technologies, and developing projects that challenge my creativity and logic.
              I'm always excited to learn, experiment, and improve my skills — whether it's coding, UI/UX, problem-solving, or building full-stack applications. My goal is to grow into a skilled IT professional who can contribute to meaningful and innovative tech projects.
            </p>
            <div className="mt-20 hover:scale-105 transition-transform duration-300 hover:text-white">
              <a href="https://drive.google.com/file/d/15WUb3WUUcoPXq0jeb17oCuKHINCbY6Pg/view?usp=sharing" target="_blank" className="bg-gradient-to-r from-purple-600 to-indigo-500 text-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 text-white p-3 rounded-md">
                My Resume
              </a>
            </div>
            <hr className="mt-20 max-w-7xl"></hr> 
          </div>
        </section>

        {/* Skills */}
        <ScrollAnimation variant={fadeUp}>
        <section id="skills" className="pt-24 -mt-24 mb-10">
          <h1 className="text-7xl text-center font-semibold text-white mt-10">Skills</h1>
            <div  className=" flex flex-wrap justify-center mt-10">
              {skills.map(({name, icon}) => (
                <div
                  key={name} 
                  className="m-2 text-center px-7 py-3 hover:scale-110 transition-transform duration-300">
                  {icon}
                  <span className=" text-xl font-semibold">{name}</span>
                </div>
              ))}
            </div>
        </section>
        </ScrollAnimation>

        {/* PROJECTS */}
        <ScrollAnimation variant={fadeUp}> 
        <section id="projects" className="mt-10 pt-24 -mt-24 mb-10">
          <div className="text-center font-semibold">
            <h2 className="text-7xl font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-20">
            <div className="relative rounded-2xl overflow-hidden w-full h-[380px] group">
              <img
                src="/fitnessApp.png"
                alt="Fitness App"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-sm font-semibold text-yellow-300 tracking-wider">UI / UX DESIGN</p>

                <h3 className="text-2xl font-bold mt-1">Fitness Mobile App</h3>

                <p className="text-sm text-gray-200 mt-2 w-[90%]">
                  A modern fitness tracking UI design created in Figma with clean layouts.
                </p>

                <div className="flex gap-2 mt-4">
                  <a href="https://www.figma.com/design/uDQzaCvBLnq9CuiFqL0Y3U/Fitness-app-UI?node-id=0-1&t=7K7vLm2k5WJeNH1b-1" target="_blank">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">Figma</span></a>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">UI/UX</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden w-full h-[380px] group">
              <img
                src="/health.png"
                alt="Health App"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-sm font-semibold text-yellow-300 tracking-wider">UI / UX DESIGN</p>

                <h3 className="text-2xl font-bold mt-1">Habits Tracking App</h3>

                <p className="text-sm text-gray-200 mt-2 w-[90%]">Mobile UI for Habits tracking and wellness features with a clean look.</p>

                <div className="flex gap-2 mt-4">
                   <a href="https://www.figma.com/design/JxkcaP2i9ZdSJPhryIMmUh/MobileApp?node-id=0-1&t=Io9uRAOcc7jFXFqS-1" target="_blank">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">Figma</span></a>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">Design</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden w-full h-[380px] group">
              <img
                src="/penguin.png"
                alt="C Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-sm font-semibold text-yellow-300 tracking-wider">ACADEMIC PROJECT</p>

                <h3 className="text-2xl font-bold mt-1">Penguin - Online Exam Management</h3>

                <p className="text-sm text-gray-200 mt-2 w-[90%]">Contributed to the development of a web-based exam management system.</p>

                <div className="flex gap-2 mt-4">
                  <a
                    href="https://github.com/MyChesse/Year2-Sem1.git" target="_blank">     
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">GitHub</span></a>

                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">Java</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden w-full h-[380px] group">
              <img
                src="/Livora.jpeg"
                alt="Livora App"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-sm font-semibold text-yellow-300 tracking-wider">ACADEMIC PROJECT</p>

                <h3 className="text-2xl font-bold mt-1">Livora - Smart Resident Management</h3>

                <p className="text-sm text-gray-200 mt-2 w-[90%]">A smart Resident management system with modern UI and device controls.</p>

                <div className="flex gap-2 mt-4">
                  <a href="https://github.com/VDewMin/Livora.git" target="_blank">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">GitHub</span></a>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">React</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">Node</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden w-full h-[380px] group">
              <img
                src="/hotel.png"
                alt="Hotel Management"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-sm font-semibold text-yellow-300 tracking-wider">ACADEMIC PROJECT</p>

                <h3 className="text-2xl font-bold mt-1">Hotel Management System</h3>

                <p className="text-sm text-gray-200 mt-2 w-[90%]">Full CRUD hotel management system built for academic coursework.</p>

                <div className="flex gap-2 mt-4">
                  <a href="https://github.com/MyChesse/SEM-2-project/tree/e623afe35d7f8975e29691ec07b9d59e1084fb50/GK" target="_blank">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">GitHub</span></a>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">HTML</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">PHP</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation> 

        {/* FOLLOW ON */}
        <ScrollAnimation variant={fadeUp}> 
        <section id="follow-on" className="mt-20 pt-24 -mt-24 mb-10">
          <div className="text-center font-semibold">
            <h2 className="text-7xl md:text-7xl font-bold">Follow Me</h2>
          </div>
          <div className="flex flex-wrap justify-center mt-20 mb-20 gap-10 md:gap-20 font-semibold text-xl md:text-2xl">
            <div className="group cursor-pointer">
              <a href="https://www.linkedin.com/in/gagana-kalhara-7b5602376" target="_blank">
                <img src="/linkedIn.jpg" alt="LinkedIn" className="w-14 h-14 ml-4 mb-4 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_5px_rgba(128,0,255,0.7)]"/>
              </a>
              <p className="group-hover:scale-110 transition">LinkedIn</p>
            </div>
            <div className="group cursor-pointer">
              <a href="https://github.com/gaganakalhara08" target="_blank">
                <img src="/github.jpg" alt="GitHub" className="w-14 h-14 ml-3 mb-4 rounded-xl group-hover:scale-110 group-hover:shadow-[0_0_25px_5px_rgba(128,0,255,0.7)] transition-transform"/>
              </a>
              <p className="group-hover:scale-110">GitHub</p>
            </div>
            <div className="group cursor-pointer transition">
              <a href="https://wa.me/94701825519" target="_blank">
                <img src="/whatsapp.jpg" alt="WhatsApp" className="w-14 h-14 ml-6 mb-4 rounded-xl group-hover:scale-110 group-hover:shadow-[0_0_25px_5px_rgba(128,0,255,0.7)] transition-transform"/>
              </a>
              <p className="group-hover:scale-110 transition">WhatsApp</p>
            </div>
            <div className="group cursor-pointer transition">
              <a href="https://www.instagram.com/kalha_xx_ra?igsh=YjQyYnY1dDZnYXQ1&utm_source=qr" target="_blank">
                <img src="/instagram.jpg" alt="Instagram" className="w-14 h-14 ml-6 mb-4 rounded-xl group-hover:scale-110 group-hover:shadow-[0_0_25px_5px_rgba(128,0,255,0.7)] transition-transform"/>
              </a>
              <p className="group-hover:scale-110 transition">Instagram</p>
            </div>
            <div className="group cursor-pointer transition">
              <a href="https://www.facebook.com/share/16eHh4xBpk/?mibextid=wwXIfr" target="_blank">
                <img src="/facebook.jpg" alt="Facebook" className="w-14 h-14 ml-5 mb-4 rounded-xl group-hover:scale-110 group-hover:shadow-[0_0_25px_5px_rgba(128,0,255,0.7)] transition-transform"/>
              </a>
              <p className="group-hover:scale-110 transition">Facebook</p>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* CONTACT */}
        <section
          id="contact-with-me"
          className="w-full mt-10 pt-24 -mt-24 mb-10"
        >
          <h2 className="text-7xl md:text-7xl font-bold text-center">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 text-white gap-10 mt-14 font-semibold">
            <ScrollAnimation variant={fadeLeft}>
              <section>
                <h3 className="font-bold text-5xl sm:text-4xl md:text-5xl bg-gradient-to-r
                  from-purple-600 to-blue-500 bg-clip-text text-transparent mb-8 sm:mb-10">
                  Quick details
                </h3>

                <div className="flex items-center gap-4 sm:gap-5 mb-6">
                  <img
                    src="/email.png"
                    alt="Email"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl"
                  />
                  <div className="text-base sm:text-xl md:text-2xl">
                    ggaganakalhara08@gmail.com
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-5 mb-6">
                  <img
                    src="/phone.png"
                    alt="Phone"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl"
                  />
                  <div className="text-base sm:text-xl md:text-2xl">
                    +94729305264
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-5 mb-6">
                  <img
                    src="/location.png"
                    alt="Location"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl"
                  />
                  <div className="text-base sm:text-xl md:text-2xl">
                    No-175/2, Indolamulla, Dompe, Sri Lanka
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* CONTACT FORM */}
            <div className="text-lg sm:text-xl md:text-2xl">
              <form onSubmit={handleSubmit} className="grid gap-5">

                <div className="flex flex-col">
                  <label className="text-base sm:text-lg md:text-xl">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="enter your name"
                    className="bg-[#1e293b] p-4 sm:p-5 mt-3 rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-base sm:text-lg md:text-xl">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="enter your email"
                    className="bg-[#1e293b] p-4 sm:p-5 mt-3 rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-base sm:text-lg md:text-xl">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="enter your message"
                    className="bg-[#1e293b] p-3 sm:p-4 mt-3 rounded-lg"
                  ></textarea>
                </div>

                <button
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 
                  text-white p-3 rounded-lg font-bold mt-4 hover:scale-105 
                  transition-transform"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <hr className="max-w-full border-slate-700 mt-10" />
      <footer className="text-center text-slate-500 mt-10">
        © {new Date().getFullYear()} Gagana Kalhara — Built with care.
      </footer>

    </div>
  );
}

export default Portfolio;