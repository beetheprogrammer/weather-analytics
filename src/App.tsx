import { Component } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.styles";
import HomePage from "./pages/HomePage/HomePage.page";
import { THEME } from "./utils/themes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { IInitialState } from "./redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.reducers";
import AppTour from "./components/Apptour/AppTour";

class App extends Component<{
	theme?: string;
}> {
	state = {
		theme: "light",
	};
	// const city = "Ottawa"
	// const API_KEY = "65a128ee6dca33df0f5504396150b4c7"
	// const url = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

	render() {
		const theme = this.props?.theme ? this.props?.theme : "light"
		return (
			<>
				<ThemeProvider theme={THEME[theme]}>
					<GlobalStyle />
					<HomePage data-tut="reactour__intro" />
					<ToastContainer />
				</ThemeProvider>
				<AppTour />
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
	};
};

export default connect(mapStateToProps)(App);
