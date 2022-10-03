import React from 'react';

import { useGetPasteAccount } from '../hooks/';

const App: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [value, setValue] = React.useState('')
  const { data, load } = useGetPasteAccount(value)

  return (
    <>
      <h1>{'hola mundo!'}</h1>
      <input
        type='text'
        value={email}
        onChange={(event) => setEmail(event?.target?.value)}
        onBlur={() => setValue(email)}
      />
      {data && <p>{JSON.stringify(data)}</p>}
      <button onClick={() => load()}>
        Submit!
      </button>
    </>
  );
}

export default App;
