import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions} from 'react-native';
import arrow_up from '../../Assets/Img/arrow_up.png';
import DropDownDetails from './DropDownContent';
import {
  constantValue,
  profitNLoss,
  todaysProfitNLoss,
  totalInvestment,
} from '../../constants';
import {
  ArrowContainer,
  ArrowImage,
  BottomSheetContentContainer,
  StyledView,
} from './Styles/BottomSheetStyles';

const BottomSheetContent = ({
  extended,
  currenValue,
  totalInvestmentValue,
  todaysPNL,
  totalPNL,
}) => {
  const {width: screenWidth} = Dimensions.get('window');
  const arrowRotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(arrowRotation, {
      toValue: extended ? 1 : 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [extended, arrowRotation]);

  const arrowRotate = arrowRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const dataSet = [
    {title: constantValue, value: currenValue},
    {title: totalInvestment, value: totalInvestmentValue},
    {title: todaysProfitNLoss, value: todaysPNL},
  ];

  return (
    <BottomSheetContentContainer>
      {/* Rotate the arrow dynamically */}
      <ArrowContainer style={{transform: [{rotate: arrowRotate}]}}>
        <ArrowImage source={arrow_up} />
      </ArrowContainer>

      {extended && (
        <StyledView screenWidth={screenWidth}>
          {dataSet.map((item, index) => (
            <DropDownDetails
              key={index}
              leftTitle={`${item.title}:`}
              value={item.value}
            />
          ))}
        </StyledView>
      )}
      <StyledView screenWidth={screenWidth}>
        <DropDownDetails leftTitle={`${profitNLoss}:`} value={totalPNL} />
      </StyledView>
    </BottomSheetContentContainer>
  );
};

export default BottomSheetContent;
