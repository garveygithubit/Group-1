import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HotelCard from '../components/hotel_card';
import AppBar from '../components/app_bar';

export default function HotelDetails({navigation}){
    return (
        <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <AppBar />
        <HotelCard navigation={navigation}/>
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    contentContainer: {
      alignItems: 'center',
    },
  });
  