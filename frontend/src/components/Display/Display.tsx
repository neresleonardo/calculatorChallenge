import { useState } from 'react';
import { useTheme } from '../../hooks/theme';
import Toggle from '../Toogle';
import { DisplayComponent } from './styles'
 
interface  DisplayValue  {
    value: string;
}


interface DisplayProps {
    data: Array<DisplayValue>;
    total: Array<DisplayValue>;
}


export function Display({ data, total }: DisplayProps){

    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }


    const viewExpression = () => {
        let expression = '';

        data.forEach((item) => expression += item);

        return expression;
    }

    const viewTotal = () => {
        let totalResult = '';

        total.forEach((item) => totalResult += item);

        return totalResult;
    }

    return(
        
        
        <DisplayComponent>
            <div className="toggle">

                <Toggle 
                checked={darkTheme}
                onChange={handleChangeTheme}
                />   

            </div>
            <div className="total">
                
           {viewTotal()}
             
            </div>

            <div className="display-component">
                
               {viewExpression()} 
             
            </div>
        </DisplayComponent>

    )
}