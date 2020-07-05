import React from "react";
import { Feather as Icon} from "@expo/vector-icons";
import { 
  Container, 
  Title, 
  Description, 
  TouchbaleIcon, 
  MapContainer, 
  ItemsContainer, 
  Item, 
  ItemTitle,
  styles} from "./styles";
import {ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, {Marker} from "react-native-maps";
import Emoji from "react-native-emoji";
import {SvgUri} from "react-native-svg";

const Points = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <>
      <Container>
        <TouchbaleIcon onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79"/>
        </TouchbaleIcon>

        <Title>
        <Emoji name="smile" style={{fontSize: 20}}/>
          Bem vindo.
        </Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>

        <MapContainer>
          <MapView 
            style={styles.map}
            initialRegion={{
              latitude: -12.9545284,
              longitude: -38.6335703,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >

          </MapView>
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20 }}
        >
          <Item onPress={() =>{}}>
            <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>
          <Item onPress={() =>{}}>
            <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>
          <Item onPress={() =>{}}>
            <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>
          <Item onPress={() =>{}}>
            <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>
          <Item onPress={() =>{}}>
            <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>
          <Item onPress={() =>{}}>
            <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
            <ItemTitle>Lâmpadas</ItemTitle>
          </Item>
        </ScrollView>
      </ItemsContainer>

    
    </>
  );
};

export default Points;
