import { Button, View, Text, TextInput, StyleSheet } from "react-native"
import { useState } from "react";

export default Calculate = () => {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState(0);

    function calculate() {
        const firstDigit = parseInt(number.toString()[0]);
        const lastDigit = parseInt(number.toString()[number.toString().length - 1]);
        setResult(firstDigit + lastDigit);
    }

    function reset() {
        setNumber(0);
        setResult(0);
    }

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
            <Text>Calculate First and Last Digit</Text>
            <TextInput
                placeholder="Enter a number"
                placeholderTextColor="gray"
                onChangeText={setNumber}
                value={number}
                keyboardType="numeric"
            />
            <View style={styles.buttonGroup}>
                <Button title="Calculate" onPress={calculate} />
                <Button title="Reset" onPress={reset} />
            </View>
            <Text>Result: {result}</Text>
            <Text>Bui Anh Tuan-2131200024</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        flexDirection: "row",
        gap: 10
    }
})