import { useState, useCallback} from "react";

export const useTimeLimit = (targetDate:Date) => {
  const [nowDate, setNowDate] = useState(new Date())
  const setTargetTime = useCallback(() => {
    const now = new Date()
    setNowDate(now)
  },[])
  const timeLeft = targetDate.getTime() - nowDate.getTime()
  return [timeLeft, setTargetTime];
}