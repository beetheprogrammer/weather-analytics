import React, { Component } from "react";
import {
	SavedLocationIcon,
	SavedLocations,
	SavedLocation,
  ActiveDot,
} from "./Dashboard.styles";
import "./Dashboard.styles.css";
import { MdLocationOn } from "react-icons/md";
import { BiSun } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";
import { connect } from "react-redux";
import { IInitialState } from "../../redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.reducers";
import { setLocationData, setSelectedLocation, toggleTheme } from "../../redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.actions";
import { GET_LOCATION_DATA } from "../utils/utils";


class Dashboard extends Component<{
	savedLocations: string[] | undefined;
	selectedLocation: string;
	setSelectedLocation: Function;
	setLocationData: Function;
	locationData?: Object;
  theme?: string;
  toggleTheme: Function;
}> {
	async componentDidMount() {
		const locationResponseData = await GET_LOCATION_DATA(
			this.props.selectedLocation
		);
		this.props.setLocationData(locationResponseData);
	}

	handleLocationUpdate = async (location: string) => {
		const locationResponseData = await GET_LOCATION_DATA(location);
    if (locationResponseData) {
			this.props.setLocationData(locationResponseData);
			this.props.setSelectedLocation(location);
		}
	};

  handleThemeChange = () => {
    this.props.toggleTheme();
  }

	render() {
		const { savedLocations, selectedLocation } = this.props;
    console.log("THEME", this.props.theme);
    const ThemeIcon = this.props.theme === "dark" ? BiSun : BsMoonFill

		return (
			<div className="dashboard">
				<div className="themeButton" data-tut="reactour__toggleTheme">
					<ThemeIcon size={42} onClick={() => this.handleThemeChange()} />
				</div>
				<div>
					<h3>Saved locations</h3>
					<SavedLocations data-tut="reactour__savedLocations">
						{savedLocations?.map((location) => {
							return (
								<SavedLocation
									active={
										selectedLocation.toLocaleLowerCase() ===
										location.toLocaleLowerCase()
									}
									onClick={() => this.handleLocationUpdate(location)}
									key={location}
								>
									<>
										<SavedLocationIcon>
											<MdLocationOn size={22} />
										</SavedLocationIcon>
										<p>{location}</p>
									</>
									<ActiveDot
										active={
											selectedLocation.toLocaleLowerCase() ===
											location.toLocaleLowerCase()
										}
										className="activeDot"
									/>
								</SavedLocation>
							);
						})}
					</SavedLocations>
				</div>
			</div>
		);
	}
}

interface RootState {
	agencyAnalytics: IInitialState;
}

const mapStateToProps = (state: RootState) =>{
  return {
		savedLocations: state.agencyAnalytics.savedLocations,
		selectedLocation: state.agencyAnalytics.selectedLocation,
		locationData: state.agencyAnalytics.locationData,
		theme: state.agencyAnalytics.theme,
	};};

const mapDispatchToProps = (dispatch: any) => ({
	setSelectedLocation: (location: string) =>
		dispatch(setSelectedLocation(location)),
	setLocationData: (data: Object) => dispatch(setLocationData(data)),
	toggleTheme: () => dispatch(toggleTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
