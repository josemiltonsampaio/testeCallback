import { memo } from "react"   

    
const Button = memo(function Button ({decrementa, text}) {
        
console.log("filho renderizou")         

 return (
        <button onClick = {decrementa} type='button'>{text}</button>
    )
});

export default Button;