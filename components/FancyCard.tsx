import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{uri:'https://dvncorestorageprod.blob.core.windows.net/files/page/95/Image/Hazur%20Sahib_20240606083148741.jpg'}}
        style = {styles.imageContainer}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.label}>Nanded</Text>
            <Text style={styles.description}>Gurudwara Nanded is a prominent Sikh shrine located in Nanded, Maharashtra, India. It is one of the most sacred sites in Sikh pilgrimage, as it is the place where the 10th Guru of Sikhism, Guru Gobind Singh, spent the last years of his life. The gurudwara is situated on the banks of the Godavari River and is home to the sacred Samadhi of Guru Gobind Singh. Millions of pilgrims visit the shrine every year, including during the famous Sikh festival, Prakash Utsav, which commemorates the birth celebrations of Guru Gobind Singh.</Text>
            <Text style={styles.footer}> Note - 15 Mins away from Huzur Saheb Railway Station Nanded</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    heading :{
        color:'black',
        fontSize : 24,
        fontWeight:'bold',
    },
    card:{
        width:400,
        height:450,
        borderRadius:10,
        marginHorizontal : 8,
        marginVertical: 8,
    },
    cardBody:{
        flex: 1,
        flexGrow : 1,
        paddingHorizontal :8,
    },
    cardElevated:{
        backgroundColor:'black',
        elevation :3,
        shadowOffset :{
            width:1,
            height:1,
        },
    },
    imageContainer:{
        height :200,
        marginBottom:8,
        borderTopLeftRadius : 4,
        borderTopRightRadius : 4,
    },
    cardTitle:{
        fontSize:18,
        color : 'white',
        fontWeight:'bold',
        marginVertical: 8,
    },
    label:{
        fontSize:16,
        color : 'white',
        fontWeight:'bold',
        paddingTop: 3,
    },
    description:{
        fontSize:12,
        color : 'white',
        paddingTop: 3,
    },
    footer :{
        fontSize:14,
        color : 'white',
        fontWeight:'bold',
        paddingTop: 3,
    },
});

export default FancyCard;
