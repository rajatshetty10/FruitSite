import Card from './Card';

const Cards = () => {
  const array = ['card1', 'card2', 'card3', 'card4'];

  return (
    <div>
      {array.map((element) => (
        <Card title={element} />
      ))}
    </div>
  );
};

export default Cards;
