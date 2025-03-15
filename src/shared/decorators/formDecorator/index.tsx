import { type FC, ReactNode } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface FormDecoratorProps {
  children?: ReactNode;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const FormDecorator: FC<FormDecoratorProps> = ({ children, onScroll }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAwareScrollView
        onScroll={onScroll}
        enableOnAndroid={true}
        extraScrollHeight={30}
        extraHeight={30}
        keyboardOpeningTime={10}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.container}
      >
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flexGrow: 1,
  },
});

export { FormDecorator };