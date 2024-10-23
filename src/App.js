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
  const [urlName, setUrlName] = useState('');

  const handleSubit = async () => {
    const response = await fetch('https://fakeserver-aq7x.onrender.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: JSON.parse(inputValue) }),
    });

    const result = await response.json();
    setUrlName(result.url);
  };

  return (
    <div className='home'>
      <TextArea rows={20}
        onChange={(e) => seInputValue(e.target.value)}
        className='textarea-input'
      />
      <div>
        <Flex gap="small" wrap>
          <Button type="primary" onClick={handleSubit}>Submit</Button>
        </Flex>
        <br /><br />
        {urlName && <div>Your URL is: <a href={`https://fakeserver-aq7x.onrender.com/url/${urlName}`}>{`https://fakeserver-aq7x.onrender.com/url/${urlName}`}</a></div>}
      </div>
    </div>

  )
}

export default App;
