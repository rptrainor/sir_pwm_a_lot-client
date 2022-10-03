import React from 'react';
var sha1 = require('sha1');

import { useGetPwnedPasswords } from '../hooks/';

const App: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [value, setValue] = React.useState('')
  const { data, load } = useGetPwnedPasswords(value)

  return (
    <>
      <h1>{'hola mundo!'}</h1>
      <input
        type='password'
        value={email}
        onChange={(event) => setEmail(event?.target?.value)}
        onBlur={() => setValue(sha1(email).slice(0, 5))}
      />
      {data && <p>{JSON.stringify(data)}</p>}
      <button onClick={() => load()}>
        Submit!
      </button>
    </>
  );
}

export default App;
