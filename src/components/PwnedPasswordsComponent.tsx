import React from 'react';
import Image from 'next/image';
import InputBase from '@mui/material/InputBase';
var sha1 = require('sha1');

import styles from '@/styles/Home.module.css'
import { useGetPwnedPasswords } from '../hooks';
import shieldImg from '../../public/lancealot.png';
import Dropdown from './Dropdown';

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
      <Dropdown />
      <h3>Enter the first 5 characters of a SHA-1 password hash to check if the password has been pwned</h3>
      <div>
        <label htmlFor="password">Password:&nbsp;</label>
        <InputBase
          name='password'
          type='password'
          style={{ backgroundColor: 'white', height: '30px', width: '300px', borderRadius: '5px', paddingLeft: '5px' }}
          value={password}
          onChange={(event) => setPassword(event?.target?.value)}
          onBlur={() => setValue(sha1(password).slice(0, 5))}
        />
      </div>
      <br />
      <button onClick={() => load()}>
        Submit
      </button>
      {data && <p className={styles.ow}>{JSON.stringify(data)}</p>}
    </>
  );
}

export default PwnedPasswordsComponent;
