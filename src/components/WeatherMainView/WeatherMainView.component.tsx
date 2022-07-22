import { Component } from "react";
import {
	SearchBar,
	WeatherItem,
} from "./WeatherMainView.styles";
import "./weatherMainView.styles.css";
import { BsSearch } from "react-icons/bs";
import { ThemeConsumer } from "styled-components";
import LocationPin from "./PinLocation.component";
import { StyledText } from "../utils/CustomText/StyledText.styles";
import { FONTS } from "../../utils/fonts";
import { ICONS } from "../../utils/icons";
import { connect } from "react-redux";
import { IInitialState } from "../../redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.reducers";
import {
  CHART_DATA,
  CHART_OPTIONS,
	DAILY_TEMPS,
	GET_GREETING,
	GET_LOCATION_DATA,
	KELVIN_TO_CELCIUS,
} from "../utils/utils";
import {
  addLocationPin,
	setLocationData,
	setSelectedLocation,
} from "../../redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.actions";
import { toast } from "react-toastify";
import moment from "moment";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);


class WeatherMainView extends Component<{
	locationData?: any;
	setSelectedLocation: Function;
	setLocationData: Function;
	addLocationPin: Function;
	selectedLocation: string;
	savedLocations: string[] | undefined;
}> {
	state = {
		enteredLocation: "",
	};

	handlePin = () => {
		if (this.props.savedLocations?.includes(this.props.selectedLocation)) {
			toast.error("Sorry, this location is already pinned");
		} else {
			this.props.addLocationPin(this.props.selectedLocation);
      toast.success("This location have been pinned");
		}
	};

	handleLocationUpdate = async () => {
		const locationResponseData = await GET_LOCATION_DATA(
			this.state.enteredLocation
		);
		if (locationResponseData) {
			this.props.setLocationData(locationResponseData);
			this.props.setSelectedLocation(this.state.enteredLocation);
		} else {
			toast.error(
				"Sorry we could not find any information for that location. Please try again"
			);
		}
	};

	render() {
		const { list } = this.props.locationData;
		const data = list ? DAILY_TEMPS(list) : [];
    const chartDataSet = CHART_DATA(data);

		return (
			<ThemeConsumer>
				{(theme) => (
					<div data-tut="reactour__locationMainDetails">
						<div className="weatherDetailsMainView--header">
							<div>
								<StyledText size={FONTS.type_2} bold={true} isMainColor={true}>
									{GET_GREETING()} !
								</StyledText>
								<StyledText bold={true}>
									{moment().toDate().toDateString()}
								</StyledText>
							</div>
							<div className="details">
								<div className="search">
									<SearchBar data-tut="reactour__locationSearch">
										<input
											type="search"
											placeholder="Search location here"
											value={this.state.enteredLocation}
											onChange={(e) =>
												this.setState({ enteredLocation: e.target.value })
											}
										/>
										{/* <button onClick={() => this.handleLocationUpdate}>hi</button> */}
										{this.state.enteredLocation && (
											<BsSearch
												className="icon"
												color={theme.backgroundColorOuterDarker}
												onClick={() => this.handleLocationUpdate()}
                        style={{cursor: "pointer"}}
											/>
										)}
									</SearchBar>
									<LocationPin
										rounded={false}
										color={theme.backgroundColorOuterDarker}
										onClick={() => this.handlePin()}
									/>
								</div>
							</div>
						</div>
						<div className="forcastContainer">
							<StyledText size={FONTS.type_1} bold={true} isMainColor={true}>
								5 Day forcast
							</StyledText>
							<div className="weatherItems">
								{Object.values(data)
									.slice(1)
									.map((data: any, index) => {
										const iconId = data ? data?.weather : "10d";
										const Icon = ICONS[iconId as keyof typeof ICONS];
										return (
											<WeatherItem key={index}>
												<Icon size={60} color="#634F37" />
												<div>
													<StyledText bold={true}>{data.day}</StyledText>
													<StyledText bold={true}>
														{KELVIN_TO_CELCIUS(data.temp_min)}°C -{" "}
														{KELVIN_TO_CELCIUS(data.temp_max)}°C{" "}
													</StyledText>
												</div>
											</WeatherItem>
										);
									})}
							</div>
						</div>
						<div className="chartContainer"></div>
						<Line
							options={CHART_OPTIONS}
							data={chartDataSet}
							style={{ width: "90%" }}
						/>
					</div>
				)}
			</ThemeConsumer>
		);
	}
}

interface RootState {
	agencyAnalytics: IInitialState;
}

const mapStateToProps = (state: RootState) => {
	return {
		savedLocations: state.agencyAnalytics.savedLocations,
		selectedLocation: state.agencyAnalytics.selectedLocation,
		locationData: state.agencyAnalytics.locationData,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	setSelectedLocation: (location: string) =>
		dispatch(setSelectedLocation(location)),
	setLocationData: (data: Object) => dispatch(setLocationData(data)),
	addLocationPin: (location: string) => dispatch(addLocationPin(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherMainView);
