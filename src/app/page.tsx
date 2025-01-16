'use client'
import styled from "styled-components";
import Welcome from "./Welcome";


const Wrapper = styled.div`
  width:100%;
  height:100%;
`;

export default function Home() {

  return (
    <Wrapper>
      <Welcome/>
    </Wrapper>
  );
}
