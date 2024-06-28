import { Ondas } from "../components/ondas"
import pedroAudio from "../assets/pedro-pedro-pe.mp3"
import pedroGif from "../assets/pedroGif.gif"
import {useRef,useEffect} from "react"

function Sim() {

    const audioref = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        if (audioref.current)
            audioref.current.play()
    },[])

    return (
        <div className="relative overflow-hidden">
        <Ondas/>
            <div className="w-screen h-screen">
                <audio ref={audioref}> <source src={pedroAudio} type="audio/mp3"/></audio>
                <div className="w-screen h-screen items-center justify-center flex flex-col">
        <div className="size-64 rounded-full overflow-hidden flex items-center justify-center">
          <img src={pedroGif} alt="pedro gif" className="size-[110%]" />
        </div>

        <h1 className="text-slate-700 text-3xl font-semibold text-center z-10 mt-20">
          😉 Sint consectetur fugiat ut eu aliquip. 😏
        </h1>

        <p className="text-slate-600 text-base font-thin mt-6 w-2/4 z-10">
          Elit ex eiusmod elit occaecat nostrud qui magna ullamco quis proident
          ea ad. Nisi ut irure minim officia incididunt est quis excepteur
          dolor. Qui nisi nisi aute occaecat eiusmod ea et.
        </p>
      </div>
            </div>
            
        </div>
    )
  }
  
  export default Sim