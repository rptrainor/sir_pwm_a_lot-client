import React from 'react';

import { useGetBreach } from '../hooks/';

const App: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [value, setValue] = React.useState('')
  const { data, loadBreach } = useGetBreach(value)

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
      <button onClick={() => loadBreach()}>
        Submit!
      </button>
    </>
  );
}

export default App;
