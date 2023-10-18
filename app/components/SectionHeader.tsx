import React from "react";
interface Props {
  span: string;
  heading: string;
}
const SectionHeader = ({ heading, span }: Props) => {
  return (
    <div className="section_header">
      <span>{span}</span>
      <h2>{heading}</h2>
    </div>
  );
};

export default SectionHeader;
