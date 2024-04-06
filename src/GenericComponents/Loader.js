import { ActivityIndicator } from "react-native";
import { LoaderContainer, LoaderText } from "./styles";

export const Loader = ({loading}) => {
  return (
    <LoaderContainer>
    <ActivityIndicator size="large" color="#0000ff" />
    <LoaderText>{loading}</LoaderText>
  </LoaderContainer>
  );
};


