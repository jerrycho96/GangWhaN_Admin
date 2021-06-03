import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  BtnSubmit,
  InputText,
  RowTwoText,
  TitleAndInput,
  Underline1,
  RowTwoText1,
} from '../components/BOOTSTRAP';
import {AmPmPopUp} from '../components/AmPmPopUp';
import {ModalWeekButton} from '../components/ModalWeekButton';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import Modal from 'react-native-modal';

import {navigate} from '../navigation/RootNavigation';
import styles from '../style/Style';

export const AdjustModal = props => {
  const [menuPopUp, setMenuPopUp] = React.useState('배달/포장');
  const [amPmPopUp1, setAmPmPopUp1] = React.useState('오전');

  const Cancel = () => {
    props.cancel();
  };

  function Submit() {
    props.confirm();
  }
  return (
    <Modal isVisible={props.open} onBackButtonPress={() => Cancel()}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            justifyContent: 'center',
            padding: 15,
          }}>
          <View style={[styles.Row1, {justifyContent: 'space-between'}]}>
            <Text style={styles.boldtxt18}>정산 정보</Text>
            <TouchableOpacity
              onPress={() => {
                Cancel();
              }}>
              <Image source={require('../images/modalcancel.png')} />
            </TouchableOpacity>
          </View>
          <Underline1 />

          {props.adjustSuccess === true ? (
            <RowText
              left="정산 상태"
              right="정산완료"
              textStyle={{color: '#E51A47', fontWeight: '600'}}
              subright=""
              greytitle="2021.03.11"
              style={{marginTop: 10}}
            />
          ) : (
            <RowText
              left="정산 상태"
              right="정산중"
              textStyle={{color: '#28B766', fontWeight: '600'}}
              subright=""
              style={{marginTop: 10}}
            />
          )}
          <RowText
            left="주문금액"
            right="689,500원"
            subright=""
            greytitle="온라인"
            subgreytitle="직접"
            subright="689,500원"
          />
          <RowText left="배달팁" right="235,000원" subright="" />
          <RowText left="수수료" right="115,000원" subright="" />
          <Underline1 />

          <RowText
            left="주문 수"
            right="9,999건"
            subright=""
            style={{marginTop: 10}}
          />
          <RowText
            left="온라인 결제 수"
            right="4,999건"
            subright="4,999건"
            greytitle="카드"
            subgreytitle="실시간 계좌이체"
          />
          <RowText
            left="직접 결제 수"
            right="4,999건"
            subright="4,999건"
            greytitle="카드"
            subgreytitle="실시간 계좌이체"
          />
          <Underline1 />
          <RowText
            left="정산 금액"
            right="2,775,000원"
            subright=""
            textStyle={styles.boldtxt18}
            style={{marginTop: 10}}
          />
        </View>
      </View>
    </Modal>
  );
};

const RowText = props => {
  const {
    style = {},
    textStyle = {},
    subStyle = {},
    subTextStyle = {},
    onPress,
  } = props;

  return (
    <View style={{marginBottom: 15}}>
      <View style={[styles.Row1, {justifyContent: 'space-between'}, style]}>
        <Text style={styles.mediumtxt16}>{props.left}</Text>
        <View style={styles.Row1}>
          <Text style={[styles.greytxt16, {color: '#AAAAAA', marginRight: 10}]}>
            {props.greytitle}
          </Text>
          <Text style={[{fontSize: 16}, textStyle]}>{props.right}</Text>
        </View>
      </View>
      {props.subright === '' ? null : (
        <View style={[styles.Row1, {justifyContent: 'flex-end', marginTop: 5}]}>
          <Text style={[styles.greytxt16, {color: '#AAAAAA', marginRight: 10}]}>
            {props.subgreytitle}
          </Text>
          <Text style={[{fontSize: 16}, subTextStyle]}>{props.subright}</Text>
        </View>
      )}
    </View>
  );
};
