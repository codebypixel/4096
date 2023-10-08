"use client";

import Canvas from "@/components/Layout/Canvas";
import Wrapper from "@/components/Layout/Wrapper";
import Range from "@/components/Layout/Range";
import ColorPicker from "@/components/Layout/ColorPicker";
import Menu from "@/components/Layout/Menu";

export default function Page() {
  return (
    <Wrapper>
      <Canvas grid={40} />
      <Menu mode="dark">
        <ColorPicker />
        <Range />
      </Menu>
    </Wrapper>
  );
}
