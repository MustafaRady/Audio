import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import OverView from './components/OverView';
import Featured from './components/Featured';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#0ACF83',
  },
  title: {
    fontSize: 26,
    marginBottom: 28,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
  selectedComponent: {
    marginTop: 16,
  },
  buttonGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 25,
  },
});

const ItemOverview = ({ route, navigation }) => {
  const COMPONENT = {
    OverView: <OverView item={route.params.item} navigation={navigation} />,
    Featured: <Featured item={route.params.item} />,
  };

  const [selectedComponent, setSelectedComponent] = useState('OverView');

  const handleOnPress = (name) => {
    setSelectedComponent(name);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.price}>USD {route.params.item.price}</Text>
        <Text style={styles.title}>{route.params.item.title}</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonGroup}>
            <Text style={styles.button} onPress={() => handleOnPress('OverView')}>
              OverView
            </Text>
          </View>

          {/* Featured */}
          <View style={styles.buttonGroup}>
            <Text style={styles.button} onPress={() => handleOnPress('Featured')}>
              Featured
            </Text>
          </View>

          {/* Specifications */}
          <View style={styles.buttonGroup}>
            <Text style={styles.button} onPress={() => handleOnPress('Specifications')}>
              Specifications
            </Text>
          </View>
        </View>

        {COMPONENT[selectedComponent]}
      </View>
    </ScrollView>
  );
};

export default ItemOverview;
