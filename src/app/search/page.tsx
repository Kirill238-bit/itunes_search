'use client'
import useDebounce from "@/hooks/useDebounce";
import { IItunesDataType } from "@/types/ItunesDataType";
import Input from "@/Ui/input";
import ItunesItem from "@/Ui/ItunesItem";
import Loader from "@/Ui/Loader";
import { getData } from "@/utils/getItems";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:20px;
    padding-top: 1.5vh;
`;

const ItemsWrapper = styled.div`
    width:100%;
    height:88vh;
    display: flex;
    flex-direction: column;
    gap:12px;
    .lastDiv {
      margin-bottom: 12px;
    }
    overflow-y: auto;
`
const Page = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [inputValue,setInputValue] = useState('');
    const [items,setItems] = useState<IItunesDataType[]>([]);
    const [page,setPage] = useState(0);
    const observer = useRef(null);
    const endOfListRef = useRef(null);
    const debouncedSearch = useDebounce(search,1000);

    function search(term:string,page:number){
        if (!term) return

        setIsLoading(true);

        getData(term,page).then((res)=>{
          if(res) {
            setItems((prev)=> [...prev,...res]);
            setIsLoading(false);
          }
        }).catch (e => {
          setIsLoading(false);
          setItems([]);
        })
    };

    const searchHandler = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.value){
          setIsLoading(true) 
        }else{
          setIsLoading(false)
        }
        setInputValue(e.target.value);
        debouncedSearch(e.target.value,1);
        setItems([]);
    };

    const loadMoreHandler = () => {
      const nextPage = page + 1;
      setPage(nextPage);
      search(inputValue, nextPage);
    };

    useEffect(()=>{
      if(isLoading || !items.length) return
      if(observer.current){observer.current.disconnect()}
      let callback = function(entries:IntersectionObserverEntry[], observer:IntersectionObserver){
        if(entries[0].isIntersecting){
          loadMoreHandler()
        }
      }
      observer.current = new IntersectionObserver(callback);
      observer.current.observe(endOfListRef.current);
    },[isLoading])

    console.log(observer)

  return (
    <Wrapper>
      <Input value={inputValue} onChange={searchHandler}/>
      <ItemsWrapper>
        {items.map((item,index)=> <ItunesItem data={item} key={index}/>)}
        <div className="lastDiv" ref={endOfListRef}/>
        { isLoading && <Loader/>}
        { !items.length && !isLoading && inputValue && `Ничего не найдено${'((('}`}
      </ItemsWrapper>
    </Wrapper>
  )
}

export default Page
