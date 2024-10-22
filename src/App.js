import './App.css';
import { useState } from 'react';
import { Input } from 'antd';
import { Button, Flex } from 'antd';

const { TextArea } = Input;

function App() {
  return (
    <div className='main'>
      <Home />
    </div>
  );
}


function Home() {
  const [inputValue, seInputValue] = useState('');

  const handleSubit = async () => {
    const response = await fetch('http://localhost:8000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: inputValue }),
    });

    const result = await response.json();
    console.log('Success:', result);


  };

  return (
    <div className='home'>
      <TextArea rows={20}
        onChange={(e) => seInputValue(e.target.value)}
        className='textarea-input'
      />
      <Flex gap="small" wrap>
        <Button type="primary" onClick={handleSubit}>Submit</Button>
      </Flex>
    </div>
  )
}

export default App;
