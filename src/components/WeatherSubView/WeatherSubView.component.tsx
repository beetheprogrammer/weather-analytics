import React, { Component } from 'react'
import { connect } from 'react-redux';
import { IInitialState } from '../../redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.reducers';
import { ICONS } from '../../utils/icons';
import { KELVIN_TO_CELCIUS } from '../utils/utils';
import WeatherOverviewItems from './WeatherOverviewItem';
import './WeatherSubView.styles.css'

class WeatherSubView extends Component<{
	locationData?: any;
}> {
	render() {
    const {city , list} = this.props?.locationData || {};
    const iconId = list ? list[0]?.weather[0]?.icon : "10d"
		const Icon = ICONS[iconId as keyof typeof ICONS];
		return (
			<div className="weatherSubView" data-tut="reactour__locationSubDetails">
				<div className="details">
					<div className="location">
						<div className="country">
							<p className="name">{city?.name || "-"}</p>
							<p>{city?.country || "-"}</p>
						</div>
						<p className="time">{list ? list[0].weather[0].main : "-"}</p>
					</div>
					<div className="weather">
						<p className="temperature">
							{list && KELVIN_TO_CELCIUS(list[0].main.temp)}°C
						</p>
						<p className="description">
							{list ? list[0].weather[0].description : "-"}
						</p>
					</div>
					<Icon className="icon" size={110} color="#634F37" />
				</div>
				<div className="overview">
					<p className="title">Today's overview</p>
					<WeatherOverviewItems locationData={this.props.locationData} />
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

export default connect(mapStateToProps)(WeatherSubView);

