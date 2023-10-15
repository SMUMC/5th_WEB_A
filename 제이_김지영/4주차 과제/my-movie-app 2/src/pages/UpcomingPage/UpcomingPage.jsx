
import { CustomFetch } from "../../hooks/fetchData";
import MovieList from '../../Components/MovieList/MovieList';
import Loading from '../../Components/Loading/Loading';

export default function UpComing() {
  const { isData, isLoading } = CustomFetch("upcoming");

  const films = Array.isArray(isData) ? isData : [];
  
  return <>{isLoading ? <Loading /> : <MovieList films={isData} />}</>;
}