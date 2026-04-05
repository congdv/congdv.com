import Head from 'next/head'
import Link from 'next/link'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Cong Dao</title>
        <meta
          name="description"
          content="Resume of Cong Dao, Software Developer with experience in React, TypeScript, Java, and full-stack development."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <main className="container-center py-16 px-6">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">

            {/* Header */}
            <div className="text-center mb-8 border-b border-gray-200 pb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Cong Dao</h1>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-600">
                <Link
                  href="https://www.linkedin.com/in/congdv"
                  className="hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/congdv
                </Link>
                <span className="hidden md:inline">-</span>
                <a href="mailto:congdaovan94@gmail.com" className="hover:text-blue-600 transition-colors">
                  congdaovan94@gmail.com
                </a>
                <span className="hidden md:inline">-</span>
                <Link
                  href="https://github.com/congdv"
                  className="hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/congdv
                </Link>
              </div>
            </div>

            {/* Employment Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Employment</h2>

              {/* PointClickCare */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
                    <p className="text-lg text-gray-700 font-medium">PointClickCare</p>
                    <p className="text-gray-600">Toronto, ON, Canada</p>
                  </div>
                  <p className="text-gray-600 mt-1 md:mt-0">March 2025 - Present</p>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Developed and maintained full stack features for a healthcare SaaS platform using <strong>Java</strong>, <strong>Spring</strong>, <strong>JSP</strong>, <strong>JavaScript/TypeScript</strong>, <strong>React</strong>, <strong>Azure</strong>, and <strong>SQL Server</strong>, delivering robust solutions across the stack.</li>
                  <li>Optimised <strong>SQL Server</strong> queries which reduced query execution time by 70%.</li>
                  <li>Performed proactive monitoring and incident response using <strong>AppDynamics</strong> and <strong>Kibana</strong>.</li>
                  <li>Optimized development productivity by using <strong>GitHub Copilot</strong>/<strong>Claude Code</strong> to decrease implementation time and enhance code consistency.</li>
                </ul>
              </div>

              {/* OpenText */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Software Developer</h3>
                    <p className="text-lg text-gray-700 font-medium">OpenText</p>
                    <p className="text-gray-600">Richmond Hill, ON, Canada</p>
                  </div>
                  <p className="text-gray-600 mt-1 md:mt-0">October 2023 - March 2025</p>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Developed and maintained system functionality for the Content Management System using <strong>Java Spring Boot</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>Marionette</strong>, <strong>JQuery</strong>, <strong>Backbone.js</strong>, <strong>Kubernetes</strong>, <strong>Docker</strong>, and <strong>Google Cloud</strong>.</li>
                  <li>Collaborated with another developer to design and develop a new notification service within a microservice architecture, utilizing <strong>Java/Spring Boot</strong>, <strong>Redis</strong>, <strong>RabbitMQ</strong>, and <strong>PostgreSQL</strong>.</li>
                  <li>Developed in-app and email notification systems for a Content Management Application using <strong>Java Spring Boot</strong>, <strong>JavaScript</strong>, and <strong>Backbone.js</strong>.</li>
                </ul>
              </div>

              {/* Sandvine */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
                    <p className="text-lg text-gray-700 font-medium">Sandvine Corporation</p>
                    <p className="text-gray-600">Waterloo, ON, Canada</p>
                  </div>
                  <p className="text-gray-600 mt-1 md:mt-0">March 2021 - October 2023</p>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Designed and implemented a comprehensive dashboard solution using <strong>Typescript</strong>, <strong>Javascript</strong>, <strong>React</strong> and <strong>Redux</strong>, empowering customers to enhance application and network Quality of Experience (QoE) by providing real-time insights and network visibility.</li>
                  <li>Developed high-performance REST APIs using <strong>Node.js</strong>, <strong>Go</strong>, <strong>Docker</strong> and <strong>Java/Spring Boot</strong>, enabling seamless communication between the dashboard and backend systems.</li>
                  <li>Developed a <strong>Python</strong>-based tool and leveraged <strong>Jenkins</strong> to automate and schedule daily data exports from the <strong>Vertica</strong> database, eliminating the need for manual exports.</li>
                  <li>Developed integration testing with <strong>Testcafe</strong> that reduced times required for UI tests by 20% when releasing new features.</li>
                  <li>Implemented a high-performance pre-caching algorithm with <strong>Redis</strong> in <strong>Java/Spring Boot</strong>, resulting in a significant decrease of 75% in API response time.</li>
                </ul>
              </div>

              {/* Netwila */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Software Developer</h3>
                    <p className="text-lg text-gray-700 font-medium">Netwila Application Corporation</p>
                  </div>
                  <p className="text-gray-600 mt-1 md:mt-0">May 2020 - August 2020</p>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Developed RESTful web APIs with <strong>TypeScript</strong>, <strong>NestJS</strong> and <strong>MongoDB</strong> to enhance frontend consumption.</li>
                  <li>Designed and implemented dashboard for supply chain management using <strong>JavaScript</strong>, <strong>React</strong> and <strong>Redux</strong>.</li>
                  <li>Utilized <strong>Google Maps</strong> to design and implement interactive rail and ocean port maps for user visualization.</li>
                  <li>Utilized pagination and optimized UI rendering logic to reduce web application load times by 50%.</li>
                </ul>
              </div>

              {/* mgm technology */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Java Developer</h3>
                    <p className="text-lg text-gray-700 font-medium">mgm technology partners GmbH</p>
                  </div>
                  <p className="text-gray-600 mt-1 md:mt-0">July 2018 - August 2018</p>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Designed RESTful web APIs with <strong>Java/Spring Boot</strong> to improve the speed of loading by twice.</li>
                  <li>Improved fetching received mails from the mail server to the application by using cache and watcher.</li>
                  <li>Improved test coverage by 10% with new unit tests.</li>
                </ul>
              </div>

              {/* VieGrid */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Software Developer</h3>
                    <p className="text-lg text-gray-700 font-medium">VieGrid JSC</p>
                  </div>
                  <p className="text-gray-600 mt-1 md:mt-0">May 2016 - July 2017</p>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Developed tools with <strong>Python</strong> to crawl data to create datasets for the data team.</li>
                  <li>Enhanced the time image processing by 15% with <strong>OpenCV</strong> and <strong>C/C++</strong>.</li>
                  <li>Reduced the labeling images time by 50% for the data team by creating the image annotation tool in <strong>QT C++</strong>.</li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Education</h2>

              {/* Conestoga College */}
              <div className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Conestoga College</h3>
                    <p className="text-gray-700">Post Graduate. in Mobile Solutions Development, December 2020.</p>
                  </div>
                  <div className="text-gray-600 mt-1 md:mt-0">
                    <p>Waterloo, ON</p>
                    <p>Fall 2019 – Fall 2020</p>
                  </div>
                </div>
              </div>

              {/* University */}
              <div className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">University of Sciences, Hue University</h3>
                    <p className="text-gray-700">Bachelor of Science in Software Engineering, May 2016.</p>
                  </div>
                  <div className="text-gray-600 mt-1 md:mt-0">
                    <p>Hue, Vietnam</p>
                    <p>Fall 2012– Spring 2016</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Projects</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    <Link
                      href="https://www.simplepaystub.com/"
                      className="hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Simple Paystub
                    </Link>
                    <span className="text-gray-600 font-normal"> (2024)</span>
                  </h3>
                  <p className="text-gray-700">A lightweight pay stub generator built with Next.js, Tailwind CSS, Supabase, and React-PDF. Designed a clean, mobile-friendly UI for quick pay stub creation.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    <Link
                      href="https://congdv.com"
                      className="hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Portfolio Website
                    </Link>
                    <span className="text-gray-600 font-normal"> (present)</span>
                  </h3>
                  <p className="text-gray-700">Working on variety of projects using Next.js, Tailwind CSS, React, Prisma, PostgreSQL, C/C++, Go, JavaScript, Railway, Supabase, AWS and TypeScript.</p>
                </div>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Technical Skills</h2>

              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-900">Languages:</span>
                  <span className="text-gray-700 ml-2">Java, JavaScript/TypeScript, Python, Go, Bash.</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Frameworks:</span>
                  <span className="text-gray-700 ml-2">Spring Boot, React, Redux, Next.js, Node.js, Express, NestJS, Prisma, Tailwind CSS.</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Databases:</span>
                  <span className="text-gray-700 ml-2">Vertica, PostgreSQL, MongoDB, Redis, MS SQL.</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Tools/Technologies:</span>
                  <span className="text-gray-700 ml-2">Docker, Linux/Unix, Kubernetes, Git, Jenkins, RabbitMQ, Vercel, Railway, GCP, Supabase.</span>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  )
}
