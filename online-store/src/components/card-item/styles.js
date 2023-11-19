import styled from "styled-components";

export const CardsItem = styled.div`
  margin: 0;
  @media screen and (max-width: 590px) {
    margin: 0;
    -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

export const Card = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  @media screen and (max-width: 590px) {
    height: 293px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
  }
`;

export const CardImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  @media screen and (max-width: 590px) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;
  }
`;

export const CardImageLink = styled.a`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;

export const CardImageImg = styled.img`
  width: 100%;
  height: 100%;
  height: ${(props) => (props.adIs ? "100%" : "0%")};
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: 590px) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

export const CardContent = styled.div`
  @media screen and (max-width: 590px) {
    padding-left: 8px;
  }
`;

export const CardLink = styled.a``;

export const CardTitle = styled.h3`
  height: 30px;
  width: ${(props) => (props.adIs ? "" : "200px")};
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${(props) => (props.adIs ? "" : "#f0f0f0")};
  @media screen and (max-width: 590px) {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
  display: ${(props) => (props.adIs ? "block" : "none")};
  @media screen and (max-width: 590px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  height: 30px;
  width: ${(props) => (props.adIs ? "" : "135px")};
  color: #5f5f5f;
  margin-bottom: ${(props) => (props.adIs ? "4px" : "10px")};
  background-color: ${(props) => (props.adIs ? "" : "#f0f0f0")};
  @media screen and (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;
export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  height: 30px;
  width: ${(props) => (props.adIs ? "" : "135px")};
  color: #5f5f5f;
  background-color: ${(props) => (props.adIs ? "" : "#f0f0f0")};
  @media screen and (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;
