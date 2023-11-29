import { FetchNowPlaying } from "../Hooks/FetchNowPlaying";
import MovieList from "../Components/MovieList/MovieList";
import { useEffect, useState } from "react";
import SmallSpinner from "../Components/SmallSpinner/SmallSpinner";
import * as S from "../Pages/NowPlaying.styled";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

export default function NowPlaying() {
  const [changeSpinner, setChangeSpinner] = useState(false);
  const { isData, isLoading } = FetchNowPlaying("now_playing");

  useEffect(() => {
    if (!isLoading) {
      setChangeSpinner(true);
    }
  }, [isLoading]);

  return (
    <>
      <MovieList films={isData} />
      {changeSpinner ? (
        <S.loaderContainer>
          <SmallSpinner />
        </S.loaderContainer>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
