import { Component } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.styles";
import HomePage from "./pages/HomePage/HomePage.page";
import { THEME } from "./utils/themes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { IInitialState } from "./redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.reducers";
import AppTour from "./components/Apptour/AppTour";
import { GET_LOCATION_DATA } from "./components/utils/utils";
import { setLocationData } from "./redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.actions";
import WeatherPage from "./pages/WeatherPage/WeatherPage.page";
import "./App.styles.css"

class App extends Component<{
	theme?: string;
	selectedLocation: string;
	setLocationData: Function;
	locationData?: Object;
}> {
	async componentDidMount() {
		const locationResponseData = await GET_LOCATION_DATA(
			this.props.selectedLocation
		);
		this.props.setLocationData(locationResponseData);
	}

	render() {
		const theme = this.props?.theme ? this.props?.theme : "light";
		return (
			<>
				{this.props.locationData ? (
					<>
						<ThemeProvider theme={THEME[theme]}>
							<GlobalStyle />
							{/* <HomePage data-tut="reactour__intro" /> */}
							<WeatherPage />
							<ToastContainer />
						</ThemeProvider>
						{/* <AppTour /> */}
					</>
				) : (
					<div>Spinner</div>
				)}
			</>
		);
	}
}

interface RootState {
	agencyAnalytics: IInitialState;
}

const mapStateToProps = (state: RootState) => {
	return {
		theme: state.agencyAnalytics.theme,
		selectedLocation: state.agencyAnalytics.selectedLocation,
		locationData: state.agencyAnalytics.locationData,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	setLocationData: (data: Object) => dispatch(setLocationData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
