import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging4170442Navigator from '../features/Messaging4170442/navigator';
import NotificationList5170441Navigator from '../features/NotificationList5170441/navigator';
import BlankScreen0170439Navigator from '../features/BlankScreen0170439/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
