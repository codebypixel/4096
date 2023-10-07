'use client'

import Canvas from "@/components/Layout/Canvas";
import Wrapper from "@/components/Layout/Wrapper";

export default function Page(){
  return (
    <Wrapper>
      <Canvas grid={2}/>
    </Wrapper>
  )
}