import { useState } from 'react';
import * as S from './SearchBox.style';
import useDebounce from '../../utils/useDebounce';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  console.log(debouncedSearchValue);

  return (
    <S.Container>
      <S.Title>📽️ Find your movies !</S.Title>
      <S.SearchContainer>
        <S.SearchLayout
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {/* <S.SearchList searchMovie={debouncedSearchValue}></S.SearchList> */}
        <S.SearchButton />
      </S.SearchContainer>
    </S.Container>
  );
};

export default SearchBox;
