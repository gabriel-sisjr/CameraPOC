import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const ResultPage: React.FC = (props: any) => {
  const value = props.route.params.value;
  return (
    <View style={styles.container}>
      <Text>VALOR SCANNEADO: {value}</Text>
    </View>
  );
};

export default ResultPage;
