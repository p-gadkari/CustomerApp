import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomerDetailsForm = ({ route }) => {
  const { fname, lname, gender, add, email, cno } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {fname} {lname}</Text>
      <Text style={styles.text}>Gender: {gender}</Text>
      <Text style={styles.text}>Address: {add}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Contact No.: {cno}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CustomerDetailsForm;
