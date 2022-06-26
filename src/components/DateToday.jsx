import React from "react";
import { DateContainer } from "./DateStyles";

export default function DateToday() {
  let today = new Date();
  let date =
    today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();

  return (
    <DateContainer>
      <p>{date}</p>
    </DateContainer>
  );
}
