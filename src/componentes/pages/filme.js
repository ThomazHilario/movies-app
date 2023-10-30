import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import '../style/filmes.css'
import lista from '../lista/lista'
export default function FilmePage(){
    // state - filme
    const [filme,setFilme] = useState({})
    const [carregado,setCarregado] = useState(false)
    // pegando o id
    const {id} = useParams()


    // useEffect para setar o filme da api no state filme
    useEffect(()=>{
        async function loadStateFilme(){
            try {
                // fazendo requisição com axios
                let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR&api_key=9aa32f8e4d5315b556d76dc60bc308ac`)
                if(response.status === 200){
                    let data = response.data

                    // setando o valor da api no state filme
                    setFilme(data)
                }
            } catch (error) {
                console.log(error)
                setFilme('erro')
            }
        }

        // executando a função
        loadStateFilme()
        setCarregado(true)
    },[id])

    // função adicionar
    function adicionar(titleMovie){
        // Adicionando o titulo do filme na lista
        lista.push(titleMovie)

        // Adicionando na local storage
        localStorage.setItem('filmes',JSON.stringify(lista))
    }

    if(carregado === false){
        return(
            <div className='container'>
                <h1>Carregando filme</h1>
            </div>
        )
    }

    return(
        <div className='container'>
           {typeof filme === 'string' ? <h1>Filme não encontrado</h1> : <div className='container_filme'>
                {/* titulo */}
                <h1 className='film-title'>{filme.title}</h1>
                {/* imagem */}
                    <img src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`} alt='imagem da api'/>
                {/* sinopse */}
                    <p className='text-sinopse'>{filme.overview}</p>
                {/* buttons */}
                <div id='container_buttons'>
                    <Link to='/'>Voltar</Link>
                    <a href={`https://www.youtube.com/results?search_query=${filme.title}_trailer`} target="blank" id='btn-trailer'>Trailer</a>
                    <button onClick={() => adicionar(filme.title)}>Watch List</button>
                </div>
            </div>}
        </div>
       
    )
    
}