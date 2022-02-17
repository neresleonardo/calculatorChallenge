import { DisplayComponent } from './styles'
 
interface  DisplayProps  {
    value: string;
}


export function Display({value}: DisplayProps){
    return(

        <DisplayComponent>
            <main>{value} </main><br/>
        </DisplayComponent>

    )
}