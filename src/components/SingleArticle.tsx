// import React from 'react'

// export const SingleArticle = () => {
//   return (
//     <div>SingleArticle</div>
//   )
// }


import {Card, Button} from 'react-bootstrap'
import { Article} from '../types/article'
import { useNavigate } from "react-router-dom";

interface SingleArticleProps{
    article: Article
}


export const SingleArticle = ({article}: SingleArticleProps) => {

    const navigate = useNavigate();

  return (
        <Card style={{ width: '18rem' }} className='p-1 m-3'>
            <Card.Img variant="top" src={article.imageUrl} height="250"/>
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                <span className='fw-bold'>Published at:</span> <span>{article.publishedAt}</span>
                </Card.Text>
                <Button variant="dark" 
                className='mt-auto' 
                onClick={() => {
                    setTimeout(() => {
                    navigate("/details/" + article.id);
                    }, 500);
                }}>Show Details</Button>
            </Card.Body>
        </Card>
)
}
