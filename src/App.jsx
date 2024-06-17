import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const { weather, city } = useSelector((s) => s);
  // const [name, setName] = useState("");

  // function getUser() {
  //   return async (dispatch) => {
  //     const url = await axios(`https://api.genderize.io/?name=${name}`);
  //     const { data } = url;
  //     dispatch({ type: "ADD_USER", payload: data });
  //   };
  // }

  // useEffect(() => {
  //   // dispatch(getUser());
  // }, []);

  function getWeather() {
    return async (dispatch) => {
      const url = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru`
      );
      const { data } = url;
      dispatch({ type: "WEATHER", payload: data });
    };
  }

  useEffect(() => {
    dispatch(getWeather());
  }, [city]);
  let zs = weather.map((el) => el.weather.map((e) => e.description));
  console.log(weather);
  console.log(city);
  return (
    <div className="App">
      {/* <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="add name"
      />
      <div className="">
        <h1>{user.name}</h1>
        <h2>{user.gender}</h2>
      </div> */}
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch({ type: "CITY", payload: e.target.value });
          }
        }}
      />
      {city.length
        ? weather.map((el) => (
            <div className="w">
              <h1>Погода в {el.name} на 10 дней</h1>
              <div className="wBox">
                <h2>температура: {el.main.temp}°</h2>
                <h3>Погода:{zs}</h3>
                <h2>максимальная температура: {el.main.temp_max}°</h2>
                <h2>минимальная температура: {el.main.temp_min}°</h2>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
