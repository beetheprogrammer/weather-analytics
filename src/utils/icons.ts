import { BsFillSunFill, BsFillMoonFill, BsCloudMoonFill, BsCloudSunFill, BsFillCloudRainFill, BsFillCloudRainHeavyFill, BsFillCloudLightningRainFill, BsSnow2 } from "react-icons/bs";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";
import { AiOutlineCloud } from "react-icons/ai";
import { WiWindy } from "react-icons/wi";
import { TiWeatherPartlySunny } from "react-icons/ti";

export const ICONS = {
	"01d": BsFillSunFill,
	"01n": BsFillMoonFill,
  "02d": FaCloudSun,
  "02n": FaCloudMoon,
  "03d": BsCloudSunFill,
  "03n": BsCloudMoonFill,
  "04d": AiOutlineCloud,
  "04n": AiOutlineCloud,
  "09d": BsFillCloudRainFill,
  "09n": BsFillCloudRainFill,
  "10d": BsFillCloudRainHeavyFill,
  "10n": BsFillCloudRainHeavyFill,
  "11d": BsFillCloudLightningRainFill,
  "11n": BsFillCloudLightningRainFill,
  "13d": BsSnow2,
  "13n": BsSnow2,
  "50d":WiWindy,
  "50n":WiWindy,
  "unknown": TiWeatherPartlySunny
};