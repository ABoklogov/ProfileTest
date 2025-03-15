import React, { type FC } from 'react';
import { Text } from 'react-native';
import { Page } from '@/shared/ui/page';

const CreateProfileScreen: FC = () => {

  return (
    <Page>
      <Text>CreateProfileScreen</Text>
    </Page>
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