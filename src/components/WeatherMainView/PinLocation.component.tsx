import React, { Component } from 'react'
import {
	PinLocation,
} from "./WeatherMainView.styles";
import { BsPinMap } from "react-icons/bs";

type LocationPinProps = {
	color: string;
	rounded: boolean;
  onClick: Function
};

class LocationPin extends Component<LocationPinProps> {
	render() {
		return (
			<PinLocation
				data-tut="reactour__pinLocation"
				rounded={this.props.rounded}
				onClick={() => this.props.onClick()}
			>
				<BsPinMap color={this.props.color} />
			</PinLocation>
		);
	}
}

export default LocationPin;
