import React, { Component } from "react";
import { connect } from "react-redux";
import { IInitialState } from "../../redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.reducers";
import { ICONS } from "../../utils/icons";
import { DAILY_TEMPS, KELVIN_TO_CELCIUS } from "../utils/utils";
import "./WeatherDetails.styles.css";

class WeatherDetails extends Component<{
	locationData?: any;
}> {

	render() {
    const { city, list } = this.props?.locationData || {};
		const iconId = list ? list[0]?.weather[0]?.icon : "10d";
		const Icon = ICONS[iconId as keyof typeof ICONS];
		const data = list ? DAILY_TEMPS(list) : [];
		return (
			<div className="weatherDetailsContainer">
				<div className="main">
					<p className="day">Today</p>
					<div className="details">
						<Icon
							style={{
								stroke: "#2E4369",
								strokeWidth: ".3",
								width: "60%",
								fill: "#CDF0F0",
							}}
							size={150}
						/>
						<div className="summary">
							<p className="figure">
								{list ? KELVIN_TO_CELCIUS(list[0].main.temp) : "-"}°
							</p>
							<p className="description">
								{list ? list[0].weather[0].main : "-"}
							</p>
						</div>
					</div>
				</div>
				<div className="sub">
					{Object.values(data)
						.slice(1)
						.slice(0,4)
						.map((data: any, index) => {
              const iconId = data ? data?.weather : "10d";
							const Icon = ICONS[iconId as keyof typeof ICONS];
							return (
								<div className="temperature" key={index}>
									<p className="day">{data.day}</p>
									<Icon
										style={{
											stroke: "#2E4369",
											strokeWidth: ".3",
											width: "60%",
											fill: "#CDF0F0",
										}}
                    color = "#CDF0F0"
										size={60}
                    className="icon"
									/>
									<p className="figure">
										{KELVIN_TO_CELCIUS(data.temp_min)}°
									</p>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

interface RootState {
	agencyAnalytics: IInitialState;
}

const mapStateToProps = (state: RootState) => {
	return {
		locationData: state.agencyAnalytics.locationData,
	};
};

export default connect(mapStateToProps)(WeatherDetails);

