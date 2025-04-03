import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function ResturentErp() {
  const [activeTab, setActiveTab] = useState("frontend")
  const [hoverCard, setHoverCard] = useState(null)
  const [animatedCounter, setAnimatedCounter] = useState({ projects: 0, clients: 0, years: 0 })
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })

  const heroRef = useRef(null)
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0])
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 100])

  // Animated counter effect
  useEffect(() => {
    if (isStatsInView) {
      const interval = setInterval(() => {
        setAnimatedCounter((prev) => {
          const newProjects = prev.projects < 120 ? prev.projects + 1 : 120
          const newClients = prev.clients < 85 ? prev.clients + 1 : 85
          const newYears = prev.years < 10 ? prev.years + 0.1 : 10

          if (newProjects === 120 && newClients === 85 && newYears === 10) {
            clearInterval(interval)
          }

          return {
            projects: newProjects,
            clients: newClients,
            years: Number.parseFloat(newYears.toFixed(1)),
          }
        })
      }, 20)

      return () => clearInterval(interval)
    }
  }, [isStatsInView])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const services = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive, intuitive user interfaces with modern frameworks like React, Vue, and Angular.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Python, PHP, and other technologies.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      ),
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end web development services from concept to deployment and maintenance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
    },
    {
      title: "Responsive Design",
      description: "Ensuring your web applications look and function perfectly on all devices and screen sizes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
    },
    {
      title: "Performance Optimization",
      description: "Enhancing speed, efficiency, and overall user experience of your web applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
    {
      title: "Custom Web Applications",
      description: "Developing tailored solutions to address your unique business challenges.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          />
        </svg>
      ),
    },
  ]

  const technologies = {
    frontend: [
      { name: "React", description: "Building interactive UIs with the most popular frontend library" },
      { name: "Next.js", description: "Creating fast, SEO-friendly React applications with server-side rendering" },
      { name: "TypeScript", description: "Adding type safety to JavaScript for more robust applications" },
      { name: "Tailwind CSS", description: "Rapidly building custom designs without leaving your HTML" },
      { name: "Vue.js", description: "Developing progressive web interfaces with an approachable framework" },
      { name: "Angular", description: "Building enterprise-grade applications with a complete solution" },
    ],
    backend: [
      { name: "Node.js", description: "Building scalable network applications with JavaScript runtime" },
      { name: "Express", description: "Creating web applications and APIs with minimal overhead" },
      { name: "Python/Django", description: "Developing robust backend systems with Python's powerful framework" },
      { name: "PHP/Laravel", description: "Building elegant applications with expressive, elegant syntax" },
      { name: "Ruby on Rails", description: "Creating applications using convention over configuration" },
      { name: "GraphQL", description: "Implementing flexible and efficient APIs for modern applications" },
    ],
    tools: [
      { name: "Git/GitHub", description: "Managing code and collaborating with version control" },
      { name: "Docker", description: "Containerizing applications for consistent deployment" },
      { name: "AWS/Azure/GCP", description: "Deploying and scaling applications on cloud platforms" },
      { name: "CI/CD Pipelines", description: "Automating testing and deployment processes" },
      { name: "Webpack/Vite", description: "Bundling and optimizing frontend assets" },
      { name: "Jest/Cypress", description: "Testing applications for reliability and quality" },
    ],
  }

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business goals, target audience, and project requirements to create a comprehensive development plan.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Our designers create wireframes and interactive prototypes to visualize the user interface and experience before development begins.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our developers bring the designs to life, writing clean, efficient code and implementing all required functionality.",
    },
    {
      number: "04",
      title: "Testing & QA",
      description:
        "We rigorously test the application across devices and browsers to ensure it functions flawlessly and meets all requirements.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "Once approved, we deploy your application to production, ensuring a smooth transition and optimal performance.",
    },
    {
      number: "06",
      title: "Maintenance & Support",
      description:
        "We provide ongoing support and maintenance to keep your application running smoothly and up-to-date.",
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Retail",
      image: "/mobileimg.jpg",
      description:
        "A fully responsive e-commerce solution with advanced product filtering and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      title: "Healthcare Portal",
      category: "Healthcare",
      image: "/mobileimg.jpg",
      description: "A secure patient management system with appointment scheduling and medical record access.",
      technologies: ["Angular", "Express", "PostgreSQL", "OAuth"],
    },
    {
      title: "Financial Dashboard",
      category: "Finance",
      image: "/mobileimg.jpg",
      description: "An interactive dashboard for real-time financial data visualization and analysis.",
      technologies: ["Vue.js", "Django", "D3.js", "WebSockets"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-100">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden flex items-center justify-center h-screen">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_20%,#B8860B/0.1,transparent_40%)]" />
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="container  relative z-10 mx-auto px-4 md:px-25">
          <motion.div
            className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="flex flex-col justify-center space-y-4" variants={fadeIn}>
              <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Resturant ERP
                  <span className="bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent px-8">
                    {" "}
                    Excellence
                  </span>
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Crafting exceptional digital experiences with cutting-edge technologies and innovative solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 rounded-md"
                  onClick={() => setShowModal(true)}
                >
                  <span className="relative z-10 text-white group-hover:text-white transition duration-300">
                    Get Started
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </button>
                <button className="relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden border border-amber-500 text-amber-500 rounded-md hover:text-white transition duration-300 hover:bg-amber-500">
                  View Our Work
                </button>
              </div>
            </motion.div>
            <motion.div className="flex items-center justify-center" variants={fadeIn}>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-500/5 blur-3xl" />
                <img
                  src="/assets/erp_construct.svg"
                  width={500}
                  height={500}
                  alt="Web Development Illustration"
                  className="relative z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Counter Section */}
      <section ref={statsRef} className="py-12 bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center p-6 border border-amber-500/20 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <span className="text-5xl font-bold text-amber-500 mb-2">{animatedCounter.projects}+</span>
              <span className="text-gray-300">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border border-amber-500/20 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <span className="text-5xl font-bold text-amber-500 mb-2">{animatedCounter.clients}+</span>
              <span className="text-gray-300">Satisfied Clients</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border border-amber-500/20 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <span className="text-5xl font-bold text-amber-500 mb-2">{animatedCounter.years.toFixed(1)}</span>
              <span className="text-gray-300">Years of Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our ERP Services
            </h2>
            <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We deliver comprehensive web solutions tailored to your specific needs and business goals.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 p-6 transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(184,134,11,0.15)]"
                onMouseEnter={() => setHoverCard(index)}
                onMouseLeave={() => setHoverCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 text-amber-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-400">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies We Use</h2>
            <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We leverage the latest technologies and frameworks to build modern, scalable web applications.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="flex justify-center mb-8 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("frontend")}
                className={`px-6 py-3 font-medium transition-colors duration-300 ${activeTab === "frontend" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400 hover:text-gray-200"}`}
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                className={`px-6 py-3 font-medium transition-colors duration-300 ${activeTab === "backend" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400 hover:text-gray-200"}`}
              >
                Backend
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-6 py-3 font-medium transition-colors duration-300 ${activeTab === "tools" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400 hover:text-gray-200"}`}
              >
                Tools & DevOps
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
              >
                {technologies[activeTab].map((tech, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-700 bg-gray-800/30 p-4 shadow-sm hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(184,134,11,0.15)] transition-all duration-300"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-amber-500">{tech.name}</h3>
                    <p className="text-sm text-gray-400">{tech.description}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Development Process</h2>
            <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 max-w-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="relative">
              <div className="absolute left-6 h-full w-0.5 -translate-x-1/2 bg-gray-700" />

              {process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="relative mb-12 flex items-start gap-6 last:mb-0"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-500 bg-gray-900 shadow-[0_0_10px_rgba(184,134,11,0.3)] z-10">
                    <span className="text-sm font-bold text-amber-500">{step.number}</span>
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h3 className="text-xl font-bold text-amber-500">{step.title}</h3>
                    <p className="mt-2 text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 md:py-24 bg-gray-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore some of our recent web development projects and success stories.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group overflow-hidden rounded-lg border border-gray-700 bg-gray-800/30 shadow-sm transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(184,134,11,0.2)]"
                onClick={() => {
                  setSelectedProject(index)
                  setShowModal(true)
                }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/mobileimg.jpg"}
                    width={600}
                    height={400}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="px-4 py-2 bg-amber-500 text-black font-bold rounded-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </span>
                </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-amber-500">{project.category}</div>
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block px-3 py-1 text-xs rounded-full bg-gray-700 text-amber-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <button className="relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 rounded-md hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:-translate-y-1">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#B8860B/0.1,transparent_70%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Start Your Web Project?
            </h2>
            <p className="max-w-[85%] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss how we can help you achieve your business goals with a custom web solution.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <button
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 rounded-md"
                onClick={() => setShowModal(true)}
              >
                <span className="relative z-10 text-white group-hover:text-white transition duration-300">
                  Schedule a Consultation
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </button>
              <button className="relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden border border-amber-500 text-amber-500 rounded-md hover:text-white transition duration-300 hover:bg-amber-500">
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative w-full max-w-lg bg-gray-900 p-6 rounded-lg border border-amber-500/30 shadow-[0_0_30px_rgba(184,134,11,0.2)]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setShowModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-2xl font-bold mb-4 text-amber-500">
                {selectedProject !== null ? `About ${projects[selectedProject].title}` : "Get in Touch"}
              </h3>

              {selectedProject !== null ? (
                <div>
                  <img
                    src={projects[selectedProject].image || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt={projects[selectedProject].title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-300 mb-4">{projects[selectedProject].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[selectedProject].technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block px-3 py-1 text-xs rounded-full bg-gray-700 text-amber-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 bg-amber-500 text-black font-bold rounded-md hover:bg-amber-600 transition-colors">
                    View Full Case Study
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-gray-300 mb-6">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        rows={4}
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="w-full py-2 bg-amber-500 text-black font-bold rounded-md hover:bg-amber-600 transition-colors"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

