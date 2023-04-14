import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Avatar() {
  const [avatar, setAvatar] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical:100 }}>
      {/* <TouchableOpacity onPress={pickImage}><Text>Avatar</Text></TouchableOpacity> */}
      <Button title="Choisissez votre Avatar" color='#330855' borderRadius='' onPress={pickImage} />
      <TouchableOpacity onPress={pickImage}>
      {avatar && <Image source={{ uri: avatar }} style={{ width: 150, height: 150, borderRadius:150 }} />}

      </TouchableOpacity>
        
    </View>
  );
}