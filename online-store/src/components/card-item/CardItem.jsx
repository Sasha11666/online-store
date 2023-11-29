import { useEffect, useState } from "react";
import * as S from "./styles";
import { capitalizeFirstLetter } from "../functions";
import { formatDate } from "../functions";

export const CardItem = ({ title, price, place, date, img_id }) => {
  const [finalDate, setFinalDate] = useState("");

  useEffect(() => {
    if (date) {
      formatDate(setFinalDate, date);
    }
  }, [date]);

  return (
    <S.CardsItem>
      <S.Card>
        <S.CardImage>
          <S.CardImageLink>
            <S.CardImageImg
              src={"http://127.0.0.1:8090/" + img_id}
              adis={Boolean(img_id)}
            ></S.CardImageImg>
          </S.CardImageLink>
        </S.CardImage>
        <S.CardContent>
          <S.CardLink>
            <S.CardTitle adis={Boolean(title)}>
              {capitalizeFirstLetter(title)}
            </S.CardTitle>
          </S.CardLink>
          <S.CardPrice adis={Boolean(price)}>{price}&nbsp;₽</S.CardPrice>
          <S.CardPlace adis={Boolean(place)}>
            {capitalizeFirstLetter(place)}
          </S.CardPlace>
          <S.CardDate adis={Boolean(finalDate)}>
            {capitalizeFirstLetter(finalDate)}
          </S.CardDate>
        </S.CardContent>
      </S.Card>
    </S.CardsItem>
  );
};
