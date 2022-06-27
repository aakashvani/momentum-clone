import React, { useState, useEffect } from "react";
import axios from "axios";

import { QuoteContainer, Text } from "./QuoteStyles";

const url = "https://api.quotable.io/random";

const Quote = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data)

  if (!data) return null;

  return (
    <QuoteContainer>
      <Text>{data.content}</Text>
      <Text>-{data.author}</Text>
    </QuoteContainer>
  );
};

export default Quote;
