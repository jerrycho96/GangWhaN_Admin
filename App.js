import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createModalNavigator} from 'react-navigation-native-modal';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  navigate,
  navigationRef,
  resetRoot,
} from './src/navigation/RootNavigation';
import {IconButton, Colors} from 'react-native-paper';

import Login from './src/screens/Login';
import GangwhaSplash from './src/screens/GangwhaSplash';
import FindAccount from './src/screens/FindAccount/FindAccount';
import FindPassPhone from './src/screens/FindAccount/FindPassPhone';
import FindId from './src/screens/FindAccount/FindId';
import FindIdResult from './src/screens/FindAccount/FindIdResult';
import FindIdPhone from './src/screens/FindAccount/FindIdPhone';
import FindPass from './src/screens/FindAccount/FindPass';
import FindPassReset from './src/screens/FindAccount/FindPassReset';
import SelectShopHome from './src/screens/SelectShop/SelectShopHome';
import AddShop from './src/screens/SelectShop/AddShop';
import ShopMain from './src/screens/ShopMain';
import OrderDelDetail from './src/screens/OrderDelDetail';
import TakeOutDelDetail from './src/screens/TakeOutDelDetail';
import ModalTest from './src/screens/ModalTest';
import ReceiptSuccessRider from './src/screens/ReceiptSuccessRider';
import ReceiptSuccess from './src/screens/ReceiptSuccess';
import DeliveryDetail from './src/screens/DeliveryDetail';
import DeliveryTakeOutDetail from './src/screens/DeliveryTakeOutDetail';
import CancelRejectDetail from './src/screens/CancelRejectDetail';
import CancelDetail from './src/screens/CancelDetail';
import SuccessDelivery from './src/screens/SuccessDelivery';
import SettingHome from './src/screens/Settings/SettingHome';
import UpdateShopInfo from './src/screens/Settings/UpdateShopInfo';
import MenuSetting from './src/screens/Settings/MenuSetting';
import AddMenu from './src/screens/Settings/AddMenu';
import UpdateMenu from './src/screens/Settings/UpdateMenu';
import ItemCategoryUpdate from './src/screens/Settings/ItemCategoryUpdate';
import ItemOptioinUpdate from './src/screens/Settings/ItemOptioinUpdate';
import OpenClosedSetting from './src/screens/Settings/OpenClosedSetting';
import BelongRider from './src/screens/Settings/BelongRider';
import Coupon from './src/screens/Settings/Coupon';
import Review from './src/screens/Settings/Review';
import AdjustMentList from './src/screens/Adjustment/AdjustmentList';
import CumulativeList from './src/screens/Adjustment/Cumulative/CumulativeList';
import Notice from './src/screens/Notice/Notice';
import NoticeView from './src/screens/Notice/NoticeView';
import RegisterInput from './src/screens/RegisterInput';

const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    setTimeout(() => {
      resetRoot('Login');
    }, 2000);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          headerBackImage: () => (
            <IconButton
              icon={require('./src/images/headerback.png')}
              color="#000"
              size={18}
              style={{}}
            />
          ),
        }}
        mode="card"
        initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={GangwhaSplash}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="FindAccount"
          component={FindAccount}
          options={{
            headerTitle: '?????? ??????',
          }}
        />
        <Stack.Screen
          name="FindId"
          component={FindId}
          options={{headerTitle: '????????? ??????'}}
        />
        <Stack.Screen
          name="FindIdPhone"
          component={FindIdPhone}
          options={{headerTitle: '????????? ??????'}}
        />
        <Stack.Screen
          name="FindIdResult"
          component={FindIdResult}
          options={{headerTitle: '????????? ??????'}}
        />
        <Stack.Screen
          name="FindPass"
          component={FindPass}
          options={{headerTitle: '???????????? ??????'}}
        />
        <Stack.Screen
          name="FindPassPhone"
          component={FindPassPhone}
          options={{headerTitle: '???????????? ??????'}}
        />
        <Stack.Screen
          name="FindPassReset"
          component={FindPassReset}
          options={{headerTitle: '???????????? ??????'}}
        />
        <Stack.Screen
          name="SelectShopHome"
          component={SelectShopHome}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="AddShop"
          component={AddShop}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="RegisterInput"
          component={RegisterInput}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="OrderDelDetail"
          component={OrderDelDetail}
          options={{
            headerTitle: '?????? ?????? ??????',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('SettingHome');
                }}>
                <Image
                  source={require('./src/images/mainsetting.png')}
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="TakeOutDelDetail"
          component={TakeOutDelDetail}
          options={{
            headerTitle: '?????? ?????? ??????',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('SettingHome');
                }}>
                <Image
                  source={require('./src/images/mainsetting.png')}
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ReceiptSuccessRider"
          component={ReceiptSuccessRider}
          options={{
            headerTitle: '?????? ?????? ??????',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('SettingHome');
                }}>
                <Image
                  source={require('./src/images/mainsetting.png')}
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ReceiptSuccess"
          component={ReceiptSuccess}
          options={{
            headerTitle: '?????? ?????? ??????',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('SettingHome');
                }}>
                <Image
                  source={require('./src/images/mainsetting.png')}
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DeliveryDetail"
          component={DeliveryDetail}
          options={{
            headerTitle: '?????? ?????? ??????',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('SettingHome');
                }}>
                <Image
                  source={require('./src/images/mainsetting.png')}
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DeliveryTakeOutDetail"
          component={DeliveryTakeOutDetail}
          options={{
            headerTitle: '?????? ?????? ??????',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('SettingHome');
                }}>
                <Image
                  source={require('./src/images/mainsetting.png')}
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="CancelRejectDetail"
          component={CancelRejectDetail}
          options={{
            headerTitle: '?????? ?????? ??????',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('SettingHome');
                }}>
                <Image
                  source={require('./src/images/mainsetting.png')}
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="CancelDetail"
          component={CancelDetail}
          options={{
            headerTitle: '?????? ?????? ??????',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('SettingHome');
                }}>
                <Image
                  source={require('./src/images/mainsetting.png')}
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="SuccessDelivery"
          component={SuccessDelivery}
          options={{
            headerTitle: '?????? ?????? ??????',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('SettingHome');
                }}>
                <Image
                  source={require('./src/images/mainsetting.png')}
                  style={{marginRight: 15}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ShopMain"
          component={ShopMain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingHome"
          component={SettingHome}
          options={{headerTitle: '??????'}}
        />
        <Stack.Screen
          name="UpdateShopInfo"
          component={UpdateShopInfo}
          options={{headerTitle: '?????? ?????? ??????'}}
        />
        <Stack.Screen
          name="MenuSetting"
          component={MenuSetting}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="AddMenu"
          component={AddMenu}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="UpdateMenu"
          component={UpdateMenu}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="ItemCategoryUpdate"
          component={ItemCategoryUpdate}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="ItemOptioinUpdate"
          component={ItemOptioinUpdate}
          options={{headerTitle: '?????? ?????? ??????'}}
        />
        <Stack.Screen
          name="OpenClosedSetting"
          component={OpenClosedSetting}
          options={{headerTitle: '??????/?????? ??????'}}
        />
        <Stack.Screen
          name="BelongRider"
          component={BelongRider}
          options={{headerTitle: '?????? ????????? ??????'}}
        />
        <Stack.Screen
          name="Coupon"
          component={Coupon}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="Review"
          component={Review}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="AdjustMentList"
          component={AdjustMentList}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="CumulativeList"
          component={CumulativeList}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="NoticeView"
          component={NoticeView}
          options={{
            headerTitle: '????????????',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('Notice');
                }}>
                <Text style={{marginRight: 15, fontSize: 16}}>??????</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
