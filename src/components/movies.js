import { Col, Container, Row } from "react-bootstrap";
import _ from "lodash"
import { Button, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useSelector , useDispatch } from 'react-redux'
import { addMovie, removeMovie } from "../redux/movie-slice"



function Movies(props) {

    const slider_styles = (image) => {
        return {
  
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          height: "200px"
        }
      }

    const movies = _.chunk(props.movies, 5);
    // console.log(movies)
    
    
    const dispatch = useDispatch();
    const watchList = useSelector((state) => state.watchList);
    return(
        <Container className="movies_grid">
            {props.children}
            {movies.map((items, index) => {
               return <Row className="movie_row" key={index}>
                        {items.map((item, index)=>
                            <Col lg={2} key={index} >
                                <div className="movie_col" style={slider_styles(item.movie_image)}>

                                    <div className="hidden-buttons">
                                    <Nav.Link as={Link} to="/movie-page" state={{movie: item}}><PlayArrowIcon style={{ fontSize: 100 }} /></Nav.Link>
                                    
                                    {watchList.includes(item)?
                                        <Button variant="secondary" size="sm" onClick={()=>{
                                            dispatch(removeMovie(item));
                                        }}>
                                        <RemoveIcon className="remove-icon" /><span>REMOVE</span>
                                        </Button>:
                                        <Button variant="secondary" size="sm" onClick={()=>{
                                            dispatch(addMovie(item));
                                        }}>
                                        <AddIcon className="add-icon" /><span>ADD</span>
                                        </Button>
                                    }
                                        
                                    
                                    </div>
                                </div>
                                <h3>Lorum Ipsum Dolor Set</h3>
                            </Col>
                        )}
                    </Row>
            }
                )}
            
            
                        
        </Container>
    )
}

export default Movies;