import React, { type FC } from 'react';
import { Text } from 'react-native';

const CreateProfileScreen: FC = () => {

  return (
    <Text>CreateProfileScreen</Text>
    // <Page 
    //   isLoading={isLoading}
    //   themeLoading='white'
    //   isAuth={true}
    // >
    //   {Platform.OS === 'android' ? (
    //     <ScannerAndroid>
    //       {product && (
    //         <CardProduct 
    //           product={product}
    //           absoluteButton={false}
    //           calculate={calculate}
    //         />
    //       )}
    //     </ScannerAndroid>
    //   ) : (
    //     <ScannerIos>
    //       {product && (
    //         <CardProduct 
    //           product={product}
    //           absoluteButton={false}
    //           calculate={calculate}
    //         />
    //       )}
    //     </ScannerIos>
    //   )}
    // </Page>
  );
};

export { CreateProfileScreen };