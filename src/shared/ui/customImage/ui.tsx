import React, { type FC, useEffect, useMemo, useState } from 'react';
import { View, Image, useWindowDimensions, Platform } from 'react-native';
import { styles } from './styles';
import { CustomImageProps, TErrorPicture, TGetSizeImage } from './types';
import { CameraIcon } from '@/shared/icons';

const CustomImage: FC<CustomImageProps> = ({ 
  picture, 
  width, 
  height,
  url = '',
  styleContainer,
  naturalSize = true,
}) => {
  const [notImage, setNotImage] = useState(false);
  const [isLoadImage, setIsLoadImage] = useState(false);
  const [imageSize, setImageSize] = useState({ width, height });
  const { scale } = useWindowDimensions();

  useEffect(() => {
    return () => setIsLoadImage(false);
  }, []);

  useEffect(() => {
    if (!picture) setNotImage(true);
  }, [picture]);

  const sizesImage = useMemo(() => {
    let photoWidth = width;
    let photoHeight = height;
    
    if (naturalSize) {
      if (imageSize.width > photoWidth || imageSize.height > photoHeight) {
        if (imageSize.width > imageSize.height) {
          const ratio = imageSize.height / imageSize.width;
          photoHeight = photoWidth * ratio;
        } else if (imageSize.width < imageSize.height) {
          const ratio = imageSize.width / imageSize.height;
          photoWidth = photoHeight * ratio;
        };
      } else {
        photoWidth = imageSize.width;
        photoHeight = imageSize.height;
      };
    };

    return {
      width: photoWidth,
      height: photoHeight
    };
  }, [imageSize]);

  const errorPicture: TErrorPicture = ({ nativeEvent: { error } }) => {
    console.log(error);
    setNotImage(true);
  };

  const getSizeImage: TGetSizeImage = ({ nativeEvent: { source: { width, height } } }) => {
    if (Platform.OS === 'ios') {
      setImageSize({ 
        width: width * scale, 
        height: height * scale
      });
    } else {
      setImageSize({ width, height });
    };
    setIsLoadImage(true);
  };
  
  return (
    <View style={{ 
      ...styles.container, 
      ...styleContainer, 
      width, 
      height 
    }}>
      {!notImage ? (
        <Image 
          style={[sizesImage, {opacity: isLoadImage ? 1 : 0}]}
          source={{ uri: `${url}/${picture}` }}
          onLoad={getSizeImage}
          onError={errorPicture}
        />
      ) : (
        <CameraIcon />
      )}
    </View>
  )
};

export { CustomImage };