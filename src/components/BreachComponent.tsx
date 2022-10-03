import React from 'react';
import Image from 'next/image';

import { useGetBreach } from '../hooks';
import shieldImg from '../../public/lancealot.png';

const BreachComponent: React.FC = () => {
  const [name, setName] = React.useState('')
  const [value, setValue] = React.useState('')
  const { data, load } = useGetBreach(value)

  return (
    <>
      <h1>{'Sir Pwn-A-Lot'}</h1>
      <Image
        src={shieldImg}
        alt="Sir Pwn-A-Lot's shield"
        width={125}
        height={125}
      />
      <h3>Enter a breach name to get details about that breach</h3>
      <div>
        <label htmlFor="name">Breach Name:&nbsp;</label>
        <input
          name='name'
          type='text'
          value={name}
          onChange={(event) => setName(event?.target?.value)}
          onBlur={() => setValue(name)}
        />
      </div>
      <br />
      <button onClick={() => load()}>
        Submit
      </button>
      {data && <p>{JSON.stringify(data)}</p>}
    </>
  );
}

export default BreachComponent;
