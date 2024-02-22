"use client";
import { useEffect, useState } from "react";
import "../style/style.css";
import FirstTab from "@/component/first";
import SecondTab from "@/component/second";
import ThirdTab from "@/component/third";
import FourthTab from "@/component/Fourth";
import FifthTab from "@/component/Fifth";

export default function Home() {
  const [tab, settab] = useState(1);
  const handleTab = () => {
    if (tab === 1) {
      return (
        <FirstTab
          clothes={clothes}
          handleClothes={handleClothes}
          settab={settab}
        />
      );
    } else if (tab === 2) {
      return (
        <SecondTab
          clothes={clothes}
          needs={needs}
          setNeeds={setNeeds}
          settab={settab}
        />
      );
    } else if (tab === 3) {
      return (
        <ThirdTab needs={needs} make={make} setMake={setMake} settab={settab} />
      );
    } else if (tab === 4) {
      return (
        <FourthTab
          price={price}
          setPrice={setPrice}
          sell={sell}
          setSell={setSell}
          make={make}
          settab={settab}
        />
      );
    } else if (tab === 5) {
      return (
        <FifthTab
          make={make}
          sell={sell}
          totalSell={totalSell}
          setTotalSell={setTotalSell}
        />
      );
    }
  };
  const [clothes, setclothes] = useState(0);
  const [needs, setNeeds] = useState(0);
  const [price, setPrice] = useState(0);
  const [make, setMake] = useState(0);
  const [sell, setSell] = useState(0);
  const [totalSell, setTotalSell] = useState(0);
  const handleClothes = (n: number) => {
    if (clothes <= 3) {
      if (clothes + n < 0) {
        alert("최소 갯수는 0개입니다.");
      } else if (clothes + n > 3) {
        alert("최대 갯수는 3개입니다.");
      } else {
        setclothes(clothes + n);
      }
    }
  };
  useEffect(() => {
    let nowPrice = 15 * clothes + make * clothes;
    if (make !== 0) {
      if (make >= 1000) nowPrice += 100;
      else nowPrice += 120;
    }
    setPrice(nowPrice);
  }, [clothes, make]);
  return (
    <main>
      <h1>HSL Ground</h1>
      <h2>대량 생산, 최고의 품질</h2>
      <h1>Total Price : {price}</h1>
      {handleTab()}
    </main>
  );
}
