import { InputGroup, Form } from "react-bootstrap";

export default function FormImage({ name, index, setValue, value }) {
  return (
    <InputGroup size="sm" className="mb-3" name='imagegroup'>
      <InputGroup.Text id="inputGroup-sizing-sm">{name}</InputGroup.Text>
      <Form.Control
        value={value}
        onChange={e => {
          setValue(prev => {
            let currentValue = [...prev]
            currentValue[index] = e.target.value;
            return currentValue
          });
        }}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        name='image'
      />
    </InputGroup>
  )
}