import { ChangeEvent, useState } from "react";

type props = {
  make: number;
  sell: number;
  totalSell: number;
  setTotalSell: (n: number) => void;
};
const FifthTab = (props: props) => {
  const { make, sell, totalSell, setTotalSell } = props;
  const [sellRate, setSellRate] = useState(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSellRate(Number(value));
  };
  const handleTotalSell = () => {
    setTotalSell((make * sellRate) / 100);
    return totalSell;
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>얼마나 팔리셨나요? 비율로 입력해주세요.(80% ~ 100%)</p>
        <input
          type="number"
          min={80}
          max={100}
          value={sellRate}
          onChange={handleChange}
        />
      </form>
      <p>{`판매한 수량은 생산한 ${make}개의 ${sellRate}%인 ${handleTotalSell()}개입니다.`}</p>
      <p>{`최종 수익금은 ${
        ((sellRate - (100 - sellRate)) / 100) *
        make *
        Math.floor(props.sell / props.make)
      }원 입니다.`}</p>
      <p>{`계산 방식 => 총 판매량 ${
        ((make * sellRate) / 100) * Math.floor(props.sell / props.make)
      } - 재고 ${
        (((100 - sellRate) * make) / 100) * Math.floor(props.sell / props.make)
      }`}</p>
    </div>
  );
};
export default FifthTab;
