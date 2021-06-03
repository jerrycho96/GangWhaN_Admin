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

const categoryData = [
  {
    id: 1,
    categoryname: '떡볶이',
  },
  {
    id: 2,
    categoryname: '사이드',
  },
  {
    id: 3,
    categoryname: '음료',
  },
];

export default function ItemCategoryUpdate() {
  // 모달 상태관리 훅
  const [onConfirm, setOnConfirm] = React.useState(false);
  const [onConfirm1, setOnConfirm1] = React.useState(false);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        style={{backgroundColor: 'white', flex: 1, padding: 15}}
        ListHeaderComponent={
          <View>
            <View style={styles.Row}>
              <BtnSubmitIcon
                title="상품 분류 추가"
                style={{backgroundColor: '#777777', flex: 1, marginRight: 5}}
                onPress={() => {
                  setOnConfirm(true);
                }}
              />
              <BtnSubmit
                title="저장"
                style={{flex: 1, marginLeft: 5}}
                onPress={() => {
                  setOnConfirm1(true);
                }}
              />
            </View>
            <View style={[styles.Row, {marginVertical: 20}]}>
              <Text style={styles.boldtxt18}>현재 등록 된 분류</Text>
              <Text style={{color: '#E51A47', marginLeft: 10}}>
                위부터 순서대로 페이지에 노출됩니다
              </Text>
            </View>
          </View>
        }
        keyExtractor={item => item.id}
        data={categoryData}
        renderItem={({item}) => (
          // 랜더링할 자식 컴포넌트
          <RenderCategory
            item={item}
            setOnConfirm1={setOnConfirm1} // 자식 컴포넌트와 주고 받을 훅
          />
        )}></FlatList>
      {/* 플랫리스트 헤더 모달 */}
      <AddItemModal
        open={onConfirm}
        cancel={() => setOnConfirm(false)}
        confirm={() => {}}
      />
      {/* 플랫리스트 내부 모달 */}
      <AddItemModal1
        open={onConfirm1}
        cancel={() => setOnConfirm1(false)}
        confirm={() => {}}
      />
    </SafeAreaView>
  );
}

// 플랫리스트에 랜더링 할 자식 컴포넌트
function RenderCategory({item, setOnConfirm1}) {
  return (
    <View style={{height: 60}}>
      <View style={[styles.Row, {justifyContent: 'space-between'}]}>
        <Text style={{fontSize: 16}}>{item.categoryname}</Text>
        <TouchableOpacity onPress={() => setOnConfirm1(true)}>
          <Image source={require('../../images/categorydelete.png')} />
        </TouchableOpacity>
      </View>
      <Underline1 />
    </View>
  );
}

const AddItemModal = props => {
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.boldtxt18}>분류 추가</Text>
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
              추가하실 분류를 입력해주세요
            </Text>
          </View>
          <Text style={[styles.mediumtxt16, {fontSize: 16, marginBottom: 10}]}>
            분류명
          </Text>
          <View>
            <InputText />
          </View>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 20}}>
            <TouchableOpacity
              style={[styles.bluebackgroundbutton, {flex: 1}]}
              onPress={() => {
                Cancel();
              }}>
              <Text style={styles.boldwhite16}>분류 등록</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const AddItemModal1 = props => {
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.boldtxt18}>분류 삭제</Text>
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
              해당 분류에 속한 하위 데이터가 모두 삭제됩니다{'\n'}
              분류를 삭제하시겠습니까?
            </Text>
          </View>
          <Text style={[styles.mediumtxt16, {fontSize: 16, marginBottom: 10}]}>
            떡볶이
          </Text>
          <Text style={[styles.mediumtxt16, {fontSize: 18, marginBottom: 10}]}>
            로제 떡볶이, 매콤 떡볶이, 짜장 떡볶이
          </Text>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 20}}>
            <TouchableOpacity
              style={[styles.bluebackgroundbutton, {flex: 1}]}
              onPress={() => {
                Cancel();
              }}>
              <Text style={styles.boldwhite16}>분류 삭제</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
