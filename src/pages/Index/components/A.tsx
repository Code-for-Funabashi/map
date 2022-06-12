import React, { FC, DetailedHTMLProps, AnchorHTMLAttributes } from "react";

const A: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = (props) => {
  return (
    <a {...props} target="_blank" rel="noopener">
      {props.children}
    </a>
  );
};
export default A;
