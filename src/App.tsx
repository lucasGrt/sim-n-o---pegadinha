import onda from "./assets/onda.svg"
import onda2 from "./assets/onda2.svg"
function App() {

  return (
    <>
    <div className="w-[1000px] h-[600px] absolute rotate-[130deg] -left-[530px] top-24" style={{backgroundImage:`url(${onda})`,backgroundRepeat:"no-repeat"}} >
    </div>
    <div className="w-[1000px] h-[600px] absolute -rotate-[80deg] -right-[400px] bottom-24" style={{backgroundImage:`url(${onda2})`,backgroundRepeat:"no-repeat"}} >
    </div>
    <div className="bg-gray-300 w-screen h-screen flex flex-col items-center justify-center px-4 overflow-hidden" >
      <div className="z-10">
      <h1 className=" text-4xl font-bold flex justify-center items-center max-sm:text-center">Major é viado ?</h1>
        <div className="flex flex-row w-full items-center justify-center gap-6 mt-10 max-sm:flex-col max-sm:gap-2">
          <button className="bg-green-500 w-40 h-10 rounded-sm hover:bg-green-600 transition-all text-2xl font-bold text-slate-900 ">SIM</button>
          <button className="bg-red-500 w-40 h-10 rounded-sm hover:bg-red-600 transition-all text-2xl font-bold text-slate-900 ">NÃO</button>
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
