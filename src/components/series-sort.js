import { useState } from "react";
import {Container, Row, Col, Form} from "react-bootstrap";
import plusImage from "../img/plus.png";
import minusImage from "../img/minus.png";


function SeriesSort() {


    const [backgroundImage, setBackgroundImage] = useState({ 
                                                            "selectBackground": `url(${plusImage})`});
    
    const toggle_background = (noOfSelect) => {
        if (backgroundImage.selectBackground === `url(${plusImage})`) {
           setBackgroundImage({
            "selectBackground": `url(${minusImage})`
           })
            
        }else{
            setBackgroundImage({
                "selectBackground": `url(${plusImage})`
               })
        }
    }
    

    return(
        
        <Container className="movies-sort">
            <Row>
                <Col className="sort-title" md={10}><h3>SERIES &gt; KHATEM SELIMAN &gt; SEASON1</h3> </Col>
                <Col className="sort-selects" md={2}>
                
                <Form.Select onClick={()=>toggle_background()} style={{"backgroundImage": `${backgroundImage.selectBackground}`}} aria-label="Default select example">
                    
                    <option value="season1">SEASON1</option>
                    <option value="season2">SEASON2</option>
                    <option value="season3">SEASON3</option>
                    <option value="season4">SEASON4</option>
                </Form.Select>
                </Col>
            </Row>

        </Container>
        
        
    )
}

export default SeriesSort;