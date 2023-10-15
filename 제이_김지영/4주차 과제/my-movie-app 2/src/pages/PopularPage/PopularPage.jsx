
import { CustomFetch } from "../../hooks/fetchData";
import MovieList from '../../Components/MovieList/MovieList';
import Loading from '../../Components/Loading/Loading';

export default function Popular() {
  const { isData, isLoading } = CustomFetch("popular");

  const films = Array.isArray(isData) ? isData : [];
  
  return <>{isLoading ? <Loading /> : <MovieList films={isData} />}</>;
}