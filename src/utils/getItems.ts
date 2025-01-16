import { IItunesDataType } from "@/types/ItunesDataType"
import axios from "axios"



const dataCash: {[url: string]: IItunesDataType[]} = {}
const defaultPath = 'https://itunes.apple.com/'

export const getData = async (value:string,offset:number = 0):Promise<IItunesDataType[]> => {
    if(!value) return []

    const term = encodeURIComponent(value)
    const url = `${defaultPath}search?term=${term}&limit=50&offset=${offset}`

    if(dataCash[url]){
        return dataCash[url]
    }

    
    const res = await axios.get(url)

    dataCash[url] = res.data.results

    return res.data.results

}