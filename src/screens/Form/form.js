import {View, TextInput, Pressable, Image} from 'react-native';
import {useState, useEffect} from 'react';
import {API_USER} from '../../helpers/api';

export default function Form(props) {
   const {navigation: nav, route} = props;
   const edit = route.params?.edit;
   const [name, setName] = useState("");
   const [address, setAddress] = useState("");
   const [phone, setPhone] = useState("");
   const [status, setStatus] = useState("");
   const [img, setImg] = useState("");

    useEffect(() => {
        if (edit) {
            setName(edit.name);
            setAddress(edit.address);
            setPhone(edit.phone);
            setStatus(edit.status);
            setImg(edit.img);
        }
    }, [edit?.id]);

    const onSave = () => {
        const newObj = {
                        name, 
                        address, 
                        phone, 
                        status, 
                        img
                      };
               fetch(
                !edit ? 
                API_USER 
              : `${API_USER}/${edit.id}`
              ,
            {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}, 
            method: 
            !edit ? 
            'POST' 
            : 'PUT'
            , 
            body: JSON.stringify(newObj)});
    };

    return (
      <View style={{alignSelf: "center", marginTop: 100}}>
      <TextInput placeholder="Name" 
        onChangeText={(text) => setName(text)} 
        value={name} style={{
        borderRadius: 5, 
        borderWidth: 1, 
        width: 250, 
        alignSelf: "center", 
        padding: 10, 
        marginTop: 10
      }}/>
      <TextInput placeholder="Address" 
        onChangeText={(text) => setAddress(text)} 
        value={address} style={{
        borderRadius: 5, 
        borderWidth: 1, 
        width: 250, 
        alignSelf: "center", 
        padding: 10, 
        marginTop: 10
      }}/>
      <TextInput placeholder="Phone" 
        keyboardType="numeric" 
        onChangeText={(text) => setPhone(text)} 
        value={phone} style={{
        borderRadius: 5, 
        borderWidth: 1, 
        width: 250, 
        alignSelf: "center", 
        padding: 10, 
        marginTop: 10
      }}/>
      <TextInput placeholder="Image" 
        onChangeText={(text) => setImg(text)} 
        value={img} style={{
        borderRadius: 5, 
        borderWidth: 1, 
        width: 250, 
        alignSelf: "center", 
        padding: 10, 
        marginTop: 10
      }}/>
      <TextInput placeholder="Status" 
        onChangeText={(text) => setStatus(text)} 
        value={status} style={{
        borderRadius: 5, 
        borderWidth: 1, 
        width: 250, 
        alignSelf: "center", 
        padding: 10, 
        marginTop: 10
      }}/>
      <View style={{marginLeft: 50, flexDirection: "row", justifyContent: "space-around", width: "80%"}}>
            <Pressable onPress={nav.goBack()}>
                <Image style={{width: 35, height: 35, margin: 5}} 
                  source={{ uri:"https://cdn-icons-png.flaticon.com/128/2140/2140664.png"}}/>
            </Pressable>
            <Pressable onPress={()=> onSave()}>
                <Image style={{width: 35, height: 35, margin: 5}} 
                  source={{ uri:"https://cdn-icons-png.flaticon.com/128/3979/3979387.png"}}/>
            </Pressable>
      </View>
    </View>
    );
};

 