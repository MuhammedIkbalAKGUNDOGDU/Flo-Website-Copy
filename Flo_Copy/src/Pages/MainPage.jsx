import React from 'react'
import FirstRow from '../Components/FirstRow'
import NavigationBar from '../Components/NavigationBar'
import  Header  from '../Components/Header'

const MainPage = () => {
  return (
    <div>
        <FirstRow></FirstRow>
        <Header></Header>
        <NavigationBar></NavigationBar>
    </div>
  )
}

export default MainPage