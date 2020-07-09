import React, {useState, useEffect} from "react";
import { Feather as Icon} from "@expo/vector-icons";
import * as Location from "expo-location";

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
import {ScrollView, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, {Marker} from "react-native-maps";
import Emoji from "react-native-emoji";
import {SvgUri} from "react-native-svg";
import api from "../../services/api";

interface Item {
  id: number;
  title: string;
  image_url: string;
}
interface Point {
  id: number;
  name: string;
  image: string;
  latitude: number;
  longitude: number;
}

const Points = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [initialPosition, setInitialPosition] = useState<[number,number]>([0,0]);

  const navigation = useNavigation();

  useEffect(()=>{
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if(status !== 'granted') {
        Alert.alert('Ooops...', 'Precisamos de sua permissão para obter a localização');
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      
      const { latitude, longitude } = location.coords;

      setInitialPosition([
        latitude,
        longitude
      ]);
    } 
    loadPosition();
  },[]);

  useEffect(()=>{
    api.get("/items").then(response => {
      setItems(response.data);
    });
  },[]);

  useEffect(() => {
    api.get('points', {
      params: {
        city: 'Vera Cruz',
        uf: 'BA',
        items: [6]
      }
    }).then(response => {
      setPoints(response.data);
    });
  },[]);

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail() {
    navigation.navigate('Details');
  }

  function handleSelectedItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
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
          { initialPosition[0] !== 0 && (
            <MapView 
            style={styles.map}
            loadingEnabled={initialPosition[0] === 0}
            initialRegion={{
              latitude: initialPosition[0],
              longitude: initialPosition[1],
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            
            {points.map(point => (
              <Marker 
              key={String(point.id)}
              style={styles.mapMarker}
              onPress={handleNavigateToDetail}  
              coordinate={{
                latitude: point.latitude, 
                longitude: point.longitude,}}
            >
              <MapMarkerContainer>
                <MapMarkerImage source={{ uri: point.image }} resizeMode="cover"/>
                <MapMarkerTitle>{point.name}</MapMarkerTitle> 
              </MapMarkerContainer>  
            </Marker>
            ))}
          </MapView>
          )}
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20 }}
        >
          {items.map(item => (
            <Item 
              key={String(item.id)} 
              onPress={() =>handleSelectedItem(item.id)}
              activeOpacity={0.6}
              style={
                selectedItems.includes(item.id) ? styles.selectedItem : {}
              }
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
          
        </ScrollView>
      </ItemsContainer>

    
    </>
  );
};

export default Points;
