import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TransportIcons from "../components/TranportIcons";
import { Searchbar, TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import * as Location from "expo-location";

export default function App() {
  const [search, setSearch] = useState("");

  const [location, setLocation] = useState<null | any>(null);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  // Acess user permission

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, [search]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  // Search place


  const searchPlace = () =>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'fsq38dh3tMz1m/4CyTW+0DV1WwvM5AGJPQZx0ZYmd+5v4es='
      }
    };
    
    fetch(`https://api.foursquare.com/v3/places/search?query=${search}&ll=24.8828134%2C67.1468337`, options)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 mt-2">
          <View className="flex items-center justify-center p-[20]">
            <Text style={styles.paragraph}>{text}</Text>
          </View>

         {location && <MapView
            style={styles.map}
            initialRegion={{
              longitude: location.coords.longitude,
              latitude: location.coords.latitude,
              longitudeDelta: 0.001,
              latitudeDelta: 0.001,
            }}
          >

<Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          ></Marker>
            </MapView>} 

          

          <ScrollView className="bg-[#212530]">
            <View className="h-[40%]">
              {/* Transport icons shows */}

              <View>
                <TransportIcons />
              </View>

              {/* user address shown */}

              <View className="mt-8 mx-6">
                <Text className="text-white text-lg">
                  Shah faisal colony karachi
                </Text>
              </View>

              {/* input fields */}

              <View className="mt-5">
                <Searchbar
                  placeholder="TO"
                  onChangeText={setSearch}
                  value={search}
                  placeholderTextColor={"white"}
                  iconColor="white"
                  inputStyle={{ color: "white" }}
                  style={{
                    marginHorizontal: 12,
                    borderRadius: 8,
                    backgroundColor: "#495057",
                  }}
                />

                <Searchbar
                  placeholder="PKR Offer your fare"
                  onChangeText={setSearch}
                  value={search}
                  placeholderTextColor={"white"}
                  icon={"pencil"}
                  iconColor="white"
                  inputStyle={{ color: "white" }}
                  style={{
                    marginHorizontal: 12,
                    borderRadius: 8,
                    backgroundColor: "#495057",
                    marginTop: 12,
                  }}
                  keyboardType="numeric"
                />

                {/* <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="pencil" />}
    /> */}
              </View>

              <View>
                <Button
                  mode="contained"
                  textColor="black"
                  style={{
                    marginHorizontal: 70,
                    borderRadius: 8,
                    backgroundColor: "#89fc00",
                    marginTop: 12,
                  }}
                  onPress={() => searchPlace()}
                >
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
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
