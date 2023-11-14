import * as S from "./styles";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";

export const AdvPage = () => {
  const images = ["", "", "", "", ""];

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <S.Main>
          <S.MainSearch>
            <S.SearchLogoLink>
              <S.SearchLogoImg src="/img/logo.png"></S.SearchLogoImg>
            </S.SearchLogoLink>
            <S.SearchLogoMobLink>
              <S.SearchLogoMobImg src="/img/logo-mob.png"></S.SearchLogoMobImg>
            </S.SearchLogoMobLink>
            <Link>
              <S.SearchButton>Вернуться на главную</S.SearchButton>
            </Link>
          </S.MainSearch>
          <S.MainArtic>
            <S.ArticContent>
              <S.ArticleLeft>
                <S.ArticleFillImg>
                  <S.ArticleImg>
                    <S.ArticleImgImage src=""></S.ArticleImgImage>
                  </S.ArticleImg>
                  <S.ArticleImgBar>
                    {images.map((item) => (
                      <S.ImgItem>
                        <S.ImgItemImage src={item}></S.ImgItemImage>
                      </S.ImgItem>
                    ))}
                  </S.ArticleImgBar>
                  <S.ArticleImgBarMob>
                    {images.map((item) => (
                      <S.ImgItemMob></S.ImgItemMob>
                    ))}
                  </S.ArticleImgBarMob>
                </S.ArticleFillImg>
              </S.ArticleLeft>
              <S.ArticleRight>
                <S.ArticleBlock>
                  <S.ArticleTitle>
                    Ракетка для большого тенниса Triumph Pro STС Б/У
                  </S.ArticleTitle>
                  <S.ArticleInfo>
                    <S.ArticleDate>Сегодня в 10:45</S.ArticleDate>
                    <S.ArticleCity>Санкт-Петербург</S.ArticleCity>
                    <S.ArticleLink>23 отзыва</S.ArticleLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>2 200 ₽</S.ArticlePrice>
                  <S.ArticleBtn>
                    Показать&nbsp;телефон
                    <S.ArticleBtnSpan>
                      8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                    </S.ArticleBtnSpan>
                  </S.ArticleBtn>
                  <S.ArticleAuthor>
                    <S.AuthorImg>
                      <S.AuthorImgImage src=""></S.AuthorImgImage>
                    </S.AuthorImg>
                    <S.AuthorCont>
                      <S.AuthorName>Кирилл</S.AuthorName>
                      <S.AuthorAbout>
                        Продает товары с августа 2021
                      </S.AuthorAbout>
                    </S.AuthorCont>
                  </S.ArticleAuthor>
                </S.ArticleBlock>
              </S.ArticleRight>
            </S.ArticContent>
          </S.MainArtic>
          <S.MainContainer>
            <S.MainTitle>Описание товара</S.MainTitle>
            <S.MainContent>
              <S.MainText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </S.MainText>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
