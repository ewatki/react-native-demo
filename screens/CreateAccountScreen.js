import React from 'react';
import { View, Text, Button } from 'react-native';

const CreateAccountScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Create Account Screen</Text>
            <Button
            title="Next"
            onPress={() => navigation.navigate('PantryForm')}
            />
        </View>
    );
}

export default CreateAccountScreen;