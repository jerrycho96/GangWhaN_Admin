import * as React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
  DeviceEventEmitter,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

import {
  BtnSubmit,
  InputText,
  Underline10,
  TitleAndInput,
} from '../../components/BOOTSTRAP';
import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';

const width = Dimensions.get('window').width;

export default function AddShop({route}) {
  const [addShop, setAddShop] = React.useState(false);
  const {callBack} = route.params;
  const [category, setCategory] = React.useState('매장 분류');

  // React.useEffect(() => {
  //   return () => {
  //     DeviceEventEmitter.emit('AddShop');
  //   };
  // }, []);

  return (
    <ScrollView style={styles.container}>
      <MenuProvider>
        <View style={{padding: 15}}>
          <Text style={[styles.mediumtxt16, {marginBottom: 10}]}>
            매장 분류
          </Text>

          <ShopCategory category={category} setCategory={setCategory} />

          <TitleAndInput title="매장명" placeholder="매장명 입력" />
          <TitleAndInput
            title="매장 연락처"
            placeholder="- 없이 입력해주세요"
          />

          <Text style={[styles.mediumtxt16]}>주소</Text>
          <View style={[styles.Row1, {marginTop: 10}]}>
            <InputText
              placeholder="검색할 주소를 입력해주세요"
              style={{flex: 1, marginRight: 8}}
            />
            <BtnSubmit
              title="인증완료"
              onPress={() => {}}
              style={{width: 101, height: 45}}
              textStyle={{fontWeight: '600', fontSize: 16}}
            />
          </View>
          <InputText
            input="인천 강화군 강화읍 갑릉길 3"
            style={{marginBottom: 10, marginTop: 10}}
          />
          <InputText
            placeholder="상세 주소를 입력해주세요"
            style={{marginBottom: 15}}
          />
          <TitleAndInput title="휴대폰 번호1" placeholder="" />
          <TitleAndInput title="휴대폰 번호2" placeholder="" />
        </View>
        <Underline10 />
        <View style={{padding: 15}}>
          <TitleAndInput
            title="사업자 등록번호"
            placeholder="- 없이 입력해주세요"
          />
          <TitleAndInput title="사업자명" placeholder="" />

          <Text style={[styles.mediumtxt16]}>사업자 등록증</Text>
          <View style={[styles.Row1, {marginTop: 10}]}>
            <InputText
              placeholder="검색할 주소를 입력해주세요"
              style={{flex: 1, marginRight: 8}}
            />
            <BtnSubmit
              title="파일 검색"
              onPress={() => {}}
              style={{width: 101, height: 45}}
              textStyle={styles.mediumtxt16}
            />
          </View>
          <Text style={[styles.mediumtxt16, {marginTop: 15}]}>점주 신분증</Text>
          <View style={[styles.Row1, {marginTop: 10, marginBottom: 15}]}>
            <InputText
              placeholder="검색할 주소를 입력해주세요"
              style={{flex: 1, marginRight: 8}}
            />
            <BtnSubmit
              title="파일 검색"
              onPress={() => {}}
              style={{width: 101, height: 45}}
              textStyle={styles.mediumtxt16}
            />
          </View>
          <Text style={[styles.mediumtxt16]}>정산 계좌</Text>

          <View style={{marginTop: 10}}>
            <InputText placeholder="은행" style={{flex: 1}} />
          </View>
          <InputText
            input=""
            placeholder="계좌번호"
            style={{marginBottom: 10, marginTop: 10}}
          />
          <InputText placeholder="예금주" />
          <Text style={[styles.mediumtxt16, {marginTop: 15}]}>
            정산 계좌 사진
          </Text>
          <View style={[styles.Row1, {marginTop: 10}]}>
            <InputText placeholder="" style={{flex: 1, marginRight: 8}} />
            <BtnSubmit
              title="파일 검색"
              onPress={() => {}}
              style={{width: 101, height: 45}}
              textStyle={styles.mediumtxt16}
            />
          </View>
        </View>

        <Underline10 />

        <View style={{padding: 15}}>
          <Text style={[styles.mediumtxt16]}>가게 소개</Text>
          <TextInput
            style={[
              styles.textinput,
              {height: 180, marginTop: 10, marginBottom: 15},
            ]}
            multiline={true}
          />
          <Text style={[styles.mediumtxt16, {marginBottom: 10}]}>
            가게 사진 첨부 (최대 4장)
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
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
              <TouchableOpacity
                style={{position: 'absolute', right: 5, top: 5}}>
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
              <TouchableOpacity
                style={{position: 'absolute', right: 5, top: 5}}>
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
              <TouchableOpacity
                style={{position: 'absolute', right: 5, top: 5}}>
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
        </View>

        <View style={{padding: 15, paddingTop: 20}}>
          <Text style={{color: '#E51A47', textAlign: 'center'}}>
            매장 추가 시 30,000원의 입점 수수료가 발생합니다.{'\n'}사업자
            등록증, 계좌, 신분증 첨부는 필수 항목입니다.
          </Text>
        </View>
        <BottomButton
          onPress={() => {
            callBack(true);
            navigate('SelectShopHome');
          }}
        />
      </MenuProvider>
    </ScrollView>
  );
}

const BottomButton = props => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'flex-end',
        flex: 1,
        margin: 15,
      }}>
      <BtnSubmit title="신청 완료" onPress={props.onPress} />
    </SafeAreaView>
  );
};

const ShopCategory = props => {
  const {category, setCategory} = props;
  return (
    <View style={{flex: 1}}>
      <Menu>
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
            marginBottom: 15,
          }}>
          <Text style={{fontSize: 16}}>{category}</Text>
          <Image source={require('../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: -46,
                  width: width / 1.09,
                  paddingLeft: 11,
                },
                android: {
                  marginTop: -10,
                  paddingLeft: 11,
                  width: width / 1.08,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setCategory(`매장 분류`)}>
            <Text style={{color: 'black', fontSize: 16}}>매장 분류</Text>
          </MenuOption>
          <MenuOption onSelect={() => setCategory(`매장 분류`)}>
            <Text style={{color: 'black', fontSize: 16}}>매장 분류</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
