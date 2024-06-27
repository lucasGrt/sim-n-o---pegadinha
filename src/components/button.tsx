import {twMerge} from "tailwind-merge";
import {Smile,Frown} from "lucide-react";

interface IButtonProp{
    text:string;
    color:"green" | "red";
    onClick:() => void;
    id?: string;
}



export function Button({text,color,onClick,id}:IButtonProp){

    function moveAleatorio() {
        if (!id) return;
    
        const button = document.getElementById(id)!;
    
        const alturaTela = document.documentElement.clientHeight;
        const larguraTela = document.documentElement.clientWidth;
    
        const verticalAleatorio = Math.floor(Math.random() * alturaTela + 1);
        const horizontalAleatorio = Math.floor(Math.random() * larguraTela + 1);
    
        button.style.position = "absolute";
    
        button.style.top = verticalAleatorio + "px";
        button.style.right = horizontalAleatorio + "px";
      }

    return(
        <>

        <button onClick={color === "red" ? moveAleatorio : onClick} onMouseEnter={color === "red" ? moveAleatorio : () => {}}
        id={id} className={twMerge(
            "w-40 h-10 rounded-sm  transition-all text-2xl font-bold text-slate-200 flex flex-row justify-center items-center gap-2" ,
            color === "green" ? "bg-green-500 hover:bg-green-600":"bg-red-500 hover:bg-red-600" 
        )}>{text}
        {color === "green"? (<Smile/>):(<Frown/>)}
        </button>
    
        </>
    )
  
}