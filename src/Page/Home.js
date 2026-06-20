import React from 'react'
import HomePageHero from '../Components/HomePageHero'
import StudyHome from '../Components/StudyHome'
import TeachersHome from '../Components/TeachersHome'
import Achievements from '../Components/Achievements'
import Books from '../Components/Books'

export default function Home() {
  return (
    <div className='-mt-10'>
        <HomePageHero/>
        <StudyHome/>
        <TeachersHome/>
        <Achievements/>
        <Books/>
    </div>
  )
}
