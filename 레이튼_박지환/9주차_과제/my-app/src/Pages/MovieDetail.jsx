import { useLocation, useParams } from "react-router-dom";
import MovieInfo from "../Components/MovieInfo/MovieInfo";
import { CreditData } from "../Hooks/CreditData";
import CreditList from "../Components/CreditList/CreditList";

export default function MovieDetail() {
  const { id } = useParams(); // useParams 훅으로 id값을 받아온다.
  const { isData, isLoading } = CreditData(id);
  const { cast, crew } = isData;

  const { state } = useLocation();
  const { vote_average, poster_path, title, overview } = state.film;
  return (
    <div style={{ width: "inherit" }}>
      <MovieInfo
        vote_average={vote_average}
        poster_path={poster_path}
        title={title}
        overview={overview}
      />
      {isLoading ? (
        <div>로딩 중입니다.</div>
      ) : (
        <div style={{ width: "inherit" }}>
          <CreditList casts={cast} crews={crew} />
        </div>
      )}
    </div>
  );
}
