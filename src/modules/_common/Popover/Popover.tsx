import React, { memo } from "react";

type Props = {
  content: JSX.Element;
  children: JSX.Element;
};

function Popover({ content, children }: Props): JSX.Element {
  return <div></div>;
}

export default memo(Popover);
