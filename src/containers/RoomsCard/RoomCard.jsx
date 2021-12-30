import React from 'react';
import { Container, Title, Button, ImagesCont, Item, Image } from './styles';
import {BsThreeDots} from 'react-icons/bs'


const RoomCard = () => {
    const images = [{name:'Gustavo', img:'https://s3-alpha-sig.figma.com/img/fc65/2bbe/8d13890464a0ae2767785a43bea69db2?Expires=1641772800&Signature=C2mGlcaautwQxh6sKwURViOI0fSkquvuHYWP45pIq90FCQqrlsiSQqq7JbUiZ~iQ~9k9r9PvOPA6HXstvc-F4IJ-IJmMAiVLUTjVEE8zVeQaCxjMv4gKXGmPx-LUgDM8GtZlUAD7CkEgXfN-2R6PuzX34LWkcfR1fEd-OxPmnvjM9CK21tca-0QX~IkzKkijNv6c2QbQZDWR-qgIaEWl13BncZgEAxuwJRwV4BN2hqHYmNF8iTDKwV-tHvDWmFMGlpXUpEppxxZDofqexYg9YuG4zrYT1BcOZqtkJcQcpo3nC3on40XdzbGNkkf3Am35sCkdr6MdAOniXrQ8hbHY3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},{name:'Randy', img:'https://s3-alpha-sig.figma.com/img/62b1/6434/9944df51a5ee3220f1582629e7b240ff?Expires=1641772800&Signature=f8KhOYx4Wy4QUojCgy7w8HGeW5~4p6RdHXhA1WswklbvChfpJBXRkE1jk3ZvADXTgAMybHUosNFmmUueKmkWo3k-aQbyTObfowQJX6SRlK9ko-tgnCyUg5j0JP63VrZg0w0RHEhtZ4vTq1G3qKUEXm5Tznn4sl0DfRxN0u1TZH99l4M1srtvuqVR99Lz9uKL0NQChz3spzGfd5VOGPRCJVFIAvFsnVyVW~QoEcfBiScyWdIcUONynznVaZ6OXgH7RU-jcw210Fj3An26Ft64mPMQq8nhiZ9~d9TKj5gOEAA173q7DhKuQ-1RhHKFybEgEi1oA75vZ8DTfz9bFrTxDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}, {name:'María', img:'https://s3-alpha-sig.figma.com/img/8395/512b/649391ae1063b9ae9f4389cdb40f52ca?Expires=1641772800&Signature=T7tHEg1A~R1E5XsEkf5GFnHsovEFR4ukFdO7oeK6fTyRjNR-~76USAFAA9KX5kMO7CQhY~50NWWejewOTN9sLvH98g-9ZXZADyqGWIXUxX1nSIPF3MuFKW87NHJfqsOmwDBsoCTdFKZdMHxv-oG4nAY5bd3NfC5HIP1c40RcZpYREctMuX3M5x0cWr1CaZ9q~B50ZZTA31fUKtW09gJISXjIbE0jdTLR42eupjp4LAIqgtuZgPSvfpYaKxG0TfBMHZOZZ05de7jozRmEYl9nUhMjVtJCJYmS-674eHcfCRmka0UKODDwcvlkdj1kFIIj4PT5J07IeIVvo6BA6HWOUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}, {name:'Kianna', img:'https://s3-alpha-sig.figma.com/img/4dd7/ba71/ce51ccf0820bbc72012805d81ede0321?Expires=1641772800&Signature=eAMC4NQ-Jc-uuCCSwdskHEIJTfplQro6jm1D3GGrRjxpkqoxufRHd4d5JJR3AXHxqDEjDYX~wTmt22MTnOJWE1ws39CIWHLr510bxbrc9HmPZXiuzrDly3teznlRDcBY~7lCTGDQc3c~vSqYbhBUqrdHpDICGB6ghf9MPND~A6zNgQa-LAlPMpT-CepgrtjgcmFTuaLexDRqCTS~OCi4V8BSgWW4fu2m-BRxlMLs82vriRJosYSuMYM8cAJaL4srt7UFHAl~v9edexs8yC2vhVpk-JfXsM0mZlySxCLReGIBKjn3mFBiQWQYmj0KaISPR7Rupu0vumfIRFvWOwmM2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}, {name:'Nolan', img:'https://s3-alpha-sig.figma.com/img/87db/f9ab/451fb9cf352dc9f93d60f06a5c64dfbc?Expires=1641772800&Signature=RZfLEmoS5bEAyA~xMmgSlYfo~LLnxSBg6fPHDEfutfTGqHFFtIUmN9ZJXw5Y5UrS-dFm6WYn4yG7SrKBn0hdIVAcE4ziCF9REtsl1k7OEXbQjzENYLfzlvXR0FdXxelqgy0ScvE8xPSpq-RVvuwroY1A7GpE-csBi2upixdm6VqmJP8tq9vjooZAcX4h-yxmDhM~mwHYYHETr22LjhYRLz54EkMOt2SCnuCGr9GMpLpSfxc6d37iIoAevzZxqj8kbCs7lGH6QTGumu-vcnVXshAtatsfL-NRzN5Nkyr2NAwJI3r0afL2CGvZKltw75SzO761-V6wgkohOxnswg2JTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}]


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