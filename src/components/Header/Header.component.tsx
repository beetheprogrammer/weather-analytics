import React, { Component } from "react";
import { connect } from "react-redux";
import { setLocationData, setSelectedLocation } from "../../redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.actions";
import { IInitialState } from "../../redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.reducers";
import "./Header.styles.css";
import classNames from "classnames";
import { GET_LOCATION_DATA } from "../utils/utils";

class Header extends Component<{
	savedLocations: string[] | undefined;
	selectedLocation: string;
	setSelectedLocation: Function;
	setLocationData: Function;
}> {
	handleLocationUpdate = async (location: string) => {
		const locationResponseData = await GET_LOCATION_DATA(location);
		if (locationResponseData) {
			this.props.setLocationData(locationResponseData);
			this.props.setSelectedLocation(location);
		}
	};
	render() {
		return (
			<div className="headerContainer">
				{this.props.savedLocations?.map((location, index) => (
					<p
						key={index}
						className={classNames("city", {
							activeCity: location === this.props.selectedLocation,
						})}
						onClick={() => this.handleLocationUpdate(location)}
					>
						{location}
					</p>
				))}
			</div>
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
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	setSelectedLocation: (location: string) =>
		dispatch(setSelectedLocation(location)),
	setLocationData: (data: Object) => dispatch(setLocationData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
