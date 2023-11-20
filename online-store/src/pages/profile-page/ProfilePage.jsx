import * as S from "./styles";
import { Header } from "../../components/header/Header";
import { CardItem } from "../../components/card-item/CardItem";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../App";

export const ProfilePage = () => {
  // create state for name, surname, city and phone
  const { user } = useUserContext();
  const [name, setName] = useState(user?.name);
  const [lastname, setLastname] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState();

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
            <Link>
              <S.SearchButton>Вернуться на главную</S.SearchButton>
            </Link>
          </S.MainSearch>
          <S.MainContainer>
            <S.Greet>Здравствуйте, {user?.name}!</S.Greet>
            <S.MainProfile>
              <S.ProfileContent>
                <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                <S.ProfileSettings>
                  <S.SettingsLeft>
                    <S.SettingsImage>
                      <S.SettingsImageLink>
                        <S.SettingsImageImg src="#"></S.SettingsImageImg>
                      </S.SettingsImageLink>
                    </S.SettingsImage>
                    <S.SettingsChangePic>Заменить</S.SettingsChangePic>
                  </S.SettingsLeft>
                  <S.SettingsRight>
                    <S.SettingsForm>
                      <S.SettingsItem>
                        <S.ItemLabel for="fname">Имя</S.ItemLabel>
                        <S.ItemInput
                          name="fname"
                          type="text"
                          placeholder=""
                          value={name}
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        ></S.ItemInput>
                      </S.SettingsItem>
                      <S.SettingsItem>
                        <S.ItemLabel for="lname">Фамилия</S.ItemLabel>
                        <S.ItemInput
                          name="lname"
                          type="text"
                          placeholder=""
                          value={lastname}
                          onChange={(event) => {
                            setLastname(event.target.value);
                          }}
                        ></S.ItemInput>
                      </S.SettingsItem>
                      <S.SettingsItem>
                        <S.ItemLabel for="lname">Город</S.ItemLabel>
                        <S.ItemInput
                          name="city"
                          type="text"
                          placeholder=""
                          value={city}
                          onChange={(event) => {
                            setCity(event.target.value);
                          }}
                        ></S.ItemInput>
                      </S.SettingsItem>
                      <S.SettingsItem>
                        <S.ItemLabel for="phone">Телефон</S.ItemLabel>
                        <S.ItemPhoneInput
                          name="phone"
                          type="text"
                          placeholder=""
                          value={phone}
                          onChange={(event) => {
                            setPhone(event.target.value);
                          }}
                        ></S.ItemPhoneInput>
                      </S.SettingsItem>
                      <S.SettingsButton>Сохранить</S.SettingsButton>
                    </S.SettingsForm>
                  </S.SettingsRight>
                </S.ProfileSettings>
              </S.ProfileContent>
            </S.MainProfile>
            <S.MainTitle>Мои товары</S.MainTitle>
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
