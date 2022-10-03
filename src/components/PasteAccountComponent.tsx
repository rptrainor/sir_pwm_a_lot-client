import React from 'react';
import Image from 'next/image';
import InputBase from '@mui/material/InputBase';

import styles from '@/styles/Home.module.css'
import { useGetPasteAccount } from '../hooks';
import shieldImg from '../../public/lancealot.png';
import Dropdown from './Dropdown';
import isEmailValid from '../utils/is-email-valid';

export type Paste = {
  Id: string
  Source: string
  Title: string
  Date: string
  EmailCount: number
}

const PasteAccountComponent: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [value, setValue] = React.useState('')
  const [validEmail, setValidEmail] = React.useState(true)
  const { data, load } = useGetPasteAccount(value)

  React.useEffect(() => {
    isEmailValid(email) ? setValidEmail(true) : setValidEmail(false)
  }, [email])
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
      <h3>Enter an email address to check if it has been used in a paste</h3>
      <div>
        <label htmlFor="email">Email:&nbsp;</label>
        <InputBase
          name='email'
          type='email'
          style={{ backgroundColor: 'white', height: '30px', width: '300px', borderRadius: '5px', paddingLeft: '5px' }}
          value={email}
          onChange={(event) => setEmail(event?.target?.value)}
          onBlur={() => setValue(email)}
        />
      </div>
      {(validEmail || !email.length) ? null : <span style={{ color: 'red' }}>Please enter a valid email address</span>}
      <br />
      <button onClick={() => load()}>
        Submit
      </button>
      {data && <h3>Paste Details</h3>}
      {data && (data as Paste[])?.map((item) => (
        <div className={styles.allign_left_box} key={item?.Id}>
          {item?.Id && <p><b>Paste ID:</b> {item?.Id}</p>}
          {item?.Source && <p><b>Source:</b> {item?.Source}</p>}
          {item?.Title && <p><b>Title:</b> {item?.Title}</p>}
          {item?.Date && <p><b>Date:</b> {item?.Date}</p>}
          {item?.EmailCount && <p><b>Email Count:</b> {item?.EmailCount}</p>}
        </div>
      ))}
    </>
  );
}

export default PasteAccountComponent;
