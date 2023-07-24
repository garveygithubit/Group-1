import { StyleSheet, Text, View } from 'react-native'

const BookCard = ({navigation}) => {
    return (
        <View style = {styles.parent}>
        <View style = {styles.container}>
        <Text style = {styles.text} onPress={() => navigation.navigate("CheckIn")}>
                Book Now
            </Text>
        </View>
        <Text style = {styles.room}>
            Room Details
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        marginRight: 30
    },
    container: {
        backgroundColor: 'blue',
        width: 100,
        height: 40,

        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    },
    room:{
        marginLeft: 15
    }
})

export default BookCard;