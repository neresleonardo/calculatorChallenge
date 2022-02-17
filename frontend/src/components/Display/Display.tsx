import { ComponentDisplay } from './styles'
 
interface  DisplayProps  {
    value: string;
}


export function Display({value}: DisplayProps){
    return(

        <ComponentDisplay>{value}</ComponentDisplay>
    )
}