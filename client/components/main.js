import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
        <div id="title"  className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div><Link to="/dashboard/profile/71cfff71-34e1-46eb-95ad-29637d913771">Go to Profile</Link></div>
          <div><Link to="/dashboard">Go to Root</Link></div>
          Main
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
