import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

const CameraScreen = () => {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Picture data:', photo);
      // You can do something with the photo data, like displaying the image or uploading it.
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1, aspectRatio: 4/3 }} type={Camera.Constants.Type.back}>
        <TouchableOpacity onPress={takePicture} style={{ alignSelf: 'center', margin: 20 }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Take Photo</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default CameraScreen;
