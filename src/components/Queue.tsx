import React from "react";
import QueueMenu from "./QueueMenu";

interface QueueProps extends React.PropsWithChildren {
  court: string;
}

export default function Queue({ children, court }: QueueProps) {
  return (
    <article>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <div className="flex justify-between">
          <h3 className="font-bold">{court}</h3>
          <QueueMenu className="flex gap-x-2" />
        </div>
        <div className="mt-2 flex justify-between">{children}</div>
      </div>
    </article>
  );
}
