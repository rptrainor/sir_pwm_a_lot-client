import React from 'react';
import Image from 'next/image';

import { useGetBreaches } from '../hooks';
import shieldImg from '../../public/lancealot.png';

const BreachesComponent: React.FC = () => {
  const [domain, setDomain] = React.useState('')
  const [value, setValue] = React.useState('')
  const { data, load } = useGetBreaches(value)

  return (
    <>
      <h1>{'Sir Pwn-A-Lot'}</h1>
      <Image
        src={shieldImg}
        alt="Sir Pwn-A-Lot's shield"
        width={125}
        height={125}
      />
      <h3>Enter a domain to search for breaches that have occurred on that domain</h3>
      <div>
        <label htmlFor="domain">Domain:&nbsp;</label>
        <input
          name='domain'
          type='text'
          value={domain}
          onChange={(event) => setDomain(event?.target?.value)}
          onBlur={() => setValue(domain)}
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

export default BreachesComponent;
