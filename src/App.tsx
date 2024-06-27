import { Button } from "./components/button"
import { Ondas } from "./components/ondas"
function App() {

  return (
    <div className="relative overflow-hidden">
      <Ondas/>
      <div className="bg-gray-300 w-screen h-screen flex flex-col items-center justify-center px-4 overflow-hidden" >
        <div className="z-10">
        <h1 className=" text-4xl font-bold flex justify-center items-center max-sm:text-center">Major é viado ?</h1>
          <div className="flex flex-row w-full items-center justify-center gap-6 mt-10 max-sm:flex-col max-sm:gap-2">

            <Button text="SIM" color="green" onClick={() => {}}  />
            <Button id="botaoNao"  text="NÃO" color="red" onClick={() => {}}  />
            
            
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default App
