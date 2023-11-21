import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&region=BR&api_key=9aa32f8e4d5315b556d76dc60bc308ac'

export default function Home(){
    // state - lista de filmes
    const [list,setList] = useState([])

    // useEffect - antes do componente ser montado
    useEffect(()=>{
        async function loadList(){
            try {
                // Requisicao ao banco de dados de filmes
                let response = await fetch(url)
                let data = await response.json()

                // setando a os dados da api na state list
                setList(data.results)
            } catch (error) {
                console.log(error)
            }
        }

        // executando a funcao loadList para setar os valores da api no state list
        loadList()
    },[])


    return(
        // container home
        <div id='container_home'>
            {/* criando um container_filmes para cada elemento do array */}
            {list.map((item,idx) => <FilmeContainer key={idx} title={item.title} imagem={item.poster_path} id={item.id}/>)}
        </div>
    )
}

function FilmeContainer(props){
    return(
        <div className='container_filmes'>
            {/* title */}
            <h1 className='film-title'>{props.title}</h1>

            {/* image */}
            <img src={`${'https://image.tmdb.org/t/p/w200'}${props.imagem}`} alt='imagem da api'/>

            {/* link */}
            <Link to={`/filme/${props.id}`}>ver mais</Link>
        </div>
    )
}