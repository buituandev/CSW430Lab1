import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
const Minimum = () => {
    const [minimum, setMinimum] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    function findMinimum() {
        setMinimum(Math.min(number1, number2, number3));
    }
    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
            <Text>Minimum between three numbers</Text>
            <TextInput
                placeholder="Enter first number"
                keyboardType="numeric"
                placeholderTextColor="gray"
                onChangeText={setNumber1}
                style={styles.input} />
            <TextInput
                placeholder="Enter second number"
                keyboardType="numeric"
                placeholderTextColor="gray"
                onChangeText={setNumber2}
                style={styles.input} />
            <TextInput
                placeholder="Enter third number"
                keyboardType="numeric"
                placeholderTextColor="gray"
                onChangeText={setNumber3}
                style={styles.input} />
            <Button title="Find Minimum" onPress={findMinimum} />
            <Text>Minimum: {minimum}</Text>
            <Text>Bui Anh Tuan-2131200024</Text>
        </View>
    )
}
export default Minimum;

const styles = StyleSheet.create({
    input: {
        color: "black"
    }
})