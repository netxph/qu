import React from "react";

interface TeamProps extends React.PropsWithChildren {
}

export default function Team({ children }: TeamProps) {
  return <div>{children}</div>;
}
