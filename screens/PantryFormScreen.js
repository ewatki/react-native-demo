import React from 'react';
import { View, Text, Button } from 'react-native';

const PantryForm = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pantry Form Fill-out</Text>
            <Button
            title="Next"
            onPress={() => navigation.navigate('Preferences')}
            />
        </View>
    );
}

export default PantryForm;