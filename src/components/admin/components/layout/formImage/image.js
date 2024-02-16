import { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";

export default function FormImage({ name, onChange, index }) {
  const [names, setNames] = useState('');
  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">{name}</InputGroup.Text>
      <Form.Control
        value={names}
        onChange={e => {
          setNames(e.target.value);
          onChange(e, index)
        }}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        required
      />
    </InputGroup>
  )
}