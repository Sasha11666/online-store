import * as S from "./styles";
import { Header } from "../../components/header/Header";
import { CardItem } from "../../components/card-item/CardItem";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const SellerPage = () => {
  const ads = useSelector((state) => state.currentAds.value.ads);
  const adv = useSelector((state) => state.currentAdv.value.adv);
  const [shownPhone, setShownPhone] = useState(false);
  const [phone, setPhone] = useState("XX-XXXXXX");

  const cards = [
    {
      title: "",
      price: "",
      place: "",
      date: "",
    },
  ];

  useEffect(() => {
    if (shownPhone) {
      setPhone(adv?.user.phone);
    } else {
      setPhone("XX-XXXXXX");
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
            <S.SearchLogoLink>
              <S.SearchLogoImg src="/img/logo.png"></S.SearchLogoImg>
            </S.SearchLogoLink>
            <S.SearchLogoMobLink>
              <S.SearchLogoMobImg src="/img/logo-mob.png"></S.SearchLogoMobImg>
            </S.SearchLogoMobLink>
            <Link to={"/"}>
              <S.SearchButton>Вернуться на главную</S.SearchButton>
            </Link>
          </S.MainSearch>
          <S.MainContainer>
            <S.Greet>Профиль продавца</S.Greet>
            <S.MainProfile>
              <S.ProfileContent>
                <S.ProfileSettings>
                  <S.SettingsLeft>
                    <S.SettingsImage>
                      <S.SettingsImageLink>
                        <S.SettingsImageImg
                          src={"http://127.0.0.1:8090/" + adv?.user.avatar}
                        ></S.SettingsImageImg>
                      </S.SettingsImageLink>
                    </S.SettingsImage>
                  </S.SettingsLeft>
                  <S.SettingsRight>
                    <S.SettingsBlock>
                      <S.SettingsItem>{adv?.user.name}</S.SettingsItem>
                      <S.SettingsItem>{adv?.user.city}</S.SettingsItem>
                      <S.SettingsItem>
                        Продает с {adv?.user.sells_from}
                      </S.SettingsItem>
                      <S.ArticleBtn onClick={togglePhone}>
                        {shownPhone ? "Скрыть телефон" : "Показать телефон"}
                        <S.ArticleBtnSpan>{phone}</S.ArticleBtnSpan>
                      </S.ArticleBtn>
                    </S.SettingsBlock>
                  </S.SettingsRight>
                </S.ProfileSettings>
              </S.ProfileContent>
            </S.MainProfile>
            <S.MainTitle>Товары продавца</S.MainTitle>
            <S.MainContent>
              <S.Cards>
                {ads.length > 0
                  ? ads
                      .filter((val) => {
                        if (val.user.name === adv.user.name) {
                          return val;
                        }
                      })
                      .map((card) => (
                        <Link to={`/advs/${card.id}`}>
                          <CardItem
                            title={card.title}
                            price={card.price}
                            place={card.user.city}
                            date={card.created_on}
                            img_id={card.images[0]?.url}
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
