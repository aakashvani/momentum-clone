import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Greeting, TimeStamp, Welcome } from "./TimeStyles"

export default function Time() {
  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return "Good Morning";
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return "Good Afternoon";
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return "Good Evening";
    } else {
      return "What are you doing up at this hour?";
    }
  };

  return (
    <Welcome>
      <TimeStamp>
        <Moment format="LT"></Moment>
        <Greeting>{greeting()}</Greeting>
      </TimeStamp>
    </Welcome>
  );
}
