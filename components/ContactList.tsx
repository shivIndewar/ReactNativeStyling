import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {

    const contacts = [
        {
            uid:1,
            name:'Shivprasad Indewar',
            status : 'Software Engineer - Tech Lead',
            imageUrl:'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg',
        },
        {
            uid:2,
            name:'Sonal Indewar',
            status : 'Hose Wife',
            imageUrl:'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg',
        },
        {
            uid:3,
            name:'Devashri Ktre',
            status : 'Prmary Teacher',
            imageUrl:'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg',
        },
        {
            uid:4,
            name:'Gangaprasad Indewar',
            status : 'Prmary Teacher',
            imageUrl:'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg',
        },
        {
            uid:5,
            name:'Ragnunath Indewar',
            status : 'Retired Bank Manager',
            imageUrl:'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg',
        },
    ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl})=> (
            <View key={uid} style={styles.userCard} >
                  <Image source={{uri:imageUrl}} style={styles.userImage} />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        color:'black',
        fontSize:24,
        fontWeight : 'bold',
        marginHorizontal: 10,
    },
    container:{
        width:400,
        height : 250,
        borderRadius:4,
        marginHorizontal : 10,
        marginVertical: 10,
    },
    userCard:{
        backgroundColor:'#535c68',
        margin:1,
        flexDirection:'row',
        alignItems:'center',
        borderRadius : 4,
    },
    userImage:{
        margin:10,
        width:40,
        height:40,
        borderRadius:20,
    },
    userName:{
        fontSize:18,
        color:'#badc58',
        fontWeight:'400',
    },
    userStatus : {
        color:'#6ab04c',
        fontSize:16,
        fontWeight:'600',
    },
});
