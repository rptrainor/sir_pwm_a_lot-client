import React from 'react';
import Image from 'next/image';
var sha1 = require('sha1');

import { useGetPasteAccount } from '../hooks';
import shieldImg from '../../public/lancealot.png';

const PasteAccountComponent: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [value, setValue] = React.useState('')
  const { data, load } = useGetPasteAccount(value)

  return (
    <>
      <h1>{'Sir Pwn-A-Lot'}</h1>
      <Image
        src={shieldImg}
        alt="Sir Pwn-A-Lot's shield"
        width={125}
        height={125}
      />
      <h3>Enter an email address to check if it has been used in a paste</h3>
      <div>
        <label htmlFor="email">Email:&nbsp;</label>
        <input
          name='email'
          type='email'
          value={email}
          onChange={(event) => setEmail(event?.target?.value)}
          onBlur={() => setValue(sha1(email).slice(0, 5))}
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

export default PasteAccountComponent;
