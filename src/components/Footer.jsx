import styled from 'styled-components'
import {Facebook, Instagram, Twitter, Pinterest,Room,Phone,MailOutline} from '@material-ui/icons'
import { mobile } from '../Responsive'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
    width: 50%;
`
export const Footer = () => {
return (
    <Container>
        <Left>
            <Logo>banadoo</Logo>
            <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when annic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including</Desc>
        <SocialContainer>
            <SocialIcon color='385999'>
                <Facebook/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <Instagram/>
            </SocialIcon>
            <SocialIcon color='55ACEE'>
                <Twitter/>
            </SocialIcon>
            <SocialIcon color='E60023'>
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Useful List</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Material-1</ListItem>
                <ListItem>Materil-2</ListItem>
                <ListItem>Material-3</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms </ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>Superior University, Gold Campus, Lahore
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>+92-320-1610076
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>MCSM-F20-074@superior.edu.pk
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
)
}
export default Footer