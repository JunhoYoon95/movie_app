import React from "react";
import axios from "axios";
import Movie from "./Movie";

// 항상 기억 React는 자동적으로 class component 의 render method를 자동으로 실행한다.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []  // 이후 이 array를 채워서 data를 fetch해보는 과정을 갖자고
  };

  // async : 이 함수가 비동기라는 말. -> 너는 이걸 기다려야해. 라는 말
  getMovies = async () => {
    // await axios -> axios가 끝날 때까지 기다렸다가 계속 하라는 말임.
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating");   // API 요청 중 정렬을 하는 API가 있어서 했음
    // 근데 알아야 할 점 axios.get()은 그렇게 빠르지 않음. 그러면 기다리라는 말을 어떻게 띄워줄 필요가 있겠지
    //  console.log(movies);  -> 이걸 state 안에다가 넣자
    //  this.setState({movies:movies})  // movies(setState에서 나온) : movies(axios에서 나온 movies)
    this.setState({ movies, isLoading: false });  // 하나의 setState에서 2개의 상태를 변경했다.

  }

  componentDidMount() {
    this.getMovies();
  }
  // 이번에는 사람들이 일반적으로 javascript에서 data를 fetch 하는 방법인 fetch 사용 방법을 알아볼 것이다.
  // 물론 fetch 보다는 axios가 훨씬 좋을 것 같은데 일단은 차근차근 알아보자구. (axios 는 fetch 위에 있는 작은 layer 느낌)

  // 이 프로젝트에서는 https://yts.mx/api#list_movies 라는 사이트. yts 사이트를 가서 볼 거임.
  // 근데 뭘 자꾸 불법적으로 하는지 ㅅㅂ럼들 proxy로 만든 API https://github.com/serranoarevalo/yts-proxy 
  // 여기의 API를 사용할거니까 일단 가보자

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          ))}
      </div>
    );
  }

  /*
    이번 push의 정리
    1. application에서 render을 한다.
    2. 처음에는isLoading:true 그래서 Loading을 볼거야.
    3. application이 mount된 후, 우리는 getMovies 함수를 호출한다.
      1) getMovies는 axios.get을 사용한다. 하지만 axios.get은 완료되기까지 시간이 조금 필요하기 때문에 await을 넣었다. (await 쓰려면 async와 함께 써야 한다.)
  */

}

export default App;
