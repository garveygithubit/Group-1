import { StyleSheet, Text, View, } from 'react-native'

const PriceDetails = () => {
    return (
        <View style = {styles.details}>
            <Text>
            Deluxe Room 
        </Text>
        <Text>
            $300 /per night
        </Text>
        <Text>
            Sleeps 3 people
        </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    details: {
        marginLeft: 5
    }
})
export default PriceDetails;