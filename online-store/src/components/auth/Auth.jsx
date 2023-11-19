import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as S from "./styles.js";
import { useEffect, useState } from "react";
import { registerUser, loginUser, getUser } from "../../api.js";
import { useUserContext } from "../../App";

export default function Auth({ isLoginMode = false }) {
  const { setUser } = useUserContext();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [disable, setDisable] = useState(false);
  const [phone, setPhone] = useState("");
  let navigate = useNavigate();

  const handleLoginUser = (email, password) => {
    if (!email || !password) {
      setError("Заполните все поля");
      return;
    }

    setDisable(true);
    loginUser(email, password)
      .then((data) => {
        localStorage.setItem("accessToken", JSON.stringify(data.access_token));
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(data.refresh_token)
        );
        getUser(data.access_token).then((data) => {
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
          console.log(data);
          navigate("/");
        });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setDisable(false);
      });
  };

  const handleRegisterUser = (
    email,
    password,
    repeatPassword,
    name,
    surname,
    city,
    phone
  ) => {
    console.log(phone);
    if (!email || !password || !repeatPassword) {
      setError("Заполните все поля");
      return;
    }
    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }
    setDisable(true);
    registerUser(email, password, name, surname, city, phone)
      .then((data) => {
        console.log(data);
        navigate("/login");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setDisable(false);
      });
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/main-logo.svg" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Логин"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              {disable ? (
                <p style={{ color: "#000" }}>Выполняется вход...</p>
              ) : (
                <S.PrimaryButton
                  onClick={() => handleLoginUser(email, password)}
                >
                  Войти
                </S.PrimaryButton>
              )}

              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="name"
                placeholder="Имя (необязательно)"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="surname"
                placeholder="Фамилия (необязательно)"
                value={surname}
                onChange={(event) => {
                  setSurname(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="city"
                placeholder="Город (необязательно)"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="phone"
                placeholder="Телефон (необязательно)"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              {disable ? (
                <p style={{ color: "#000" }}>Регистрируем пользователя...</p>
              ) : (
                <S.PrimaryButton
                  onClick={() =>
                    handleRegisterUser(
                      email,
                      password,
                      repeatPassword,
                      name,
                      surname,
                      city,
                      phone
                    )
                  }
                >
                  Зарегистрироваться
                </S.PrimaryButton>
              )}

              <p style={{ color: "#000" }}>
                Уже есть аккаунт?{" "}
                <Link to="/login">
                  <S.linkSingUp>Войти</S.linkSingUp>
                </Link>
              </p>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
