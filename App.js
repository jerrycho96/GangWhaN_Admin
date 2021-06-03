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
            headerTitle: '계정 찾기',
          }}
        />
        <Stack.Screen
          name="FindId"
          component={FindId}
          options={{headerTitle: '아이디 찾기'}}
        />
        <Stack.Screen
          name="FindIdPhone"
          component={FindIdPhone}
          options={{headerTitle: '아이디 찾기'}}
        />
        <Stack.Screen
          name="FindIdResult"
          component={FindIdResult}
          options={{headerTitle: '아이디 찾기'}}
        />
        <Stack.Screen
          name="FindPass"
          component={FindPass}
          options={{headerTitle: '비밀번호 찾기'}}
        />
        <Stack.Screen
          name="FindPassPhone"
          component={FindPassPhone}
          options={{headerTitle: '비밀번호 찾기'}}
        />
        <Stack.Screen
          name="FindPassReset"
          component={FindPassReset}
          options={{headerTitle: '비밀번호 찾기'}}
        />
        <Stack.Screen
          name="SelectShopHome"
          component={SelectShopHome}
          options={{headerTitle: '매장 선택'}}
        />
        <Stack.Screen
          name="AddShop"
          component={AddShop}
          options={{headerTitle: '매장 추가'}}
        />
        <Stack.Screen
          name="RegisterInput"
          component={RegisterInput}
          options={{headerTitle: '회원가입'}}
        />
        <Stack.Screen
          name="OrderDelDetail"
          component={OrderDelDetail}
          options={{
            headerTitle: '주문 상세 정보',
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
            headerTitle: '주문 상세 정보',
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
            headerTitle: '주문 상세 정보',
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
            headerTitle: '주문 상세 정보',
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
            headerTitle: '주문 상세 정보',
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
            headerTitle: '주문 상세 정보',
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
            headerTitle: '주문 상세 정보',
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
            headerTitle: '주문 상세 정보',
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
            headerTitle: '주문 상세 정보',
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
          options={{headerTitle: '설정'}}
        />
        <Stack.Screen
          name="UpdateShopInfo"
          component={UpdateShopInfo}
          options={{headerTitle: '매장 정보 설정'}}
        />
        <Stack.Screen
          name="MenuSetting"
          component={MenuSetting}
          options={{headerTitle: '메뉴 설정'}}
        />
        <Stack.Screen
          name="AddMenu"
          component={AddMenu}
          options={{headerTitle: '메뉴 등록'}}
        />
        <Stack.Screen
          name="UpdateMenu"
          component={UpdateMenu}
          options={{headerTitle: '메뉴 수정'}}
        />
        <Stack.Screen
          name="ItemCategoryUpdate"
          component={ItemCategoryUpdate}
          options={{headerTitle: '분류 관리'}}
        />
        <Stack.Screen
          name="ItemOptioinUpdate"
          component={ItemOptioinUpdate}
          options={{headerTitle: '옵션 분류 관리'}}
        />
        <Stack.Screen
          name="OpenClosedSetting"
          component={OpenClosedSetting}
          options={{headerTitle: '영업/휴무 관리'}}
        />
        <Stack.Screen
          name="BelongRider"
          component={BelongRider}
          options={{headerTitle: '소속 라이더 지정'}}
        />
        <Stack.Screen
          name="Coupon"
          component={Coupon}
          options={{headerTitle: '쿠폰 관리'}}
        />
        <Stack.Screen
          name="Review"
          component={Review}
          options={{headerTitle: '리뷰 관리'}}
        />
        <Stack.Screen
          name="AdjustMentList"
          component={AdjustMentList}
          options={{headerTitle: '정산 현황'}}
        />
        <Stack.Screen
          name="CumulativeList"
          component={CumulativeList}
          options={{headerTitle: '누적 현황'}}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{headerTitle: '공지사항'}}
        />
        <Stack.Screen
          name="NoticeView"
          component={NoticeView}
          options={{
            headerTitle: '공지사항',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('Notice');
                }}>
                <Text style={{marginRight: 15, fontSize: 16}}>목록</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
