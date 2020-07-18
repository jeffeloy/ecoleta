import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
`;
export const Logo = styled.Image``;
export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #322153;
  font-size: 32px;
  font-family: "Ubuntu_700Bold";
  max-width: 260px;
  margin-top: 64px;
`;
export const Description = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  margin-top: 16px;
  font-family: "Roboto_400Regular";
  max-width: 260px;
  line-height: 24px;
`;
export const Footer = styled.View``;
export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: Roboto_500Medium;
  font-size: 16px;
`;
export const Picker = styled.Picker`
  height: 60px;
  width: 360px;
  color: #6c6c80;
  margin-bottom: 8px;
`;
export const PickersView = styled.View`

`;
export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#34CB79",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },
});
