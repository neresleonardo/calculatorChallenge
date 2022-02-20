import { useState } from 'react';
import { useTheme } from '../../hooks/theme';
import Toggle from '../Toogle';
import { DisplayComponent } from './styles'
 
interface  DisplayValue  {
    value: string;
}

interface DisplayProps {
    data: Array<DisplayValue>;
}


export function Display({ data }: DisplayProps){

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

    return(
        
        
        <DisplayComponent>
            <div className="toggle">

                <Toggle 
                checked={darkTheme}
                onChange={handleChangeTheme}
                />   

            </div>
            <div className="total">
                
           3333
             
            </div>

            <div className="display-component">
                
               {viewExpression()} 
             
            </div>
        </DisplayComponent>

    )
}