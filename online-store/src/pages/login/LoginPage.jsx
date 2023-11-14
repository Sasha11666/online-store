// import * as S from "./styles";
// import Auth from "../../components/auth/Auth";

// export const LoginPage = () => {
//   return (
//     <S.PageWrapper>
//       <Auth isLoginMode={true} />
//     </S.PageWrapper>
//   );
// };

import * as S from "./styles";
import Auth from "../../components/auth/Auth";

export const LoginPage = () => {
  return (
    <div>
      <S.PageWrapper>
        <Auth isLoginMode={true} />
      </S.PageWrapper>
    </div>
  );
};
