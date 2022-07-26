import React, { Component } from 'react'
import Header from '../../components/Header/Header.component'
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails.component'
import "./WeatherPage.styles.css"

class WeatherPage extends Component {
  render() {
    return (
      <div className='weatherPageContainer'>
        <Header/>
        <WeatherDetails/>
      </div>
    )
  }
}

export default WeatherPage
