import React, { useEffect, useState } from "react";
import Card from "./components/Card";

type CardValue = {
  symbole: "X" | "O" | "";
  isFrozen: boolean;
  isDone: boolean;
};

const TicTacToeGame = () => {
  const NO_OF_CARDS = 9;
  const CARD_VALUE_OBJ: CardValue = {
    symbole: "",
    isFrozen: false,
    isDone: false,
  };
  const SYBOLE_PAIR: any = {
    X: "O",
    O: "X",
  };
  const [symbole, setSymbole] = useState<"X" | "O" | "">("X");
  const [cardValues, setCardValues] = useState<CardValue[]>([]);

  useEffect(() => {
    const initialCardValues = [];
    for (let i = 0; i < NO_OF_CARDS; i++) {
      initialCardValues.push(CARD_VALUE_OBJ);
    }
    setCardValues(initialCardValues);
  }, []);

  const cardOnClick = (cardIndex: number) => {
    const newCardValues = cardValues.map((card, i: number) => {
      if (cardIndex == i) {
        return { ...card, symbole: symbole, isFrozen: true };
      }
      return card;
    });
    setCardValues([...newCardValues]);
    setSymbole(SYBOLE_PAIR[symbole]);
  };

  const buildCards = () =>
    cardValues.map((card, i: number) => (
      <Card
        symbole={card.symbole}
        isDone={card.isDone}
        isFrozen={card.isFrozen}
        index={i}
        onClick={(i: number) => cardOnClick(i)}
      />
    ));
  return (
    <div className="flex flex-col items-center gap-5 font-bold text-3xl p-10 font-mono">
      Tic Tac Toe!
      <div className="flex flex-row gap-2 flex-wrap w-[350px]">
        {buildCards()}
      </div>
    </div>
  );
};

export default TicTacToeGame;
