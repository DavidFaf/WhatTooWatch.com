import React, { PropsWithChildren, ReactNode, ReactNodeArray } from "react";

type RoundCardProps = {
  width: string;
  height: string;
  borderRadius: string | null;
  children: ReactNode;
};

const RoundCard = ({
  width,
  height,
  borderRadius,
  children,
}: RoundCardProps) => {
  const style = {
    width: width,
    height: height,
    borderRadius: borderRadius || "30px",
    backgroundColor: "#E1F7F5",
  };

  return (
    <div className="round-card mt-12 mb-12" style={style}>
      {children}
    </div>
  )
};

export default RoundCard;
