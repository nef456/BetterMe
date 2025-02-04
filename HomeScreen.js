import { Image, StyleSheet, Text, Pressable, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';

/*This screen calculates the BMR of a user to later determine an effective weight loss, gain, or maintenance goal.*/

const HomeScreen = ({ navigation, basilRate, setBasilRate }) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');


      const calculateBMR = () => {

        let bmr = 0;
    
          if(sex == ''){
             setError('Must enter Male or Female');
             return;
          }else if (sex == 'Female' || sex == 'female'){
            bmr = 4.536 * parseFloat(weight) + 15.88 * parseFloat(height) - 5 * parseFloat(age) - 161;
          }else if (sex == 'Male' || sex == 'male'){
            bmr = 4.536 * parseFloat(weight) + 15.88 * parseFloat(height) - 5 * parseFloat(age) + 5;
          }
  
          if(height == ''){
            setError('Must enter a height in inches!');
            return;
          } 
          
          if(weight == '') {
            setError('Must enter a weight in pounds!');
            return;
          }
          
          if(age == '') {
            setError('Must enter an age!');
            return;
          } 
  
          if (basilRate < 0) {
            setError('Please calculate your BMR first!');
            return;
          } else {
            setBasilRate(bmr);
            navigation.setParams({basilRate: bmr});
            setError('');
          }

    }

    
    return(
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={require('../assets/images/weight-lifting-weightlifting-fist-hand-600nw-2458723863.webp')}/>
      <Text style={styles.heading}>This application is for educational purposes only!</Text>
      <Text style={styles.heading}>Please enter your height and weight to calculate your Basil Metabolic Rate.
        Once you have your calculation, choose your goal from the navigation.
      </Text>
      <TextInput style={styles.inputText} placeholder='Height' placeholderTextColor={'gray'} returnKeyType='done' keyboardType='numeric' value={height} onChangeText={setHeight}/>
      <TextInput style={styles.inputText} placeholder='Weight' placeholderTextColor={'gray'} returnKeyType='done' keyboardType='numeric' value={weight} onChangeText={setWeight}/>
      <TextInput style={styles.inputText} placeholder='Male/Female' placeholderTextColor={'gray'} returnKeyType='done' value={sex} onChangeText={setSex}/>
      <TextInput style={styles.inputText} placeholder='Age' placeholderTextColor={'gray'} returnKeyType='done' keyboardType='numeric' value={age} onChangeText={setAge}/>
      <Pressable
        style={styles.calcBMR}
        onPress={calculateBMR}>
        <Text style={styles.calcBMRText}>Calculate BMR</Text>
        </Pressable>
        <Text style={styles.bmrText}>{basilRate ? 'Basil Metabolic Rate: ' + basilRate.toFixed(1) : ''}</Text>
        <Text style={styles.bmrText}>{basilRate ? 'This is what your body burns daily to function. Please navigate to screen for the goal you have in mind.' : ''}</Text>
        <Text style={styles.bmrText}>{error ? error : ''}</Text>
    </ScrollView>
    
      );
      
  }

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      
    },
   
    heading: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
    },
  
    calcBMR: {
      backgroundColor: '#325',
      marginLeft: 100,
      marginRight: 100,
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 30,
      marginTop: 10,
    },
  
    calcBMRText: {
      textAlign: 'center',
      fontSize: 20,
      color: 'white',
    },
  
    bmrText: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
    },
  
    inputText: {
      backgroundColor: '#FFFFFF',
      fontSize: 24,
      marginTop: 10,
      marginRight: 75,
      marginLeft: 75,
      paddingTop: 5,
      paddingBottom: 5,
    },
  
    img: {
      width: 400,
      height: 150,
    },
  
  })

  export default HomeScreen;