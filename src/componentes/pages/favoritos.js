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
 
    // Deletando item
    function deleteItem(index){
        // Deletando item da posicao especifica
        lista.splice(index,1)

        // Setando alteracao - puxando o que restou da lista
        setLista([...lista])

    }

    return(
        <div id="favoritos_container">
            <ul>
                {list.length > 0 ? list.map((item,idx) => {
                    return(
                        <li key={idx} className='itens'>{item}<button onClick={() => deleteItem(idx)} className='btn-delete'>Delete</button></li>
                    )
                }) : <li>Nao tem nada na sua lista de favoritos</li>}
            </ul>
        </div>
    )
}