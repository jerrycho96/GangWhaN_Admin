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
import CreateRadioButton from '../../components/CreateRadioButton';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const width = Dimensions.get('window').width;

export default function UpdateMenu() {
  const [accoState, setAccoState] = React.useState('상품 분류');
  const [accoState1, setAccoState1] = React.useState('옵션 분류');
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [addOption, setAddOption] = React.useState(false);
  const [addOption1, setAddOption1] = React.useState(false);
  const [addItem, setAddItem] = React.useState(false);

  const scrollViewRef = React.useRef();
  const autoscroll = () => scrollViewRef.current.scrollToEnd({animated: true});

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <MenuProvider>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          style={{flex: 1}}
          //자동 스크롤
          ref={scrollViewRef}>
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

            <RowTwoText lefttxt="상품 분류" righttxt="" />
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <PopupMenu accoState={accoState} setAccoState={setAccoState} />
              <BtnSubmit
                title="상품 분류 관리"
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
              style={{height: 90, paddingTop: 15, marginBottom: 0}}
              multiline={true}
            />
            <View style={[styles.Row, {justifyContent: 'flex-end'}]}>
              <MenuCheckBox
                title="비포장"
                checked={checked2}
                setChecked={setChecked2}
              />
              <MenuCheckBox
                title="비노출"
                checked={checked}
                setChecked={setChecked}
              />
              <MenuCheckBox
                title="품절"
                checked={checked1}
                setChecked={setChecked1}
              />
            </View>

            <View style={styles.Row}>
              <BtnSubmit
                title="수정 완료"
                style={{flex: 1, marginTop: 15, marginBottom: 20}}
              />
            </View>
            <RowTwoText lefttxt="옵션" righttxt="" />
            <View style={{flexDirection: 'row'}}>
              {/* <BtnSubmit
                title="옵션 관리"
                style={{flex: 1, marginRight: 5}}
                onPress={() => {
                  navigate('ItemOptioinUpdate');
                }}
              /> */}
              <BtnSubmitIcon1
                title="옵션 추가"
                color={'#28B766'}
                style={{
                  flex: 1,
                  marginLeft: 5,
                  backgroundColor: 'white',
                  borderColor: '#28B766',
                  borderWidth: 1,
                }}
                textStyle={{color: '#28B766'}}
                onPress={() => {
                  setAddOption(!addOption);
                  autoscroll();
                }}
              />
            </View>
            <Underline1 />
            {addOption ? (
              <View>
                <InputText placeholder="옵션명" style={{marginVertical: 5}} />
                <View style={[styles.Row, {justifyContent: 'space-between'}]}>
                  <CreateRadioButton />
                  <MenuCheckBox
                    title="비노출"
                    checked={checked3}
                    setChecked={setChecked3}
                  />
                </View>

                <BtnSubmit
                  title="옵션 등록"
                  style={{flex: 1, marginTop: 15, marginBottom: 5}}
                  onPress={() => {
                    setAddOption1(!addOption1);
                    autoscroll();
                  }}
                />
                <Underline1 />
              </View>
            ) : null}

            {addOption1 ? (
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#CCCCCC',
                  padding: 10,
                }}>
                <View style={[styles.Row1, {justifyContent: 'space-between'}]}>
                  <Text>맵기 선택</Text>
                  <View style={styles.Row1}>
                    <BtnSubmit
                      title="수정"
                      style={{
                        paddingHorizontal: 15,
                        height: 35,
                        marginRight: 5,
                      }}
                    />
                    <BtnSubmit
                      title="삭제"
                      style={{
                        paddingHorizontal: 15,
                        height: 35,
                        marginRight: 5,
                      }}
                    />
                    <BtnSubmit
                      title="항목추가"
                      style={{paddingHorizontal: 15, height: 35}}
                      onPress={() => {
                        setAddItem(!addItem);
                        scrollViewRef.current.scrollToEnd({animated: true});
                      }}
                    />
                  </View>
                </View>
                <View>
                  <Text>기본맛 : +0원</Text>
                  <Text>매운맛 : +1,000원</Text>
                  <Text>가장 매운맛 : +1,000원</Text>
                </View>
              </View>
            ) : null}
            {addItem ? (
              <View>
                <InputText placeholder="항목명" style={{marginVertical: 5}} />
                <View style={[styles.Row1, {flex: 1}]}>
                  <InputText placeholder="추가금액" style={{flex: 1}} />
                  <BtnSubmit
                    title="등록 완료"
                    style={{
                      paddingHorizontal: 15,
                      marginLeft: 5,
                    }}
                  />
                </View>
              </View>
            ) : null}
          </View>
        </KeyboardAwareScrollView>
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
                width: width / 1.7,
              },
            }),
          },
        }}>
        <MenuOption onSelect={() => setAccoState(`상품 분류`)}>
          <Text style={{color: 'black', fontSize: 16}}>상품 분류</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState(`상품 분류`)}>
          <Text style={{color: 'black', fontSize: 16}}>상품 분류</Text>
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
      <MenuOptions
        customStyles={{
          optionsContainer: {
            marginTop: -45,
            paddingLeft: 11,
            width: width / 1.09,
          },
        }}>
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
