import React, { PropsWithChildren, ReactNode, ReactNodeArray } from "react";

type RoundCardProps = {
  children: ReactNode;
};

const RoundCard = ({children }: RoundCardProps) => {
  return (
    <div
      className={"rounded-[30px] overflow-hidden bg-sky-blue w-full"}
    >
      {children}
    </div>
  );
};

export default RoundCard;
