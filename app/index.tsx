import React, { useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TransportIcons from "../components/TranportIcons";
import { Searchbar , TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export default function App() {
  const [search , setSearch] = useState('')
  return (



    <>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 mt-2">
          <MapView style={styles.map} />

          <ScrollView className="bg-[#212530]">

          

          <View className="h-[40%]">

            {/* Transport icons shows */}

            <View className="mt-4">
              <TransportIcons/>
            </View>

            {/* user address shown */}

            <View className="mt-8 mx-6">

              <Text className="text-white text-lg">Shah faisal colony karachi</Text>

            </View>


            {/* input fields */}

            <View className="mt-5">

              
            <Searchbar
      placeholder="TO"
      onChangeText={setSearch}
      value={search}
      placeholderTextColor={'white'}
      iconColor="white" 
      inputStyle={{color:'white'}}
      style={{marginHorizontal:12 , borderRadius:8 , backgroundColor:'#495057'}}
    
      

    />



<Searchbar
      placeholder='PKR Offer your fare'
      onChangeText={setSearch}
      value={search}
      placeholderTextColor={'white'}
      icon={'pencil'} 
      iconColor="white"
      inputStyle={{color:'white'}}
      style={{marginHorizontal:12 , borderRadius:8 , backgroundColor:'#495057' , marginTop:12}}
      keyboardType="numeric"
      

    />






      
{/* <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="pencil" />}
    /> */}



            </View>


            <View>
            <Button mode="contained" textColor="black" style={{marginHorizontal:70 , borderRadius:8 , backgroundColor:'#89fc00' , marginTop:12 }} onPress={() => console.log('Pressed')} >
   Find a driver
  </Button>
            </View>


          </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "60%",
  },
  icon: {
    marginRight: 10,
  },
});
