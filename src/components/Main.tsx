import {Container, Row, Col} from 'react-bootstrap'
import { Article} from '../types/article'
import { useEffect, useState } from 'react'
import { SingleArticle } from './SingleArticle'


export const Main = () => {

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        fetchArticles()
    },[])

    const fetchArticles = async () =>{
        try {
            const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
            if (response.ok) {
                let data = await response.json()
                console.log(data);
                setArticles(data)
            } else {
                console.log('something went wrong')
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Container>
        <Row>
            <Col xs={12} className='text-center my-5'>
                <h1>Welcome to SpaceFlight!</h1>
            </Col>
        </Row>
        <Row>
                {articles.map((article) => (
                <SingleArticle key={article.id} article={article}/>
                ))}
        </Row>
    </Container>
  )
}
