import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Count = ({ score, count }) => (
  <p>{score} {count}</p>
)

const Average = ({ feedback }) => {
  let [good, neutral, bad] = feedback
  let all = good + neutral + bad
  let average = (good - bad) / all
  return (
    <p>average {average}</p>
  )
}

const Positive = ({ feedback }) => {
  let [good, neutral, bad] = feedback
  let all = good + neutral + bad
  let positive = good / all * 100
  return (
    <p>positive {positive}%</p>
  )
}

// I did this in 1.7
const Statistics = ({ feedback }) => {
  let [good, neutral, bad] = feedback
  let all = good + neutral + bad
  let average = (good - bad) / all
  let positive = good / all * 100
  if (good + neutral + bad === 0) {
    // I did this in 1.7 too
    return (
      <div>
        <h1>statistics</h1>
        <p>no feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <div>
        <Count score="good" count={good} />
        <Count score="neutral" count={neutral} />
        <Count score="bad" count={bad} />
        <Count score="all" count={all} />
        <Average feedback={feedback} />
        <Positive feedback={feedback} />
      </div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics feedback={[good, neutral, bad]} />
    </div>
  )
}

export default App