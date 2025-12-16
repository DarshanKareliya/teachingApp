import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    // const handlePress = () => {
    //     Alert.alert(`Username: ${username}, Password: ${password}`);
    // }

     async function handleSubmit() {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Login Error', 'Please enter both username and password.');
      return;
    }

    try {
      // const isAuthenticated = await authenticateUser(username, password);

      if (username === 'admin' && password === 'admin') {
        // setUsername('');
        // setPassword('');
        navigation.replace('Home');
      } else {
        Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Database authentication error:', error);
      Alert.alert('System Error', 'Could not connect to the database.');
    }
  }

  return (
    <View style={styles.container}>
        <Text>Login</Text>
        <Image source={require('../assets/images/srh_logo.png')} style={{width: 200, height: 200}} />
        <TextInput placeholder='Username' value={username} onChangeText={setUsername} />
        <TextInput placeholder='Password' value={password} onChangeText={setPassword} />
        <Button title="Login" onPress={handleSubmit}  />
    </View>
  )
}


export default Login

const styles = StyleSheet.create({
    container:{flex:1, justifyContent:'center', alignItems:'center'},

})