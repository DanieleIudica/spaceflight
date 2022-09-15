import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button, Alert, Spinner} from 'react-bootstrap'
import { Article} from '../types/article'
import { useNavigate } from "react-router-dom";


// interface SingleArticleProps{
//     article: Article
// }


// export const ArticleDetails = ({article}: SingleArticleProps) => {
    export const ArticleDetails = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [articleDetails, setArticleDetails] = useState<Article | null>(null);

    useEffect(() => {
        const fetchDetails = async () => {
          try {
            let response = await fetch("https://api.spaceflightnewsapi.net/v3/articles/" + params.id);
            if (response.ok) {
              let data = await response.json();
              console.log(data);
              setArticleDetails(data);
              console.log(articleDetails);
            }else {
                console.log('something went wrong')
            }
          } catch (e) {
            console.log(e);
          }
        };
        fetchDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  return (
<>
 {/* <div>{articleDetails.title}</div> */}

 <Row className="justify-content-center my-5">
         <Col className="text-center" xs={12} md={6}>
             {articleDetails ? (
                 <Card style={{ width: "18rem" }} className="mx-auto">
                     <Card.Img variant="top" src={articleDetails.imageUrl} />
                     <Card.Body>
                         <Card.Title>{articleDetails.title}</Card.Title>
                         <Card.Text>{articleDetails.summary}</Card.Text>
                     </Card.Body>
                 </Card>
             ) : typeof articleDetails === "undefined" ? (
                 <Alert variant="danger">Movie non trovato</Alert>
             ) : (
                 <Spinner animation="border" variant="success" />
             )}
         </Col>
     </Row>
        <Button
          variant='dark'
            onClick={() => {
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }}
          >
            BACK TO HOME
        </Button>
</>
  )
}
