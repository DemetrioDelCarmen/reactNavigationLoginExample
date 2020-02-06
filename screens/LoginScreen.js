import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Form, Label, Item, Input } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TextInput } from 'react-native-gesture-handler';


 class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Welcome'
  };


  render() {
    return (
      <Container>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            
              <Button full rounded success style={{margin:30}}
                onPress={()=> this.props.navigation.navigate('Home')}
              >
                <Text style={{ color: '#fff' }}>Login</Text>
              </Button>
    
          </Form>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;