import { FC, useEffect, useState } from "react";
import { ModuleConn } from "ui/types/ModuleConn";

export interface CardProps {
  moduleConn?: ModuleConn;
}

const Card: FC<CardProps> = ({ moduleConn }) => {
  const [fetched, setFetched] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setFetched(true);
    }, 2000);
  }, []);
  return (
    <div className="p-2">
      {moduleConn && <>
        <div className="p-3 border rounded-md">
          <div className="font-bold text-lg">{moduleConn.ModuleNode.name}</div>
          <div className="p-3">{fetched ? "Data is fetched" : "Loading..."}</div>
        </div>
      </>}
    </div>
  );
};

export default Card;
