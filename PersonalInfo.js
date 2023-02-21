import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity, Platform} from 'react-native';
import {useState, useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function PersonalInfo(props) {
  const {navigation: nav, route} = props;
   const ShowData = (label, value) => (label + ':' + value);
   const [image, setImage] = useState(null);
   const [name, setName] = useState("");
   const [id, setId] = useState("");

   useEffect(() => {
    async  () => {
      if (Platform.OS !== "web") {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Từ chối truy cập !")
        }
      }
    }
    CheckImage();
  }, []);

   const PickerImage = async() => {
    const result = await  ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    
   };
   const CheckImage = () => {
      if (image == null) {
        setImage("https://cdn-icons-png.flaticon.com/128/2659/2659360.png");
      }
   };

  return (
    <View style={styles.container}>
      <StatusBar translucent={false}/>
      <View style={{marginBottom:30, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
        <TouchableOpacity style={{margin: 15}} onPress={() => nav.navigate("Manager")}>
        <Image style={{ width: 35, height: 35, borderRadius: 50}}
          source={{ uri: "https://cdn-icons-png.flaticon.com/128/9546/9546678.png" }}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{margin: 15}}>
        <Image style={{ width: 35, height: 35, borderRadius: 50}}
          source={{ uri: "https://i.pinimg.com/originals/10/45/8c/10458c3537f992017af59cebebc7cc7a.png" }}></Image>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={PickerImage}>
        <Image style={{ width: 100, height: 100, borderRadius: 50}}
            source={{uri:image}}/>
      </TouchableOpacity>
      <Text style={styles.text}>{ShowData('Name',"Hà Trần Ngọc Minh")}</Text>
      <Text style={styles.text}>{ShowData('Id',"Ph27570")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    // marginLeft: 25,
    marginTop: 5,
   },
});