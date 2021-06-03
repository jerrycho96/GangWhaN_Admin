import * as React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import {MainHeader} from '../../components/MainHeader';
import {ModalConfirm, Underline10} from '../../components/BOOTSTRAP';
import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';

export default function SettingHome() {
  return <MainBody1 />;
}

const MainBody1 = props => {
  const {bottomTab, setBottomTab} = props;
  const [onConfirm, setOnConfirm] = React.useState(false);
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 15,
            flex: 1,
          }}>
          <SettingButton
            title="매장 정보 설정"
            onPress={() => navigate('UpdateShopInfo')}
          />
          <SettingButton
            title="메뉴 설정"
            onPress={() => navigate('MenuSetting')}
          />
          <SettingButton
            title="영업/휴무 관리"
            onPress={() => navigate('OpenClosedSetting')}
          />
          <SettingButton
            title="소속 라이더 지정"
            onPress={() => navigate('BelongRider')}
          />
          <SettingButton title="쿠폰 관리" onPress={() => navigate('Coupon')} />
          <SettingButton title="리뷰 관리" onPress={() => navigate('Review')} />
          <SettingButton
            title="정산 현황"
            onPress={() => navigate('AdjustMentList')}
          />
          <SettingButton title="공지사항" onPress={() => navigate('Notice')} />
          <SettingButton title="로그아웃" onPress={() => setOnConfirm(true)} />
        </View>
      </View>
      <View
        style={{
          margin: 15,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#E5E5E5',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingVertical: 25,
        }}>
        <Image
          source={require('../../images/settinghomeicon.png')}
          style={{resizeMode: 'contain', marginRight: 15}}
        />
        <View>
          <Text style={{fontSize: 16}}>고객센터</Text>
          <Text style={[styles.boldtxt18, {fontSize: 24, marginVertical: 5}]}>
            070-1234-5678
          </Text>
          <Text style={[styles.greytxt16, {color: '#AAAAAA'}]}>
            평일 오전 9시 ~ 오후 6시
          </Text>
        </View>
      </View>
      <ModalConfirm
        open={onConfirm}
        cancel={() => setOnConfirm(false)}
        confirm={() => {}}
        title="로그아웃"
        text1="연결된 계정을 로그아웃하고 퇴근하시겠습니까?"
        text2=""
        canceltxt="취소"
        submittxt="확인"
      />
    </ScrollView>
  );
};

const SettingButton = props => {
  return (
    <>
      <TouchableOpacity
        style={[styles.Row, {height: 60, justifyContent: 'space-between'}]}
        onPress={props.onPress}>
        <Text style={{fontSize: 16}}>{props.title}</Text>
        <Image source={require('../../images/rightbutton.png')} />
      </TouchableOpacity>
      {props.title === '로그아웃' ? null : (
        <View style={[styles.underline1, {width: '100%'}]} />
      )}
    </>
  );
};
