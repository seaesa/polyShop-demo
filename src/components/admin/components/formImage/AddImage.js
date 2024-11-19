import { MDBInputGroup } from 'mdb-react-ui-kit';
import { useState } from "react";

export default function FormImage({ name, onChange, index }) {
  const [names, setNames] = useState('');
  return (
    <MDBInputGroup textBefore={name}>
      <input
        value={names}
        type='text'
        onChange={e => {
          setNames(e.target.value);
          onChange(e, index)
        }}
        className='form-control'
        placeholder='Username'
        required
      />
    </MDBInputGroup>
  )
}