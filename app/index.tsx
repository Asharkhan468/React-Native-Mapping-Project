import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View , SafeAreaView  } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
   

    
    <View className='flex-1'>
  <SafeAreaProvider>
<SafeAreaView>
      <MapView style={styles.map} />
     </SafeAreaView>
    </SafeAreaProvider>
    </View>


      
    


    
    
   
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '60%',
  },
});