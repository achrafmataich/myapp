
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { View, Text } from '../components/Themed'

const index = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello</Text>
            <AnimatedLottieView source={require("../assets/v5.7.0.json")} autoPlay style={{
                height: 100,
                width: 100
            }}/>
        </View>
    )
}

export default index