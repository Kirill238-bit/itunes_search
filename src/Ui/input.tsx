import { CloseOutlined } from '@ant-design/icons'
import { ChangeEvent, FC } from 'react'
import styled from 'styled-components'


interface IProps {
    value:string
    onChange:(e:ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.div`
    width:100%;
    position: relative;
    input {
        width:100%;
        height: 50px;
        border-radius: 12px;
        padding: 0 10px 0 26px;
        border: none;
        background-color: #000;
        color: white;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 19px;
        position: relative;
        transition: outline 0.2s ease;
        outline: 1px solid white;
        &:focus {
          outline: 1px solid #007bff;
        }
    }
`;
const ButtonsWrap = styled.div`
    position: absolute; 
    top: 16px;
    right:16px;
    font-size: 1.2rem;
`
const e ={target:{value:''}}
const input:FC<IProps> = ({value,onChange}) => {
  
  return (
    <Wrapper>
      <input type="text" placeholder="look for..." value={value} onChange={onChange}/>
      <ButtonsWrap>
        {value && <CloseOutlined onClick={()=>onChange(e as ChangeEvent<HTMLInputElement>)}/>}
      </ButtonsWrap>
    </Wrapper>
  )
}

export default input
