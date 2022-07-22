import { AgencyAnalyticsActionTypes } from "./AgencyAnalyticsDataStorage.types";

export const toggleTheme = () => ({
	type: AgencyAnalyticsActionTypes.SET_THEME,
});

export const setSelectedLocation = (data: string) => ({
	type: AgencyAnalyticsActionTypes.SET_SELECTED_LOCATION,
	payload: data,
});

export const setLocationData = (data: Object) => ({
	type: AgencyAnalyticsActionTypes.SET_LOCATION_DATA,
	payload: data,
});

export const addLocationPin = (location: string) => ({
	type: AgencyAnalyticsActionTypes.ADD_PIN,
	payload: location,
});

export const setIsTourOpen = () => ({
	type: AgencyAnalyticsActionTypes.TOGGLE_TOUR_OPEN,
});

