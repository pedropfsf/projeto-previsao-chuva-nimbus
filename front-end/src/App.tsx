import { useState } from 'react';

import { 
  Title, 
  Select 
} from './components';

import { DataProps } from './@types';

import styles from './style/home.module.scss';

async function getClimateData(data: DataProps[]) {
  const response = await fetch("http://localhost:4444/api/getClimateAll");

  console.log(response);
}

export default function App() {
  let [ data, setData ] = useState([]);

  // getClimateData(data);

  const { main } = styles;

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

