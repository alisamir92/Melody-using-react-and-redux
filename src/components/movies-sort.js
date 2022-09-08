import { useState } from "react";
import {Container, Row, Col, Form} from "react-bootstrap";
import plusImage from "../img/plus.png";
import minusImage from "../img/minus.png";


function MoviesSort() {


    const [backgroundImage, setBackgroundImage] = useState({ "firstSelect":`url(${plusImage})`,
                                                            "secondSelect": `url(${plusImage})`});
    
    const toggle_background = (noOfSelect) => {
        if (backgroundImage[`${noOfSelect}`] === `url(${plusImage})`) {
           setBackgroundImage({
            ...backgroundImage,
            [`${noOfSelect}`]: `url(${minusImage})`
           })
            
        }else{
            setBackgroundImage({
                ...backgroundImage,
                [`${noOfSelect}`]: `url(${plusImage})`
               })
        }
    }
    

    return(
        
        <Container className="movies-sort">
            <Row>
                <Col className="sort-title" md={8}><h3>MOVIES &gt; JUST ADDED &gt; DRAMA</h3> </Col>
                <Col className="sort-selects" md={4}>
                <Form.Select onClick={()=>toggle_background("firstSelect")} style={{"backgroundImage": `${backgroundImage.firstSelect}`}} aria-label="Default select example">
                    
                    <option value="featured">FEATURED</option>
                    <option value="a-z">A-Z</option>
                    <option value="just-added">JUST ADDED</option>
                    <option value="top">TOP</option>
                </Form.Select>
                <Form.Select onClick={()=>toggle_background("secondSelect")} style={{"backgroundImage": `${backgroundImage.secondSelect}`}} aria-label="Default select example">
                    
                    <option value="drama">DRAMA</option>
                    <option value="action">ACTION</option>
                    <option value="romantic">ROMANTIC</option>
                </Form.Select>
                </Col>
            </Row>

        </Container>
        
        
    )
}

export default MoviesSort;