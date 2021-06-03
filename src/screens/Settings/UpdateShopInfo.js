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
} from '../../components/BOOTSTRAP';
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

export default function UpdateShopInfo() {
  const [onConfirm, setOnConfirm] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          {justifyContent: 'space-between', backgroundColor: 'white'},
        ]}>
        <View style={{paddingHorizontal: 15, paddingTop: 15}}>
          <View>
            <RowTwoText lefttxt="매장 코드" righttxt="ABC1234" />
            <RowTwoText lefttxt="매장 이름" righttxt="코코샤브" />
          </View>
        </View>
        <Underline10 />
        <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
          <RowTwoText lefttxt="아이디" righttxt="emp1001" />
          <RowTwoText lefttxt="비밀번호 변경" righttxt="" />
          <InputText placeholder="비밀번호 입력" style={{marginBottom: 5}} />
          <InputText placeholder="비밀번호 확인" />
          <View style={[styles.Row, {marginTop: 10}]}>
            <Image source={require('../../images/profilepasswarning.png')} />
            <Text style={{color: '#E51A47', marginLeft: 5}}>
              비밀번호가 일치하지 않습니다.
            </Text>
          </View>
          {/* <View style={styles.underline} /> */}
        </View>
        <Underline10 />
        <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
          <RowTwoText lefttxt="매장 연락처" righttxt="" />
          <InputText input="070-1234-5678" style={{marginBottom: 20}} />
          <RowTwoText lefttxt="휴대폰 번호1" righttxt="" />
          <InputText input="010-1234-5678" style={{marginBottom: 20}} />
          <RowTwoText lefttxt="휴대폰 번호2" righttxt="" />
          <InputText input="010-1234-5678" />
        </View>
        <Underline10 />
        <View
          style={{paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10}}>
          <RowTwoText lefttxt="사업자 등록번호" righttxt="1234567898" />
          <RowTwoText lefttxt="사업자명" righttxt="김준수" />
          <RowTextImg
            lefttxt="사업자 등록증"
            img={require('../../images/updateshopimg1.png')}
          />
          <RowTextImg
            lefttxt="점주 신분증"
            img={require('../../images/updateshopimg2.png')}
          />
          <View style={[styles.underline1, {marginBottom: 15, marginTop: 5}]} />
          <RowTwoText
            lefttxt="정산계좌"
            righttxt="신한은행 | 56211924568 | 홍길동"
          />
          <RowTextImg
            lefttxt="정산 계좌 사진"
            img={require('../../images/updateshopimg3.png')}
          />
        </View>
        <Underline10 />
        <View
          style={{paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10}}>
          <View>
            <RowTwoText lefttxt="카테고리" righttxt="" />
            <View style={[styles.Row, {marginBottom: 10}]}>
              <Category title="음식배달 > 한식" style={{marginRight: 5}} />
              <Category title="음식배달 > 탕/찜" style={{marginLeft: 5}} />
            </View>
            <View style={styles.Row}>
              <Category
                title="음식배달 > 야식"
                style={{marginRight: 5, flex: 0.48}}
              />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <RowTwoText lefttxt="가게 소개" righttxt="" />
            <InputText
              placeholder=""
              input=""
              multiline={true}
              style={{height: 90}}
            />
          </View>
          <View style={{marginTop: 20}}>
            <RowTwoText lefttxt="편의시설" righttxt="" />
            <InputText
              placeholder=""
              input="주차, 단체석, 유아용 의자, 무선 인터넷"
            />
          </View>
          <View style={{marginTop: 20}}>
            <RowTwoText lefttxt="원산지 정보" righttxt="" />
            <InputText
              placeholder=""
              input=""
              multiline={true}
              style={{height: 90}}
            />
          </View>
          <View style={{marginVertical: 20}}>
            <RowTwoText lefttxt="안내 및 혜택" righttxt="" />
            <InputText
              placeholder=""
              input={
                '리뷰 이벤트 진행중이니 리뷰에서 확인 부탁드려요\n\n소비자가 뽑은 한국의 영향력 있는 브랜드 대상\n\n이차돌 특성상 상푸 챗잎 등 쌈을 제공하지 않으니, 다양한 사이드 메뉴와 함께 곁들여 드시길 권장하오며, 손님들리뷰 이벤트 진행중이니 리뷰에서 확인 부탁드려요\n\n소비자가 뽑은 한국의 영향력 있는 브랜드 대상\n\n이차돌 특성상 상푸 챗잎 등 쌈을 제공하지 않으니, 다양한 사이드 메뉴와 함께 곁들여 드시길 권장하오며, 손님들'
              }
              multiline={true}
              style={{height: 180}}
            />
          </View>
          <AddShopImg />
        </View>
        <Underline10 />

        <View style={[styles.Row, {padding: 15}]}>
          <BtnSubmit
            title="매장삭제"
            style={{flex: 1, marginRight: 5, backgroundColor: '#777777'}}
            onPress={() => {
              setOnConfirm(true);
            }}
          />
          <BtnSubmit title="수정완료" style={{flex: 1, marginLeft: 5}} />
        </View>
      </ScrollView>
      <DelOrderModal
        open={onConfirm}
        cancel={() => setOnConfirm(false)}
        confirm={() => {}}
      />
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.boldtxt18}>매장 삭제 신청</Text>
              <TouchableOpacity
                onPress={() => {
                  Cancel();
                }}>
                <Image source={require('../../images/modalcancel.png')} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: '#E5E5E5',
                width: '100%',
                marginTop: 15,
              }}
            />
            <View style={{marginTop: 20}}>
              <Text style={{marginBottom: 20, fontSize: 16}}>
                해당 매장을 삭제 신청하시겠습니까?{'\n'}삭제 완료는 최고관리자의
                승인 후 적용됩니다.
              </Text>
            </View>
            <Text
              style={[styles.mediumtxt16, {fontSize: 16, marginBottom: 10}]}>
              삭제사유
            </Text>
            <View>
              <InputText
                placeholder="삭제 사유를 입력해주세요"
                style={{height: 90, paddingTop: 15}}
                multiline={true}
              />
            </View>
            <View style={{flexDirection: 'row', width: '100%', marginTop: 20}}>
              <TouchableOpacity
                style={[styles.bluebackgroundbutton, {flex: 1}]}
                onPress={() => {
                  Cancel();
                }}>
                <Text style={styles.boldwhite16}>매장 삭제 신청</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </MenuProvider>
    </Modal>
  );
};

const RowTextImg = props => {
  const {onPress} = props;
  return (
    <View
      style={[styles.Row, {justifyContent: 'space-between', marginBottom: 15}]}>
      <Text style={styles.mediumtxt16}>{props.lefttxt}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image source={props.img} style={{resizeMode: 'contain'}} />
      </TouchableOpacity>
    </View>
  );
};

const RiderReqButton = props => {
  const {riderReq, setRiderReq, num, title} = props;
  return (
    <BtnSubmit
      title={title}
      style={{
        backgroundColor: riderReq === num ? '#28B766' : '#E5E5E5',
        marginRight: 5,
        flex: 1,
      }}
      textStyle={{color: riderReq === num ? 'white' : '#777777'}}
      onPress={() => setRiderReq(num)}
    />
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
          <Image source={require('../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions>
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

const Category = props => {
  const {style = {}, onPress} = props;
  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderColor: '#28B766',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
          padding: 5,
          flex: 1,
        },
        style,
      ]}>
      <Text style={{fontSize: 16, color: '#28B766'}}>{props.title}</Text>
    </View>
  );
};

const AddShopImg = () => {
  const width = Dimensions.get('window').width;
  return (
    <>
      <Text style={[styles.mediumtxt16, {marginBottom: 15}]}>
        가게 사진 첨부 (최대 4장)
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 15,
        }}>
        <View>
          <Image
            source={require('../../images/addshopimg1.png')}
            style={{
              width: width / 4.4,
              height: width / 4.4,
              borderRadius: 3,
              resizeMode: 'contain',
            }}
          />
          <TouchableOpacity style={{position: 'absolute', right: 5, top: 5}}>
            <Image source={require('../../images/addshopimgdel.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require('../../images/addshopimg1.png')}
            style={{
              width: width / 4.4,
              height: width / 4.4,
              borderRadius: 3,
              resizeMode: 'contain',
            }}
          />
          <TouchableOpacity style={{position: 'absolute', right: 5, top: 5}}>
            <Image source={require('../../images/addshopimgdel.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require('../../images/addshopimg1.png')}
            style={{
              width: width / 4.4,
              height: width / 4.4,
              borderRadius: 3,
              resizeMode: 'contain',
            }}
          />
          <TouchableOpacity style={{position: 'absolute', right: 5, top: 5}}>
            <Image source={require('../../images/addshopimgdel.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: width / 4.4,
            height: width / 4.4,
            borderWidth: 1,
            borderRadius: 3,
            borderColor: '#E5E5E5',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../images/addshopaddimg.png')} />
        </TouchableOpacity>
      </View>
    </>
  );
};
