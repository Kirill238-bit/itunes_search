import { IItunesDataType } from '@/types/ItunesDataType'
import { FC } from 'react'
import styled from 'styled-components'

interface IProps {
  data:IItunesDataType
}

const Wrapper = styled.div`
  width:100%;
  min-height:36px;
  max-height: 46px;
  padding: 8px 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border:1px solid white;
  border-radius: 6px;
  overflow: hidden;
  @media (max-width: 768px) {
    max-height:none;
    min-height:auto;
    flex-direction:column;
    overflow: visible;
    gap:12px;
    h2{
      text-align: center;
      width:100% !important;
    }
  }
  h2{
    font-size: 1.2rem;
    font-weight: 600;
    width:30%;
    text-overflow: ellipsis;
  }
  h3, a{
    text-align: center;
    font-size: 1rem;
  }
  a{
    text-wrap:nowrap;
    color:#007bff;
  }
`
const ItunesItem:FC<IProps> = ({data}) => {
  return (
    <Wrapper>
      <h2>{data.artistName}</h2>
      <h3>{'trackName' in data ?  data.trackName : data.collectionName}</h3>
        <a href={data.previewUrl} target="_blank">
          More info
        </a>
    </Wrapper>
  )
}

export default ItunesItem
