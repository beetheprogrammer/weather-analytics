import { combineReducers } from "redux";
import AgencyAnalyticsReducer from "./AgencyAnalyticsDataStorage/AgencyAnalyticsDataStorage.reducers";

export default combineReducers({
	agencyAnalytics: AgencyAnalyticsReducer,
});
