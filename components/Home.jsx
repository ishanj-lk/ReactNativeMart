import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';

const land = require('../assets/land.png');
const house = require('../assets/house.png');
const car = require('../assets/car.png');
const gadgets = require('../assets/gadgets.png');
const pets = require('../assets/pets.png');
const books = require('../assets/books.png');
const foods = require('../assets/foods.png');
const cleaning = require('../assets/cleaning.png');
const cloths = require('../assets/cloths.png');
const jobs = require('../assets/jobs.png');


export default function Home({navigation}) {
    const goToCart = () =>
    Alert.alert('View Cart', 'Do you want to go to cart ? ', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('Go to cart')},
    ]);
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <Text style={styles.headText}>Categories</Text>
                    <View style={styles.horizontalView}>
                        <View style={styles.oneItem}>
                            <Image style={styles.catImage} source={car} />
                            <Text style={styles.categoryHead}>Cars</Text>
                        </View>
                        <View style={styles.oneItem}>
                            <Image style={styles.catImage} source={house} />
                            <Text style={styles.categoryHead}>Houses</Text>
                        </View>
                    </View> 
                    <View style={styles.horizontalView}>
                        <View style={styles.oneItem}>
                            <Image style={styles.catImage} source={land} />
                            <Text style={styles.categoryHead}>Lands</Text>
                        </View>
                        <View style={styles.oneItem}>
                            <Image style={styles.catImage} source={gadgets} />
                            <Text style={styles.categoryHead}>Gadgets</Text>
                        </View>
                    </View> 
                    <View style={styles.horizontalView}>
                        <View style={styles.oneItem}>
                            <Image style={styles.catImage} source={pets} />
                            <Text style={styles.categoryHead}>Pets</Text>
                        </View>
                        <View style={styles.oneItem}>
                            <Image style={styles.catImage} source={books} />
                            <Text style={styles.categoryHead}>Books</Text>
                        </View>
                    </View> 
                    <View style={styles.horizontalView}>
                        <View style={styles.oneItem}>
                            <Image style={styles.catImage} source={foods} />
                            <Text style={styles.categoryHead}>Foods</Text>
                        </View>
                        <View style={styles.oneItem}>
                            <Image style={styles.catImage} source={cleaning} />
                            <Text style={styles.categoryHead}>Cleaning Items</Text>
                        </View>
                    </View> 
                    <View style={styles.horizontalView}>
                        <View style={styles.oneItem}>
                            <Image style={styles.catImage} source={cloths} />
                            <Text style={styles.categoryHead}>Cloths</Text>
                        </View>
                        <View style={styles.oneItem}>
                            <Image style={styles.catImage} source={jobs} />
                            <Text style={styles.categoryHead}>Jobs</Text>
                        </View>
                    </View> 
                    <TouchableOpacity style={styles.cartBtn} onPress={goToCart}>
                        <Text style={styles.btnTxt}>Visit Cart</Text>
                    </TouchableOpacity>
                </ScrollView>
          </SafeAreaView>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    headText:{
        textAlign:'center',
        fontSize:24,
        marginTop:20,
        marginBottom:20,
        fontWeight:'800'
    },
    horizontalView:{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom:20
    },
    oneItem:{
        alignItems:'center',
        borderColor:'black',
        borderWidth:2,
        borderRadius: 10,
        width:'44%',
        marginLeft:'2%',
        marginRight:'2%',
        padding:10
    },
    catImage:{
        width:100,
        height:100
    },
    categoryHead:{
        textAlign:'center',
        fontWeight:'800',
        fontSize:20
    },
    cartBtn:{
        elevation: 8,
        backgroundColor: "#B9B4C7",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 120,
        marginTop:10,
        marginBottom:30,
        alignItems:'center'
    },
    btnTxt:{
        fontSize:20
    }
  });