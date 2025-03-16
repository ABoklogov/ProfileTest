import React, { useEffect, type FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_MAIN } from "@/shared/constants";
import { HomeStackParamList } from "@/shared/types";
import { ProfileScreen } from "@/pages/profileScreen";
import { CreateProfileScreen } from "@/pages/createProfileScreen";
import { STYLE_TITLE } from "@/shared/palettes";
import { profileModel } from "@/entities/profile";
import { useAppNavigation } from "@/shared/hooks";

const HomeScreen = createStackNavigator<HomeStackParamList>();

const Routing: FC = () => {
  const navigation = useAppNavigation();
  
  useEffect(() => {
    (async () => {
      const persistedData = await profileModel.getDataProfile();
      if (persistedData) navigation.navigate(SCREEN_MAIN.PROFILE);
    })();
  }, []);
  
  return (
    <HomeScreen.Navigator
      screenOptions={{ 
        headerShown: true 
      }}>
      <HomeScreen.Screen
        name={SCREEN_MAIN.CREATE_PROFILE}
        component={CreateProfileScreen}
        options={{
          title: 'Создать личный профиль',
          headerLeft: () => null,
          headerTitleStyle: {
            ...STYLE_TITLE,
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 44
          }
        }}
      />
    
      <HomeScreen.Screen
        name={SCREEN_MAIN.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeScreen.Navigator>
  );
};

export { Routing };