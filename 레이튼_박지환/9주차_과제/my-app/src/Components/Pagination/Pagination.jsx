import * as S from "../Pagination/Pagination.styled";

export default function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit); // 올림

  return (
    <S.Container>
      <S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </S.Button>
      {Array(numPages)
        .fill()
        .map((_, idx) => (
          // 페이지 수만큼 빈 배열을 만들고 현재값은 무시하고 idx로 페이지 번호를 만든다.
          <S.Button
            key={idx + 1}
            onClick={() => setPage(idx + 1)}
            aria-current={page === idx + 1 ? "page" : undefined}
          >
            {idx + 1}
          </S.Button>
        ))}
      <S.Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </S.Button>
    </S.Container>
  );
}
