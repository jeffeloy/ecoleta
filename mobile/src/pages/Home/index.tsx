import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import {
  Container,
  Logo,
  Main,
  Description,
  Title,
  Footer,
  ButtonIcon,
  ButtonText,
  styles,
} from "./styles";

import { RectButton } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  function handleNavigationToPoints() {
    navigation.navigate("Points");
  }

  return (
    <Container
      source={require("../../assets/home-background.png")}
      imageStyle={{ width: 274, height: 360 }}
    >
      <Main>
        <Logo source={require("../../assets/logo.png")} />
        <Title>Seu marketplace de coleta de resíduos</Title>
        <Description>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Description>
      </Main>

      <Footer>
        <RectButton style={styles.button} onPress={handleNavigationToPoints}>
          <ButtonIcon>
            <Icon name="arrow-right" color="#FFF" size={24} />
          </ButtonIcon>
          <ButtonText>Entrar</ButtonText>
        </RectButton>
      </Footer>
    </Container>
  );
};

export default Home;
