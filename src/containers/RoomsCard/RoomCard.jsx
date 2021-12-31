import React from 'react';
import { Container, Title, Button, ImagesCont, Item, Image } from './styles';
import {BsThreeDots} from 'react-icons/bs'
import { images } from '../../utils/fakedata';


const RoomCard = () => {
    return (
        <Container>
            <Title>
                <p>Talking VC</p>
                <p><BsThreeDots/></p>
            </Title>
            <ImagesCont>
                <Item>
                    <Image className='blue' img={images[0].img} />
                    <p>{images[0].name} </p>
                </Item>
                <Item>
                    <Image className='blue'  img={images[1].img} />
                    <p>{images[1].name} </p>
                </Item>
                <Item>
                    <Image img={images[2].img} />
                    <p>{images[2].name} </p>
                </Item>
                <Item>
                    <Image img={images[3].img} />
                    <p>{images[3].name} </p>
                </Item>
                <Item>
                    <Image img={images[4].img} />
                    <p>{images[4].name} </p>
                </Item>
                <p className='number'>+2</p>
            </ImagesCont>
            <Button><p>Join Room</p></Button>
        </Container>
    );
};

export default RoomCard;