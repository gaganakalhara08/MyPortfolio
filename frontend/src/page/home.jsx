import React, { useState } from "react";
import emailjs from "emailjs-com";

function Portfolio() {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.id]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "myPortfolio2003",      // ← CHANGE THIS
      "template_rtrj7un",     // ← CHANGE THIS
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "yt16dUm-Plecxm2I_"       // ← CHANGE THIS
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      alert("Failed to send message!");
      console.error(err);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1724] to-[#071020] text-[#e6eef8] pb-20 ">
      {/* NAVBAR */}
      <div className="sticky top-0 pt-2 max-w-7xl  z-10 items-center mx-auto">
        <div className="backdrop-blur-md rounded-2xl bg-white/5 shadow-xl px-5 py-3 text-xl flex items-center justify-between">
          <nav className="ml-20 hidden sm:flex items-center gap-20">
              <a
                href="#home"
                className="px-3 py-2 text-white rounded-md text-slate-400 hover:text-white hover:bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition"
              > Home
              </a>
              <a
                href="#projects"
                className="px-3 py-2 text-white rounded-md text-slate-400 hover:text-white hover:bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition"
              > Projects
              </a>
              <a
                href="#follow-on"
                className="px-3 py-2 text-white rounded-md text-slate-400 hover:text-white hover:bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition"
              > Follow Me
              </a>
          </nav>
          
          <div className="hidden sm:block mr-20">
            <a
              href="#contact"
              className="px-3 py-2 text-white rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition-all hover:scale-205 hover:shadow-lg hover:shadow-indigo-500/50"
              >Contact With Me
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-3">
        <section id="home" className="pt-24 -mt-24 mb-10">
          {/* Profile Card */}
          <aside className=" p-5 rounded-xl">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white/5 items-center mx-auto mb-4">
              <img
                src="/profile.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="justify-center flex font-semibold">
              <h1 className="text-3xl font-bold text-blue-500">I'M Gagana Kalhara,  </h1>
              <h1 className="text-3xl font-bold pl-2">  Full stack Developer & UI/UX Designer</h1>
            </div>
          </aside>

          <div className="p-6 shadow-inner text-center font-semibold">
            <h1 className="text-7xl font-bold ">About Me</h1>
            <p className="text-white-400 mt-10">
              Hi! I'm an undergraduate at SLIIT, currently in my 2nd year, 2nd semester, following the BSc (Hons) in Information Technology specialization program. I love creating digital solutions, exploring new technologies, and developing projects that challenge my creativity and logic.
              I'm always excited to learn, experiment, and improve my skills — whether it’s coding, UI/UX, problem-solving, or building full-stack applications. My goal is to grow into a skilled IT professional who can contribute to meaningful and innovative tech projects.
            </p>
            <p className="text-slate-500 mt-3">
            </p>
            
          </div>
        </section>

        {/* PROJECTS - FIX APPLIED HERE */}
        <section id="projects" className="mt-20 pt-24 -mt-24 mb-10">
          <div className="text-center font-semibold">
            <h2 className="text-7xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 place-items-center mt-20 ">
            <div className="rounded-xl hover:scale-105 transition-transform hover:shadow-lg hover:shadow-indigo-500">
              <a href="https://www.figma.com/design/uDQzaCvBLnq9CuiFqL0Y3U/Fitness-app-UI?node-id=0-1&t=7K7vLm2k5WJeNH1b-1" target="_blank">
                <img src="/fitness.png" alt="" className=" rounded-xl w-full object-cover"/>
              </a>
            </div>
            <div className="rounded-xl hover:scale-105 transition-transform hover:shadow-lg hover:shadow-indigo-500">
              <a href="https://www.figma.com/design/JxkcaP2i9ZdSJPhryIMmUh/MobileApp?node-id=0-1&t=Io9uRAOcc7jFXFqS-1" target="_blank">
                <img src="/healthTracker.png" alt="" className=" rounded-xl w-full object-cover"/>
              </a>
            </div>
            <div className="rounded-xl hover:scale-105 transition-transform hover:shadow-lg hover:shadow-indigo-500">
              <a href="" target="_blank">
                <img src="/penguin.png" alt="" className=" rounded-xl w-full object-cover"/>
              </a>
            </div>
            <div className="rounded-xl hover:scale-105 transition-transform hover:shadow-lg hover:shadow-indigo-500">
              <a href="https://github.com/VDewMin/Livora.git" target="_blank">
                <img src="/Livora.jpeg" alt="" className=" rounded-xl w-full object-cover"/>
              </a>
            </div>
            <div className="rounded-xl hover:scale-105 transition-transform hover:shadow-lg hover:shadow-indigo-500">
              <a href="https://github.com/MyChesse/SEM-2-project/tree/e623afe35d7f8975e29691ec07b9d59e1084fb50/GK" target="_blank">
                <img src="/hotel.png" alt="" className=" rounded-xl w-full object-cover"/>
              </a>
            </div>
          </div>
        </section>

        {/* follow on */}
        <section id="follow-on" className="mt-20 pt-24 -mt-24 mb-10">
          <div className="text-center font-semibold">
            <h2 className="text-7xl font-bold">Follow Me</h2>
          </div>
          <div className="flex justify-center mt-20 mb-20 gap-20 font-semibold text-2xl">
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

        {/* CONTACT - FIX APPLIED HERE */}
        <section id="contact" className="mt-10 pt-24 -mt-24 mb-10">
          <h2 className="text-7xl font-bold text-center">Get In Touch</h2>

          <div className="grid md:grid-cols-2 text-white gap-5 mt-20 font-semibold">
            <aside className="">
              <h3 className="font-bold text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-10">Quick details</h3>
              <div className="">
                <div className="flex justify-start gap-5 mb-5">
                  <img src="/email.png" alt="Email" className="w-14 h-14 rounded-xl"/>
                  <div className="text-2xl text-white p-3">ggaganakalhara08@gmail.com</div>
                </div>
                <div className="flex justify-start gap-5 mb-5">
                  <img src="/phone.png" alt="Phone" className="w-14 h-14 rounded-xl"/>
                  <div className="text-2xl text-white p-3">+94729305264</div>
                </div>
                <div className="flex justify-start gap-5 mb-5">
                  <img src="/location.png" alt="Location" className="w-14 h-14 rounded-xl"/>
                  <div className="text-2xl text-white p-3">No-175/2, Indolamulla, Dompe, Sri Lanka</div>
                </div>
              </div>
            </aside>
            
            <div className="text-2xl">
             <form onSubmit={handleSubmit} className="grid gap-3 ">
                
                <div className="flex flex-col">
                  <label>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="enter your name"
                    className="bg-[#1e293b] p-5 mt-5 rounded-lg border border-slate-700 focus:outline-none focus:border-purple-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="enter your email"
                    className="bg-[#1e293b] p-5 mt-5 rounded-lg border border-slate-700 focus:outline-none focus:border-purple-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="enter your message"
                    className="bg-[#1e293b] p-2 mt-5 rounded-lg border border-slate-700 focus:outline-none focus:border-purple-600"
                  ></textarea>
                </div>

                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg font-bold mt-5 hover:scale-105 transition-transform">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
        <footer className="text-center text-slate-500 mt-10">
          © {new Date().getFullYear()} Your Name — Built with care.
        </footer>
      </main>
    </div>
  );
}

export default Portfolio;