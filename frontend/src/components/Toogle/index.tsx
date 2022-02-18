import React from 'react';

import {
    Container,
    ToggleSelector
} from './styles';


interface IToggleProps {
    checked: boolean;
    onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
    checked,
    onChange
}) => (
    <Container>
        <ToggleSelector                    
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={onChange}
        />
    </Container>
)

export default Toggle;