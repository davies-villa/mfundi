import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Dashboard Menu */}
      <div className="flex-1 bg-white rounded-lg shadow-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Dashboard Menu</h2>
        
      </div>

      {/* Dashboard Content */}
      <div className="flex-3 bg-white rounded-lg shadow-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Dashboard Content</h2>
        
      </div>

    </div>
  )
}

export default Dashboard