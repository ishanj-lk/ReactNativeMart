import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

const shopping = require('../assets/shopping.png');


export default function SignUp({navigation}) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={shopping} />
            <TextInput
                style={styles.input}
                placeholder="Enter New Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Your Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Your Password"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Your Password Again"
            />
            <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.signUpBtn}>
                <Text style={styles.btnTxt}>Sign Up</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.text}>Already Have Account ? Click Here To Login.</Text>
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
    signUpBtn:{
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