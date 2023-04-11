import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const handleScanner = () => navigation.navigate('Scanner');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleScanner}>
        <Text>INICIAR O SCANNER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
