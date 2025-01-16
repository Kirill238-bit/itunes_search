import styled from "styled-components"
import Link from 'next/link'

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Greeting = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const NavigateButton = styled.button`
  padding: 10px 20px;
  font-size: 1.3rem;
  color: white;
  background-color: none;
  cursor: pointer;
  background: none;
  border:none;
  transition: color 0.5s ease;
  span{
    font-size: 1.5rem;
  }
  &:hover {
    color: #007bff;
  }
`;

const Welcome = () => {
  return (
    <Wrapper>
        <Greeting>Welcome to My Application!</Greeting>
        <Link href="/search" passHref>
            <NavigateButton>
                Let&apos;s go <span>→</span>
            </NavigateButton>
        </Link>
    </Wrapper>
  )
}

export default Welcome
