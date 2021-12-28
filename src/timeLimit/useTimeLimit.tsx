import { useState, useEffect } from "react"
import { TimeLimitOption } from "./type"

const getTimeLeft = (targetDate:Date , isSec: boolean) => {
  return (
    isSec ? 
    Math.floor((targetDate.getTime() - Date.now())/1000) :
    (targetDate.getTime() - Date.now())
  )
}

export const useTimeLimit = (
  targetDate:Date, 
  { intervalTime = 1000, isSec = false }:TimeLimitOption = {}
) => {
  const [timeLeft, setTimeLeft] = useState<number>(getTimeLeft(targetDate, isSec))
  const [targetTime, setTargetTime] = useState<Date>(targetDate)

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(targetTime,isSec))
    }, intervalTime)
    return () => {
      clearInterval(id)
    }
  }, [])

  return [timeLeft, setTargetTime];
}
