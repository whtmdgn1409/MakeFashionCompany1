import { useEffect } from "react";

type props = {
  needs: number;
  make: number;
  setMake: (n: number) => void;
  settab: (n: number) => void;
};

const ThirdTab = (props: props) => {
  props.setMake(props.needs + 0.1 * props.needs);
  return (
    <div>
      <h1>생산 공정</h1>
      <h2>생산은 요청하신 수요의 10%를 추가하여 생산합니다.</h2>
      <p>
        생산이 1000건 초과일 경우 100달러, 1000건 이하인 경우엔 120달러가 추가로
        청구됩니다.
      </p>
      <p>{`생산량 : 수요 ${props.needs}건 + ${0.1 * props.needs} = ${
        props.make
      }`}</p>
      <button onClick={() => props.settab(4)}>생산하기</button>
    </div>
  );
};
export default ThirdTab;
