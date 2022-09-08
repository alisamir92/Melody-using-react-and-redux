import image1 from "../img/Melody_Homepage-movie4.jpg"
import image2 from "../img/Melody_Homepage-movie2.jpg"
import image3 from "../img/Melody_Homepage-movie3.jpg"
import { Button, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useSelector , useDispatch } from 'react-redux'
import { addMovie, removeMovie } from "../redux/movie-slice"




function HomeMainSlider(props) {

    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NavigateNextIcon />,
        prevArrow: <NavigateBeforeIcon />
      };

      const slider_styles = (image) => {
        return {

          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          height: "400px"
        }
      }

      const dispatch = useDispatch();
      const watchList = useSelector((state) => state.watchList)
      return (
        <div className="home-main-slider">
          
          <Slider {...settings}>
            {props.images.map((item, index) => 
            <div key={index} >
                <div className="slider-item" style={slider_styles(item.movie_image)}>
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
                  
            </div>
                )}
            
          </Slider>
        </div>
      );
}

export default HomeMainSlider;