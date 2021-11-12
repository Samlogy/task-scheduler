import React, {useState, useEffect} from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

import { Input, CustomButton } from '../components';
import { editProfileSchema } from "../validation";
import { globalStyles } from "../styles";

const EditProfil = () => {
  const [image, setImage] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [showPopup, setShowPopup] = useState(false);
  const [showCamera, setShowCamera] = useState(false);


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

  const choosePhotoFromLibrary = async () => {
    // ask for permission if true continue else return

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setShowPopup(false);
    }
  };
  const takePhotoFromCamera = async () => {
    setShowCamera(true)
    setShowPopup(false);
    // ask for permission if true continue else return
    // show full screen camera + button (take picture )
    // once picture taken --> hide full screen camera + new setImage
    // if (camera) {
    //   const data = await camera.takePictureAsync(null).catch(err => console.log('error: ', err));
    //   console.log(data.uri);
    //   setImage(data.uri);
    //   setShowPopup(false);
    // }
  };

  const onEdit = data => {
      console.log(data);
  };
  const onLoad = () => {
    console.log("load data from api");
  };

  useEffect(() => {
    // permisionFunction();
    onLoad();
  }, []);

  const BottomModal = ({ takePhotoFromCamera, choosePhotoFromLibrary, setShowPopup }) => (
    <View style={{ elevation: 10 }}>
      <View style={style.header}>
        <View style={style.panelHeader}>
          <View style={style.panelHandle} />
        </View>
      </View>

      <View style={style.panel}>
        <View style={{alignItems: 'center'}}>
          <Text style={style.panelTitle}> Upload Photo </Text>
          <Text style={style.panelSubtitle}> Choose Your Profile Picture </Text>
        </View>

        <CustomButton text="Take a Picture" variant="filled" onPress={takePhotoFromCamera} />
        <CustomButton text="Choose From Library" variant="filled" onPress={choosePhotoFromLibrary} />
        <CustomButton text="Cancel" variant="ghost" onPress={() => setShowPopup(false)} />
      </View>
    </View>
  );


  return (
    <View style={globalStyles.container}>
      <TouchableOpacity onPress={() => setShowPopup(true)}>
        { image ? <Image source={{ uri: image }} style={style.avatar} /> : <Image source={require('../assets/aa.png')} style={style.avatar} /> }
      </TouchableOpacity>
          
      {/* take picture (camera) */}
      { showCamera &&
        <View style={style.cameraContainer}>
          <Camera ref={(ref) => setCamera(ref)} style={style.fixedRatio} type={type} ratio={'1:1'} />
        </View>
      }
      { showPopup && <BottomModal takePhotoFromCamera={takePhotoFromCamera} choosePhotoFromLibrary={choosePhotoFromLibrary} setShowPopup={setShowPopup} /> }
      
      
      <Controller control={control} name="fullName" defaultValue=""
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

      <CustomButton text="Edit" variant="filled" onPress={handleSubmit(onEdit)} />
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
    zIndex: 500
  },
  fixedRatio: {
    flex: 1,
    zIndex: 500,
    aspectRatio: 1,
  },
  panel: {
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
})

export default EditProfil;