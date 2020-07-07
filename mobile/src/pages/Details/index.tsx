import React from "react";
import { Feather as Icon, FontAwesome} from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import { Container, TouchbaleIcon, PointImage, PointName, PointItens, Address, AddressTitle, AddressContent, Footer, ButtonText, styles} from "./styles";
const Details = () => {
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

        <PointImage source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80'}} resizeMode="cover"/>

        <PointName>Mercado do Jefferson</PointName>
        <PointItens>Lâmpadas, Óleo de cozinha</PointItens>

        <Address>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>Vera Cruz / BA</AddressContent>
        </Address>
    </Container>
    
    <Footer>
      <RectButton style={styles.button} onPress={() => {}}>          
        <FontAwesome name="whatsapp" color="#FFF" size={24} />
        <ButtonText>Whatsapp</ButtonText>
      </RectButton>
      <RectButton style={styles.button} onPress={() => {}}>          
        <Icon name="mail" color="#FFF" size={24} />
        <ButtonText>E-mail</ButtonText>
      </RectButton>
    </Footer>
    </>
  );
};

export default Details;
