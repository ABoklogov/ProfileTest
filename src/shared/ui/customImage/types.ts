import { 
  ViewStyle, 
  ImageLoadEventData, 
  NativeSyntheticEvent, 
  ImageErrorEventData 
} from 'react-native';

interface CustomImageProps {
  picture: string;
  width: number;
  height: number;
  defaultWidth?: number;
  defaultHeight?: number;
  url?: string;
  linkNotImage?: string;
  styleContainer?: ViewStyle;
  naturalSize?: boolean;
};
type TGetSizeImage = (event: NativeSyntheticEvent<ImageLoadEventData>) => void;
type TErrorPicture = (event: NativeSyntheticEvent<ImageErrorEventData>) => void;

export type {
  CustomImageProps,
  TGetSizeImage,
  TErrorPicture,
};