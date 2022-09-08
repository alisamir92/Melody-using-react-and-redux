
import Header from "../components/header"
import Footer from "../components/footer"
import MoviesSort from "../components/movies-sort"
import Movies from "../components/movies";
import moviesData from "./movies-data";






function Home() {
    return(
        <>
        <Header /> 
        <MoviesSort />
        <Movies movies={moviesData} />
        <Footer />
        </>
    )
}
export default Home;