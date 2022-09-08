
import Header from "../components/header"
import Footer from "../components/footer"
import MoviesSort from "../components/movies-sort"
import Movies from "../components/movies";
import moviesData from "./movies-data";
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row , Button, Nav} from "react-bootstrap";
import { addMovie, removeMovie } from "../redux/movie-slice"
import RemoveIcon from '@material-ui/icons/Remove';
import {Link} from "react-router-dom";




function WatchList() {
    const watchList = useSelector((state) => state.watchList);
    const movie_styles = (image) => {
        return {
  
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          height: "auto",
        
        }
      }

    const dispatch = useDispatch();

    return(
        <>
        <Header />
        {
        watchList.length == 0 ?
        <div className="no-list">There is No movies in watch list</div>:
        watchList.map((movie, index)=>
        <Row className="watch-list">
            <Col style={movie_styles(movie.movie_image)}>

            </Col>
            <Col>
                {movie.movie_name}
            </Col>
            <Col>
            <Button variant="secondary" size="sm">
                <Nav.Link as={Link} to="/movie-page" state={{movie: movie}}> PLAY</Nav.Link>
                            
            </Button>
            <Button variant="secondary" size="sm" onClick={()=>{
                    dispatch(removeMovie(movie));
                }}>
                
                <RemoveIcon className="remove-icon" /><span>REMOVE</span>
            </Button>
            </Col>
        </Row>

        // <div>
        //     <img style={slider_styles(movie.movie_image)}></img>
        //     <a>{movie.movie_name}</a>
            
        // </div>
        )}
        <Footer />
        </>
    )
}
export default WatchList;