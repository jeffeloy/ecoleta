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
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
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

  function handleNavigateToDetail() {
    navigation.navigate('Details');
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

            <Marker 
              style={styles.mapMarker}
              onPress={handleNavigateToDetail}  
              coordinate={{
                latitude: -12.9545284, 
                longitude: -38.6335703,}}
            >
              <MapMarkerContainer>
                <MapMarkerImage source={{ uri:'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80' }} resizeMode="cover"/>
                <MapMarkerTitle>Mercado</MapMarkerTitle> 
              </MapMarkerContainer>  
            </Marker>
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
