import * as S from "./styles";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addUserImages,
  deleteAd,
  getAd,
  getComments,
  submitComment,
  updateAd,
  updateToken,
} from "../../api";
import { capitalizeFirstLetter } from "../../components/functions";
import { formatDate } from "../../components/functions";
import { useUserContext } from "../../App";
import { useNavigate } from "react-router-dom";

export const AdvPage = () => {
  const { user } = useUserContext();
  let navigate = useNavigate();
  const images = ["", "", "", "", ""];
  const { id } = useParams();
  const [ad, setAd] = useState({});
  const [adIsFull, setAdIsFull] = useState(false);
  const [finalDate, setFinalDate] = useState("");
  const [sellFrom, setSellFrom] = useState("");
  const [shownPhone, setShownPhone] = useState(false);
  const [phone, setPhone] = useState("XX-XXXXXX");
  const [openUpdateForm, setOpenUpdateForm] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  const [comments, setComments] = useState([
    { name: "Nina", text: "Like it" },
    { name: "John", text: "Awesome" },
  ]);

  useEffect(() => {
    if (adIsFull) {
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

  const deleteAdFunc = (e) => {
    e.preventDefault();
    deleteAd(ad.id)
      .then(() => {
        navigate("/");
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
            deleteAd(ad.id).then((data) => {
              navigate("/");
            });
          })
          .catch((err) => {
            console.log(!+err);
          });
      });
  };

  const updateAdFunc = () => {
    document.body.style.overflow = "hidden";
    setOpenUpdateForm(true);
  };

  const openCommentsFunc = () => {
    document.body.style.overflow = "hidden";
    getComments(ad.id)
      .then((data) => {
        setComments(data);
      })
      .catch(() => {
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
          getComments(ad.id);
        });
      });
    setOpenComments(true);
  };

  return (
    <S.Wrapper>
      {openUpdateForm && (
        <UpdateAdForm setOpenUpdateForm={setOpenUpdateForm} id={ad?.id} />
      )}
      {openComments && (
        <OpenCommentsForm
          setOpenComments={setOpenComments}
          id={ad?.id}
          comments={comments}
          setComments={setComments}
        />
      )}
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
                    <S.ArticleLink onClick={openCommentsFunc}>
                      23 отзыва
                    </S.ArticleLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>{ad?.price} ₽</S.ArticlePrice>
                  {ad?.user?.name === user.name ? (
                    <S.ArticleBtns>
                      <S.ArticleBtn onClick={updateAdFunc}>
                        Редактировать
                      </S.ArticleBtn>
                      <S.ArticleBtn onClick={deleteAdFunc}>
                        Снять с публикации
                      </S.ArticleBtn>
                    </S.ArticleBtns>
                  ) : (
                    <S.ArticleBtn onClick={togglePhone}>
                      {shownPhone ? "Скрыть телефон" : "Показать телефон"}
                      <S.ArticleBtnSpan>
                        {/* 8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ */}
                        {phone}
                      </S.ArticleBtnSpan>
                    </S.ArticleBtn>
                  )}
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

const OpenCommentsForm = ({ setOpenComments, id, comments, setComments }) => {
  const [comment, setComment] = useState("");

  const mockComments = [{ name: "Loading...", text: "Loading..." }];
  console.log(comments);

  const submitCommentFunc = (e) => {
    e.preventDefault();
    submitComment(id, comment)
      .then(() => {
        setComment("");
        getComments(id)
          .then((data) => {
            setComments(data);
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
              getComments(id);
            });
          });
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
          submitComment(id, comment);
        });
      });
  };

  const closeWindow = () => {
    document.body.style.overflow = null;
    setOpenComments(false);
  };

  return (
    <>
      <S.BlackoutWrapper>
        <S.PopupPassword>
          <S.closeWindow src="/img/close.svg" onClick={closeWindow} />
          <S.ModalContent>
            <S.TitleComments>Отзывы о товаре</S.TitleComments>
            <S.Label htmlFor="text">Добавить отзыв</S.Label>
            <S.FormTextarea
              name="text"
              id="formArea"
              cols="auto"
              rows="4"
              value={comment}
              placeholder="Введите отзыв"
              onChange={(event) => {
                setComment(event.target.value);
              }}
            ></S.FormTextarea>
            <S.SubmitCommentButton onClick={submitCommentFunc}>
              Опубликовать
            </S.SubmitCommentButton>
            <S.CommentsBlock>
              {comments
                ? comments.map((item) => (
                    <S.CommentBlock>
                      <S.CommentName>{item.author?.name}</S.CommentName>
                      <S.CommentText>{item.text}</S.CommentText>
                    </S.CommentBlock>
                  ))
                : mockComments.map((item) => (
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.text}</p>
                    </div>
                  ))}
            </S.CommentsBlock>
          </S.ModalContent>
        </S.PopupPassword>
      </S.BlackoutWrapper>
    </>
  );
};

const UpdateAdForm = ({ setOpenUpdateForm, id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  // const fileInput = document.querySelector("#image-file");
  // const formData = new FormData();

  // formData.append("file", fileInput?.files[0]);

  const submitForm = (e) => {
    e.preventDefault();
    const fileInput = document.querySelector("#image-file");
    const formData = new FormData();
    formData.append("file", fileInput?.files[0]);

    updateAd(id, String(title), String(description), Number(price))
      .then((data) => {
        setTitle("");
        setDescription("");
        setPrice(0);
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
          updateAd(id, String(title), String(description), Number(price)).then(
            (data) => {
              setTitle("");
              setDescription("");
              setPrice(0);
            }
          );
        });
      });
    addUserImages(formData)
      .then(() => {})
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
          addUserImages(formData);
        });
      });
  };

  const closeForm = () => {
    document.body.style.overflow = null;
    setOpenUpdateForm(false);
  };

  return (
    <S.WrapperForm>
      <S.ModalBlock>
        <S.ModalContent>
          <S.ModalTitle>Редактировать объявление</S.ModalTitle>
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
              <input type="file" id="image-file" />
            </S.FormBlock>
            <S.FormButton onClick={submitForm} type="submit">
              Опубликовать
            </S.FormButton>
          </S.ModalForm>
        </S.ModalContent>
      </S.ModalBlock>
    </S.WrapperForm>
  );
};
