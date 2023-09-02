// src/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    //dataList is incoming data which can be used across the <App/> component using application context.
    //use const { dataList } = useAppContext(); to get data wherever you want.
    //To use dataList you will have to map  
    // {dataList.map((item, index) => (
    //     <li key={index}>
    //       <p>Data Source: {item.source}</p>
    //       <p>Received Data: {item.newData}</p>
    //     </li>
    //   ))}

  const [dataList, setDataList] = useState([]);

  //use addData to send the data from a component to application context. 
  //use const { addData } = useAppContext(); to do this.
  //Source will be the name of the component.
  const addData = (newData, source) => {
    setDataList((prevDataList) => [...prevDataList, { newData, source }]);
  };

  return (
    <AppContext.Provider value={{ dataList, addData }}>
      {children}
    </AppContext.Provider>
  );
};
