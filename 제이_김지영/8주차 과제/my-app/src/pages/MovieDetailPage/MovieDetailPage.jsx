import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
//import { FetchData } from "../../Hooks/FetchData";
import { getMovieDataWithId } from "../../Hooks/api";
import { useCreditData } from "../../Hooks/CreditData";
import * as S from "./MovieDetailPage.styled";

export default function MovieDetail() {
  const { id } = useParams(); //App.js 라우팅 경로로 넘겨준 것
  const location = useLocation(); //Movie.jsx에서 useNavigate로 던져준 것
  //const { poster_path, title, vote_average, overview, id } = location.state; //구조분해할당
  //console.log("id:", id, "location:", location);

  const [movieDetail, setMovieDetail] = useState({
    poster_path: "",
    title: "",
    vote_average: 0,
    overview: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (location.state === null) {
        //경로 처음부터 순서대로 접근하지 않고 url로 바로 접근할 수 있도록
        try {
          const res = await getMovieDataWithId(id);
          console.log("res: ", res);
          setMovieDetail({
            poster_path: res.poster_path,
            title: res.title,
            vote_average: res.vote_average,
            overview: res.overview,
          });
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      } else {
        // 경로 순서대로 접근하면 (원래 이것만 하면 됨)
        setMovieDetail({
          poster_path: location.state.poster_path,
          title: location.state.title,
          vote_average: location.state.vote_average,
          overview: location.state.overview,
        });
      }
    };

    fetchData();
  }, []);

  console.log("movieDetail: ", movieDetail);
  console.log("useCreditData(movieDetail.id: ", useCreditData(id));
  const creditData = useCreditData(id);
  console.log("test:", creditData[0].crew);
  const castArray = creditData[0].cast || []; // creditData[0]?.cast가 없으면 빈 배열로 초기화
  const crewArray = creditData[0].crew || []; // creditData[0]?.crew가 없으면 빈 배열로 초기화

  return (
    <main>
      <S.Container>
        <S.Movie>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
              alt={`${movieDetail.title} 이미지`}
            />
          </div>
          <div>
            <h1>{movieDetail.title}</h1>
            <br />
            <h3>{"⭐️".repeat(Math.floor(movieDetail.vote_average), 1)}</h3>
            <br />
            <h3>줄거리</h3>
            <br />
            <div>
              {movieDetail.overview
                ? movieDetail.overview
                : "TMDB에서 제공해주는 API에서 상세 줄거리 정보가 없습니다."}
            </div>
          </div>
        </S.Movie>
        <S.People>
          <h3>Cast</h3>
          <div className="cast-list">
            {" "}
            {castArray.map((person) => (
              <div key={person.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                  alt={`${person.name}'s profile`}
                ></img>
                <p>{person.name}</p>
                <p>: {person.character}</p>
              </div>
            ))}
          </div>
          <h3>Crew</h3>
          <div className="crew-list">
            {crewArray.map((person) => (
              <div key={person.id}>{person.name}</div>
            ))}
          </div>
        </S.People>
      </S.Container>
    </main>
  );
}
