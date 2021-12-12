import { 
  useState, 
  useEffect,
  useCallback
} from 'react';

import { 
  Title, 
  Select 
} from './components';

import { 
  ClimateArrayProps, 
  DataSelectProps,
  RenderItensOfDistrictProps
} from './@types';

import styles from './style/home.module.scss';

export default function App() {
  const { main } = styles;
  
  let [ data, setData ] = useState([] as ClimateArrayProps[]);
  let [ districts, setDistricts ] = useState([] as DataSelectProps[]);
  let [ select, setSelect ] = useState("Selecione uma opção");
  
  useEffect(() => {
    async function getClimateArray() {
      const response = await fetch("http://localhost:4444/api/getClimateAll");
    
      const dataJson = await response.json();
    
      const array:ClimateArrayProps[] = JSON.parse(dataJson).climateArray;
      
      setData(array);

      const districtsArray = array.map(({ district }:ClimateArrayProps) => ({
        value: district,
        text: district
      }));

      setDistricts(districtsArray);
    }

    getClimateArray();
  }, [ ]);

  function changeSelect({ target }:any) {
    const value = target.value;
    setSelect(value);
  }

  function renderItensOfDistrict({ 
    value, 
    data 
  }:RenderItensOfDistrictProps) {
    const [ dataSelected ] = data.filter((item:ClimateArrayProps) => item.district === value);
    
    return (
      dataSelected.days.map(({ date }) => (
        <span key={date}>{date}</span>
      ))
    )
  }

  return (
    <div 
      id={main} 
      className="App"
    >
      <Title>Previsão de chuva Horária</Title>
      <Select
        label="Bairro"
        data={ districts }
        setSelect={ changeSelect }
      />
      {
        select === "Selecione uma opção"
        ?
        <h1>Nenhuma opção selecionada ${":("}</h1>
        :
        renderItensOfDistrict({
          value: select,
          data
        })
      }
    </div>
  );
}

