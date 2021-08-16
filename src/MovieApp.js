import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./MovieApp.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  //모든 state를 처음부터 선언하고 시작할 필요는 없다.
  //선언되지 않은 state도 사용할 수 있음
  //다만 처음에 선언 해두는 것이 추후 확장성에 좋음.

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
          ? (<div className="loader">
                <span className="loader_text">Loading...</span>
            </div>
            ) : (
            <div className="movies">
                {movies.map((movie) => {
                    return (
                        <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                        genres={movie.genres}
                        />
                    );
                })}
            </div>
            )
        }
      </section>
    );
  }
}

export default App;
