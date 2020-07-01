import React from "react";
import { Feather as Icon} from "@expo/vector-icons";
import { Container, Title, Description, TouchbaleIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";


const Points = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <TouchbaleIcon onPress={handleNavigateBack}>
        <Icon name="arrow-left" size={20} color="#34cb79"/>
      </TouchbaleIcon>

      <Title>Bem vindo.</Title>
      <Description>Encontre no mapa um ponto de coleta.</Description>
    </Container>
  );
};
export default Points;
