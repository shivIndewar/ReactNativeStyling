import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.Container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    heading : {
        color:'black',
        fontSize : 24,
        fontWeight :'bold',
        paddingHorizontal : 8,
    },
    Container :{
       flex :1,
       flexDirection :'row',
    },
    card : {
       flex:1,
       alignItems :'center',
       justifyContent :'center',
       width:100,
       height: 100,
       borderRadius: 4,
       margin :8,
    },
    cardOne :{
        backgroundColor:'#EF5354',
    },
    cardTwo :{
        backgroundColor:'#50DBB4',
    },
    cardThree :{
        backgroundColor:'#5DA3FA',
    },
});

export default FlatCards;
