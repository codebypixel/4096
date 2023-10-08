import React, { useState } from "react";
import { Container, Display, Picker } from "./styles";

export default function ColorPicker(props: {color: string}) {
  const [color, setColor] = useState<string>("#000000");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <Container>
      <Picker type="color" value={color} onChange={handleChange}></Picker>
      <Display color={props.color}>{color}</Display>
    </Container>
  );
}