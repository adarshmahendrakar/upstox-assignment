import { Animated, Image, View } from "react-native";
import styled from "styled-components/native";

export const BottomSheetContentContainer = styled(View)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ArrowContainer = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 30px;
`;

export const ArrowImage = styled(Image)`
  width: 26px;
  height: 30px;
`;


export const StyledView = styled(View)`
  width: ${({ screenWidth }) => screenWidth}px;
  padding: 20px;
`;


export const BottomSheetContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonAnimatedContainer = styled(Animated.View)`
  padding: 10px;
  background-color: white;
`;


export const DropDownContainer = styled.View`
  margin-top: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RightText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #696969;
`;

export const LeftText  = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000000;
`;