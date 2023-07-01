import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./Home";
import AccountPage from "./Account";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Settings" component={AccountPage} />
    </Tab.Navigator>
  );
}
