import * as React from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

import {MainWorkOnOffRefresh} from '../../../components/MainWorkOnOffRefresh';
import {MainHeader} from '../../../components/MainHeader';
import {TopTab} from '../../../components/MainTopTab';
import {AdminNotice} from '../../../components/MainAdminNotice';
import {
  BtnSubmit,
  InputText,
  TopDelState,
  Underline1,
  Underline10,
} from '../../../components/BOOTSTRAP';
import {navigate} from '../../../navigation/RootNavigation';
import styles from '../../../style/Style';
import {
  CumulativeListState,
  CumulativeData,
} from '../../../components/CumulativeListState';
import {CumultativeTopTab} from '../../../components/CumulativeTopTab';

const width = Dimensions.get('window').width;

export default function CumulativeList({route}) {
  return <MainBody1 />;
}

const MainBody1 = props => {
  const [topTab, setTopTab] = React.useState('1');
  const [accoState, setAccoState] = React.useState('배달/포장');
  const [accoState1, setAccoState1] = React.useState('현장결제');
  const [accoState2, setAccoState2] = React.useState('전체');
  const [yearAcco, setYearAcco] = React.useState('2021');
  const [monthAcco, setMonthAcco] = React.useState('3월');
  return (
    <View style={{flex: 1}}>
      <MenuProvider>
        {/* 리스트 */}
        <FlatList
          contentContainerStyle={[{justifyContent: 'space-between'}]}
          style={{backgroundColor: 'white'}}
          ListHeaderComponent={
            <View style={{flex: 1}}>
              <AdjustHeader />
              <Underline10 />
              <CumultativeTopTab topTab={topTab} setTopTab={setTopTab} />
              <View style={{padding: 15, flex: 1}}>
                {topTab === '1' ? (
                  <InputText placeholder="날짜 입력" />
                ) : topTab === '2' ? (
                  <View style={styles.Row}>
                    <InputText
                      placeholder="시작 날짜 입력"
                      style={{flex: 1, marginRight: 5}}
                    />
                    <InputText
                      placeholder="종료 날짜 입력"
                      style={{flex: 1, marginLeft: 5}}
                    />
                  </View>
                ) : (
                  <View style={styles.Row}>
                    <YearPopup yearAcco={yearAcco} setYearAcco={setYearAcco} />
                    <View style={{marginRight: 5}} />
                    <MonthPopup
                      yearAcco={monthAcco}
                      setYearAcco={setMonthAcco}
                    />
                  </View>
                )}

                <View style={[styles.Row, {marginTop: 10}]}>
                  <PopupMenu
                    accoState={accoState}
                    setAccoState={setAccoState}
                  />
                  <PopupMenu1
                    accoState1={accoState1}
                    setAccoState1={setAccoState1}
                  />
                  <PopupMenu2
                    accoState1={accoState2}
                    setAccoState1={setAccoState2}
                  />
                </View>
                <BtnSubmit title="조회" style={{flex: 1, marginTop: 15}} />
              </View>
            </View>
          }
          data={CumulativeData}
          keyExtractor={item => item.id}
          renderItem={CumulativeListState}
        />
      </MenuProvider>
    </View>
  );
};

const AdjustHeader = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#F5F5F5',
      }}>
      <Text style={styles.mediumtxt16}>이번 달 누적현황</Text>
      <View style={[styles.Row1, {marginTop: 20}]}>
        <View style={[styles.Row1, {flex: 1}]}>
          <Image
            source={require('../../../images/cumulativecar.png')}
            style={{resizeMode: 'contain', marginRight: 10}}
          />
          <View>
            <Text style={[styles.boldtxt18, {fontSize: 20}]}>배달 212건</Text>
            <Text>총 누적 4,999건</Text>
          </View>
        </View>
        <View style={[styles.Row1, {flex: 1}]}>
          <Image
            source={require('../../../images/cumulativebag.png')}
            style={{resizeMode: 'contain', marginRight: 10}}
          />
          <View>
            <Text style={[styles.boldtxt18, {fontSize: 20}]}>포장 105건</Text>
            <Text>총 누적 4,999건</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const PopupMenu = props => {
  const {accoState, setAccoState} = props;
  return (
    <View style={{flex: 1}}>
      <Menu>
        <MenuTrigger
          style={{
            marginRight: 2,
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
          <Image source={require('../../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: -46,
                  marginLeft: 3,
                  width: width / 3.35,
                  paddingLeft: 10,
                },
                android: {
                  marginTop: -10,
                  paddingLeft: 11,
                  width: width / 3.35,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setAccoState(`배달/포장`)}>
            <Text style={{color: 'black', fontSize: 16}}>배달/포장</Text>
          </MenuOption>
          <MenuOption onSelect={() => setAccoState(`배달/포장`)}>
            <Text style={{color: 'black', fontSize: 16}}>배달/포장</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
const PopupMenu1 = props => {
  const {accoState1, setAccoState1} = props;
  return (
    <View style={{flex: 1}}>
      <Menu>
        <MenuTrigger
          style={{
            marginHorizontal: 2,
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
          <Image source={require('../../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: -46,
                  marginLeft: 3,
                  width: width / 3.35,
                  paddingLeft: 10,
                },
                android: {
                  marginTop: -10,
                  paddingLeft: 11,
                  marginLeft: 3,
                  width: width / 3.35,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setAccoState1(`현장결제`)}>
            <Text style={{color: 'black', fontSize: 16}}>현장결제</Text>
          </MenuOption>
          <MenuOption onSelect={() => setAccoState1(`온라인결제`)}>
            <Text style={{color: 'black', fontSize: 16}}>온라인결제</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
const PopupMenu2 = props => {
  const {accoState1, setAccoState1} = props;
  return (
    <View style={{flex: 1}}>
      <Menu>
        <MenuTrigger
          style={{
            marginLeft: 2,
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
          <Image source={require('../../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: -46,
                  marginLeft: 3,
                  width: width / 3.35,
                  paddingLeft: 10,
                },
                android: {
                  marginTop: -10,
                  paddingLeft: 11,
                  marginLeft: 3,
                  width: width / 3.35,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setAccoState1(`전체`)}>
            <Text style={{color: 'black', fontSize: 16}}>전체</Text>
          </MenuOption>
          <MenuOption onSelect={() => setAccoState1(`전체`)}>
            <Text style={{color: 'black', fontSize: 16}}>전체</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
const YearPopup = props => {
  const {yearAcco, setYearAcco} = props;
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
          }}>
          <Text style={{fontSize: 16}}>{yearAcco}</Text>
          <Image source={require('../../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: -46,
                  marginLeft: 1,
                  width: width / 2.23,
                  paddingLeft: 10,
                },
                android: {
                  marginTop: -10,
                  paddingLeft: 11,
                  width: width / 2.2,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setYearAcco(`2021`)}>
            <Text style={{color: 'black', fontSize: 16}}>2021</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`2020`)}>
            <Text style={{color: 'black', fontSize: 16}}>2020</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

const MonthPopup = props => {
  const {yearAcco, setYearAcco} = props;
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
          }}>
          <Text style={{fontSize: 16}}>{yearAcco}</Text>
          <Image source={require('../../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: -46,
                  marginLeft: 1,
                  width: width / 2.23,
                  paddingLeft: 10,
                },
                android: {
                  marginTop: -10,
                  paddingLeft: 11,
                  width: width / 2.2,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setYearAcco(`1월`)}>
            <Text style={{color: 'black', fontSize: 16}}>1월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`2월`)}>
            <Text style={{color: 'black', fontSize: 16}}>2월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`3월`)}>
            <Text style={{color: 'black', fontSize: 16}}>3월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`4월`)}>
            <Text style={{color: 'black', fontSize: 16}}>4월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`5월`)}>
            <Text style={{color: 'black', fontSize: 16}}>5월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`6월`)}>
            <Text style={{color: 'black', fontSize: 16}}>6월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`7월`)}>
            <Text style={{color: 'black', fontSize: 16}}>7월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`8월`)}>
            <Text style={{color: 'black', fontSize: 16}}>8월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`9월`)}>
            <Text style={{color: 'black', fontSize: 16}}>9월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`10월`)}>
            <Text style={{color: 'black', fontSize: 16}}>10월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`11월`)}>
            <Text style={{color: 'black', fontSize: 16}}>11월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`12월`)}>
            <Text style={{color: 'black', fontSize: 16}}>12월</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
