import { DisplayComponent } from './styles'
 
interface  DisplayValue  {
    value: string;
}

interface DisplayProps {
    data: Array<DisplayValue>;
}


export function Display({ data }: DisplayProps){
    const viewExpression = () => {
        let expression = '';

        data.forEach((item) => expression += item);

        return expression;
    }

    return(
        
        <DisplayComponent>
            <main>
               <div> {viewExpression()} </div>    
            </main>
        </DisplayComponent>

    )
}