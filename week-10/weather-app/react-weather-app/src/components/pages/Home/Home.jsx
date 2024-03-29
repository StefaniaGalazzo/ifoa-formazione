import SearchNav from "../../molecules/SearchNav/SearchNav";
import { Container } from "react-bootstrap";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { MdLineWeight } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import bgRainyDay from "../../../assets/imgs/rainy-day.jpg";
import bgRainyNight from "../../../assets/imgs/rainy-night.jpg";
import bgClearNight from "../../../assets/imgs/clear-night.jpg";
import bgClearDay from "../../../assets/imgs/clear-day.jpg";
import bgCloudyDay from "../../../assets/imgs/cloudy-day.jpg";
import bgCloudyNight from "../../../assets/imgs/cloudy-night.jpg";
import bgSnow from "../../../assets/imgs/bg-snow.jpg";
import snow from "../../../assets/imgs/snow.png";
import dayCloud from "../../../assets/imgs/very-cloudy.png";
import nightMoonCloud from "../../../assets/imgs/nightCloud.png";
import rainy from "../../../assets/imgs/very-rainy.png";
import sun from "../../../assets/imgs/sun.png";
import moon from "../../../assets/imgs/moon.png";
import styles from "./Home.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { useRef, useState } from "react";
import LineChart from "../../LineChart/LineChart";

export default function Home() {
  const [data, setData] = useState({
    // name: "Your Country",
    // main: {
    //   temp: 150,
    //   feels_like: 150,
    //   temp_min: 150,
    //   temp_max: 150,
    //   pressure: 1029,
    //   humidity: 62,
    // },
    dt: 1705687200,
  });
  const [forecastData, setForecastData] = useState({});
  const [query, setQuery] = useState("");

  const bgRef = useRef();

  const fetchLocation = async () => {
    const key = "1d67fb207de28d398c4e807b944d3e93";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`
      );
      if (!response.ok) {
        setData({ name: "Location not founded" });
        throw new Error(`Errore ${response.status} nella richiesta`);
      }
      const result = await response.json();
      setData(result);
      // console.log(result, "result");
    } catch (error) {
      // console.log(error.message);
    }
  };
  const fetchForecast = async () => {
    const key = "31233165ff276fc477de63ccc725c1f3";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${key}`
      );
      if (!response.ok) {
        setForecastData({ name: "Location not founded" });
        throw new Error(`Errore ${response.status} nella richiesta`);
      }
      const result = await response.json();
      setForecastData(result.list);
      console.log(result.list, "result forecast");
    } catch (error) {
      console.log(error.message);
    }
  };

  // search
  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.key === "Enter") {
      fetchLocation();
      fetchForecast();
    }
  };
  function cleanInput(e) {
    if (e.key === "Enter") {
      setQuery("");
    }
  }
  //

  //funzioni per formattare date e gradi
  function getDateFromSeconds(totalSeconds) {
    const milliseconds = totalSeconds * 1000;
    const date = new Date(milliseconds);

    const dayOfWeek = date.getDay();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    //per il nome del giorno
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = daysOfWeek[dayOfWeek];

    //  MM/DD/YYYY - Day HH:MM
    const formattedDate = `${month.toString().padStart(2, "0")}/${day
      .toString()
      .padStart(2, "0")}/${year} / ${dayName} / ${hours}:${minutes}`;

    return formattedDate;
  }
  function getHoursFromSeconds(totalSeconds) {
    const milliseconds = totalSeconds * 1000;
    const date = new Date(milliseconds);
    const hours = date.getHours();
    return hours;
  }
  function convertKelvinToCelsius(kelvin) {
    // Kelvin to Celsius: K - 273.15
    const celsius = kelvin - 273.15;
    return Math.ceil(celsius);
  }
  function getTimeFromSeconds(totalSeconds) {
    const milliseconds = totalSeconds * 1000;
    const date = new Date(milliseconds);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  // percorso dell'immagine in base alla descrizione del meteo
  function getWeatherImage(description, totalSeconds) {
    const lowercasedDescription = description.toLowerCase().trim();
    const hours = getHoursFromSeconds(totalSeconds);
    const referenceHour = 16;
    if (hours <= referenceHour) {
      if (lowercasedDescription.includes("rain")) {
        // console.log("RAIN");
        // console.log(lowercasedDescription, "lowercasedDescription");
        // console.log(hours, "HOURS");
        bgRef.current.style.backgroundImage = `url(${bgRainyDay})`;
        return rainy;
      } else if (lowercasedDescription.includes("cloud")) {
        // console.log(hours, "HOURS");
        // console.log("CLOUD ");
        // console.log(lowercasedDescription, "lowercasedDescription");

        bgRef.current.style.backgroundImage = `url(${bgCloudyDay})`;
        return dayCloud;
      } else if (
        lowercasedDescription.includes("clear") ||
        lowercasedDescription.includes("sun")
      ) {
        // console.log(hours, "HOURS");
        // console.log("CLEAR OR SUNNY ");
        // console.log(lowercasedDescription, "lowercasedDescription");

        bgRef.current.style.backgroundImage = `url(${bgClearDay})`;
        return sun;
      } else if (lowercasedDescription.includes("snow")) {
        // console.log(hours, "HOURS");
        // console.log("SNOW");
        // console.log(lowercasedDescription, "lowercasedDescription");

        bgRef.current.style.backgroundImage = `url(${bgSnow})`;
        return snow;
      } else {
        return sun;
      }
    } else if (hours > referenceHour) {
      if (lowercasedDescription.includes("rain")) {
        // console.log(hours, "-- HOURS");
        // console.log("-- RAIN ");
        // console.log(lowercasedDescription, "lowercasedDescription");

        bgRef.current.style.backgroundImage = `url(${bgRainyNight})`;
        return rainy;
      } else if (lowercasedDescription.includes("cloud")) {
        // console.log(hours, "-- HOURS");
        // console.log("-- CLOUD ");
        // console.log(lowercasedDescription, "lowercasedDescription");

        bgRef.current.style.backgroundImage = `url(${bgCloudyNight})`;
        return nightMoonCloud;
      } else if (lowercasedDescription.includes("snow")) {
        // console.log(hours, "-- HOURS");
        // console.log("-- CLEAR ");
        // console.log(lowercasedDescription, "lowercasedDescription");

        bgRef.current.style.backgroundImage = `url(${bgSnow})`;
        return snow;
      } else if (lowercasedDescription.includes("clear")) {
        // console.log(hours, "-- HOURS");
        // console.log("-- CLEAR ");
        // console.log(lowercasedDescription, "lowercasedDescription");

        bgRef.current.style.backgroundImage = `url(${bgClearNight})`;
        return moon;
      } else {
        return moon;
      }
    }
  }

  return (
    <div id={styles.wrapperOverlay}>
      <div className={styles.overlay}></div>
      <div id={styles.containerHome} className="pt-5" ref={bgRef}>
        <div className="w-100 d-flex align-items-center flex-column justify-content-center">
          <h1 className="text-light mb-3">Weather App</h1>
          <h6 className="text-light mb-3 fw-light">
            Discover weater in your country
          </h6>
          <SearchNav
            searchVal={query}
            searchHandler={handleSearch}
            placeholder={data.name || "Search location and press enter"}
            cleanInput={cleanInput}
          />
        </div>
        <div
          id={styles.inYourCountry}
          className="my-5 d-flex flex-column align-items-center justify-content-center"
        >
          <h3 className="text-white display-1">
            {(data.dt && getDateFromSeconds(data.dt)) || "00/00/00"}
          </h3>
          <div className="d-flex my-5">
            <div>
              <img
                src={
                  data.weather &&
                  getWeatherImage(data.weather[0].description, data.dt)
                }
                // alt={data.weather[0].description}
              />
            </div>
            <div className="text-center mx-5 ">
              <h3 className="text-white ">
                {data?.name || "Location"} <FaLocationDot />
              </h3>
              <h4 className="display-4 text-white">
                {convertKelvinToCelsius(data?.main?.temp) || 0}°C
              </h4>
              <p className="fs-4 text-white m-0">
                {(data?.weather &&
                  data?.weather[0] &&
                  data?.weather[0].description) ||
                  "Description"}
              </p>
              <p className="text-white m-0">
                min/max:
                {data?.main?.temp_min
                  ? convertKelvinToCelsius(data?.main?.temp_min)
                  : 0}
                /
                {data?.main?.temp_max
                  ? convertKelvinToCelsius(data?.main?.temp_max)
                  : 0}
                °C
              </p>
            </div>
            <div>
              <img
                src={
                  data.weather &&
                  getWeatherImage(data.weather[0].description, data.dt)
                }
                alt={data.weather && data.weather[0].description}
              />
            </div>
          </div>
          <div
            className="d-flex g-3 m-4 align-items-center justify-content-center text-white"
            id={styles.infoWeather}
          >
            <p>
              <WiSunrise size={"25px"} /> Sunrise:{" "}
              {data.sys ? getTimeFromSeconds(data.sys.sunrise) : "00:00"}
            </p>
            <p>
              <WiSunset size={"25px"} /> Sunset:{" "}
              {(data?.sys && getTimeFromSeconds(data?.sys?.sunset)) || "00:00"}
            </p>
            <p>
              <LiaTemperatureLowSolid size={"25px"} /> Feels like:{" "}
              {(data?.main && convertKelvinToCelsius(data?.main?.feels_like)) ||
                0}
            </p>
            <p>
              <MdLineWeight size={"25px"} /> Pressure:{" "}
              {data?.main?.pressure || 0}
            </p>
            <p>
              <WiHumidity size={"30px"} /> Humidity: {data?.main?.humidity || 0}
              %
            </p>
            <p>
              <TiWeatherWindyCloudy size={"25px"} /> Wind: speed{" "}
              {data?.wind?.speed || 0} / deg: {data?.wind?.deg || 0}
            </p>
          </div>
        </div>
        <Container fluid>
          <h3 className="text-white ps-5 ms-5"> Forecast</h3>
          <hr />
          <div id={styles.scrollY}>
            <div className={`ps-5 ${styles.weatherDaysWrapper}`}>
              {forecastData && forecastData.length > 0 ? (
                forecastData?.map((day) => {
                  const formattedDate = getDateFromSeconds(day.dt);
                  const toCelsius = convertKelvinToCelsius(day.main.temp);

                  return (
                    <div key={day.dt} className={`${styles.cardWeaterDay}`}>
                      <h6 className="text-white text-center">
                        {formattedDate.toString()}
                      </h6>
                      <img
                        id="cardImage"
                        src={
                          day?.weather &&
                          getWeatherImage(day?.weather[0].description, day.dt)
                        }
                        alt="weather-mood"
                        width={"80px"}
                      />
                      <p className="text-white text-center">{toCelsius}°C</p>
                    </div>
                  );
                })
              ) : (
                <div
                  className={`m-auto ${styles.cardWeaterDay}`}
                  style={{ width: "90vw" }}
                >
                  <h6 className="text-white display-4 text-center">
                    Search a location and discover the weather!
                  </h6>
                </div>
              )}
            </div>
          </div>
        </Container>
        <Container>
          <LineChart
            forecastData={forecastData}
            convertKelvinToCelsius={convertKelvinToCelsius}
            getDateFromSeconds={getDateFromSeconds}
          />
        </Container>
      </div>
    </div>
  );
}
