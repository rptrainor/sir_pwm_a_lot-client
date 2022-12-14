import React from 'react';
import Image from 'next/image';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

import styles from '@/styles/Home.module.css'
import { useGetBreachedAccount } from '../hooks';
import shieldImg from '../../public/lancealot.png';
import Dropdown from './Dropdown';
import isEmailValid from '../utils/is-email-valid';

export type Breach = {
  Name: string
  Title: string
  Domain: string
  BreachDate: string
  AddedDate: string
  ModifiedDate: string
  PwnCount: number
  Description: string
  LogoPath: string
  DataClasses: [string]
  IsVerified: boolean
  IsFabricated: boolean
  IsSensitive: boolean
  IsRetired: boolean
  IsSpamList: boolean
  IsMalware: boolean
}

const BreachedAccountComponent: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [value, setValue] = React.useState('')
  const [validEmail, setValidEmail] = React.useState(true)

  const { data, load } = useGetBreachedAccount(value)

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
      {(validEmail || !email.length) ? null : <span style={{ color: 'red' }}>Please enter a valid email address</span>}
      <br />
      <Button variant="contained" onClick={() => load()}>
        Submit
      </Button>
      {data && <h3>Breach Details</h3>}
      {data && (data as Breach[])?.map((item, index) => (
        <div key={index} className={styles.allign_left_box}>
          <div className={styles.allign_left_box}>
            {item?.LogoPath && <img src={item.LogoPath} width='100' height='100' />}
            {item?.Name && <p>{`Name: ${item.Name}`}</p>}
            {item?.Title && <p>{`Title: ${item.Title}`}</p>}
            {item?.Domain && <p>{`Domain: ${item.Domain}`}</p>}
            {item?.Description && <p dangerouslySetInnerHTML={{ __html: item.Description }} />}
            {item?.BreachDate && <p>{`Breach Date: ${item.BreachDate}`}</p>}
            {item?.AddedDate && <p>{`Added Date: ${item.AddedDate}`}</p>}
            {item?.ModifiedDate && <p>{`Modified Date: ${item.ModifiedDate}`}</p>}
            {item?.PwnCount && <p>{`Pwn Count: ${item.PwnCount}`}</p>}
            {item?.IsVerified !== null && <p>{`Is Verified: ${new Boolean(item.IsVerified)}`}</p>}
            {item?.IsFabricated !== null && <p>{`Is Fabricated: ${new Boolean(item.IsFabricated)}`}</p>}
            {item?.IsSensitive !== null && <p>{`Is Sensitive: ${new Boolean(item.IsSensitive)}`}</p>}
            {item?.IsRetired !== null && <p>{`Is Retired: ${new Boolean(item.IsRetired)}`}</p>}
            {item?.IsSpamList !== null && <p>{`Is Spam List: ${new Boolean(item.IsSpamList)}`}</p>}
            {item?.IsMalware !== null && <p>{`Is Malware: ${new Boolean(item.IsMalware)}`}</p>}
            {item?.DataClasses && <React.Fragment>
              <p>Data Classes:</p>
              {(item.DataClasses as string[])?.map((dataClass) => (<p key={dataClass}>&nbsp;&nbsp;&nbsp;{dataClass}</p>))}
            </React.Fragment>}
          </div>
        </div>
      ))}
    </>
  );
}

export default BreachedAccountComponent;
