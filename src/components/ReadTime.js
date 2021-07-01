import React from "react"
import Emoji from "./Emoji"
const coffeeEmoji = <Emoji symbol="☕️"/>
const bentoEmoji = <Emoji symbol="🍱"/>

const ReadTime = ({ minutes }) => {
  if (minutes <= 30) {
    const minRead = minutes / 5
    console.log(minRead)
    return minRead * "☕️"
  } else {return null}
}

export default ReadTime
