import React from 'react'

export default function DateToday() {

  let today = new Date();
  let date = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
 
  return (
    <div><p>{date}</p></div>
  )
}
