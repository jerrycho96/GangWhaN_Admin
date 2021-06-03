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
} from '../../components/BOOTSTRAP';
import {Checkbox} from 'react-native-paper';

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

const width = Dimensions.get('window').width;

export default function AddMenu() {
  const [accoState, setAccoState] = React.useState('메뉴 분류');
  const [accoState1, setAccoState1] = React.useState('옵션 분류');
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <MenuProvider>
        <ScrollView style={{flex: 1}}>
          <TouchableOpacity
            style={{
              height: 200,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F6F6F6',
            }}>
            <Image source={require('../../images/addmenucamera.png')} />
            <Text style={[styles.greytxt16, {fontSize: 18, fontWeight: '600'}]}>
              사진등록
            </Text>
          </TouchableOpacity>
          <View style={{padding: 15, backgroundColor: 'white'}}>
            <TitleAndInput title="상품명" textStyle={{marginTop: 5}} />

            <RowTwoText lefttxt="메뉴 분류" righttxt="" />
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <PopupMenu accoState={accoState} setAccoState={setAccoState} />
              <BtnSubmit
                title="메뉴 분류 관리"
                style={{height: 45, width: 130, marginLeft: 10}}
                onPress={() => {
                  navigate('ItemCategoryUpdate');
                }}
              />
            </View>
            <TitleAndInput title="판매 가격" textStyle={{marginTop: 5}} />
            <TitleAndInput
              title="메뉴 상세 설명"
              textStyle={{marginTop: 5}}
              style={{height: 90, marginBottom: 0, paddingTop: 15}}
              multiline={true}
            />
            <View style={[styles.Row, {justifyContent: 'flex-end'}]}>
              <MenuCheckBox
                title="비포장"
                checked={checked}
                setChecked={setChecked}
              />
              <MenuCheckBox
                title="비노출"
                checked={checked1}
                setChecked={setChecked1}
              />
              <MenuCheckBox
                title="품절"
                checked={checked2}
                setChecked={setChecked2}
              />
            </View>
            <View
              style={[
                styles.Row,
                {justifyContent: 'flex-end', marginBottom: 15},
              ]}></View>
            <BtnSubmit title="등록 완료" />
          </View>
        </ScrollView>
      </MenuProvider>
    </SafeAreaView>
  );
}

const MenuCheckBox = props => {
  const {checked, setChecked} = props;
  return (
    <View style={[styles.Row1, {justifyContent: 'flex-end'}]}>
      <Checkbox.Android
        color={'#28B766'}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text>{props.title}</Text>
    </View>
  );
};

const PopupMenu = props => {
  const {accoState, setAccoState} = props;
  return (
    <Menu style={{flex: 1}}>
      <MenuTrigger
        style={{
          borderRadius: 5,
          borderWidth: 1,
          height: 45,
          flex: 1,
          borderColor: '#CCCCCC',
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16}}>{accoState}</Text>
        <Image source={require('../../images/orderaccodiondown.png')} />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            ...Platform.select({
              ios: {
                marginTop: -45,
                paddingLeft: 11,
                width: width / 1.78,
              },
              android: {
                marginTop: -10,
                paddingLeft: 11,
                width: width / 1.65,
              },
            }),
          },
        }}>
        <MenuOption onSelect={() => setAccoState(`메뉴 분류`)}>
          <Text style={{color: 'black', fontSize: 16}}>메뉴 분류</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState(`메뉴 분류`)}>
          <Text style={{color: 'black', fontSize: 16}}>메뉴 분류</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};
const PopupMenu1 = props => {
  const {accoState1, setAccoState1} = props;
  return (
    <Menu style={{flex: 1}}>
      <MenuTrigger
        style={{
          borderRadius: 5,
          borderWidth: 1,
          height: 45,
          flex: 1,
          borderColor: '#CCCCCC',
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16}}>{accoState1}</Text>
        <Image source={require('../../images/orderaccodiondown.png')} />
      </MenuTrigger>
      <MenuOptions customStyles={{optionsContainer: {marginTop: -20}}}>
        <MenuOption onSelect={() => setAccoState1(`옵션 분류`)}>
          <Text style={{color: 'black', fontSize: 16}}>옵션 분류</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`옵션 분류`)}>
          <Text style={{color: 'black', fontSize: 16}}>옵션 분류</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};
