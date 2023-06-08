import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomerDetailsForm from './CustomerDetailsForm';
import styles from './styles';

const Stack = createStackNavigator();

const RegistrationFormScreen = ({ navigation }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [add, setAdd] = useState('');
  const [email, setEmail] = useState('');
  const [cno, setCno] = useState('');
  const [gender, setGender] = useState('');

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleSubmit = () => {
    navigation.navigate('CustomerDetailsForm', {
      fname,
      lname,
      gender,
      add,
      email,
      cno,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Form</Text>

      <TextInput
        style={styles.textinput}
        placeholder="First Name"
        onChangeText={(text) => setFname(text)}
        value={fname}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Last Name"
        onChangeText={(text) => setLname(text)}
        value={lname}
      />

      <Text style={styles.label}>Gender:</Text>
      <View style={styles.radioButtonContainer}>
        <View style={styles.radioButton}>
          <Text>Male</Text>
          <RadioButton
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => handleGenderChange('male')}
          />
        </View>

        <View style={styles.radioButton}>
          <Text>Female</Text>
          <RadioButton
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => handleGenderChange('female')}
          />
        </View>
      </View>

      <TextInput
        style={styles.textinput}
        placeholder="Address"
        onChangeText={(text) => setAdd(text)}
        value={add}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Contact No."
        onChangeText={(text) => setCno(text)}
        value={cno}
      />

      <Button color="green" title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'darkgray'}, headerTitleAlign: 'center'}}>
        <Stack.Screen name="RegistrationForm" component={RegistrationFormScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CustomerDetailsForm" component={CustomerDetailsForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
