import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import BookCard from './book_card';
import PriceDetails from './price_details';

export default HotelCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.uBZzLNUexdwwV7S-lX3o0QHaFj?w=263&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7' }}
        style={styles.image}
      />
      <View style={styles.rowContainer}>
        <PriceDetails />
        <BookCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 300,
    width: 450,
    marginBottom: 10,
  },
  image: {
    height: 240,
    width: '100%',
    marginBottom: -2
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
