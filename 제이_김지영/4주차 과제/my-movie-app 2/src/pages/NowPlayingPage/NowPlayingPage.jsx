
import { CustomFetch } from "../../hooks/fetchData";
import MovieList from '../../Components/MovieList/MovieList';
import Loading from '../../Components/Loading/Loading';

export default function NowPlaying() {
  const { isData, isLoading } = CustomFetch("now_playing");

  const films = Array.isArray(isData) ? isData : [];

  return <>{isLoading ? <Loading /> : <MovieList films={isData} />}</>;
}