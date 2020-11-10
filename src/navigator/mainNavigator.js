import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp22170444Navigator from '../features/SignUp22170444/navigator';
import Dashboard23170443Navigator from '../features/Dashboard23170443/navigator';
import Messaging4170442Navigator from '../features/Messaging4170442/navigator';
import NotificationList5170441Navigator from '../features/NotificationList5170441/navigator';
import BlankScreen0170439Navigator from '../features/BlankScreen0170439/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp22170444: { screen: SignUp22170444Navigator },
Dashboard23170443: { screen: Dashboard23170443Navigator },
Messaging4170442: { screen: Messaging4170442Navigator },
NotificationList5170441: { screen: NotificationList5170441Navigator },
BlankScreen0170439: { screen: BlankScreen0170439Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
