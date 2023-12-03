import * as S from "./styles";
import { Header } from "../../components/header/Header";
import { CardItem } from "../../components/card-item/CardItem";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../../App";
import {
  addUserProfilePic,
  getUserAds,
  updatePassword,
  updateToken,
  updateUser,
} from "../../api";

export const ProfilePage = () => {
  const { setUser } = useUserContext();
  const { user } = useUserContext();
  const [name, setName] = useState(user?.name);
  const [lastname, setLastname] = useState(user?.surname);
  const [city, setCity] = useState(user?.city);
  const [phone, setPhone] = useState(user?.phone);
  const [userCards, setUserCards] = useState([]);
  const [openEditPassword, setOpenEditPassword] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);

  const cards = [
    {
      title: "",
      price: "",
      place: "",
      date: "",
    },
  ];

  useEffect(() => {
    getUserAds()
      .then((data) => {
        setUserCards(data);
      })
      .catch((err) => {
        updateToken(
          `${JSON.parse(localStorage.getItem("accessToken"))}`,
          `${JSON.parse(localStorage.getItem("refreshToken"))}`
        )
          .then((data) => {
            if (data) {
              localStorage.setItem(
                "accessToken",
                JSON.stringify(data.access_token)
              );
              localStorage.setItem(
                "refreshToken",
                JSON.stringify(data.refresh_token)
              );
            }
            getUserAds().then((data) => {
              setUserCards(data);
            });
          })
          .catch((err) => {
            console.log(!+err);
          });
      });
  }, []);

  const updateUserFunc = (e) => {
    e.preventDefault();
    updateUser(name, lastname, city, phone)
      .then((user) => {
        setName(user.name);
        setLastname(user.surname);
        setCity(user.city);
        setPhone(user.phone);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((err) => {
        updateToken(
          `${JSON.parse(localStorage.getItem("accessToken"))}`,
          `${JSON.parse(localStorage.getItem("refreshToken"))}`
        ).then((data) => {
          if (data) {
            localStorage.setItem(
              "accessToken",
              JSON.stringify(data.access_token)
            );
            localStorage.setItem(
              "refreshToken",
              JSON.stringify(data.refresh_token)
            );
          }
          updateUser(name, lastname, city, phone).then((data) => {
            setUser(data);
          });
        });
      });
  };

  const handleClickEditPassword = (e) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    setOpenEditPassword(true);
  };

  const toggleInputPic = () => {
    setInputVisible(!inputVisible);
  };

  const submitProfilePicFunc = (e) => {
    e.preventDefault();
    toggleInputPic();
    const fileInput = document.querySelector("#image-file");
    const formData = new FormData();
    formData.append("file", fileInput?.files[0]);
    addUserProfilePic(formData)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        updateToken(
          `${JSON.parse(localStorage.getItem("accessToken"))}`,
          `${JSON.parse(localStorage.getItem("refreshToken"))}`
        ).then((data) => {
          if (data) {
            localStorage.setItem(
              "accessToken",
              JSON.stringify(data.access_token)
            );
            localStorage.setItem(
              "refreshToken",
              JSON.stringify(data.refresh_token)
            );
          }
          addUserProfilePic(formData)
            .then((data) => {
              setUser(data);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
  };

  return (
    <S.Wrapper>
      {openEditPassword && (
        <NewPasswordForm setOpenEditPassword={setOpenEditPassword} />
      )}
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
            <S.Greet>Здравствуйте, {user?.name}!</S.Greet>
            <S.MainProfile>
              <S.ProfileContent>
                <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                <S.ProfileSettings>
                  <S.SettingsLeft>
                    <S.SettingsImage>
                      <S.SettingsImageLink>
                        <S.SettingsImageImg
                          src={"http://127.0.0.1:8090/" + user.avatar}
                        ></S.SettingsImageImg>
                      </S.SettingsImageLink>
                    </S.SettingsImage>
                    <S.PicChangeBlock>
                      {!inputVisible && (
                        <S.SettingsChangePic onClick={toggleInputPic}>
                          Заменить
                        </S.SettingsChangePic>
                      )}
                      {inputVisible && (
                        <>
                          <S.PicChangeInput
                            type="file"
                            id="image-file"
                          ></S.PicChangeInput>
                          <S.uploadProfilePicButton
                            onClick={submitProfilePicFunc}
                          >
                            Загрузить
                          </S.uploadProfilePicButton>
                        </>
                      )}
                    </S.PicChangeBlock>
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
                      <S.SettingsButton onClick={handleClickEditPassword}>
                        Сменить пароль
                      </S.SettingsButton>
                      <S.SettingsButton onClick={updateUserFunc}>
                        Сохранить
                      </S.SettingsButton>
                    </S.SettingsForm>
                  </S.SettingsRight>
                </S.ProfileSettings>
              </S.ProfileContent>
            </S.MainProfile>
            <S.MainTitle>Мои товары</S.MainTitle>
            <S.MainContent>
              <S.Cards>
                {userCards.length > 0
                  ? userCards.map((card) => (
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

const NewPasswordForm = ({ setOpenEditPassword }) => {
  const [newPass, setNewPass] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [error, setError] = useState("");

  const updatePasswordFunc = () => {
    updatePassword(oldPass, newPass)
      .then(() => {})
      .catch((err) => {
        if (err.message === "Неверный пароль") {
          setError(err.message);
        }
        updateToken(
          `${JSON.parse(localStorage.getItem("accessToken"))}`,
          `${JSON.parse(localStorage.getItem("refreshToken"))}`
        ).then((data) => {
          if (data) {
            localStorage.setItem(
              "accessToken",
              JSON.stringify(data.access_token)
            );
            localStorage.setItem(
              "refreshToken",
              JSON.stringify(data.refresh_token)
            );
          }
          updatePassword(oldPass, newPass).catch((err) => {
            if (err.message === "Неверный пароль") {
              setError(err.message);
            }
          });
        });
      });
  };

  const closeWindow = () => {
    document.body.style.overflow = null;
    setOpenEditPassword(false);
  };

  return (
    <S.BlackoutWrapper>
      <S.PopupPassword>
        <S.closeWindow src="/img/close.svg" onClick={closeWindow} />
        <S.Inputs>
          <S.TitleInput>Новый пароль:</S.TitleInput>
          <S.Input
            type="text"
            placeholder="Пароль"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
          <S.TitleInput>Старый пароль:</S.TitleInput>
          <S.Input
            type="text"
            placeholder="Старый пароль"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          />
        </S.Inputs>
        {error && <p>{error}</p>}
        <S.SettingsButton onClick={() => updatePasswordFunc()}>
          Сохранить
        </S.SettingsButton>
      </S.PopupPassword>
    </S.BlackoutWrapper>
  );
};
