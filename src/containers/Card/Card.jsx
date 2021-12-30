import React from 'react';
import { Container, Line, Header, Text, Actions, Image, Row, HeaderText } from './styles';
import Action from '../../components/Action/Action';
import {BsThreeDots} from 'react-icons/bs'

const Card = () => {
    const actions = [{text: 'Upvote (1.5k)', img: ''},
    {text: 'Comment (243)', img: ''},
    {text: 'Repost (243)', img: ''},
    {text: 'Support (243)', img: ''},
    {text: 'Share', img: ''}]

    return (
        <Container>
            <Header>
                <Image img="https://s3-alpha-sig.figma.com/img/a22d/fcba/b4a87782404ddfd167868ad0be0944bf?Expires=1641772800&Signature=dgzY0Ft7gQ6rVHrcjXu-IdRBWCsnnWA5Ym-39dnzFX~IK20CRIWHLstzPy-Ullfv9U5BKYH-SPZYd7sUHyYEcji3DkVLh1yysohtS8wur6e9BeXnJ5kjqa90P-n6ndSgjp4R8DEpih4C4Mj3lExSTDjJQpIAmVHUR~mm2K2XIJy37UpdMJpBtQ1vRDEEwR2UCL5V-S8OYTkbcKq7VN1wc0grtjG8Ip0IkBUxf7uTqfikGUPWdfQ8-Q1ZUg~1mI6yzFRK84l0F8-6GQv974RDfaZYwxfug404J0T-xMW3Ty3LXSW5zjXFIPYi1xcgiGj2wwvw9GeLaDx8bvDh2ITbWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <HeaderText>
                    <Row>
                    <div className='title left'>
                    <p className='name'>Jessica Jane</p>
                    <p className='price'>~$24.9k  Buy</p>
                    </div>
                    <p className='right'><BsThreeDots/> </p>
                    </Row>
                    <Row>
                    <p className='description left'>QA Engineer at Devdoots</p>
                        <p className='description right'>2h</p> 
                    </Row>
                    <Row>
                    <p className='left'>Follow</p>
                    </Row>
                </HeaderText>
            </Header>
     
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. @andrei Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. vb
            </Text>
            <Line/>
           
            <Actions>
                {actions.map((e, i) => {
                    return <Action key={i} text={e.text} img={e.img} />

                })}
            </Actions>
        </Container>
    );
};

export default Card;
