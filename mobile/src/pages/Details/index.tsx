import React, {useEffect, useState} from "react";
import * as MailComposer from 'expo-mail-composer';
import { Feather as Icon, FontAwesome} from "@expo/vector-icons";

import { RectButton } from "react-native-gesture-handler";
import {Linking} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";

import { Container, TouchbaleIcon, PointImage, PointName, PointItens, Address, AddressTitle, AddressContent, Footer, ButtonText, SafeAreaView, styles} from "./styles";
import api from "../../services/api";

interface Params {
  point_id: number;
}

interface Data {
  point: {
    image: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title:string;
  }[];
}

const Details = () => {
  const [data, setData] = useState<Data>({} as Data);
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    api.get(`points/${routeParams.point_id}`).then(response => {
      setData(response.data);
    });
  },[])
  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Tenho interesse sobre coleta de resíduos`);
  }

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: "Interesse na coleta de resíduos",
      recipients: [data.point.email],
    })
  }

  if(!data.point) {
    return null;
  }

  return (
    <SafeAreaView>
    <Container>
       <TouchbaleIcon onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79"/>
        </TouchbaleIcon>

        <PointImage source={{ uri: data.point.image}} resizeMode="cover"/>

        <PointName>{data.point.name}</PointName>
        <PointItens>
          {data.items.map(item => item.title).join(',')}
        </PointItens>

        <Address>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>{data.point.city}/ {data.point.uf}</AddressContent>
        </Address>
    </Container>
    
    <Footer>
      <RectButton style={styles.button} onPress={handleWhatsapp}>          
        <FontAwesome name="whatsapp" color="#FFF" size={20} />
        <ButtonText>Whatsapp</ButtonText>
      </RectButton>
      <RectButton style={styles.button} onPress={handleComposeMail}>          
        <Icon name="mail" color="#FFF" size={20} />
        <ButtonText>E-mail</ButtonText>
      </RectButton>
    </Footer>
    </SafeAreaView>
  );
};

export default Details;
