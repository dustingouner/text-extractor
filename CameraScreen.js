// import React, { useRef, useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, SafeAreaView, Button, Image } from 'react-native';
// import { Camera } from 'expo-camera';
// import * as Permissions from 'expo-permissions';
// import {shareAsync} from 'expo-sharing'

// const CameraScreen = () => {
//   const cameraRef = useRef(null);
//   const [hasPermission, setHasPermission] = useState(null);
//   const [hasMediaLibarayPermission, setHasMediaLibraryPermission] = useState()
//   const [photo, setPhoto] = useState()

//   useEffect(() => {
//     (async () => {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA);
//       setHasPermission(status === 'granted');
//       setHasMediaLibraryPermission(mediaLibrary.status === 'granted')
//     })();
//   }, []);

//   if(hasPermission === undefinied) {
//     return <Text>Requesting permissions</Text>
//   } else if(!cameraPermission) {
//     return <Text>Permission for camera not granted</Text>
//   }

//   const takePicture = async () => {
//     let options = {
//       quality:1,
//       base64: true,
//       exif: false,
//     };
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync(options);
//       console.log('Picture data:', photo);
//       // You can do something with the photo data, like displaying the image or uploading it.
//     }
//     if(photo) {
//       let sharePic = () => {

//       }
//       let savePhoto = () => {

//       }
//       return (
//       <SafeAreaView styles={styles.container}>
//         <Image

//       </SafeAreaView>
//         )
//     }
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <Camera ref={cameraRef} style={{ flex: 1, aspectRatio: 4/3 }} type={Camera.Constants.Type.back}>
//         <View style={StyleSheet.buttonContainer}></View>
//         <TouchableOpacity onPress={takePicture} style={{ alignSelf: 'center', margin: 20 }}>
//           <Text style={{ fontSize: 20, color: 'white' }}>Take Photo</Text>
//         </TouchableOpacity>
//       </Camera>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     alignItems:'center',
//     justifyContent
//   }
// })

// export default CameraScreen;
