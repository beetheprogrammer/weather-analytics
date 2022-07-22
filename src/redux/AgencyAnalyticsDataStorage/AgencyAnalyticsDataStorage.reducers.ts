import { AgencyAnalyticsActionTypes } from "./AgencyAnalyticsDataStorage.types";

export interface IInitialState {
	theme?: string;
	savedLocations?: string[];
	selectedLocation: string;
	locationData?: Object;
	isTourOpen? : boolean;
}

const INITIAL_STATE = {
	theme: "dark",
	savedLocations: ["Ottawa", "Moscow", "Tokyo"],
	selectedLocation: "Ottawa",
	locationData: {},
	isTourOpen: true,
};

const AgencyAnalyticsReducer = (state = INITIAL_STATE, action : any) => {
	switch (action.type) {
		case AgencyAnalyticsActionTypes.SET_THEME:
			return {
				...state,
				theme: state.theme === "light" ? "dark" : "light",
			};
		case AgencyAnalyticsActionTypes.SET_SELECTED_LOCATION:
			return {
				...state,
				selectedLocation: action.payload,
			};
		case AgencyAnalyticsActionTypes.ADD_PIN:
			return {
				...state,
				savedLocations: [...state.savedLocations, action.payload],
			};
		case AgencyAnalyticsActionTypes.SET_LOCATION_DATA:
			return {
				...state,
				locationData: action.payload,
			};
		case AgencyAnalyticsActionTypes.TOGGLE_TOUR_OPEN:
			return {
				...state,
				isTourOpen: !state.isTourOpen,
			};
		default:
			return state;
	}
};

export default AgencyAnalyticsReducer;
