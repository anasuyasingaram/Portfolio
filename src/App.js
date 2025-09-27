export default function Portfolio() {
  return (
    <div className="bg-lavender-light min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-lavender-dark">Anasuya Singaram</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-lavender-dark">About</a>
            <a href="#projects" className="hover:text-lavender-dark">Projects</a>
            <a href="#skills" className="hover:text-lavender-dark">Skills</a>
            <a href="#contact" className="hover:text-lavender-dark">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
<section className="bg-gradient-to-r from-lavender-light via-lavender to-lavender-dark text-white py-20 shadow-inner">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">Hi, I'm Anasuya 👋</h2>
    <p className="text-lg mb-6 max-w-2xl mx-auto drop-shadow">
      MSCS Graduate (May 2025) | Java & Python Developer | React & AWS Enthusiast
    </p>
    <a
      href="/resume.pdf"
      className="px-6 py-3 bg-white text-lavender-dark rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all"
    >
      Download Resume
    </a>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-4 text-lavender-dark">About Me</h3>
        <p className="leading-relaxed">
          I have done my Masters in Computer Science at Clark University, Worcester 
          and my B.Tech in Electronics and Communication Engineering in India.
          Previously, I was a Software Engineer at Syrma SGS Technology in India,
          where I worked on REST APIs, databases, and cloud deployments.
          It was a learning experience that improved my coding, problem-solving, 
          and testing skills. Some of the projects I worked on during my studies 
          include GPS-based situational awareness, a TA application portal, IoT 
          greenhouse monitoring, face recognition attendance, and an air pollution 
          monitoring system. These projects gave me practical experience with Java, 
          Python, React, Node.js, and cloud services such as AWS and Azure. 
          I am a quick learner who enjoys solving problems and creating applications, 
          and I am currently seeking opportunities as a software developer.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-lavender py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-white">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h4 className="text-xl font-semibold mb-2 text-lavender-dark">OnMart Superstore</h4>
              <p className="mb-2 text-gray-700">
                E-commerce simulation with product APIs, shopping cart, and weather-based recommendations.
              </p>
              <p className="text-sm text-gray-600 mb-3">React, Node.js, Express, Material-UI</p>
              <a href="https://github.com/anasuyasingaram/onmart-superstore" target="_blank" rel="noreferrer" className="text-lavender-dark hover:underline">
                View Project →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h4 className="text-xl font-semibold mb-2 text-lavender-dark">Blogging Platform</h4>
              <p className="mb-2 text-gray-700">
                Full-stack blogging platform using React, Node/Express, and ElasticSearch.
              </p>
              <p className="text-sm text-gray-600 mb-3">React, Node.js, ElasticSearch, Material-UI</p>
              <a href="https://github.com/anasuyasingaram/blogging-platform" target="_blank" rel="noreferrer" className="text-lavender-dark hover:underline">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-6 text-lavender-dark">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Java",
            "Python",
            "React",
            "Node.js",
            "Spring Boot",
            "AWS",
            "Jenkins",
            "SQL",
            "GitHub",
            "Rasa",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-lavender-light text-lavender-dark rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-lavender-dark text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
          <p className="mb-6">Let’s connect! Feel free to reach out.</p>
          <p>Email: <a href="mailto:anasuyasingaram2001@gmail.com" className="underline">anasuyasingaram2001@gmail.com</a></p>
          <p>LinkedIn: <a href="http://linkedin.com/in/anasuya-singaram-5b710b234" target="_blank" className="underline">Anasuya Singaram</a></p>
          <p>GitHub: <a href="https://github.com/anasuyasingaram" target="_blank" className="underline">github.com/anasuyasingaram</a></p>
        </div>
      </section>
    </div>
  );
}
