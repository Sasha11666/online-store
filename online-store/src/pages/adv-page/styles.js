import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
`;

export const Main = styled.main``;

export const MainSearch = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  gap: 40px;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;

export const SearchLogoLink = styled(Link)`
  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const SearchLogoImg = styled.img`
  width: 54px;
  height: auto;
`;

export const SearchLogoMobLink = styled(Link)`
  display: none;
  @media screen and (max-width: 590px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const SearchLogoMobImg = styled.img`
  @media screen and (max-width: 590px) {
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Button2 = styled(Button)`
  :hover {
    background-color: #0080c1;
  }
`;

export const SearchButton = styled(Button2)`
  margin-left: 10px;
  width: 200px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
  @media screen and (max-width: 590px) {
    padding: 85px 10px 84px;
  }
`;

export const MainTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  :hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
  @media screen and (max-width: 590px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    ::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 13px;
      cursor: pointer;
    }
  }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 590px) {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    // position: fixed;
    right: 0;
    left: 0;
    top: 134px;
    // bottom: 84px;
  }
`;

export const MainArtic = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  margin-top: 16px;
  padding: 0 5px 70px;
  @media screen and (max-width: 768px) {
    max-width: 1178px;
    width: 100%;
    padding: 55px 0 0px;
    margin: 0 auto;
  }
`;

export const ArticContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  // justify-content: center;
  @media screen and (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;

export const ArticleLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;
  @media screen and (max-width: 890px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ArticleFillImg = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  :hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    ::before {
      content: "";
      display: block;
      width: 23px;
      height: 23px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 24px;
      left: 32px;
      cursor: pointer;
    }
  }
`;

export const ArticleImg = styled.div`
  width: 480px;
  height: ${(props) => (props.ad ? "auto" : "280px")};
  background-color: #f0f0f0;
  margin: 0 5px;
  @media screen and (max-width: 768px) {
    width: 240px;
    height: ${(props) => (props.ad ? "auto" : "100px")};
    margin: 0 0px;
  }
`;

export const ArticleImgImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ArticleImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ImgItem = styled.div`
  width: 88px;
  min-width: 88px;
  height: ${(props) => (props.ad ? "auto" : "88px")};
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
`;

export const ImgItemImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ArticleImgBarMob = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 68px;
    height: 8px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - (68px / 2));
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
`;

export const ImgItemMob = styled.div`
  background-color: #ffffff;
  @media screen and (max-width: 768px) {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #ffffff;
  }
`;

export const ArticleRight = styled.div`
  max-width: 621px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`;

export const ArticleBlock = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const ArticleTitle = styled.h3`
  margin-bottom: 10px;
`;

export const ArticleInfo = styled.div`
  margin-bottom: 34px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ArticleDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;

export const ArticleCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;

export const ArticleLink = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 19px;
    color: #009ee4;
  }
`;
export const ArticlePrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export const ArticleBtn = styled(Button2)`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export const ArticleBtns = styled.div`
  display: flex;
  flex-direction: space-between;
  gap: 8px;
`;

export const ArticleBtnSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ArticleAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;

export const AuthorImgImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const AuthorCont = styled.div`
  margin-left: 12px;
`;

export const AuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`;

export const AuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 28px;
  }
`;

export const MainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const WrapperForm = styled.div`
  font-family: "RobotoMedium", sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBlock = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  @media screen and (max-width: 600px) {
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 16px 50px 16px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
  @media screen and (max-width: 600px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    position: relative;
    &:before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 0;
      cursor: pointer;
    }
  }
`;

export const ModalCloseBtn = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 27px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ModalCloseBtnLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(45deg);
    transform: rotate(130deg);
  }
  &:hover:after {
    background-color: #0080c1;
  }
  &:hover:before {
    background-color: #0080c1;
  }
`;

export const ModalForm = styled.form`
  margin-top: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-top: 22px;
  }
`;

export const FormBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 18px;
  }
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
`;

export const FormInput = styled.input`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: 600px) {
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    width: 100%;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;

export const FormTextarea = styled.textarea`
  font-family: "RobotoMedium", sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px;
  &::-webkit-input-placeholder {
    font-family: "RobotoMedium", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &:-ms-input-placeholder {
    font-family: "RobotoMedium", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::-ms-input-placeholder {
    font-family: "RobotoMedium", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-family: "RobotoMedium", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: 600px) {
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    font-family: "RobotoMedium", sans-serif;
    width: 100%;
    max-height: 107px;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;

export const FormInputPrice = styled.input`
  padding: 13px 19px;
  background: #ffffff;
  margin-bottom: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  position: relative;
  @media screen and (max-width: 600px) {
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    width: 100%;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }
`;

export const FormInputPriceCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  bottom: 13px;
  left: 170px;
  z-index: 0;
  background-color: #FFFFFF;
  
  &:after {
    // content: "\A0 \20BD";
    content: "🦄";
    width: 24px;
    height: 24px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
  }
  @media screen and (max-width: 600px) {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 9px;
    left: auto;
    right: 18px;
    &:after {
      font-size: 14px;
      line-height: 21px;
    }
}
`;

export const FormButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  width: 181px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 600px) {
    margin-top: 10px;
    width: 100%;
    height: 46px;
  }
`;

export const PopupLogin = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  border: 1px solid #d0cece;
  border-radius: 12px;
  padding: 33px 47px 47px 41px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PopupPassword = styled(PopupLogin)`
  // height: fit-content;
  height: 500px;
  overflow-y: scroll;
`;

export const BlackoutWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CommentBlock = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: black;
`;

export const CommentName = styled.h3``;

export const CommentText = styled.p``;
export const CommentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 200px;
  width: 100%;
  // overflow-y: scroll;
`;

export const closeWindow = styled.img`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  width: 15px;
`;

export const SubmitCommentButton = styled(SearchButton)`
  margin-top: 16px;
  margin-left: 0px;
  margin-bottom: 16px;
`;

export const TitleComments = styled(ModalTitle)`
  margin-bottom: 32px;
`;
