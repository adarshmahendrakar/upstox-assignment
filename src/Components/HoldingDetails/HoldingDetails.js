// in this component I have used styleSheets to just show about styleSheets

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HoldingDetails = ({symbol, quantity, ltp, pl, leftTitle, rightTitle}) => {
  return (
    <View >
      <View style={CardHoldingStyles.row}>
        <Text style={CardHoldingStyles.symbol}>{symbol}</Text>
        <View style={CardHoldingStyles.row}>
          <Text style={CardHoldingStyles.leftText}>{leftTitle} </Text>
          <Text style={CardHoldingStyles.rightText}>{ltp}</Text>
        </View>
      </View>
      <View style={CardHoldingStyles.row}>
        <Text style={CardHoldingStyles.leftText}>{quantity}</Text>
        <View style={CardHoldingStyles.row}>
          <Text style={CardHoldingStyles.leftText}>{rightTitle} </Text>
          <Text style={CardHoldingStyles.rightText}>{pl}</Text>
        </View>
      </View>
    </View>
  );
};

export default HoldingDetails;

const CardHoldingStyles = StyleSheet.create({
  symbol: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000000"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  leftText: {
      fontSize: 18,
      fontWeight: '600',
    color: '#696969',
  },
  rightText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
  
  },
});
