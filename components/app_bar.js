import { StyleSheet, Text, View, Image } from 'react-native'

export default AppBar = () => {
    return (
        <View style = {styles.appbar}>
        <Image
            source = {require('../assets/logo.jpg')}
            style = {styles.image}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    appbar: {
        height: 80,
        width: '100%',
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
    },
    image: {
        width: 50,
        height: 90,
        marginLeft: 20

    }

})
