import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
const TransportIcons = () => {
  return (
    <>
    <View className="flex flex-row justify-around items-center p-4 bg-transparent rounded-lg shadow-md">
      <View className="flex flex-col items-center">
        <Icon name="two-wheeler" size={30} color="#fff" />
        <Text className="text-xs mt-1 text-white">Bike</Text>
      </View>
      <View className="flex flex-col items-center">
        <Icon name="directions-car" size={30} color="#fff" />
        <Text className="text-xs mt-1 text-white">Car</Text>
      </View>
      <View className="flex flex-col items-center">
        <Icon name="ac-unit" size={30} color="#fff" />
        <Text className="text-xs mt-1 text-white">AC Car</Text>
      </View>
      <View className="flex flex-col items-center">
        <Icon name="local-taxi" size={30} color="#fff" />
        <Text className="text-xs mt-1 text-white">Auto</Text>
      </View>
    </View>



</>
  );
};

export default TransportIcons;
