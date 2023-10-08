import { useState } from "react";
import { Container, Input, Display } from "./styles";

export default function Range() {
  const [rangeValue, setRangeValue] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(e.target.value));
    console.log(rangeValue);
  };

  return (
    <Container>
      <Display><h1>{rangeValue}</h1></Display>
      <Input
        type="range"
        min={1}
        max={64}
        value={rangeValue}
        onChange={handleChange}
      ></Input>
    </Container>
  );
}
