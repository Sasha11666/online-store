import * as S from "./styles";
import Auth from "../../components/auth/Auth";

export const RegisterPage = () => {
  return (
    <S.PageWrapper>
      <Auth isLoginMode={false} />
    </S.PageWrapper>
  );
};
