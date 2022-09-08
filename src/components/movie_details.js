import { Col, Container, Row, Figure, Button } from "react-bootstrap";
import {useLocation} from "react-router-dom";
import image from "../img/Melody_Movie_Detail2.jpg";
import AddIcon from "@material-ui/icons/Add";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faTwitter} from "@fortawesome/free-brands-svg-icons";
import RemoveIcon from '@material-ui/icons/Remove';
import { useSelector , useDispatch } from 'react-redux'
import { addMovie, removeMovie } from "../redux/movie-slice"

function MovieDetails() {
    const location = useLocation();
    const { movie } = location.state;
    
    const dispatch = useDispatch();
    
    const watchList = useSelector((state) => state.watchList);
    
    let watchListMovies = watchList.map((movie)=>movie.movie_name);
    
    // console.log(watchListMovies)
    
    
    return(
        <Container className="movie-details">
                <Row>
                            
                    <Col lg={7}>
                        <Row>
                            <Figure>
                            <Figure.Image
                                width={650}
                                height={500}
                                src={movie.movie_image}
                            />
                        
                            </Figure>
                        </Row>
                        <Row className="movie_crew">
                            <Col lg={4}>
                                <h4>CAST & CREW</h4>
                                {
                                    Object.keys(movie.castAndCrew).map((realName)=>{
                                       return <Row>
                                                <Col xs={4} className="pColor">{movie.castAndCrew[realName]}</Col>
                                                <Col xs={8} className="sColor">{realName}</Col>
                                              </Row>      
                                    })
                                }
                            </Col>
                            <Col lg={4}>
                                <h4>PRODUCERS</h4>
                                {
                                    movie.producers.map((producer)=>{
                                        return <Row>
                                                    <Col className="pColor">{producer}</Col>
                                               </Row> 
                                    })
                                }
                            </Col>
                            <Col lg={4}>
                                <h4>DIRECTORS</h4>
                                {
                                    movie.directors.map((director)=>{
                                        return <Row>
                                                    <Col className="pColor">Directed by</Col>
                                                    <Col className="sColor">{director}</Col>
                                               </Row> 
                                    })
                                }
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={5}>
                        <Figure>
                            <Figure.Image
                                width={500}
                                src={image}
                            />
                        </Figure>
                        <h1>This is the movie title</h1>
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
                        <div>R | {movie.duration} | Released {movie.released} | {movie.rate} | {movie.quality}</div>
                        <Button variant="secondary" size="sm">
                            PLAY
                        </Button>
                        {
                        watchListMovies.includes(movie.movie_name)?
                            <Button variant="secondary" size="sm" onClick={()=>{
                                dispatch(removeMovie(movie));
                            }}>
                                <RemoveIcon className="remove-icon" /><span>REMOVE</span>
                            </Button>:
                            <Button variant="secondary" size="sm" onClick={()=>{
                                dispatch(addMovie(movie));
                            }}>
                                <AddIcon className="add-icon" /><span>ADD</span>
                            </Button>
                        }
                        <p className="social-media">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </p>
                    </Col>
                
                </Row>

            </Container>
    )
}

export default MovieDetails;