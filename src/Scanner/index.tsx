import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';

const Scanner: React.FC = () => {
  // Camera and Scanner settings
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {
      checkInverted: true,
    },
  );

  const requestPermissions = async () => {
    const status = await Camera.requestCameraPermission();
    setHasPermission(status === 'authorized');
  };

  // Navigation settings
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      requestPermissions();
    }
  }, [isFocused]);

  // Logic
  const [scannedData, setScannedData] = useState(barcodes);

  const handleResult = useCallback(() => {
    const {content} = scannedData[0];
    navigation.navigate('ResultPage', {value: content.data});
  }, [scannedData, navigation]);

  useEffect(() => {
    if (scannedData.length !== 0) {
      handleResult();
    }
  }, [handleResult, scannedData.length]);

  useEffect(() => {
    setScannedData(barcodes);
  }, [barcodes]);

  return device != null && hasPermission ? (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      frameProcessorFps={5}
    />
  ) : null;
};

export default Scanner;
