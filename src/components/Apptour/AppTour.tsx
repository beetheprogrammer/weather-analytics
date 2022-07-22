import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { connect } from "react-redux";
import { Component } from "react";
import { IInitialState } from "../../redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.reducers";
import { tourConfig } from "../../utils/AppTour";
import { setIsTourOpen } from "../../redux/AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.actions";

class AppTour extends Component<{
	isTourOpen?: boolean;
	setIsTourOpen: Function;
}> {
	disableBody = (target: any) => disableBodyScroll(target);
	enableBody = (target: any) => enableBodyScroll(target);

	closeTour = () => this.props.setIsTourOpen(false);

	render() {
		return (
			<Tour
				onRequestClose={this.closeTour}
				steps={tourConfig}
				isOpen={this.props.isTourOpen || false}
				maskClassName="mask"
				onAfterOpen={this.disableBody}
				onBeforeClose={this.enableBody}
			/>
		);
	}
};

interface RootState {
	agencyAnalytics: IInitialState;
}

const mapStateToProps = (state: RootState) => {
	return {
		isTourOpen: state.agencyAnalytics.isTourOpen,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	setIsTourOpen: () => dispatch(setIsTourOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppTour);
