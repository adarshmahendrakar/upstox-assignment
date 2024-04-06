import React from 'react';
import { View, Text } from 'react-native';
import { Card } from '../GenericComponents/Card';

const HoldingDetails = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <Text>This is a card component.</Text>
      </Card>
    </View>
  );
};

export default HoldingDetails;
