import React, {useRef, useState} from 'react';
import {PanResponder, Animated, View, StyleSheet} from 'react-native';
import { BottomSheetContainer, ButtonAnimatedContainer } from './Styles/BottomSheetStyles';

const SwipeableButton = props => {
  const {swipeDistance, onSwipe, children, setExtended} = props;

  const pan = useRef(new Animated.ValueXY()).current;

  const [arrowRotation, setArrowRotation] = useState(new Animated.Value(0)); // Initialize rotation angle

  const handlePanResponderRelease = (_, gestureState) => {
    const isSwipeUp = gestureState.dy < -swipeDistance;

    const panAnimationSpring = Animated.spring(pan, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    });

    const panAnimationTimings = Animated.timing(pan, {
      toValue: {x: 0, y: 0},
      duration: isSwipeUp ? 100 : 0,
      useNativeDriver: false,
    }).start();

    const rotationAnimation = Animated.timing(arrowRotation, {
      toValue: isSwipeUp ? 180 : 0,
      duration: 600,
      useNativeDriver: false,
    });

    if (isSwipeUp) {
      onSwipe();
      panAnimationTimings;
      setExtended(true);
      rotationAnimation;
    } else {
      panAnimationSpring;
      setExtended(false);
      rotationAnimation;
    }
  };

  const onPanResponderMove = (_, gestureState) => {
    Animated.event([null, {dy: pan.y}], {useNativeDriver: false})(
      null,
      {dy: gestureState.dy < 0 ? gestureState.dy : 0}, // used gestureState.dy only for upward moment only
    );
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: onPanResponderMove,
    onPanResponderRelease: handlePanResponderRelease,
  });

  return (
    <BottomSheetContainer>
    <ButtonAnimatedContainer style={{ transform: [{ translateY: pan.y }] }} {...panResponder.panHandlers}>
      {children}
    </ButtonAnimatedContainer>
  </BottomSheetContainer>
  );
};


export default SwipeableButton;
