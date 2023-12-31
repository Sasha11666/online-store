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

export const Cards = styled.div`
  // max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (270px) [4];
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  @media screen and (max-width: 1158px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px) [3];
    grid-template-columns: repeat(3, 270px);
  }
  @media screen and (max-width: 890px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(2, 270px);
    grid-template-columns: repeat(2, 270px);
  }
  @media screen and (max-width: 590px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(2, 137px);
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;
export const Greet = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
`;

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: 620px) {
    width: 100%;
    padding: 0 0 40px;
  }
`;

export const ProfileContent = styled.div`
  max-width: 834px;
  @media scrren and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
`;

export const ProfileTitle = styled.h3`
  margin-bottom: 20px;
`;

export const ProfileSettings = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  @media screen and (max-width: 890px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;

export const SettingsLeft = styled.div`
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
  margin-right: 43px;
  @media screen and (max-width: 620px) {
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
  }
`;

export const SettingsImage = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  @media screen and (max-width: 620px) {
    width: 132px;
    height: 132px;
  }
`;

export const SettingsImageLink = styled.a``;
export const SettingsImageImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const SettingsChangePic = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`;

export const SettingsRight = styled.div`
  width: 630px;
  margin-left: 24px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const SettingsForm = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  @media screen and (max-width: 620px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const SettingsItem = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
  @media screen and (max-width: 620px) {
    display: inline-block;
    margin: 0 0px 18px;
  }
`;

export const ItemLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;
  @media screen and (max-width: 620px) {
    font-size: 14px;
    line-height: 21px;
    color: #c4c4c4;
    margin-bottom: 6px;
  }
`;

export const ItemInput = styled.input`
  width: 300px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  ::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  :-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  ::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  ::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
    border-radius: 30px;
    padding: 9px 17px;
    ::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    :-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    ::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }
    ::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const ItemPhoneInput = styled(ItemInput)`
  width: 614px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

export const SettingsButton = styled(Button2)`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  @media screen and (max-width: 620px) {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-bottom: 50px;
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
  height: fit-content;
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
export const TitleInput = styled.p`
  font-size: 18px;
  margin-top: 38px;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 5px;
  font-style: normal;
  font-size: 18px;

  &::placeholder {
    font-style: normal;

    font-size: 18px;
    color: #d0cece;
  }
`;
export const closeWindow = styled.img`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  width: 15px;
`;

export const PicChangeBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

export const PicChangeInput = styled.input`
  margin-top: 12px;
`;

export const uploadProfilePicButton = styled.div`
  cursor: pointer;
  width: 70px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #009ee4;
`;
