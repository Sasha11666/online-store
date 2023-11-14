import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as S from "./styles.js";
import { useEffect, useState } from "react";

export default function Auth({ isLoginMode = false }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [disable, setDisable] = useState(false);
  let navigate = useNavigate();

  const loginUser = (email, password) => {
    if (!email || !password) {
      setError("Заполните все поля");
      return;
    }
  };

  const registerUser = (email, password, repeatPassword) => {
    if (!email || !password || !repeatPassword) {
      setError("Заполните все поля");
      return;
    }
    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }
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
                <S.PrimaryButton onClick={() => loginUser(email, password)}>
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
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              {disable ? (
                <p style={{ color: "#000" }}>Регистрируем пользователя...</p>
              ) : (
                <S.PrimaryButton
                  onClick={() => registerUser(email, password, repeatPassword)}
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
