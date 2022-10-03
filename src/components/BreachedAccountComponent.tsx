import React from 'react';
import Image from 'next/image';
import InputBase from '@mui/material/InputBase';

import { useGetBreachedAccount } from '../hooks';
import shieldImg from '../../public/lancealot.png';

const BreachedAccountComponent: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [value, setValue] = React.useState('')
  const { data, load } = useGetBreachedAccount(value)

  return (
    <>
      <h1>{'Sir Pwn-A-Lot'}</h1>
      <Image
        src={shieldImg}
        alt="Sir Pwn-A-Lot's shield"
        width={125}
        height={125}
      />
      <h3>Enter an email address to check if it has been breached</h3>
      <div>
        <label htmlFor="email">Email:&nbsp;</label>
        <InputBase
          name='email'
          type='text'
          style={{ backgroundColor: 'white', height: '30px', width: '300px', borderRadius: '5px', paddingLeft: '5px' }}
          value={email}
          onChange={(event) => setEmail(event?.target?.value)}
          onBlur={() => setValue(email)}
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

export default BreachedAccountComponent;
