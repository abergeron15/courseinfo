import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <>{text} {value}</>
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
        <p><StatisticLine text="good" value={good} /></p>
        <p><StatisticLine text="neutral" value={neutral} /></p>
        <p><StatisticLine text="bad" value={bad} /></p>
        <p><StatisticLine text="all" value={all} /></p>
        <p><StatisticLine text="average" value={average} /></p>
        <p><StatisticLine text="positive" value={positive} />%</p>
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