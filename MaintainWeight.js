import { Image, StyleSheet, Text, Pressable, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';

/*This screen calculates the calories a user needs to maintain their current weight.*/

const MaintainWeight = ({ navigation, basilRate, calories, setCalories }) => {

  const [activityLevel, setActivityLevel] = useState('');
  const [error, setError] = useState('');



  const calculateCalories = () => {

    let maintain = 0;

    if(activityLevel == 'Extremely Active'){

      maintain = (basilRate * 1.725);
      setCalories(maintain);

    }else if (activityLevel == 'Moderately Active'){

      maintain = (basilRate * 1.55) ;
      setCalories(maintain);

    }else if(activityLevel == 'Lightly Active'){

      maintain = (basilRate * 1.375);
      setCalories(maintain);

    }else if(activityLevel == 'Sedentary'){

      maintain = (basilRate * 1.2);
      setCalories(maintain);

    }

    if (activityLevel == ''){

      setError('Entry must be Extremely Active, Moderately Active, Lightly Active, Sedentary');

    } else if (basilRate == ''){

      setError('You must first calculate your Basil Metobolic Rate from the Home Screen');

    }else {

      setCalories(maintain);
      navigation.setParams({calories: maintain});
      setError('');
      setActivityLevel('');
    }


  }

    return(
  
    <ScrollView style={styles.container}>
    <Image style={styles.img} source={require('../assets/images/weight-lifting-weightlifting-fist-hand-600nw-2458723863.webp')}/>
    <Text style={styles.screenHeading}>Maintain Weight</Text>
      <Text style={styles.heading}>  {basilRate ? 'Calculated BMR: ' + basilRate.toFixed(1) : ''}</Text>
      <Text style={styles.heading}>If maintaining weight is your goal, please enter your activity level below for defined calorie intake results.</Text>
      <Text style={styles.activityChoicesHeader}>Activity Level Choices:</Text>
      <Text>Extremely Active</Text>
      <Text>Moderately Active</Text>
      <Text>Lightly Active</Text>
      <Text>Sedentary</Text>
      <TextInput style={styles.inputText} placeholder='Activity Level' placeholderTextColor={'gray'} returnKeyType='done' value={activityLevel} onChangeText={setActivityLevel}/>
      <Pressable
        style={styles.calcCalories}
        onPress={calculateCalories}>
        <Text style={styles.calcCaloriesButton}>Calculate Calories</Text>
        </Pressable>
        <Text style={styles.caloriesMessage}>{basilRate ? 'Amount of calories for maintenance: ' + calories.toFixed(1) : ''}</Text>
        <Text style={styles.caloriesMessage}>{error ? error : ''}</Text>
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

    activityChoicesHeader: {
      fontSize: 18,
      marginTop: 20,
    },
  
    calcCalories: {
      backgroundColor: '#325',
      marginLeft: 100,
      marginRight: 100,
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 30,
      marginTop: 10,
    },
  
    calcCaloriesButton: {
      textAlign: 'center',
      fontSize: 20,
      color: 'white',
    },
  
    caloriesMessage: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
    },
  
    inputText: {
      backgroundColor: '#FFFFFF',
      fontSize: 24,
      marginTop: 10,
      marginRight: 75,
      marginLeft: 70,
      paddingTop: 5,
      paddingBottom: 5,
    },
  
    img: {
      width: 400,
      height: 150,
    },
  
  })
export default MaintainWeight;