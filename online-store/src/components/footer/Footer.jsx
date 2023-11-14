import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg>
          <S.FooterImgLink>
            <S.FooterImgImage src="/img/icon_01.png"></S.FooterImgImage>
          </S.FooterImgLink>
        </S.FooterImg>
        <S.FooterImg>
          <S.FooterImgLink>
            <S.FooterImgImage src="/img/icon_02.png"></S.FooterImgImage>
          </S.FooterImgLink>
        </S.FooterImg>
        <S.FooterImg>
          <S.FooterImgLink>
            <S.FooterImgImage src="/img/icon_03.png"></S.FooterImgImage>
          </S.FooterImgLink>
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  );
};
