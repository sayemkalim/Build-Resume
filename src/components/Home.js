import React from 'react'
import Body from './Body/Body'
import Header from './Header'
import Footer from './Footer/Footer'
import ScrollButton from './ScrollButton/ScrollButton'

function Home({user}) {
  return (
    <div>
        <Header  user={user}/>
        <Body />
        <Footer/> 
        <ScrollButton/>
    </div>
  )
}

export default Home