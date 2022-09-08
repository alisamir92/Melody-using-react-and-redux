import Footer from "../components/footer";
import Header from "../components/header";
import MovieDetails from "../components/movie_details";
// import RelatedTitles from "../components/related_titles";
import Movies from "../components/movies";
import moviesData from "./movies-data";


const movies = [moviesData[0], moviesData[7], moviesData[12], moviesData[18], moviesData[23], moviesData[29]]

function MoviePage() {
    
    return(
        <>
            <Header />
            <MovieDetails />
            
            <Movies movies={movies}>
                <hr></hr>
                <h6>SIMILER TITLES &gt;</h6>
            </Movies>
            <Footer />
        </>
    )
}
export default MoviePage;