import React from 'react';
import Image from 'next/image';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

import styles from '@/styles/Home.module.css'
import { useGetBreach } from '../hooks';
import shieldImg from '../../public/lancealot.png';
import Dropdown from './Dropdown';

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
      <Dropdown />
      <h3>Enter a breach name to get details about that breach</h3>
      <div>
        <label htmlFor="name">Breach Name:&nbsp;</label>
        <InputBase
          name='name'
          type='text'
          style={{ backgroundColor: 'white', height: '30px', width: '300px', borderRadius: '5px', paddingLeft: '5px' }}
          value={name}
          onChange={(event) => setName(event?.target?.value)}
          onBlur={() => setValue(name)}
        />
      </div>
      <br />
      <Button variant="contained" onClick={() => load()}>
        Submit
      </Button>
      {data && <h3>Breach Details</h3>}
      {data && (
        <div className={styles.allign_left_box}>
          {data?.LogoPath && <img src={data.LogoPath} width='100' height='100' />}
          {data?.Name && <p>{`Name: ${data.Name}`}</p>}
          {data?.Title && <p>{`Title: ${data.Title}`}</p>}
          {data?.Domain && <p>{`Domain: ${data.Domain}`}</p>}
          {data?.Description && <p dangerouslySetInnerHTML={{ __html: data.Description }} />}
          {data?.BreachDate && <p>{`Breach Date: ${data.BreachDate}`}</p>}
          {data?.AddedDate && <p>{`Added Date: ${data.AddedDate}`}</p>}
          {data?.ModifiedDate && <p>{`Modified Date: ${data.ModifiedDate}`}</p>}
          {data?.PwnCount && <p>{`Pwn Count: ${data.PwnCount}`}</p>}
          {data?.IsVerified !== null && <p>{`Is Verified: ${new Boolean(data.IsVerified)}`}</p>}
          {data?.IsFabricated !== null && <p>{`Is Fabricated: ${new Boolean(data.IsFabricated)}`}</p>}
          {data?.IsSensitive !== null && <p>{`Is Sensitive: ${new Boolean(data.IsSensitive)}`}</p>}
          {data?.IsRetired !== null && <p>{`Is Retired: ${new Boolean(data.IsRetired)}`}</p>}
          {data?.IsSpamList !== null && <p>{`Is Spam List: ${new Boolean(data.IsSpamList)}`}</p>}
          {data?.IsMalware !== null && <p>{`Is Malware: ${new Boolean(data.IsMalware)}`}</p>}
          {data?.DataClasses && <React.Fragment>
            <p>Data Classes:</p>
            {(data.DataClasses as string[])?.map((dataClass, index) => (<p key={dataClass}>&nbsp;&nbsp;&nbsp;{dataClass}</p>))}
          </React.Fragment>}
        </div>
      )}
    </>
  );
}

export default BreachComponent;
