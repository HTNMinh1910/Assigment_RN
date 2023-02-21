import {Text, View, Image, Pressable } from 'react-native';

export default function Home(props) {
   const {navigation: nav} = props;
     return (
     <View style={{
         width: "100%",
         marginTop: 50,
         alignItems: "center",
         justifyContent: "center"
       }}>
       <Image style={{ width: 80, height: 80, borderRadius: 30, margin: 5}}
             source={{ uri: "https://cdn-icons-png.flaticon.com/128/668/668276.png"}}></Image>
       <Text style={{fontSize: 30,fontWeight: "600",margin: 5}}>App Store</Text>
       <View style={{justifyContent: 'space-around', flexDirection: 'row', padding: 10, width: "100%"}}>
             <Pressable style={{alignItems: "center"}} onPress={() => nav.navigate('Manager')}>
                 <Image style={{ width: 40, height: 40, borderRadius: 5, margin: 5}}
                     source={{ uri: "https://cdn-icons-png.flaticon.com/128/9546/9546678.png"}}></Image>
                     <Text style={{fontWeight: "600", fontSize: 20}}>Manager</Text>
             </Pressable> 
             <Pressable style={{alignItems: "center"}} onPress={() => nav.navigate('PersonalInfo')}>
                 <Image style={{ width: 40, height: 40, borderRadius: 5, margin: 5}}
                     source={{ uri: "https://cdn-icons-png.flaticon.com/128/4466/4466498.png"}}></Image>
                     <Text style={{fontWeight: "600", fontSize: 20}}>Profile</Text>
             </Pressable>
       </View>
     </View>);
};