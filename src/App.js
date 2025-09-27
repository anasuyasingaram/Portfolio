export default function Portfolio() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">Anasuya Singaram</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Anasuya 👋</h2>
        <p className="text-lg mb-6">
          MSCS Graduate (May 2025) | Java & Python Developer | React & AWS Enthusiast
        </p>
        <a
          href="/resume.pdf"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Download Resume
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-16 px-4">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p>
          I have done my Masters in computer science at Clark University, Worcester 
          and my B.Tech in Electronics and Communication Engineering back in India.
          Previously, I was a Software Engineer at Syrma SGS Technology in India,
          where I worked on designing REST APIs, databases and deploying applications
          in the cloud. It was actually a learning experience that helped me get better
          in my coding, problem-solving, and testing skills. Some of the projects that
          I worked on during my studies include the GPS-based situational awareness system,
          a TA application portal, IoT greenhouse monitoring, face recognition attendance,
          and an air pollution monitoring system. These projects provided me with practical
          experience on Java, Python, React, and Node.js, as well as cloud services such as
          AWS and Azure. I am an easy learner, who likes to solve problems, and create
          applications. I am currently seeking opportunities as a software developer in an
          area that I can bring my skills and develop the industry.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">OnMart Superstore</h4>
              <p className="mb-2">
                E-commerce simulation with product APIs, shopping cart, and weather-based recommendations.
              </p>
              <p className="text-sm text-gray-600 mb-3">React, Node.js, Express, Material-UI</p>
              <a href="https://github.com/yourusername/onmart-superstore" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                View Project →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Blogging Platform</h4>
              <p className="mb-2">
                Full-stack blogging platform using React, Node/Express, and ElasticSearch.
              </p>
              <p className="text-sm text-gray-600 mb-3">React, Node.js, ElasticSearch, Material-UI</p>
              <a href="https://github.com/yourusername/blogging-platform" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-4">
        <h3 className="text-2xl font-bold mb-6">Skills</h3>
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
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <p className="mb-6">Let’s connect! Feel free to reach out.</p>
          <p>Email: <a href="mailto:anasuyasingaram2001@gmail.com" className="underline">anasuyasingaram2001@gmail.com</a></p>
          <p>LinkedIn: <a href="http://linkedin.com/in/anasuya-singaram-5b710b234" target="_blank" className="underline">Anasuya Singaram</a></p>
          <p>GitHub: <a href="https://github.com/anasuyasingaram" target="_blank" className="underline">github.com/anasuyasingaram</a></p>
        </div>
      </section>
    </div>
  );
}
