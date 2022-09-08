import React from "react";
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



function Sliders(props) {
  
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      nextArrow: <NavigateNextIcon />,
      prevArrow: <NavigateBeforeIcon />,
      
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        }
      ]
    }
    
    
    const slider_styles = (image) => {
      return {

        backgroundImage: `url(${image})`,
        
        backgroundSize: 'cover',
        height: "200px"
      }
    }
   
    const dispatch = useDispatch();
    const watchList = useSelector((state) => state.watchList)
    return (
      <div className="main-page-sliders">
        <h4> {props.category} &gt; </h4>
        <Slider {...settings}>
            {props.images.map((item, index) => 
            <div key={index} >
                <div className="slider-item" style={slider_styles(item.movie_image)} >
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
            </div>
                )}
            
          </Slider>
      </div>
    );
      }
    
    

  export default Sliders;
