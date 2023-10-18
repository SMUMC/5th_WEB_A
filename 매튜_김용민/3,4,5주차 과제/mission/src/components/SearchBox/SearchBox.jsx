import { useState } from 'react';
import * as S from './SearchBox.style';
import useDebounce from '../../utils/useDebounce';
import SearchList from './SearchList/SearchList';
import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  console.log(debouncedSearchValue);

  return (
    <>
      <S.Container>
        <S.Title>📽️ Find your movies !</S.Title>
        <S.SearchContainer>
          <S.SearchLayout
            placeholder='찾고 싶은 영화를 입력해주세요!'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <S.SearchButton>
            <FiSearch />
          </S.SearchButton>
        </S.SearchContainer>
        {searchValue && (
          <S.SearchListWrapper>
            <SearchList searchMovie={debouncedSearchValue} />
          </S.SearchListWrapper>
        )}
      </S.Container>
    </>
  );
};

export default SearchBox;
