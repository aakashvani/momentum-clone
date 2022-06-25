import React from 'react'
import DateToday from './components/DateToday'
import Quote from './components/Quote'
import Time from './components/Time'
import Weather from './components/Weather'

export default function App() {
  return (
    <div>
      <Weather/>
      <Time/>
      <DateToday/>
      <Quote/>
    </div>
  )
}
