import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight/Index';
import { ButtonIcon } from '@components/ButtonIcon';

import { Container, Form } from './styles';

export function Players(){
    return (
        <Container>
            <Header showBackButton/>

            <Highlight
                title="Nome da Turma"
                subtitle="adicione a galera e separe os times"
            />

            <Form>
                <Input
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                />
                <ButtonIcon
                    icon='add'
                 />
            </Form>
                
            

        </Container>
    );
}