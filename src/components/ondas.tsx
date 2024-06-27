import ondas from "../assets/onda.svg"
import ondas2 from "../assets/onda2.svg"

export function Ondas(){
    return(
        <>
         <div className="w-[1000px] h-[600px] absolute rotate-[130deg] -left-[530px] top-24" style={{backgroundImage:`url(${ondas})`,backgroundRepeat:"no-repeat"}} >
        </div>
        <div className="w-[1000px] h-[600px] absolute -rotate-[80deg] -right-[400px] bottom-24" style={{backgroundImage:`url(${ondas2})`,backgroundRepeat:"no-repeat"}} >
        </div>
        </>
    )
}