import React from 'react';
import { Container, Image, Button, Header, HeaderText, ActionCont, NumberCont } from './styles';
import Action from '../../components/Action/Action';
import Number from '../../components/Number/Number';
import view from '../../utils/view.png'
import edit from '../../utils/edit.png'
import share from '../../utils/share.png'


const Sidebar = () => {
    return (
        <Container>
            <Header>
            <Image img='https://www.figma.com/file/CfURxXtaMFw4pfzpyih7rU/image/7024e39c69d1fb6c153009beb3bf0b7445a2cb7c?fuid=1012351437510691245'/>
            <HeaderText>
                <p className='name'>Neil Whitfield</p> 
                <ActionCont>
                    <Action text='Edit' img={edit} />
                    <Action  text='View' img={view} />
                    <Action  text='Share' img={share} />
                </ActionCont>
            </HeaderText>
            </Header>
            <NumberCont>
                <Number num='5.6K' text='Followers'/>
                <Number num='1.2K' text='Following'/>
                <Number num='57.3K' text='Points'/>
            </NumberCont>
            <Button>
                <p>Complete your profile</p>
            </Button>
        </Container>
    );
};

export default Sidebar;