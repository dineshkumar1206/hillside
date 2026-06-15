import React from 'react'
import Hero from './Hero'
import FastMovingProjects from './Fastmovingprojects'
import ExclusiveProjects from './ExclusiveProject'

function Home() {
  return (
    <div>

      <Hero/>
      <ExclusiveProjects/>
      <FastMovingProjects/>
      {/* <EverythingYouNeed/>
      <LatestPropertyLaunches/> */}
    </div>
  )
}

export default Home