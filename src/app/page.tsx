"use client";

import { useState } from "react";

import Canvas from "@/components/Layout/Canvas";
import Wrapper from "@/components/Layout/Wrapper";
import Range from "@/components/Layout/Range";
import ColorPicker from "@/components/Layout/ColorPicker";
import Menu from "@/components/Layout/Menu";

export default function Page() {
  const [rangeValue, setRangeValue] = useState<number>(0);
  return (
    <Wrapper >
      <Canvas grid={rangeValue} />
      <Menu mode="dark">
        <ColorPicker />
        
        <Range rangevalue={rangeValue} setRangeValue={setRangeValue}/>
      </Menu>
    </Wrapper>
  );
}