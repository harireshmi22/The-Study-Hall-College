import React, { useState } from 'react'

const CourseSelectionQuiz = ({ onClose, onResult }) => {
  const [scores, setScores] = useState({ BBA: 0, BCA: 0, BJMC: 0, BCom: 0 })
  const [answered, setAnswered] = useState({})
  const [showResult, setShowResult] = useState(false)

  const quizData = [
    {
      question: "1. What do you enjoy doing the most?",
      options: [
        { text: "Leading group projects and planning strategies", type: "BBA" },
        { text: "Solving logic puzzles and working on computers", type: "BCA" },
        { text: "Writing stories, speaking, or creating content", type: "BJMC" },
        { text: "Managing money and organizing finances", type: "BCom" }
      ]
    },
    {
      question: "2. Where do you see yourself in 5 years?",
      options: [
        { text: "Running a startup or managing a team", type: "BBA" },
        { text: "Developing a popular app or software", type: "BCA" },
        { text: "Reporting on TV or running a PR campaign", type: "BJMC" },
        { text: "Working as a financial analyst or accountant", type: "BCom" }
      ]
    },
    {
      question: "3. Which high school subject did you find most interesting?",
      options: [
        { text: "Business Studies or Economics", type: "BBA" },
        { text: "Computer Science or Math", type: "BCA" },
        { text: "English, Literature, or Arts", type: "BJMC" },
        { text: "Accountancy or Statistics", type: "BCom" }
      ]
    },
    {
      question: "4. How do you usually solve a complex problem?",
      options: [
        { text: "Delegate tasks and create a master plan", type: "BBA" },
        { text: "Break it down logically and find an automated fix", type: "BCA" },
        { text: "Talk it out and brainstorm creative ideas", type: "BJMC" },
        { text: "Look at the numbers and do a cost-benefit analysis", type: "BCom" }
      ]
    },
    {
      question: "5. What is your dream workplace environment?",
      options: [
        { text: "A dynamic corporate boardroom", type: "BBA" },
        { text: "A modern tech campus", type: "BCA" },
        { text: "A bustling newsroom or media studio", type: "BJMC" },
        { text: "A top-tier bank or audit firm", type: "BCom" }
      ]
    },
    {
      question: "6. What kind of reading material do you prefer?",
      options: [
        { text: "Forbes, entrepreneur biographies, or business magazines", type: "BBA" },
        { text: "Tech blogs, coding forums, or gadget reviews", type: "BCA" },
        { text: "Novels, pop-culture articles, or global news", type: "BJMC" },
        { text: "Financial reports or market analysis", type: "BCom" }
      ]
    },
    {
      question: "7. What is your role in a group of friends?",
      options: [
        { text: "The planner who organizes everything", type: "BBA" },
        { text: "The tech support who fixes everyone's devices", type: "BCA" },
        { text: "The storyteller who keeps everyone entertained", type: "BJMC" },
        { text: "The treasurer who calculates who owes what", type: "BCom" }
      ]
    },
    {
      question: "8. How do you handle a sudden crisis?",
      options: [
        { text: "Take charge immediately and direct others", type: "BBA" },
        { text: "Troubleshoot the root cause systematically", type: "BCA" },
        { text: "Communicate clearly to keep everyone calm", type: "BJMC" },
        { text: "Evaluate the risks and minimize losses", type: "BCom" }
      ]
    },
    {
      question: "9. Which software/tools do you prefer using?",
      options: [
        { text: "PowerPoint, Trello, or management tools", type: "BBA" },
        { text: "VS Code, GitHub, or programming environments", type: "BCA" },
        { text: "Premiere Pro, Canva, or WordPress", type: "BJMC" },
        { text: "Excel, Tally, or accounting software", type: "BCom" }
      ]
    },
    {
      question: "10. What excites you the most about the future?",
      options: [
        { text: "New market trends and global businesses", type: "BBA" },
        { text: "Artificial Intelligence and new technologies", type: "BCA" },
        { text: "Viral trends and the evolution of digital media", type: "BJMC" },
        { text: "The stock market and global economy", type: "BCom" }
      ]
    },
    {
      question: "11. If you had an extra hour every day, how would you spend it?",
      options: [
        { text: "Networking and building connections", type: "BBA" },
        { text: "Learning a new coding language", type: "BCA" },
        { text: "Writing a blog or shooting a video", type: "BJMC" },
        { text: "Tracking expenses or learning about investments", type: "BCom" }
      ]
    },
    {
      question: "12. What is your preferred way to present information?",
      options: [
        { text: "A clean, persuasive pitch deck", type: "BBA" },
        { text: "A live demonstration of how things work", type: "BCA" },
        { text: "A highly engaging video or speech", type: "BJMC" },
        { text: "Detailed spreadsheets and charts", type: "BCom" }
      ]
    },
    {
      question: "13. What sounds like the best type of competition to enter?",
      options: [
        { text: "A business case-study competition", type: "BBA" },
        { text: "A 24-hour coding hackathon", type: "BCA" },
        { text: "A national debate or creative writing contest", type: "BJMC" },
        { text: "An accounting or math olympiad", type: "BCom" }
      ]
    },
    {
      question: "14. How do you view money?",
      options: [
        { text: "Capital to invest and grow a business", type: "BBA" },
        { text: "A tool to upgrade my tech setup", type: "BCA" },
        { text: "A means to fund my creative projects", type: "BJMC" },
        { text: "An asset to be carefully managed and multiplied", type: "BCom" }
      ]
    },
    {
      question: "15. Which famous figure inspires you the most?",
      options: [
        { text: "A top CEO or successful entrepreneur", type: "BBA" },
        { text: "A tech founder or software pioneer", type: "BCA" },
        { text: "A famous journalist, director, or author", type: "BJMC" },
        { text: "A legendary investor or economist", type: "BCom" }
      ]
    },
    {
      question: "16. What is your natural communication style?",
      options: [
        { text: "Direct, confident, and persuasive", type: "BBA" },
        { text: "Concise, logical, and straight to the point", type: "BCA" },
        { text: "Expressive, empathetic, and engaging", type: "BJMC" },
        { text: "Fact-based, analytical, and precise", type: "BCom" }
      ]
    },
    {
      question: "17. What is an absolute dealbreaker for you in a job?",
      options: [
        { text: "No room for promotion or leadership", type: "BBA" },
        { text: "Using outdated or slow technology", type: "BCA" },
        { text: "Boring, repetitive tasks with no creativity", type: "BJMC" },
        { text: "Unstable pay or a messy organizational structure", type: "BCom" }
      ]
    },
    {
      question: "18. What do you naturally pay attention to when visiting a new cafe?",
      options: [
        { text: "How efficiently the staff is managed", type: "BBA" },
        { text: "The POS system and Wi-Fi speed", type: "BCA" },
        { text: "The aesthetic, music, and marketing vibe", type: "BJMC" },
        { text: "The pricing menu and profit margins", type: "BCom" }
      ]
    },
    {
      question: "19. Which skill do you most want to master?",
      options: [
        { text: "Negotiation and public speaking", type: "BBA" },
        { text: "Software architecture and development", type: "BCA" },
        { text: "Storytelling and audience psychology", type: "BJMC" },
        { text: "Financial forecasting and taxation", type: "BCom" }
      ]
    },
    {
      question: "20. What is your ultimate career goal?",
      options: [
        { text: "To run my own business empire", type: "BBA" },
        { text: "To invent technology that changes lives", type: "BCA" },
        { text: "To influence the masses and inform the public", type: "BJMC" },
        { text: "To become a Chief Financial Officer (CFO)", type: "BCom" }
      ]
    }
  ]

  const courseDescriptions = {
    BBA: {
      title: "Bachelor of Business Administration",
      description: "You are a natural leader! BBA is perfect for your strategic mind. You thrive when organizing teams, planning big-picture goals, and navigating the business world.",
      color: "from-blue-500 to-cyan-500",
      icon: "📊"
    },
    BCA: {
      title: "Bachelor of Computer Applications",
      description: "You are a tech wizard! BCA will help you build the future. You have a highly logical mind and a deep curiosity for how digital systems function.",
      color: "from-purple-500 to-pink-500",
      icon: "💻"
    },
    BJMC: {
      title: "Bachelor of Arts in Journalism & Mass Communication",
      description: "You are a storyteller! BJMC is your path to the media world. You have a gift for communication, creativity, and capturing an audience's attention.",
      color: "from-orange-500 to-red-500",
      icon: "📰"
    },
    BCom: {
      title: "Bachelor of Commerce",
      description: "You are the backbone of business! BCom fits your love for finance. You have a sharp analytical mind, a respect for numbers, and an eye for detail.",
      color: "from-green-500 to-emerald-500",
      icon: "💰"
    }
  }

  const selectOption = (questionIndex, category) => {
    const questionId = `q${questionIndex}`
    
    setScores(prev => {
      const newScores = { ...prev }
      
      // Decrease previous score if they changed their mind
      if (answered[questionId]) {
        newScores[answered[questionId]]--
      }
      
      // Increase new score
      newScores[category]++
      
      return newScores
    })
    
    setAnswered(prev => ({
      ...prev,
      [questionId]: category
    }))
  }

  const calculateResult = () => {
    if (Object.keys(answered).length < quizData.length) {
      const missing = quizData.length - Object.keys(answered).length
      alert(`Please answer all questions! You missed ${missing} question(s).`)
      return
    }

    setShowResult(true)
  }

  const getResult = () => {
    const maxScore = Math.max(...Object.values(scores))
    const topCategories = Object.keys(scores).filter(category => scores[category] === maxScore)

    if (topCategories.length === 1) {
      const result = topCategories[0]
      const course = courseDescriptions[result]
      return {
        type: "single",
        course: result,
        score: maxScore,
        courseInfo: course
      }
    } else {
      const tiedCourses = topCategories.map(cat => courseDescriptions[cat])
      return {
        type: "multiple",
        courses: topCategories,
        score: maxScore,
        courseInfo: tiedCourses
      }
    }
  }

  const resetQuiz = () => {
    setScores({ BBA: 0, BCA: 0, BJMC: 0, BCom: 0 })
    setAnswered({})
    setShowResult(false)
  }

  const progressPercentage = (Object.keys(answered).length / quizData.length) * 100

  if (showResult) {
    const result = getResult()
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 text-center rounded-t-3xl">
              <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">Your Ideal Path</h2>
              <p className="text-blue-100">Based on your responses, here's your perfect match!</p>
            </div>
            
            <div className="p-8">
              {result.type === "single" ? (
                <div className="text-center space-y-6">
                  <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${result.courseInfo.color} text-white rounded-full font-bold text-lg`}>
                    <span className="text-2xl">{result.courseInfo.icon}</span>
                    {result.courseInfo.title}
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                    <p className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: result.courseInfo.description }} />
                    <p className="text-sm text-gray-500 mt-4">
                      <em>(You scored {result.score} out of 20 for this path!)</em>
                    </p>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => onResult && onResult(result.course)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      Learn More About {result.course}
                    </button>
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Retake Test
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Multiple Paths!</h3>
                  <p className="text-gray-700">
                    You have incredibly diverse interests! You tied for <strong>{result.courses.join(" & ")}</strong>.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {result.courseInfo.map((course, index) => (
                      <div key={index} className={`bg-gradient-to-r ${course.color} text-white p-4 rounded-xl`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{course.icon}</span>
                          <span className="font-bold">{course.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-yellow-800">
                      Because you are multi-talented, we highly recommend speaking with a Study Hall College admission counselor to help you narrow down the perfect fit between these amazing programs.
                    </p>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      Retake Test
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Course Selection Assistant</h2>
                <p className="text-gray-600">Don't know what to choose? Take a test.</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progress</span>
              <span>{Object.keys(answered).length} / {quizData.length} questions</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {quizData.map((question, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl p-6 transition-all duration-300 ${
                answered[`q${index}`] 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                  answered[`q${index}`]
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {answered[`q${index}`] ? '✓' : index + 1}
                </div>
                <p className="text-lg font-semibold text-gray-900 flex-1">{question.question}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {question.options.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    onClick={() => selectOption(index, option.type)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      answered[`q${index}`] === option.type
                        ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        answered[`q${index}`] === option.type
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {answered[`q${index}`] === option.type && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="text-sm leading-relaxed">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-3xl">
          <div className="flex gap-4">
            <button
              onClick={calculateResult}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all"
            >
              Show Result
            </button>
            <button
              onClick={resetQuiz}
              className="px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseSelectionQuiz
