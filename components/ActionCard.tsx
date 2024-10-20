import {View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import React from 'react';

const ActionCard = () => {
    function OpenWindow(websiteLink : string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.haedingText}>Blog Card</Text>
      <View style={[styles.cardContainer, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What Most People Get Wrong About Personal Injury Lawsuits
            </Text>
          </View>
          <Image
            style={styles.cardImage}
            source={{
              uri: 'https://viralviralvideos.com/wp-content/uploads/2024/10/ai-generated-8700034_1280.png',
            }}
          />
           <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            Personal injury law is an important element of our legal system,
            allowing people to bring action and win compensation when they’ve
            been unjustly injured by another party. But there are numerous myths
            and misconceptions about personal injury lawsuits that pervade our
            culture. What are the true elements of personal injury lawsuits and
            how do you..
          </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=> OpenWindow('https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Fwww.viralviralvideos.com%2Ffeed%2F')}>
                <Text style={styles.readMoreBtn}>Read More</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width:400,
    height:250,
    marginHorizontal : 10,
    borderRadius :6,
    marginVertical : 10,
  },
  headingContainer: {
    height : 40,
    flexDirection : 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  elevatedCard:{
    backgroundColor : '#6ab04c',
    elevation : 3,
    shadowOffset :{
        width:1,
        height:1,
    },
    shadowColor:'#333',
    shadowOpacity: 0.4,
  },
  haedingText: {
    color:'black',
    fontSize : 24,
    fontWeight:'bold',
    paddingHorizontal : 10,
  },
  headerText:{
    color:'black',
    fontSize : 14,
    fontWeight:'bold',
  },
  cardImage: {
    height: 100,
  },
  bodyContainer: {
    padding:10,
  },
  footerContainer:{
    padding  :8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  readMoreBtn:{
    fontSize:16,
    color:'black',
    backgroundColor: 'white',
    padding: 5,
    shadowOffset :{
        width:1,
        height:1,
    },
    borderRadius: 3,
  },
});

export default ActionCard;
