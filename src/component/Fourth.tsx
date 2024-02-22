type props = {
  price: number;
  setPrice: (n: number) => void;
  sell: number;
  setSell: (n: number) => void;
  make: number;
  settab: (n: number) => void;
};

const FourthTab = (props: props) => {
  const selling = () => {
    props.setSell(1.1 * props.price);
    return props.sell;
  };
  return (
    <div>
      <h1>판매</h1>
      <h2>판매 비용은 생산 비용에 10%의 마진을 붙여 판매합니다.</h2>
      <p>{`생산 비용(${props.price}) + 마진(${0.1 * props.price})`}</p>
      <p>{`판매 비용 : ${selling()}`}</p>
      <p>{`이 가격에 판매하시면 한 벌당 ${Math.floor(
        props.sell / props.make
      )}원에 팔리게 됩니다.`}</p>
      <p>파시겠습니까?</p>
      <button onClick={() => props.settab(5)}>판매한다</button>
    </div>
  );
};
export default FourthTab;
