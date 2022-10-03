import React from 'react';
import Image from 'next/image';
var sha1 = require('sha1');

import { useGetPwnedPasswords } from '../hooks';
import shieldImg from '../../public/lancealot.png';

const PwnedPasswordsComponent: React.FC = () => {
  const [password, setPassword] = React.useState('')
  const [value, setValue] = React.useState('')
  const { data, load } = useGetPwnedPasswords(value)

  return (
    <>
      <h1>{'Sir Pwn-A-Lot'}</h1>
      <Image
        src={shieldImg}
        alt="Sir Pwn-A-Lot's shield"
        width={125}
        height={125}
      />
      <h3>Enter the first 5 characters of a SHA-1 password hash to check if the password has been pwned</h3>
      <div>
        <label htmlFor="password">Password:&nbsp;</label>
        <input
          type='password'
          value={password}
          onChange={(event) => setPassword(event?.target?.value)}
          onBlur={() => setValue(sha1(password).slice(0, 5))}
        />
      </div>
      <br />
      {data && <p>{JSON.stringify(data)}</p>}
      <button onClick={() => load()}>
        Submit
      </button>
    </>
  );
}

export default PwnedPasswordsComponent;
