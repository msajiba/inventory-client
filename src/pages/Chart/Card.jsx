import React from "react";

const Card = ({ card }) => {
  const { Logo, amount, title } = card;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="avatar placeholder">
            <div className="bg-primary text-white rounded-full w-12">
              <span> {<Logo />} </span>
            </div>
          </div>

          <div className="card-title block">
            <p> $ {amount} </p>
            <p className="text-sm"> {title} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
