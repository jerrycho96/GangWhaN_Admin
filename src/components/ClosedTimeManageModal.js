import * as React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {BtnSubmit, InputText, Underline1} from './BOOTSTRAP';
import {AmPmPopUp} from './AmPmPopUp';
import {ModalWeekButton} from './ModalWeekButton';
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

const width = Dimensions.get('window').width;

export const ClosedTimeManageModal = props => {
  const [weekPopUp, setWeekPopUp] = React.useState('매월 첫째');
  const [weekPopUp1, setWeekPopUp1] = React.useState('월요일');

  const Cancel = () => {
    props.cancel();
  };

  function Submit() {
    props.confirm();
  }
  return (
    <Modal isVisible={props.open} onBackButtonPress={() => Cancel()}>
      <MenuProvider>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              justifyContent: 'center',
              padding: 15,
            }}>
            <View style={[styles.Row1, {justifyContent: 'space-between'}]}>
              <Text style={styles.boldtxt18}>정기 휴일 설정</Text>
              <TouchableOpacity
                onPress={() => {
                  Cancel();
                }}>
                <Image source={require('../images/modalcancel.png')} />
              </TouchableOpacity>
            </View>
            <Underline1 />
            <View style={styles.Row1}>
              <WeekPopUp weekPopUp={weekPopUp} setWeekPopUp={setWeekPopUp} />
              <WeekPopUp1 weekPopUp={weekPopUp1} setWeekPopUp={setWeekPopUp1} />
            </View>
            <BtnSubmit title="설정 완료" style={{marginTop: 20}} />
          </View>
        </View>
      </MenuProvider>
    </Modal>
  );
};

const WeekPopUp = props => {
  const {weekPopUp, setWeekPopUp} = props;
  return (
    <Menu style={{flex: 1}}>
      <MenuTrigger
        style={{
          marginRight: 5,
          borderRadius: 5,
          borderWidth: 1,
          height: 45,
          borderColor: '#CCCCCC',
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16}}>{weekPopUp}</Text>
        <Image source={require('../images/orderaccodiondown.png')} />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            marginTop: 25,
            marginLeft: -19,
            width: width / 2.55,
            paddingLeft: 5,
          },
        }}>
        <MenuOption onSelect={() => setWeekPopUp(`매월 첫째`)}>
          <Text style={{color: 'black', fontSize: 16}}>매월 첫째</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`매월 둘째`)}>
          <Text style={{color: 'black', fontSize: 16}}>매월 둘째</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`매월 셋째`)}>
          <Text style={{color: 'black', fontSize: 16}}>매월 셋째</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`매월 넷째`)}>
          <Text style={{color: 'black', fontSize: 16}}>매월 넷째</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`매월 다섯째`)}>
          <Text style={{color: 'black', fontSize: 16}}>매월 다섯째</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`매월 다섯째`)}>
          <Text style={{color: 'black', fontSize: 16}}>매월 마지막</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`매월 다섯째`)}>
          <Text style={{color: 'black', fontSize: 16}}>매주</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};
const WeekPopUp1 = props => {
  const {weekPopUp, setWeekPopUp} = props;
  return (
    <Menu style={{flex: 1}}>
      <MenuTrigger
        style={{
          borderRadius: 5,
          borderWidth: 1,
          height: 45,
          borderColor: '#CCCCCC',
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16}}>{weekPopUp}</Text>
        <Image source={require('../images/orderaccodiondown.png')} />
      </MenuTrigger>

      <MenuOptions
        customStyles={{
          optionsContainer: {
            marginTop: 25,
            marginLeft: -16,
            width: width / 2.45,
            paddingLeft: 5,
          },
        }}>
        <MenuOption onSelect={() => setWeekPopUp(`월요일`)}>
          <Text style={{color: 'black', fontSize: 16}}>월요일</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`화요일`)}>
          <Text style={{color: 'black', fontSize: 16}}>화요일</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`수요일`)}>
          <Text style={{color: 'black', fontSize: 16}}>수요일</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`목요일`)}>
          <Text style={{color: 'black', fontSize: 16}}>목요일</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`금요일`)}>
          <Text style={{color: 'black', fontSize: 16}}>금요일</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`토요일`)}>
          <Text style={{color: 'black', fontSize: 16}}>토요일</Text>
        </MenuOption>
        <MenuOption onSelect={() => setWeekPopUp(`일요일`)}>
          <Text style={{color: 'black', fontSize: 16}}>일요일</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};
