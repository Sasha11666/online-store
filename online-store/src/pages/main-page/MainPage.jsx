import * as S from "./styles";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import { CardItem } from "../../components/card-item/CardItem";
import { Footer } from "../../components/footer/Footer";

export const MainPage = () => {
  const cards = [
    {
      title: "Ракетка для большого тенниса Triumph Pro ST",
      price: "2 200",
      place: "Санкт Петербург",
      date: "10:45",
    },
    {
      title: "Ракетка для большого тенниса Triumph Pro ST",
      price: "2 200",
      place: "Санкт Петербург",
      date: "10:45",
    },
    {
      title: "Ракетка для большого тенниса Triumph Pro ST",
      price: "2 200",
      place: "Санкт Петербург",
      date: "10:45",
    },
    {
      title: "Ракетка для большого тенниса Triumph Pro ST",
      price: "2 200",
      place: "Санкт Петербург",
      date: "10:45",
    },
    {
      title: "Ракетка для большого тенниса Triumph Pro ST",
      price: "2 200",
      place: "Санкт Петербург",
      date: "10:45",
    },
    {
      title: "Ракетка для большого тенниса Triumph Pro ST",
      price: "2 200",
      place: "Санкт Петербург",
      date: "10:45",
    },
    {
      title: "Ракетка для большого тенниса Triumph Pro ST",
      price: "2 200",
      place: "Санкт Петербург",
      date: "10:45",
    },
    {
      title: "Ракетка для большого тенниса Triumph Pro ST",
      price: "2 200",
      place: "Санкт Петербург",
      date: "10:45",
    },
    {
      title: "Ракетка для большого тенниса Triumph Pro ST",
      price: "2 200",
      place: "Санкт Петербург",
      date: "10:45",
    },
    {
      title: "Ракетка для большого тенниса Triumph Pro ST",
      price: "2 200",
      place: "Санкт Петербург",
      date: "10:45",
    },
  ];

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
            <S.SearchForm>
              <S.SearchText
                type="search"
                placeholder="Поиск по объявлениям"
                name="search"
              ></S.SearchText>
              <S.SearchTextMob
                type="search"
                placeholder="Поиск"
                name="search-mob"
              ></S.SearchTextMob>
              <S.SearchButton>Найти</S.SearchButton>
            </S.SearchForm>
          </S.MainSearch>
          <S.MainContainer>
            <S.MainTitle>Объявления</S.MainTitle>
            <S.MainContent>
              <S.Cards>
                {cards.map(({ title, price, place, date }) => (
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
