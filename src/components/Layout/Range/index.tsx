import { useState } from "react";
import { Container, Input, Display } from "./styles";

interface RangeProps {
  rangeValue: number;
  setRangeValue: (value: number) => void;
}

export default function Range({ rangeValue, setRangeValue }: RangeProps) {

  const [displayGrid, setDisplayGrid] = useState<number>(0); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(e.target.value));
    setDisplayGrid(parseInt(e.target.value));
  };

  return (
    <Container>
      <Display><h1>{displayGrid}</h1></Display>
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
