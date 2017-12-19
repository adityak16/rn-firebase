import React, {Component} from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import {config} from './firebaseConfig';
import TextFieldInput from './TextFieldInput';
import firebase from 'firebase';
import stylesApp from './styles.js';

export default class App extends Component<{}> {
  state = { email: '', password: '', error: '', loading: false, loggedIn: false };
  onSignInPress() {
      this.setState({ error: '', loading: true });
const { email, password } = this.state;
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => { this.setState({ error: '', loading: false, loggedIn: true}); })
          .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then(() => { this.setState({ error: '', loading: false, loggedIn: true }); })
                  .catch(() => {
                      this.setState({ error: 'Authentication failed.', loading: false });
                  });
          });
  }
  onLogoutPress() {
    console.log('here');
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('here also');
        this.setState({loggedIn: false});
      }).catch((error) => {
        this.setState({loggedIn: false});
      });
  }
  renderButtonOrLoading() {
      if (this.state.loading) {
          return <View><Text>loading...</Text></View>
      }
      return <Button onPress={this.onSignInPress.bind(this)} title="Log in/Sign up" />;
  }
  render() {
    return (
      <View style={{justifyContent: 'center', top:50, alignItems:'center', justifyContent:'center'}}>
                    {!(this.state.loggedIn) ?
                    <View>
                    <TextFieldInput
                        label='Email Address'
                        placeholder='Your email address'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        autoCorrect={false}
                    />
                    <TextFieldInput
                        label='Password'
                        autoCorrect={false}
                        placeholder='Your Password'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={stylesApp.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrLoading()}
                    </View>
                    : <View>
                        <Text style={{textAlign:'center', top:-10}}>Fecthing data from firebase...</Text>
                        <View>
                          <Image style={{width:300, height:400}} source={{uri: 'https://tr3.cbsistatic.com/hub/i/2017/06/12/8e4c978e-be97-46dd-ada3-ac8f6d485e4d/108e394ca5c9591935b4b399c4826374/google-firebase.jpg'}} />
                        </View>
                        <View style={{top:150, borderWidth:2}}>
                        <Button onPress={this.onLogoutPress.bind(this)} title="Logout" />
                        </View>
                      </View>}
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
