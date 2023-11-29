import * as S from "./styles";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import { CardItem } from "../../components/card-item/CardItem";
import { Footer } from "../../components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAds } from "../../api.js";
import { setCurrentAds } from "../../store/currentAds.js";

export const MainPage = () => {
  const ads = useSelector((state) => state.currentAds.value.ads);
  const [searchWord, setSearchWord] = useState("");
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const cards = [
    {
      title: "",
      price: "",
      place: "",
      date: "",
    },
    {
      title: "",
      price: "",
      place: "",
      date: "",
    },
    {
      title: "",
      price: "",
      place: "",
      date: "",
    },
    {
      title: "",
      price: "",
      place: "",
      date: "",
    },
  ];

  useEffect(() => {
    if (searchWord === "") {
      setFilter("");
    }
  }, [searchWord]);

  useEffect(() => {
    getAds().then((ads) => {
      dispatch(setCurrentAds(ads));
    });
  }, []);

  const useFilterFunc = (e) => {
    e.preventDefault();
    setFilter(searchWord);
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
            <S.SearchLogoMobLink>
              <S.SearchLogoMobImg src="/img/logo-mob.png"></S.SearchLogoMobImg>
            </S.SearchLogoMobLink>
            <S.SearchForm>
              <S.SearchText
                type="search"
                placeholder="Поиск по объявлениям"
                name="search"
                onChange={(event) => setSearchWord(event.target.value)}
              ></S.SearchText>
              <S.SearchTextMob
                type="search"
                placeholder="Поиск"
                name="search-mob"
                onChange={(event) => setSearchWord(event.target.value)}
              ></S.SearchTextMob>
              <S.SearchButton onClick={useFilterFunc}>Найти</S.SearchButton>
            </S.SearchForm>
          </S.MainSearch>
          <S.MainContainer>
            <S.MainTitle>Объявления</S.MainTitle>
            <S.MainContent>
              <S.Cards>
                {Boolean(ads.length)
                  ? ads
                      .filter((val) => {
                        if (filter === "") {
                          return val;
                        } else if (
                          val.title.toLowerCase().includes(filter.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((ad) => (
                        <Link to={`/advs/${ad.id}`}>
                          <CardItem
                            title={ad.title}
                            price={ad.price}
                            place={ad.user.city}
                            date={ad.created_on}
                            img_id={ad.images[0]?.url}
                          />
                        </Link>
                      ))
                  : cards.map(({ title, price, place, date }) => (
                      <CardItem
                        title={title}
                        price={price}
                        place={place}
                        date={date}
                      />
                    ))}
              </S.Cards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
