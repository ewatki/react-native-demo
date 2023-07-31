import React from 'react';
import { View, Text, Button } from 'react-native';

const PreferencesForm = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Preferences Form Fill-out</Text>
            <Button
            title="Submit"
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default PreferencesForm;