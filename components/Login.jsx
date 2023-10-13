import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

const shopping = require('../assets/shopping.png');


export default function Login({navigation}) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={shopping} />
            <TextInput
                style={styles.input}
                placeholder="Enter Your Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Your Password"
            />
            <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.logInButton}>
                <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}>
                <Text style={styles.text}>Don't Have Account ? Click Here To SignUp.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("")}>
                <Text style={styles.text}>Forgot Password ? Click Here To Reset Password.</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    image:{
        width:100,
        height:100,
        marginTop:120,
        marginBottom:40
    },
    input:{
        borderColor:'black',
        borderWidth:2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        textAlign:'center',
        width:300,
        marginTop:10
    },
    logInButton:{
        elevation: 8,
        backgroundColor: "#B9B4C7",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 120,
        marginTop:30,
        marginBottom:30
    },
    btnTxt:{
        fontSize:20
    },
    text:{
        marginTop:10
    }
  });