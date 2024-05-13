/* 
DESARROLLO WEB FRONTEND - TAREA 1  
TAREA DE: HUASCAR FEDOR GONZALES GUZMAN
*/
import axios from 'axios'

export type Articles = Article[]

export interface Article {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

async function obtenerPosts() {
  const respuesta = await axios.get<Articles>(
    'https://fakestoreapi.com/products'
  )
  const valores = respuesta.data
  // ordenar por precio descendentemente
  const ordeDescByPrice = valores.sort((a: Article, b: Article) => (a.price > b.price ? -1 : 1))
  console.log(ordeDescByPrice)
  
  console.log('----------------------------------------------------')

  // filtrar por rating.rate > 2.9
  const filterByRate = valores.filter((a: Article) => a.rating.rate > 2.9)
  console.log(filterByRate)
}

obtenerPosts()
