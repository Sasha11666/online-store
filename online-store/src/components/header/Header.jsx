import * as S from "./styles";

export const Header = () => {
  const user = true;
  return (
    <S.Header>
      <S.HeaderNav>
        {user && <S.HeaderButton>Разместить объявление</S.HeaderButton>}
        <S.HeaderButton>Вход в личный кабинет</S.HeaderButton>
      </S.HeaderNav>
    </S.Header>
  );
};
