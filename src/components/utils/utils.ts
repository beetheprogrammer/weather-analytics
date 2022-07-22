import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";

export const GET_LOCATION_DATA = async (location: string) => {
	const result = await axios
		.get(
			`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=65a128ee6dca33df0f5504396150b4c7`
		)
		.then((res) => {
			return res.data;
		})
		.catch((error) => {
			toast.error("API_ERROR: We could not fetch Data for this location.");
		});

	return result;
};

export const KELVIN_TO_CELCIUS = (temp: number) => {
	return Math.round(temp - 273.15);
};

export const DAILY_TEMPS = (data: any) => {
	const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
	const dailyTemps: any = {};
	if (data) {
		data?.forEach((item: any, index: number) => {
			const date = item.dt_txt.split(" ")[0];
			if (!dailyTemps[date]) {
				const formattedDate: any = moment(date);
				dailyTemps[date] = {
					day: dayOfTheWeek[formattedDate.day()],
					temp_max: item.main.temp_max,
					temp_min: item.main.temp_min,
					weather: item.weather[0].icon,
				};
			} else {
				dailyTemps[date].temp_max =
					dailyTemps[date].temp_max > item.main.temp_max
						? dailyTemps[date].temp_max
						: item.main.temp_max;
				dailyTemps[date].temp_min =
					dailyTemps[date].temp_min < item.main.temp_min
						? dailyTemps[date].temp_min
						: item.main.temp_min;
			}
		});
	}
	return dailyTemps;
};

export const GET_GREETING = () => {
	const hour = moment().hour();

	if (hour > 16) {
		return "Good evening";
	}

	if (hour > 11) {
		return "Good afternoon";
	}

	return "Good morning";
};

export const CHART_OPTIONS = {
  layout: {
      padding: {
          top: 5,
          left: 35,
          right: 35,
          bottom: 10
      }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Temperature (Low/High)',
    },
  },
};

export const CHART_DATA = (data: {day: string, temp_max: number, temp_min: number, weather: string}[]) => {
  const dataValues = Object.values(data);
	return {
		labels: dataValues.map((item) => item.day),
		datasets: [
			{
				label: "Temperature mins",
				data: dataValues.map((item) => KELVIN_TO_CELCIUS(item.temp_min)),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 1)",
			},
			{
				label: "Temperature highs",
				data: dataValues.map((item) => KELVIN_TO_CELCIUS(item.temp_max)),
				borderColor: "#1F3554",
				backgroundColor: "#1F3554",
			},
		],
	};
};

