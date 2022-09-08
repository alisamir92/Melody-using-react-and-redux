import { Col, Container, Row , Figure} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faShare} from "@fortawesome/free-solid-svg-icons";
import image from "../img/Melody_Homepage-series3.jpg";
import image2 from "../img/Melody_Homepage-series1.jpg";
import { faFacebookF , faTwitter} from "@fortawesome/free-brands-svg-icons";




function SeriesDetails(props) {
    console.log(props.episodes);
    return(
        <Container className="series-details">

            <Row>
                <Col lg={3}>
                    {props.episodes.map( (episode) => {
                        return  <div className="episode_options">
                                    <a href="#"><FontAwesomeIcon icon={faPlus} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faMinus} /></a>
                                    <a href="#">{episode.episode_name}</a>
                                    <a href="#"><FontAwesomeIcon icon={faShare} /></a>

                                </div>
                    })}
                </Col>
                <Col lg={6}>
                        <Figure>
                            <Figure.Image
                                width={500}
                                src={image}
                            />
                        </Figure>
                        <h1>KHATEM SELIMAN(series title)</h1>
                        <h3>Season1 - Episode 30</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum. </p>
                        <div>R | 123 MIN | Released 2015 | 5.1 | HD</div>
                        <p className="social-media">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </p>
                        <Row className="series_crew">
                            <Col lg={6}>
                                <h4>CAST & CREW</h4>
                                {
                                    
                                    Object.keys(props.episodes[0].castAndCrew).map((realName)=>{
                                        

                                       return <Row>
                                                <Col xs={4} className="pColor">{props.episodes[0].castAndCrew[realName]}</Col>
                                                <Col xs={8} className="sColor">{realName}</Col>
                                              </Row>      
                                        })
                                }
                                
                                <h4>DIRECTORS</h4>
                                {
                                    props.episodes.map((episode)=>{
                                        return <Row>
                                                    <Col className="pColor">Directed by</Col>
                                                    <Col className="sColor">{episode.directors}</Col>
                                               </Row> 
                                    })
                                }
                            </Col>
                            <Col lg={6}>
                                <h4>PRODUCERS</h4>
                                {
                                    props.episodes[0].producers.map((producer)=>{
                                        return <Row>
                                                    <Col className="sColor">{producer}</Col>
                                               </Row> 
                                    })
                                }
                            </Col>
                            
                        </Row>
                </Col>
                <Col lg={3}>
                <Figure>
                            <Figure.Image
                                // width={500}
                                src={image2}
                            />
                        </Figure>
                </Col>
            </Row>

        </Container>
    )
}


export default SeriesDetails;