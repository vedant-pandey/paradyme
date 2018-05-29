import React,{ Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Image
} from "react-native";

import { Container,Content,Header,Left,Right,Icon, Button, Body, Title } from "native-base";

import FAIcon from "react-native-vector-icons/FontAwesome";

class HomeScreen extends React.Component{
    render(){
        return(
            <Container >
                <Header style={{backgroundColor:'#263238'}}>
                    <StatusBar barStyle="light-content" backgroundColor="#000a12"/>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-menu" style={{fontSize:30,color:"#29b6f6"}}/>
                        </Button>
                    </Left>
                    <Body >
                        <Title style={{justifyContent: "center" }} >
                            <Image source={require('../assets/images/logo.png')} />
                        </Title>
                    </Body>
                    <Right style={{marginLeft:50}} >
                        <Button transparent>
                            <Icon name="ios-menu" style={{fontSize:30,color:"#29b6f6"}}/>
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});