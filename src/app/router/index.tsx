import React, { type FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREEN_MAIN } from "@/shared/constants";
import { HomeStackParamList } from "@/shared/types";
import { ProfileScreen } from "@/pages/ProfileScreen";
import { CreateProfileScreen } from "@/pages/CreateProfileScreen";

const HomeScreen = createStackNavigator<HomeStackParamList>();

const Routing: FC = () => {

  

  return (
    <HomeScreen.Navigator
      screenOptions={{ headerShown: false }}>
      <HomeScreen.Screen
        name={SCREEN_MAIN.CREATE_PROFILE}
        component={CreateProfileScreen}
        // options={{
        //   headerLeft: () => null,
        //   headerRight: () => <ButtonSearch onPress={goToSearch}/>,
        //   headerRightContainerStyle: {
        //     paddingRight: 16,
        //   },
        // }}
      />
    
      <HomeScreen.Screen
        name={SCREEN_MAIN.PROFILE}
        component={ProfileScreen}
        // options={{
        //   headerTitle: () => null,
        //   headerRight: () => <ButtonSearch onPress={goToSearch}/>,
        //   headerRightContainerStyle: {
        //     paddingRight: 16
        //   },
        // }}
      />
    </HomeScreen.Navigator>
  );
};

export { Routing };