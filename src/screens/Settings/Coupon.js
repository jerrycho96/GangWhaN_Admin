import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  BtnSubmit,
  FooterBtn,
  IconBtn,
  InputText,
  TitleAndInput,
  Underline1,
  Underline10,
  RowTwoText,
  BtnSubmitIcon,
  BtnSubmitIcon1,
  BlueBorderBtn,
} from '../../components/BOOTSTRAP';
import {OpenTimeManageModal} from '../../components/OpenTimeManageModal';
import {ClosedTimeManageModal} from '../../components/ClosedTimeManageModal';
import {ClosedCalendarPick} from '../../components/ClosedCalendarPick';
import {ModalWeekButton} from '../../components/ModalWeekButton';
import {Checkbox} from 'react-native-paper';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import Modal from 'react-native-modal';

import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';
import {AddCouponModal} from '../../components/AddCouponModal';
import {UpdateCouponModal} from '../../components/UpdateCouponModal';

const couponData = [
  {
    key: 1,
    price: '5,000',
    takeout: '포장/방문',
    minPrice: '17,000',
    date: '2021.02.08 ~ 2021.02.28',
  },
  {
    key: 2,
    price: '5,000',
    takeout: '포장/방문',
    minPrice: '17,000',
    date: '2021.02.08 ~ 2021.02.28',
  },
  {
    key: 3,
    price: '5,000',
    takeout: '포장/방문',
    minPrice: '17,000',
    date: '2021.02.08 ~ 2021.02.28',
  },
  {
    key: 4,
    price: '5,000',
    takeout: '포장/방문',
    minPrice: '17,000',
    date: '2021.02.08 ~ 2021.02.28',
  },
];

export default function Coupon() {
  const [couponModal, setCouponModal] = React.useState(false);
  const [updateCoupon, setUpdateCoupon] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        style={{flex: 1, padding: 15, backgroundColor: 'white'}}
        ListHeaderComponent={
          <BtnSubmitIcon
            title="쿠폰 추가하기"
            style={{backgroundColor: 'black', marginBottom: 15}}
            textStyle={{fontWeight: '600', fontSize: 18}}
            onPress={() => {
              setCouponModal(true);
            }}
          />
        }
        data={couponData}
        renderItem={({item}) => (
          <RenderCoupon item={item} setUpdateCoupon={setUpdateCoupon} />
        )}
      />

      <AddCouponModal
        open={couponModal}
        cancel={() => setCouponModal(false)}
        confirm={() => {}}
      />
      <UpdateCouponModal
        open={updateCoupon}
        cancel={() => setUpdateCoupon(false)}
        confirm={() => {}}
      />
    </SafeAreaView>
  );
}

function RenderCoupon({item, setUpdateCoupon}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setUpdateCoupon(true);
      }}
      style={[
        styles.Row1,
        {
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: '#F2F2F2',
          marginBottom: 15,
        },
      ]}>
      <View
        style={{
          marginLeft: 15,
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 24,
            color: '#28B766',
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          {item.price}원
        </Text>
        <View
          style={{
            height: 20,
            width: 67,
            backgroundColor: '#28B766',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            marginBottom: 10,
          }}>
          <Text style={{color: 'white'}}>{item.takeout}</Text>
        </View>
        <Text style={{fontSize: 16, marginBottom: 5}}>
          최소주문금액 {item.minPrice}원
        </Text>
        <Text style={{fontSize: 16}}>{item.date}</Text>
      </View>
      <View style={[styles.Row1, {marginRight: 30}]}>
        <Image
          source={require('../../images/couponcolline.png')}
          style={{resizeMode: 'contain', marginRight: 30}}
        />
        <Image
          source={require('../../images/couponicon.png')}
          style={{resizeMode: 'contain'}}
        />
      </View>
    </TouchableOpacity>
  );
}
