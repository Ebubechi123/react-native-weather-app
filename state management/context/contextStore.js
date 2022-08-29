import React, { useState, createContext, useContext } from "react";

// CREATED CONTEXTS
const StoreContext = createContext();
export const Provider = ({ children }) => {
  const [deviceWeather, setDeviceWeather] = useState([]);
  const [searchedWeather, setSearchedWeather] = useState([]);
  const [previousData, setPrevious] = useState([]);
  const [theme, setTheme] = useState(false);
  const [isfetching, setIsFetching] = useState(false);
  return (
    <StoreContext.Provider
      value={{
        deviceWeather,
        setDeviceWeather,
        searchedWeather,
        setSearchedWeather,
        previousData,
        setPrevious,
        theme,
        setTheme,
        isfetching,
        setIsFetching,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const Store = () => {
  return useContext(StoreContext);
};
