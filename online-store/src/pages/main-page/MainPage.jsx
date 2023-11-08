import * as S from "./styles";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import { CardItem } from "../../components/card-item/CardItem";

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
              <S.SearchLogoImg>
                <use xlinkHref="/img/logo.png"></use>
              </S.SearchLogoImg>
            </S.SearchLogoLink>
            <S.SearchLogoMobLink>
              <S.SearchLogoMobImg>
                <use xlinkHref="/img/logo-mob.png"></use>
              </S.SearchLogoMobImg>
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

        <footer class="footer">
          <div class="footer__container">
            <div class="footer__img">
              <a href="" target="_self">
                <img src="img/icon_01.png" alt="home" />
              </a>
            </div>
            <div class="footer__img">
              <a href="" target="_self">
                <img src="img/icon_02.png" alt="home" />
              </a>
            </div>
            <div class="footer__img">
              <a href="" target="_self">
                <img src="img/icon_03.png" alt="home" />
              </a>
            </div>
          </div>
        </footer>
      </S.Container>
    </S.Wrapper>
  );
};
