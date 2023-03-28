import { Camera, CameraResultType, CameraDirection } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    // Aca estamos utilizando un enum de CameraResultType
    resultType: CameraResultType.Uri,
    direction: CameraDirection.Front
  });
};
