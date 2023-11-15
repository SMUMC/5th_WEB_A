import * as S from "./Skeleton.styld";

export const SkeletonElement = () => {
    return (
        <S.Container>
            <S.Poster />
            <S.DescriptionContainer>
                <S.TitleLayout />
                <S.StarLayout />
            </S.DescriptionContainer>
        </S.Container>
    );
}