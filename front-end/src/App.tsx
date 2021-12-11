import { 
  Title, 
  Select 
} from './components';

import styles from './style/home.module.scss';

export default function App() {
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

