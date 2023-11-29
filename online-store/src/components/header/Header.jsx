import * as S from "./styles";
import { useUserContext } from "../../App";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { user } = useUserContext();
  let navigate = useNavigate();

  const signOutFunc = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const signInFunc = () => {
    navigate("/login");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const createAd = () => {
    navigate("/create-ad");
  };

  return (
    <S.Header>
      <S.HeaderNav>
        {user && (
          <S.HeaderButton onClick={createAd}>
            Разместить объявление
          </S.HeaderButton>
        )}
        {user && (
          <S.HeaderButton onClick={goToProfile}>Личный кабинет</S.HeaderButton>
        )}
        {user ? (
          <S.HeaderButton onClick={signOutFunc}>Выйти</S.HeaderButton>
        ) : (
          <S.HeaderButton onClick={signInFunc}>
            Вход в личный кабинет
          </S.HeaderButton>
        )}
      </S.HeaderNav>
    </S.Header>
  );
};
