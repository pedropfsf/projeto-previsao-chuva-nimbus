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

  let getClimateArrayCallback = useCallback(async (data:any, setData: any) => {
    const response = await fetch("http://localhost:4444/api/getClimateAll");
  
    const dataJson = await response.json();
  
    const array:ClimateArrayProps[] = JSON.parse(dataJson).climateArray;
  
    setData(array);
  }, [ ]);

  useEffect(() => {
    getClimateArrayCallback(data, setData);
  }, [ ]);

  return (
    <div 
      id={main} 
      className="App"
    >
      <Title>Previsão de chuva Horária</Title>
      {/* <Select/> */}
    </div>
  );
}

