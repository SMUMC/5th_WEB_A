import * as S from "./Profile.styled";

export const Profile = ({ profileData }) => {
    const { original_name, known_for_department, profile_path } = profileData;
    const img = process.env.REACT_APP_POSTER_BASE_URL + profile_path;
    const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

    return (
        <S.Container>
            <S.Img src={profile_path ? img : defaultImg} />
            <p>{original_name}</p>
            <p>{known_for_department}</p>
        </S.Container>
    );
}