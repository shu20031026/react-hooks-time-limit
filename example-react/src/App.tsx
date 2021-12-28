import { useTimeLimit } from "react-hooks-time-limit"

const asita = new Date(Date.now())
asita.setDate(29)

function App() {
  const [timeLeft,setTimeLeft] = useTimeLimit(asita, {isSec: true})

  console.log(timeLeft)
  
  return (
    <div>
      
    </div>
  );
}

export default App;
