import {useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import '../style/filmes.css'
import lista from '../lista/lista'
export default function FilmePage(){
    // state - filme
    const [filme,setFilme] = useState({})

    // pegando o id
    const {id} = useParams()


    // useEffect para setar o filme da api no state filme
    useEffect(()=>{
        async function loadStateFilme(){
            try {
                // fazendo requisição
                let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR&api_key=9aa32f8e4d5315b556d76dc60bc308ac`)
                let data = await response.json()

                // setando o valor da api no state filme
                setFilme(data)
            } catch (error) {
                console.log(error)
            }
        }

        // executando a função
        loadStateFilme()
    },[id])

    // função adicionar
    function adicionar(id){
        lista.push(id)
    }

    return(
        <div className='container'>
            <div className='container_filme'>
                {/* titulo */}
                <h1 className='film-title'>{filme.title}</h1>
                {/* imagem */}
                    <img src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`} alt='imagem da api'/>
                {/* sinopse */}
                    <p className='text-sinopse'>{filme.overview}</p>
                {/* buttons */}
                <div id='container_buttons'>
                    <Link to='/'>Voltar</Link>
                    <button onClick={() => adicionar(filme.title)}>Watch List</button>
                </div>
            </div>
            
        </div>
       
    )
    
}