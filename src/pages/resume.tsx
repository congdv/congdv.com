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
                  href="https://congdv.com"
                  className="hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://congdv.com
                </Link>
              </div>
            </div>

            {/* Employment Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Employment</h2>

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
                  <li>Maintained and modernized the UI for an enterprise Content Management System using React, TypeScript, Backbone.js, and Marionette.</li>
                  <li>Led frontend integration of an in-app/email notification system, optimizing user experience and system responsiveness.</li>
                  <li>Co-designed and built a scalable microservice using Spring Boot, Redis, RabbitMQ, and PostgreSQL.</li>
                  <li>Deployed services with Google Kubernetes Engine and Cloud Foundry.</li>
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
                  <li>Built a real-time analytics dashboard using React, Redux, and TypeScript, improving network visibility for telecom clients.</li>
                  <li>Designed and implemented reusable React components, enabling the team to build new dashboard features 2x faster.</li>
                  <li>Developed REST APIs with Node.js, Go, and Spring Boot for seamless backend integration.</li>
                  <li>Developed a Python-based tool and leveraged Jenkins to automate and schedule daily data exports from the Vertica database, eliminating the need for manual exports.</li>
                  <li>Developed integration testing with Testcafe that reduced times required for UI tests by 20% when releasing new features.</li>
                  <li>Implemented a high-performance pre-caching algorithm with Redis in Java Spring Boot, resulting in a significant decrease of 75% in API response time.</li>
                  <li>Created a Java Database Connectivity(JDBC) library wrapper that integrated with Redis for speeding up slow queries by 100x and decreasing pressure on the database server.</li>
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
                  <li>Developed RESTful web APIs with TypeScript, NestJS and MongoDB to enhance frontend consumption.</li>
                  <li>Designed and implemented dashboard for supply chain management using JavaScript, React and Redux.</li>
                  <li>Utilized Google Maps to design and implement interactive rail and ocean port maps for user visualization.</li>
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
                  <li>Designed RESTful web APIs with Java Spring Boot to improve the speed of loading by twice.</li>
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
                  <li>Developed tools with Python to crawl data to create datasets for the data team.</li>
                  <li>Enhanced the time image processing by 15% with OpenCV and C/C++.</li>
                  <li>Reduced the labeling images time by 50% for the data team by creating the image annotation tool in QT C++.</li>
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
                  <p className="text-gray-700">A lightweight pay stub generator built with Next.js, Tailwind CSS, and React-PDF. Designed a clean, mobile-friendly UI for quick pay stub creation without user accounts.</p>
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
                  <p className="text-gray-700">Working on variety of projects using Next.js, Tailwind CSS, React, Prisma, PostgreSQL, C/C++, JavaScript, and TypeScript.</p>
                </div>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Technical Skills</h2>

              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-900">Languages:</span>
                  <span className="text-gray-700 ml-2">Javascript/Typescript, Java, Python, Bash.</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Tools/Frameworks:</span>
                  <span className="text-gray-700 ml-2">React, Redux, Node.js, NestJS, Next.js, Prisma, Tailwind CSS, Spring Boot, MongoDB, PostgreSQL, Redis, Git, Docker, Linux/Unix, Kubernetes, Jenkins, RabbitMQ.</span>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  )
}
