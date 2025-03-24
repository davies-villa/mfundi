import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">Welcome to Mfundi Learn</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-6">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
          >
            Count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Start your learning journey with Mfundi Learn
          </p>
        </div>
        
        <p className="text-gray-500">
          Built with modern web technologies for an optimal learning experience
        </p>
      </div>
    </div>
  )
}

export default App