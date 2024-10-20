import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.eleVetedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.eleVetedCard]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.eleVetedCard]}>
            <Text>For</Text>
        </View>
        <View style={[styles.card, styles.eleVetedCard]}>
            <Text>Horizantolly</Text>
        </View>
        <View style={[styles.card, styles.eleVetedCard]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.eleVetedCard]}>
            <Text>More......</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    heading :{
        color:'black',
        fontSize : 24,
        fontWeight : 'bold',
    },
    container :{
        padding : 8,
    },
    card :{
        flex :1,
        alignItems:'center',
        justifyContent:'center',
        width :100,
        height : 100,
        borderRadius: 4,
        margin: 4,
    },
    eleVetedCard :{
        backgroundColor :'gray',
    },
});

export default ElevatedCards;
