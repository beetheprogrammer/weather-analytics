import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard.component';
import WeatherMainView from '../../components/WeatherMainView/WeatherMainView.component';
import WeatherSubView from '../../components/WeatherSubView/WeatherSubView.component';
import {
	HomePageContainer,
	WeatherDetailsContainer,
} from "./HomePage.styles";

const HomePage = () => {
  return (
		<HomePageContainer data-tut="reactour__documentation">
			<WeatherDetailsContainer>
				<Dashboard />
				<WeatherMainView />
				<WeatherSubView />
			</WeatherDetailsContainer>
		</HomePageContainer>
	);
}

export default HomePage