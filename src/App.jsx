import { Suspense } from "react"
import HomeCard from "./Pages/HomeCard";


const CardPromise = fetch('HomeCardData.json').then(res => res.json());
function App() {


  return (
    <>
    <div>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <HomeCard CardPromise={CardPromise}>

    </HomeCard>
      </Suspense>
    </div>
    </>
  )
}

export default App
