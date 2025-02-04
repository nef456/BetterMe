import {ScrollView, Text, Image, StyleSheet} from 'react-native';
import React from 'react';


/*This screen will show the calories from whichever option they chose and it will let them save their information
to a database and keep track of their calories.*/


const History = ({ calories }) => {

    return(
  
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={require('../assets/images/weight-lifting-weightlifting-fist-hand-600nw-2458723863.webp')}/>
      <Text style={styles.screenHeading}>History</Text>
      <Text style={styles.heading}>{calories ? calories.toFixed(1) : ''} </Text>
    </ScrollView>
  
    );
  }

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      
    },

    screenHeading: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    },
   
    heading: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 20,
    },
  
    img: {
      width: 400,
      height: 150,
    },
  
  })

  export default History;