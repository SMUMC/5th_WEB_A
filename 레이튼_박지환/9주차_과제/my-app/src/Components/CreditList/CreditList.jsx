import * as S from "../CreditList/CreditList.styled";
import { StyledSlider } from "../Slick/Slick";
export default function CreditList({ casts, crews }) {
  const settings = {
    dots: false,
    Infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 8,
    draggable: true,
  };
  return (
    <>
      <S.Container>
        <h2>출연진</h2>
        <StyledSlider {...settings}>
          {casts?.map((cast, index) => (
            // 데이터를 받아오기 전에 mapping을 하면 에러가 발생하기 때문에 ? optional chaining 연산자로 처리해준다.
            // 객체가 null 또는 undefined인 경우에도 에러를 발생시키지 않게 해준다.
            <S.ImageContainer key={`cast-${index}`}>
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                  alt={`${cast.original_name} profile`}
                />
              ) : (
                <img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s`}
                  alt="Placeholder"
                />
              )}
              <p>{cast.original_name}</p>
            </S.ImageContainer>
          ))}
        </StyledSlider>
      </S.Container>
      <S.Container>
        <h2>제작진</h2>
        <StyledSlider {...settings}>
          {crews?.map((crew, index) => (
            <S.ImageContainer key={`crew-${crew.id}-${index}`}>
              {crew.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${crew.profile_path}`}
                  alt={`${crew.original_name} profile`}
                />
              ) : (
                <img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s`}
                  alt="Placeholder"
                />
              )}
              <p>{crew.original_name}</p>
            </S.ImageContainer>
          ))}
        </StyledSlider>
      </S.Container>
    </>
  );
}
