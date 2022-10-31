import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiAnnotation, HiChartPie, HiCreditCard } from "react-icons/hi";
import Card from "./Card";
import ReChart from "./ReChart";

const Chart = () => {
  const cardInfo = [
    {
      id: "01",
      Logo: FaRegMoneyBillAlt,
      amount: "307144",
      title: "Total Purchase Due ",
    },
    {
      id: "02",
      Logo: HiAnnotation,
      amount: "307144",
      title: "Total Purchase Due ",
    },
    {
      id: "03",
      Logo: HiChartPie,
      amount: "307144",
      title: "Total Purchase Due ",
    },
    {
      id: "04",
      Logo: HiCreditCard,
      amount: "307144",
      title: "Total Purchase Due ",
    },
  ];

  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mx-5 mb-10">
        {cardInfo.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>

         <ReChart />
    </div>
  );
};

export default Chart;
