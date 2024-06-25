""
function App() {

  return (
    <div className="bg-slate-900 w-screen h-screen flex flex-col items-center justify-center px-4" >
      <h1 className="text-slate-200 text-4xl font-bold max-sm:text-center">Major é viado ?</h1>
      <div className="flex flex-row w-full items-center justify-center gap-6 mt-10 max-sm:flex-col max-sm:gap-2">
        <button className="bg-green-500 w-40 h-10 rounded-sm hover:bg-green-600 transition-all text-2xl font-bold text-slate-900 ">SIM</button>
        <button className="bg-red-500 w-40 h-10 rounded-sm hover:bg-red-600 transition-all text-2xl font-bold text-slate-900 ">NÃO</button>
        
      </div>
      
    </div>
  )
}

export default App
