import {useState} from 'react'
import lista from '../lista/lista'
import '../style/favoritos.css'
import {toast} from 'react-toastify'

// Vendo se tem algo na localStorage
if(localStorage.getItem('filmes') !== null){
    lista.push(...JSON.parse(localStorage.getItem('filmes')))
}

export default function Favoritos(){
    // state - lista
    const [list,setList] = useState(lista)
    
    // Deletando item
    function deleteItem(index){
        // Deletando item da posicao especifica
        lista.splice(index,1)

        // Setando alteracao - puxando o que restou da lista
        setList([...lista])

        // Salvando na localStorage a nova lista
        localStorage.setItem('filmes',JSON.stringify(lista))

        toast.success('Filme removido')
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