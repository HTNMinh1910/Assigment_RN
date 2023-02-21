import { StyleSheet, Text, View, FlatList, Alert, Pressable, Image, Button } from "react-native";
import {useState, useEffect} from 'react';
import {useIsFocused} from "@react-navigation/native";
import { API_USER } from "./src/helpers/api";

export default function Manager(props) {
  const {navigation: nav, route} = props;
  const check = route.params?.check;
  const isFocused = useIsFocused();
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const getUsers = () => {
    fetch(API_USER)
    .then(res => res.json())
    .then(data => {
        setList(data);
        setLoading(false);
    });
  };

  useEffect(() => { 
        getUsers(); 
      }, [isFocused]);

  const onEdit = (editId) => {
    fetch(`${API_USER}/${editId}`)
        .then(res => res.json())
        .then(data => nav.navigate('Form',
        {edit: data}
        ))
  };

  const onDelete = (deleteId) => {
      fetch(`${API_USER}/${deleteId}`, {
          method: 'DELETE'
      }).then(res => getUsers());
  };
  return (
      <View style={styles.container}>
          <Pressable style={{alignItems: "center",alignSelf: "flex-end"}} onPress={()=>nav.navigate('Form')}>
                <Image style={{ width: 35, height: 35, margin: 5}}
                    source={{ uri:"https://cdn-icons-png.flaticon.com/128/5956/5956828.png"}}/>
          </Pressable>
    
          {isLoading ? 
          <Image style={{ width: 35, height: 35, margin: 5}}
                    source={{ uri:"https://cdn-icons-png.flaticon.com/128/7186/7186959.png"}}/>
            :<FlatList
            data={list}
            renderItem={({item}) => 
            <View style={styles.ContainerList}>
              <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 9999, margin: 5}}
                source={{uri: item.img}}/>
            <View>
              <Text style={{color: "black", fontSize: 14}}>Name: {item.name}</Text>
              <Text style={{color: "black", fontSize: 12}}>Address: {item.address}</Text>
              <Text style={{color: "black", fontSize: 12}}>Phone: {item.phone}</Text>
              <Text style={{color: "black", fontSize: 12}}>Status: {item.status==true? "Hoạt động":"Không hoạt động"}</Text>
            </View>
          
              </View>
              <View style={{flexDirection: "column", justifyContent: "space-around", marginVertical: 10, marginLeft: 60}}>
                <Pressable onPress={()=> {Alert.alert("Xác Nhận Xóa", "Bạn chắc chắn muốn xóa: "+item.name, 
                [{text: 'Cancel', onPress: () => {}, style: 'cancel', },
                  {text: 'OK', onPress: () => onDelete(item.id)},])}}>
                  <Image style={{ width: 25, height: 25, margin: 5}}
                    source={{ uri:"https://cdn-icons-png.flaticon.com/128/4442/4442016.png"}}/>
              </Pressable>
              <Pressable onPress={()=> onEdit(item.id)}>
              <Image style={{ width: 25, height: 25, margin: 5}}
                    source={{ uri:"https://cdn-icons-png.flaticon.com/128/420/420140.png"}}/>
              </Pressable>
              </View>
            </View>} keyExtractor={(item) => item.id}/>
            }
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 5,
  },
  text: {
    color: "red",
    fontSize: 40,
  },
  button: {
    marginLeft: 50, 
    backgroundColor: "blue", 
    borderRadius:5, 
    borderWidth: 1, 
    padding: 5
  },
  ContainerList: {
    marginTop: 5, 
    marginLeft:15,
    flexDirection: "row", 
    justifyContent: "space-around",

    width: "90%", 
    borderWidth: 0.5, 
    borderRadius: 10, 
    borderColor: "green", 
    padding: 5,
  },
  input: {
    borderRadius: 5, 
    borderWidth: 1, 
    width: 250, 
    alignSelf: "center", 
    padding: 10, 
    marginTop: 10
  },
});
