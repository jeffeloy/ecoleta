import styled from "styled-components/native";
import {StyleSheet} from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  padding-top: 40px;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Ubuntu_700Bold';
  margin-top: 24px;
`;
export const Description = styled.Text`
  color:#6c6c80;
  font-size: 16px;
  margin-top: 4px;
  font-family: 'Roboto_400Regular';
`;
export const TouchbaleIcon = styled.TouchableOpacity``;
export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;
export const MapMarkerContainer = styled.View`
  width: 90px;
  height: 70px;
  background-color: #34CB79;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  align-items: center
`;
export const MapMarkerImage = styled.Image`
  width: 90px;
  height: 45px;
`;
export const MapMarkerTitle = styled.Text`
  flex: 1;
  font-family: 'Roboto_400Regular';
  color: #FFF;
  font-size: 13px;
  line-height: 23px;
`;
export const ItemsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 32px;
`;
export const Item = styled.TouchableOpacity`
  background-color: #fff;
  border-width: 2px;
  border-color: #eee;
  height: 120px;
  width: 120px;
  border-radius: 8px;
  padding: 16px;
  padding-top: 20px;
  padding-bottom: 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;

  text-align: center;
`;
export const ItemTitle = styled.Text`
  font-family: 'Roboto_400Regular';
  text-align: center;
  font-size: 13px;
`;
export  const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80, 
  },
})