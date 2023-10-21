import {useState,useEffect} from 'react'
import lista from '../lista/lista'
import '../style/favoritos.css'
export default function Favoritos(){
    // state - lista
    const [list,setLista] = useState([])

    // useEffect
    useEffect(() => {
        setLista(lista)
    },[])
 
    return(
        <div id="favoritos_container">
            <ul>
                {list.map((item,idx) => {
                    return(
                        <li key={idx}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}