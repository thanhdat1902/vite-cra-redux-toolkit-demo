import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './features/counter/Counter'
import 'antd/dist/antd.css';
import { DatePicker, message } from 'antd';

function App() {
  const [date, setDate] = useState<any>(null);
  const handleChange = (value: any) => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div>
      </div>
    </div>

  )
}

export default App
