import React, { Component } from "react";
import { FiWind } from "react-icons/fi";
import { MdOutlineWaves } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { DiDigitalOcean } from "react-icons/di";
import { BsSunset, BsSunFill } from "react-icons/bs";
import moment from "moment";

class WeatherOverviewItems extends Component<{
	locationData?: any;
}> {
	render() {
    const { city, list } = this.props?.locationData;
    const sunrise = city ? moment.utc(city.sunrise,'X').add(city.timezone,'seconds').format('HH:mm a') : "-";
    const sunset = city ? moment
			.utc(city.sunset, "X")
			.add(city.timezone, "seconds")
			.format("HH:mm a") : "-"
    const sunriseTimeLine = city ? moment(
			moment.utc(city.sunrise, "X").add(city.timezone, "seconds").format()
		).fromNow() : "-";
    const sunsetTimeLine = city ? moment(
			moment.utc(city.sunset, "X").add(city.timezone, "seconds").format()
		).fromNow() : "-";

		return (
			<div className="weatherOverview">
				<div className="itemsContainer">
					<div className="item">
						<p className="value">{list ? list[0]?.wind.speed : "-"}</p>
						<p className="valueType">Wind speed (m/s)</p>
						<FiWind size={80} className="icon" />
					</div>
					<div className="item">
						<p className="value">{list ? list[0]?.main?.pressure : "-"}</p>
						<p>Pressure (hPa)</p>
						<MdOutlineWaves size={80} className="icon" />
					</div>
					<div className="item">
						<p className="value">{list ? list[0]?.main?.humidity : "-"}</p>
						<p>Humidity (%)</p>
						<WiHumidity size={80} className="icon" />
					</div>
					<div className="item">
						<p className="value">
							{list ? (list[0]?.pop * 100).toFixed(2) : "-"}
						</p>
						<p>Precipitation (%)</p>
						<DiDigitalOcean size={80} className="icon" />
					</div>
				</div>
				<div className="sunEvents">
					<div className="sunEvent">
						<BsSunFill size={40} className="icon" />
						<div className="">
							<p>Sunrise</p>
							<p className="time">{sunrise}</p>
						</div>
						<p className="timeHistory">{sunriseTimeLine}</p>
					</div>
					<div className="sunEvent">
						<BsSunset size={40} className="icon" />
						<div className="">
							<p>Sunset</p>
							<p className="time">{sunset}</p>
						</div>
						<p className="timeHistory">{sunsetTimeLine}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default WeatherOverviewItems;
