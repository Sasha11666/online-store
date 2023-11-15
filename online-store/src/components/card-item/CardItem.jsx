import { useEffect, useState } from "react";
import * as S from "./styles";
import { getImg } from "../../api";
import { Link } from "react-router-dom";

export const CardItem = ({ title, price, place, date, img_id }) => {
  // const [imgUrl, setImgUrl] = useState("");

  // useEffect(() => {
  //   if (img_id) {
  //     getImg(img_id).then((data) => {
  //       setImgUrl(data);
  //       console.log(data);
  //     });
  //   } else {
  //     setImgUrl("");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (img_id) {
  //     getImg(img_id).then((data) => {});
  //   } else {
  //     console.log("No pictures");
  //   }
  // }, []);

  return (
    <S.CardsItem>
      <S.Card>
        <S.CardImage>
          <S.CardImageLink>
            <S.CardImageImg
              src={"http://127.0.0.1:8090/" + img_id}
            ></S.CardImageImg>
          </S.CardImageLink>
        </S.CardImage>
        <S.CardContent>
          <S.CardLink>
            <S.CardTitle>{title}</S.CardTitle>
          </S.CardLink>
          <S.CardPrice>{price}&nbsp;₽</S.CardPrice>
          <S.CardPlace>{place}</S.CardPlace>
          <S.CardDate>Сегодня в&nbsp;{date}</S.CardDate>
        </S.CardContent>
      </S.Card>
    </S.CardsItem>
  );
};
