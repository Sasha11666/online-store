import * as S from "./styles";

export const CardItem = ({ title, price, place, date }) => {
  return (
    <S.CardsItem>
      <S.Card>
        <S.CardImage>
          <S.CardImageLink>
            <S.CardImageImg></S.CardImageImg>
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
