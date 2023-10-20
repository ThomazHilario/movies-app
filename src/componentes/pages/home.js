import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&region=BR&sort_by=popularity.desc&vote_count.gte=10&watch_region=BR&api_key=9aa32f8e4d5315b556d76dc60bc308ac'

export default function Home(){
    // state - lista de filmes
    const [list,setList] = useState([])

    // useEffect - antes do componente ser montado
    useEffect(()=>{
        async function loadList(){
            // Requisicao ao banco de dados de filmes
            let response = await fetch(url)
            let data = await response.json()

            // setando a os dados da api na state list
            setList(data.results)
        }

        // executando a funcao loadList para setar os valores da api no state list
        loadList()

    },[])
    return(
        // container home
        <div id='container_home'>
            {/* criando um container_filmes para cada elemento do array */}
            {list.map((item,idx) => {
                return(
                    <div key={idx} className='container_filmes'>
                        {/* title */}
                        <h1 className='film-title'>{item.title}</h1>

                        {/* image */}
                        <img src={`${'https://image.tmdb.org/t/p/w200'}${item.poster_path}`} alt='imagem da api'/>

                        {/* link */}
                        <Link to={`/filme/${item.id}`}>ver mais</Link>
                    </div>
                )
            })}
        </div>
    )
}