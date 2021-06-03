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
  Underline10,
} from '../components/BOOTSTRAP';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalDropdown from 'react-native-modal-dropdown';

import {navigate} from '../navigation/RootNavigation';
import styles from '../style/Style';

const menuData = [
  {
    id: 1,
    name: '김치찌개',
    price: '7,000',
    taste: '기본맛',
    tasteprice: '+0',
    add: '김치추가',
    addprice: '+500',
    count: 2,
  },
  {
    id: 2,
    name: '김치찌개',
    price: '7,000',
    taste: '중간맛',
    tasteprice: '+500',
    add: '김치추가',
    addprice: '+500',
    count: 1,
  },
  {
    id: 3,
    name: '김치찌개',
    price: '7,000',
    taste: '매운맛',
    tasteprice: '+1,000',
    add: '고기추가',
    addprice: '+1,000',
    count: 1,
  },
];

export default function TakeOutDelDetail() {
  const [riderReq, setRiderReq] = React.useState('2');
  const [delTakeTime, setDelTakeTime] = React.useState('1');
  const [onConfirm, setOnConfirm] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          {justifyContent: 'space-between', backgroundColor: 'white'},
        ]}>
        <View style={{padding: 15}}>
          <View>
            <Text style={[styles.boldtxt18, {marginBottom: 15}]}>주문정보</Text>
            <RowTwoText lefttxt="주문상태" righttxt="접수대기" />
            <RowTwoText lefttxt="주문시간" righttxt="13:23" />
            <RowTwoText lefttxt="주문종류" righttxt="포장" />
            <RowTwoText lefttxt="남기는말" righttxt="너무 맵지 않게 해주세요" />
            <View style={[styles.Row, {marginVertical: 15}]}>
              <IconBtn
                title="주문자에게 전화하기"
                require={require('../images/callicon.png')}
              />
            </View>
          </View>
          <View>
            <Text style={[styles.boldtxt18, {marginBottom: 15, marginTop: 5}]}>
              주문 고객 정보
            </Text>
            <Text style={{fontSize: 16, marginBottom: 5}}>
              인천 강화군 강화읍 갑룡길 3
            </Text>
            <View style={styles.Row}>
              <Text
                style={[styles.greytxt16, {fontWeight: '600', marginRight: 5}]}>
                [지번 주소]
              </Text>
              <Text style={styles.greytxt16}>
                인천광역시 강화군 강화읍 관청리 89-1
              </Text>
            </View>
          </View>
        </View>
        <Underline10 />
        <View style={{padding: 15}}>
          <RowTwoText lefttxt="제품금액" righttxt="18,000원" />
          <RowTwoText lefttxt="배 송 비" righttxt="2,000원" />
          <View style={styles.underline} />
          <View
            style={[
              styles.Row,
              {justifyContent: 'space-between', marginVertical: 10},
            ]}>
            <Text style={styles.mediumtxt18}>결제금액</Text>
            <Text style={styles.boldtxt18}>20,000 원</Text>
          </View>
        </View>
        {/* 아코디언 메뉴 */}
        <OrderMenuInfo />
        <Underline10 />

        {/* 라이더 요청 여부 */}
        <View style={{padding: 15}}>
          {/* 배달/포장 예상 시간 */}
          <Text style={[styles.boldtxt18, {marginVertical: 15}]}>
            배달/포장 예상 시간
          </Text>
          <View style={[styles.Row]}>
            <DelTakeTimeButton
              title="5분"
              num="1"
              delTakeTime={delTakeTime}
              setDelTakeTime={setDelTakeTime}
            />
            <DelTakeTimeButton
              title="15분"
              num="2"
              delTakeTime={delTakeTime}
              setDelTakeTime={setDelTakeTime}
            />
          </View>
          <View style={[styles.Row, {marginTop: 10}]}>
            <DelTakeTimeButton
              title="30분"
              num="3"
              delTakeTime={delTakeTime}
              setDelTakeTime={setDelTakeTime}
            />
            <DelTakeTimeButton
              title="예상 시간 입력(분)"
              num="4"
              delTakeTime={delTakeTime}
              setDelTakeTime={setDelTakeTime}
            />
          </View>
        </View>
      </ScrollView>
      <DelOrderModal
        open={onConfirm}
        cancel={() => setOnConfirm(false)}
        confirm={() => {}}
        title="주문 거절 확인"
        text1="지금 보고 계시는 주문을 거절하시겠습니까?"
        submittxt="주문 거절 완료"
      />

      {/* 하단 고정버튼 */}
      <View style={{flexDirection: 'row', zIndex: 5000}}>
        <FooterBtn
          onPress={() => {
            setOnConfirm(true);
          }}
          title="주문거절"
          style={{backgroundColor: '#777777', flex: 1}}
        />
        <FooterBtn
          onPress={() => {
            navigate('ReceiptSuccess');
          }}
          title="접수완료"
          style={{backgroundColor: '#28B766', flex: 1}}
        />
      </View>
    </SafeAreaView>
  );
}

const DelOrderModal = props => {
  const [accoState, setAccoState] = React.useState('재료소진');
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

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
              <Text style={styles.boldtxt18}>{props.title}</Text>
              <TouchableOpacity
                onPress={() => {
                  Cancel();
                }}>
                <Image source={require('../images/modalcancel.png')} />
              </TouchableOpacity>
            </View>
            {/* <Underline1 /> */}
            <View
              style={{
                height: 1,
                backgroundColor: '#E5E5E5',
                width: '100%',
                marginTop: 15,
              }}
            />
            <View style={{marginTop: 20}}>
              <Text style={[styles.mediumtxt16, {marginBottom: 20}]}>
                {props.text1}
              </Text>
            </View>
            <Text style={{fontSize: 16, marginBottom: 10}}>거절 사유</Text>
            <View>
              <PopupMenu
                accoState={accoState}
                setAccoState={setAccoState}
                menu1="재료소진"
                menu2="매장사정"
                menu3="배달지연"
                menu4="무리한요구"
                menu5="품절"
                menu6="기타"
              />
            </View>
            <View style={{flexDirection: 'row', width: '100%', marginTop: 20}}>
              <TouchableOpacity
                style={[styles.bluebackgroundbutton, {flex: 1}]}
                onPress={() => {
                  Cancel();
                }}>
                <Text style={styles.boldwhite16}>{props.submittxt}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </MenuProvider>
    </Modal>
  );
};

// 아코디언 메뉴
const OrderMenuInfo = () => {
  const [accodion, setAccodion] = React.useState(true);

  return (
    <View style={{backgroundColor: 'white'}}>
      <TouchableOpacity
        style={styles.accodiontitle}
        onPress={() => {
          setAccodion(!accodion);
        }}>
        <Text style={styles.mediumtxt18}>메뉴정보</Text>
        {accodion ? (
          <Image source={require('../images/orderaccodionup.png')} />
        ) : (
          <Image source={require('../images/orderaccodiondown.png')} />
        )}
      </TouchableOpacity>
      <View style={[styles.underline1]}></View>

      {menuData.map(item => {
        return accodion ? (
          <View key={item.id}>
            <View style={{backgroundColor: 'white', padding: 15}}>
              <Text style={[styles.mediumtxt16, {marginBottom: 10}]}>
                {item.name}
              </Text>
              <Text style={[styles.greytxt16, {marginBottom: 5}]}>
                기본 : {item.price}
              </Text>
              <Text style={[styles.greytxt16, {marginBottom: 5}]}>
                맵기선택 : {item.taste + '(' + item.tasteprice + '원)'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.greytxt16}>
                  추가선택 : {item.add + '(' + item.addprice + '원)'}
                </Text>
                <Text style={styles.mediumtxt16}>{item.count}개</Text>
              </View>
            </View>
            <View style={[styles.underline1, {marginHorizontal: 15}]}></View>
          </View>
        ) : null;
      })}
    </View>
  );
};

const RowTwoText = props => {
  return (
    <View
      style={[styles.Row, {justifyContent: 'space-between', marginBottom: 15}]}>
      <Text style={styles.mediumtxt16}>{props.lefttxt}</Text>
      <Text style={{fontSize: 16}}>{props.righttxt}</Text>
    </View>
  );
};

const DelTakeTimeButton = props => {
  const {delTakeTime, setDelTakeTime, num, title} = props;
  return (
    <BtnSubmit
      title={title}
      style={{
        backgroundColor: delTakeTime === num ? '#28B766' : '#E5E5E5',
        marginRight: 5,
        flex: 1,
      }}
      textStyle={{color: delTakeTime === num ? 'white' : '#777777'}}
      onPress={() => setDelTakeTime(num)}
    />
  );
};
const PopupMenu = props => {
  const width = Dimensions.get('window').width;
  const {accoState, setAccoState} = props;
  return (
    <View style={{width: '100%', height: 45}}>
      <Menu>
        <MenuTrigger
          style={{
            borderRadius: 5,
            borderWidth: 1,
            height: 45,
            width: '100%',
            borderColor: '#CCCCCC',
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>{accoState}</Text>
          <Image source={require('../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              marginTop: 25,
              marginLeft: -16,
              width: width / 1.22,
              paddingLeft: 10,
            },
          }}>
          <MenuOption onSelect={() => setAccoState(`재료소진`)}>
            <Text style={{color: 'black', fontSize: 16}}>{props.menu1}</Text>
          </MenuOption>
          <MenuOption onSelect={() => setAccoState(`매장사정`)}>
            <Text style={{color: 'black', fontSize: 16}}>{props.menu2}</Text>
          </MenuOption>
          <MenuOption onSelect={() => setAccoState(`배달지연`)}>
            <Text style={{color: 'black', fontSize: 16}}>{props.menu3}</Text>
          </MenuOption>
          <MenuOption onSelect={() => setAccoState(`무리한 요구`)}>
            <Text style={{color: 'black', fontSize: 16}}>{props.menu4}</Text>
          </MenuOption>
          <MenuOption onSelect={() => setAccoState(`품절`)}>
            <Text style={{color: 'black', fontSize: 16}}>{props.menu5}</Text>
          </MenuOption>
          <MenuOption onSelect={() => setAccoState(`기타`)}>
            <Text style={{color: 'black', fontSize: 16}}>{props.menu6}</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
