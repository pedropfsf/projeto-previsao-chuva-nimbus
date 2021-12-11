import { 
  useState, 
  useEffect,
  useCallback
} from 'react';

import { 
  Title, 
  // Select 
} from './components';

import { ClimateArrayProps } from './@types';

import styles from './style/home.module.scss';



export default function App() {
  const { main } = styles;
  
  let [ data, setData ] = useState([]);
  let [ districts, setDistricts ] = useState([]);

  let getClimateArrayCallback = useCallback(async (setData: any) => {
    const response = await fetch("http://localhost:4444/api/getClimateAll");
  
    const dataJson = await response.json();
  
    const array:ClimateArrayProps[] = JSON.parse(dataJson).climateArray;
  
    setData(array);
  }, [ ]);

  let getDistrictsArrayCallback = useCallback((data) => {
    const districtsArray = data.map((item:ClimateArrayProps) => item.district);

    console.log(districtsArray);
    console.log(districtsArray);
  }, []);

  useEffect(() => {
    getClimateArrayCallback(setData);

    getDistrictsArrayCallback(data);

  }, [ 
    // getClimateArrayCallback, 
    // getDistrictsArrayCallback, 
    // data
  ]);

  return (
    <div 
      id={main} 
      className="App"
    >
      <Title>Previsão de chuva Horária</Title>
      {/* <Select
        label="Bairro"
        data={}
      /> */}
    </div>
  );
}

