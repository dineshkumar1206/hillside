import React from 'react'
import Hero from './Hero'
import FloatingLeaves from '../components/FloatingLeaves'
import FastMovingProjects from './Fastmovingprojects'
import ExclusiveProjects from './ExclusiveProjectcopy'
import LatestPropertyLaunches from './LatestPropertyLaunches'

function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingLeaves />
      <Hero/>
      <ExclusiveProjects/>
      <FastMovingProjects/>
      {/* <EverythingYouNeed/> */}
      <LatestPropertyLaunches/>
    </div>
  )
}

export default Home

