import * as S from "./styles.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { createUserAd, getAds } from "../../api.js";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../App";

export const AdForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  let navigate = useNavigate();
  const { user } = useUserContext();

  const submitForm = (e) => {
    e.preventDefault();

    createUserAd(title, description, price)
      .then((data) => {
        setTitle("");
        setDescription("");
        setPrice("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closeForm = () => {
    navigate("/profile");
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Новое объявление</S.ModalTitle>
            <S.ModalCloseBtn onClick={closeForm}>
              <S.ModalCloseBtnLine></S.ModalCloseBtnLine>
            </S.ModalCloseBtn>
            <S.ModalForm action="" id="formNewArt">
              <S.FormBlock>
                <S.Label htmlFor="name">Название</S.Label>
                <S.FormInput
                  type="text"
                  name="name"
                  id="formName"
                  value={title}
                  placeholder="Введите название"
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                ></S.FormInput>
              </S.FormBlock>
              <S.FormBlock>
                <S.Label htmlFor="text">Описание</S.Label>
                <S.FormTextarea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  value={description}
                  placeholder="Введите описание"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                ></S.FormTextarea>
              </S.FormBlock>
              <S.FormBlock>
                <S.Label htmlFor="price">Цена</S.Label>
                <S.FormInputPrice
                  type="text"
                  name="price"
                  id="price-input"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                ></S.FormInputPrice>
                <S.FormInputPriceCover></S.FormInputPriceCover>
              </S.FormBlock>
              <S.FormButton onClick={submitForm} type="submit">
                Опубликовать
              </S.FormButton>
            </S.ModalForm>
          </S.ModalContent>
        </S.ModalBlock>
      </S.Container>
    </S.Wrapper>
  );
};
