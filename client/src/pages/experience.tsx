export default function Experience() {
  return (
    <div className="min-h-screen bg-bgBlack text-tWhiteSec p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-tBlue mb-6">// My journey & experiences :</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>
          
          <div className="space-y-8">
            {/* Education */}
            <div className="timeline-item flex items-start gap-6">
              <div className="relative z-10">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-bgBlack"></div>
              </div>
              <div className="flex-1 bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-tBlue transition-all duration-300 transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-tWhiteSec mb-2">Bachelor of Technology</h3>
                <h4 className="text-lg text-tBlue mb-2">Raghu Institute of Technology</h4>
                <div className="text-sm text-gray-400 mb-3">2022 - 2026 | Electronics and Communication Engineering</div>
                <p className="text-gray-300 leading-relaxed">
                  Currently in final year with CGPA: 7.75/10. Specialized in Electronics & Communication with focus on IoT, embedded systems, and modern web technologies.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Electronics</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Communication</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">IoT</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Embedded Systems</span>
                </div>
              </div>
            </div>

            {/* Current Position */}
            <div className="timeline-item flex items-start gap-6">
              <div className="relative z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-bgBlack animate-pulse"></div>
              </div>
              <div className="flex-1 bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-tBlue transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-tWhiteSec">Full Stack Web Developer</h3>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Current</span>
                </div>
                <h4 className="text-lg text-tBlue mb-2">Slash Mark</h4>
                <div className="text-sm text-gray-400 mb-3">Current | Remote</div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Working on real-time client projects using the MERN stack for building scalable applications. Responsible for both frontend and backend development with focus on user experience and performance optimization.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <h5 className="text-tWhiteSec font-medium mb-2">Key Responsibilities:</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Building full-stack web applications using MERN stack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Implementing responsive designs and user interfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Working directly with client requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Performance optimization and scalability</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">React.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">MongoDB</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Express.js</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">JavaScript</span>
                </div>
              </div>
            </div>

            {/* YBI Foundation */}
            <div className="timeline-item flex items-start gap-6">
              <div className="relative z-10">
                <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-bgBlack"></div>
              </div>
              <div className="flex-1 bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-tBlue transition-all duration-300 transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-tWhiteSec mb-2">AI & ML with Data Science</h3>
                <h4 className="text-lg text-tBlue mb-2">YBI Foundation</h4>
                <div className="text-sm text-gray-400 mb-3">Dec 2024 – Feb 2025 | Internship</div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Trained on real-world datasets and applied Machine Learning models using Python. Gained hands-on experience with data preprocessing, model training, and evaluation techniques.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <h5 className="text-tWhiteSec font-medium mb-2">Key Achievements:</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Worked with real-world datasets for ML model training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Data preprocessing and feature engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Applied various ML algorithms and techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Model evaluation and performance optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Python</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Machine Learning</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Data Science</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Pandas</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">NumPy</span>
                </div>
              </div>
            </div>

            {/* Data Pro */}
            <div className="timeline-item flex items-start gap-6">
              <div className="relative z-10">
                <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-bgBlack"></div>
              </div>
              <div className="flex-1 bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-tBlue transition-all duration-300 transform hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-tWhiteSec mb-2">Java Full Stack Developer</h3>
                <h4 className="text-lg text-tBlue mb-2">Data Pro</h4>
                <div className="text-sm text-gray-400 mb-3">Aug 2023 – Oct 2023 | Internship</div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Gained experience in building robust backend services and responsive front-end interfaces using Java technologies. Worked on database integration and API development.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <h5 className="text-tWhiteSec font-medium mb-2">Key Learning:</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Backend development with Java and Spring Boot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Database integration and management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>RESTful API development and testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Frontend-backend integration</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Java</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Spring Boot</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">SQL</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">REST APIs</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Database</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

