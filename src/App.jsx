import React from "react"
import { useState, useEffect } from "react"
import './App.css'

export default function App() {
  const [quote, setQuote] = useState("")
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes)
        setQuote(data.quotes[0])
      })
  }, [])

  function getNewQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomNumber])
  }

  return (
    <div className="main--div">
      <h1>Quote Generator</h1>
      <div className="quiz--div">
        <h3>{quote?.quote}</h3>
        <i>{quote?.author}</i>
        <button onClick={getNewQuote}>New Quote</button>
      </div>
    </div>
  )
}