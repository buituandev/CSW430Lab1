import { useState } from "react";
import { TextInput, View, Text, Button, StyleSheet } from "react-native";

const HailstoneSequence = () => {
    const [number, setNumber] = useState(0);
    const [sequence, setSequence] = useState([]);
    function generateSequence() {
        const sequence = [];
        let n = number;

        sequence.push(n);
        while (n !== 1) {
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = n * 3 + 1;
            }
            sequence.push(n);
        }
        setSequence(sequence);
    }
    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
            <Text>Hailstone Sequence</Text>
            <TextInput
                placeholder="Enter number"
                keyboardType="numeric"
                placeholderTextColor="gray"
                onChangeText={setNumber}
                style={styles.input}
            ></TextInput>
            <Button title="Generate Sequence" onPress={generateSequence} />
            <Text>Sequence: {sequence.join(", ")}</Text>
            <Text>Bui Anh Tuan-2131200024</Text>
        </View>
    )
}
export default HailstoneSequence;

const styles = StyleSheet.create({
    input: {
        color: "black"
    }
})