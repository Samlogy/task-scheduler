import React, {useState, useEffect} from "react";
import { StyleSheet, View, Image, Button } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

import { Input, CustomButton } from '../components';
import { editProfileSchema } from "../validation";
import { globalStyles } from "../styles";

const EditProfil = () => {
  const [image, setImage] = React.useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(editProfileSchema) 
  });

  // get pemissions
  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestPermissionsAsync();

    setCameraPermission(cameraPermission.status === 'granted');

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === 'granted');

    if (
      imagePermission.status !== 'granted' &&
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null).catch(err => console.log('error: ', err));
      console.log(data.uri);
      setImage(data.uri);
    }
  };

  const onEdit = data => {
      console.log(data);
  };
  const onLoad = () => {
    console.log("load data from api");
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  return (
    <View style={globalStyles.container}>
      {/* display img */}
      { image && <Image source={{ uri: image }} style={style.avatar} /> }
      {/* take picture (camera) */}
      <View style={style.cameraContainer}>
        <Camera ref={(ref) => setCamera(ref)}
          style={style.fixedRatio} type={type} ratio={'1:1'}
        />
      </View>
      <Button title="Library" onPress={pickImage} />
      <Button title="Camera" onPress={takePicture} />
      
      {/* <Controller control={control} name="fullName" defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Full Name" error={errors.fullName?.message} />
        )}
      />

      <Controller control={control} name="email" defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Email" error={errors.email?.message} />
        )}
      />

      <Controller control={control} name="phone" defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Phone" error={errors.phone?.message} />
        )}
      />

      <CustomButton text="Edit" variant="filled" onPress={handleSubmit(onEdit)} /> */}
    </View>
  );
};

const style = StyleSheet.create({
  avatar: {
    height: 125, 
    width: 125, 
    borderRadius: 25,
    marginBottom: 26,
    marginHorizontal: 120
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
})

export default EditProfil;