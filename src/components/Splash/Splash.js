import React, {Component} from 'react';
import {View, Text, TextInput } from 'react-native';
import styles from './Splash.styles';

const setTimer = () => {
    setTimeout(() => {
console.log("spit")
    },
3000
    )
}
class Splash extends Component {
  
    render() {
      return (
        <View
          style={styles.main}>
              <Text style={styles.textType}>ZippyPay</Text>
              {setTimer()}
          </View>
       
    
      );
    }
  };

  export default Splash;