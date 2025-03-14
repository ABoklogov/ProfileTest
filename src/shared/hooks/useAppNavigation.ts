import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export const useAppNavigation: () => NavigationProp<ParamListBase> = useNavigation;