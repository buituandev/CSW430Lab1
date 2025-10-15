import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default Information = (props) => {
    const handleUpdate = () => {
        Alert.alert('Success', 'Updated successfully!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>

            <Text>Full Name:</Text>
            <Text>{props.fullname}</Text>

            <Text>Age:</Text>
            <Text>{props.age}</Text>

            <Text>Occupation:</Text>
            <Text>{props.occupation}</Text>

            <View>
                <Button title="Update" onPress={handleUpdate} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: 'white'
    }
});