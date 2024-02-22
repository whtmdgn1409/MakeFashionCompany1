import { ChangeEvent, FormEvent } from "react";
import "../style/second.css";
type props = {
  clothes: number;
  needs: number;
  setNeeds: (n: number) => void;
  settab: (n: number) => void;
};
const SecondTab = (props: props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.settab(3);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    props.setNeeds(Number(value));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={props.needs} onChange={handleChange} />
        <button type="submit">수요 조사하기</button>
      </form>
    </div>
  );
};
export default SecondTab;
