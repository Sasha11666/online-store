import * as S from "./styles";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAd } from "../../api";
import { capitalizeFirstLetter } from "../../components/functions";
import { formatDate } from "../../components/functions";

export const AdvPage = () => {
  const images = ["", "", "", "", ""];
  const { id } = useParams();
  const [ad, setAd] = useState({});
  const [adIsFull, setAdIsFull] = useState(false);
  const [finalDate, setFinalDate] = useState("");
  const [sellFrom, setSellFrom] = useState("");
  const [shownPhone, setShownPhone] = useState(false);
  const [phone, setPhone] = useState("XX-XXXXXX");

  useEffect(() => {
    if (adIsFull) {
      // let dateFormatted = ad.created_on.split("T").slice(0, 1).join("");
      // let createDate = parse(dateFormatted, "yyyy-MM-dd", new Date());
      // setFinalDate(format(createDate, "MMMM do, yyyy", { locale: ru }));
      formatDate(setFinalDate, ad.created_on);
      formatDate(setSellFrom, ad.user.sells_from);
    }
  }, [adIsFull]);

  useEffect(() => {
    setAdIsFull(Object.keys(ad).length > 0);
  }, [ad]);

  useEffect(() => {
    getAd(id).then((data) => {
      setAd(data);
    });
  }, []);

  useEffect(() => {
    if (adIsFull) {
      if (shownPhone) {
        setPhone(ad.user.phone);
      } else {
        setPhone("XX-XXXXXX");
      }
    }
  }, [shownPhone]);

  const togglePhone = () => {
    setShownPhone(!shownPhone);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <S.Main>
          <S.MainSearch>
            <Link to={"/"}>
              <S.SearchLogoLink>
                <S.SearchLogoImg src="/img/logo.png"></S.SearchLogoImg>
              </S.SearchLogoLink>
            </Link>
            <Link to={"/"}>
              <S.SearchLogoMobLink>
                <S.SearchLogoMobImg src="/img/logo-mob.png"></S.SearchLogoMobImg>
              </S.SearchLogoMobLink>
            </Link>
            <Link to={"/"}>
              <S.SearchButton>Вернуться на главную</S.SearchButton>
            </Link>
          </S.MainSearch>
          <S.MainArtic>
            <S.ArticContent>
              <S.ArticleLeft>
                <S.ArticleFillImg>
                  <S.ArticleImg ad={adIsFull}>
                    {ad?.images?.length > 0 ? (
                      <S.ArticleImgImage
                        src={"http://127.0.0.1:8090/" + ad?.images[0].url}
                      ></S.ArticleImgImage>
                    ) : (
                      <S.ArticleImgImage src=""></S.ArticleImgImage>
                    )}
                  </S.ArticleImg>

                  <S.ArticleImgBar>
                    {adIsFull
                      ? ad.images?.map((item) => (
                          <S.ImgItem ad={adIsFull}>
                            <S.ImgItemImage
                              src={"http://127.0.0.1:8090/" + item.url}
                            ></S.ImgItemImage>
                          </S.ImgItem>
                        ))
                      : images.map((item) => (
                          <S.ImgItem ad={adIsFull}>
                            <S.ImgItemImage src=""></S.ImgItemImage>
                          </S.ImgItem>
                        ))}
                  </S.ArticleImgBar>
                  <S.ArticleImgBarMob>
                    {adIsFull
                      ? ad.images?.map((item) => <S.ImgItemMob></S.ImgItemMob>)
                      : images.map((item) => <S.ImgItemMob></S.ImgItemMob>)}
                  </S.ArticleImgBarMob>
                </S.ArticleFillImg>
              </S.ArticleLeft>
              <S.ArticleRight>
                <S.ArticleBlock>
                  <S.ArticleTitle>
                    {adIsFull ? capitalizeFirstLetter(ad.title) : ""}
                  </S.ArticleTitle>
                  <S.ArticleInfo>
                    <S.ArticleDate>
                      {finalDate ? capitalizeFirstLetter(finalDate) : ""}
                    </S.ArticleDate>
                    <S.ArticleCity>
                      {adIsFull ? capitalizeFirstLetter(ad.user.city) : ""}
                    </S.ArticleCity>
                    <S.ArticleLink>23 отзыва</S.ArticleLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>{ad?.price} ₽</S.ArticlePrice>
                  <S.ArticleBtn onClick={togglePhone}>
                    {shownPhone ? "Скрыть телефон" : "Показать телефон"}
                    <S.ArticleBtnSpan>
                      {/* 8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ */}
                      {phone}
                    </S.ArticleBtnSpan>
                  </S.ArticleBtn>
                  <S.ArticleAuthor>
                    <S.AuthorImg>
                      <S.AuthorImgImage src=""></S.AuthorImgImage>
                    </S.AuthorImg>
                    <S.AuthorCont>
                      <S.AuthorName>
                        {adIsFull ? capitalizeFirstLetter(ad.user.name) : ""}
                      </S.AuthorName>
                      <S.AuthorAbout>
                        {sellFrom ? "Продает товары с " + sellFrom : ""}
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
                {adIsFull && ad.description
                  ? capitalizeFirstLetter(ad.description)
                  : ""}
              </S.MainText>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
