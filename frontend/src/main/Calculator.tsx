import { Button } from '../components/Button/button';
import { Display } from '../components/Display/Display';

import { Container, Teclado } from "./styles";

export function Calculator() {
    return(
        <Container>
            <Display value="123" />
            <Teclado>

            <Button label="AC" operation  />
            <Button label="clear" operation />
            <Button label="%" operation />
            <Button label="/" operation />
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="x" operation/>
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="-" operation />
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="+" operation />
            <Button label="0" />
            <Button label="." />
            <Button label="=" double />
            </Teclado>
        </Container>
    )
}