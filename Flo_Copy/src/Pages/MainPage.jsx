import React from 'react'
import FirstRow from '../Components/FirstRow'
import NavigationBar from '../Components/NavigationBar'
import  Header  from '../Components/Header'
import Banner from '../Components/banner'

const MainPage = () => {
  return (
    <div>
        <FirstRow></FirstRow>
        <Header></Header>
        <NavigationBar></NavigationBar>
        <Banner></Banner>
    </div>
  )
}

export default MainPage