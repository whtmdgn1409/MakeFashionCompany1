type props = {
  clothes: number;
  handleClothes: (n: number) => void;
  settab: (n: number) => void;
};
const FirstTab = (props: props) => {
  return (
    <div>
      <p>제작할 상품 디자인의 개수를 정해주세요.</p>
      <div className="number_controller">
        <button onClick={() => props.handleClothes(-1)}>⬇️</button>
        <p>{props.clothes}</p>
        <button onClick={() => props.handleClothes(1)}>⬆️</button>
      </div>
      <p>디자인 비용은 한 건당 인건비 15달러가 추가됩니다.</p>
      <p>인건비는 모든 생산의 시작 비용입니다.</p>
      <button onClick={() => props.settab(2)}>디자인 확정</button>
    </div>
  );
};

export default FirstTab;
