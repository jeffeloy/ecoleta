import React, {useState, useEffect} from "react";
import { Feather as Icon } from "@expo/vector-icons";
import axios from "axios";

import {
  Container,
  Logo,
  Main,
  Description,
  Title,
  Footer,
  ButtonIcon,
  ButtonText,
  PickersView,
  Picker,
  styles,
} from "./styles";

import { RectButton } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

interface IBGEUFResponse {
  sigla: string;
}
interface IBGECityResponse {
  nome: string;
}
const Home = () => {
  const navigation = useNavigation();
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  function handleNavigationToPoints() {
    navigation.navigate("Points", {
      uf: selectedUf,
      city: selectedCity
    });
  }
  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityName = response.data.map((city) => city.nome);
        setCities(cityName);
      });
  }, [selectedUf]);

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
        <PickersView>
          <Picker
            selectedValue={selectedUf}
            onValueChange={(itemValue, itemIndex) => setSelectedUf(itemValue)}
          >
            <Picker.Item label="Selecione o estado..." value="0"/>
            {ufs.map(uf => (
              <Picker.Item key={uf} label={uf} value={uf} />
            ))}
          </Picker>
          <Picker
            selectedValue={selectedCity}
            onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
          >
            <Picker.Item label="Selecione a cidade..." value="0"/>
            {cities.map(city => (
              <Picker.Item key={city} label={city} value={city} />
            ))}
          </Picker>
        </PickersView>
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
