import * as React from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

import {MainWorkOnOffRefresh} from '../../components/MainWorkOnOffRefresh';
import {MainHeader} from '../../components/MainHeader';
import {TopTab} from '../../components/MainTopTab';
import {BottomTab} from '../../components/MainBottomTab';
import {AdminNotice} from '../../components/MainAdminNotice';
import {
  BtnSubmit,
  InputText,
  TopDelState,
  Underline1,
  Underline10,
} from '../../components/BOOTSTRAP';
import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';
import {
  DelListSuccess,
  DelSuccessData,
} from '../../components/CumulativeListState';
import {AdjustmentTopTab} from '../../components/AdjustmentTopTab';
import {
  AdjustmentViewData,
  AdjustmentViewListRender,
} from '../../components/AdjustmentViewList';
import {AdjustModal} from '../../components/AdjustModal';

const width = Dimensions.get('window').width;

export default function AdjustMentList({route}) {
  const [bottomTab, setBottomTab] = React.useState('3');

  return <MainBody1 bottomTab={bottomTab} setBottomTab={setBottomTab} />;
}

const MainBody1 = props => {
  const [topTab, setTopTab] = React.useState('1');
  const {bottomTab, setBottomTab} = props;
  const [accoState, setAccoState] = React.useState('상품 분류');
  const [accoState1, setAccoState1] = React.useState('전체');
  const [adjustModal, setAdjustModal] = React.useState(false);
  const [adjustSuccess, setAdjustSuccess] = React.useState(false);
  const [yearAcco, setYearAcco] = React.useState('2021');
  const [monthAcco, setMonthAcco] = React.useState('전체');
  return (
    <View style={{flex: 1}}>
      <MenuProvider>
        {/* 리스트 */}
        <FlatList
          contentContainerStyle={[{justifyContent: 'space-between'}]}
          style={{backgroundColor: 'white'}}
          ListHeaderComponent={
            <View style={{flex: 1}}>
              {/* 정산 금액 헤더 */}
              <AdjustHeader />

              <Underline10 />

              <AdjustmentTopTab topTab={topTab} setTopTab={setTopTab} />
              <View style={{padding: 15, flex: 1}}>
                {topTab === '1' ? (
                  <View style={styles.Row}>
                    <YearPopup yearAcco={yearAcco} setYearAcco={setYearAcco} />
                    <View style={{marginRight: 5}} />
                    <MonthPopup
                      yearAcco={monthAcco}
                      setYearAcco={setMonthAcco}
                    />
                    <BtnSubmit
                      title="조회"
                      style={{height: 45, width: 90, marginLeft: 5}}
                    />
                  </View>
                ) : (
                  <View style={styles.Row}>
                    <InputText
                      placeholder="시작 날짜 입력"
                      style={{flex: 1, marginRight: 3}}
                      input="2021-01-01"
                    />
                    <InputText
                      placeholder="종료 날짜 입력"
                      style={{flex: 1, marginLeft: 3}}
                      input="2021-03-01"
                    />
                    <BtnSubmit
                      title="조회"
                      style={{height: 45, width: 90, marginLeft: 5}}
                    />
                  </View>
                )}
              </View>
            </View>
          }
          data={AdjustmentViewData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <AdjustmentViewListRender
              item={item}
              setAdjustModal={setAdjustModal}
              setAdjustSuccess={setAdjustSuccess}
            />
          )}
          ListFooterComponent={
            <View style={[styles.underline100, {marginHorizontal: 15}]} />
          }
        />
        <AdjustModal
          adjustSuccess={adjustSuccess}
          open={adjustModal}
          cancel={() => setAdjustModal(false)}
          confirm={() => {}}
        />
      </MenuProvider>
    </View>
  );
};

const AdjustHeader = () => {
  return (
    <View style={{padding: 15}}>
      <View
        style={[
          styles.Row,
          {justifyContent: 'space-between', alignItems: 'center'},
        ]}>
        <View style={styles.Row1}>
          <Text style={styles.mediumtxt16}>3월 정산 금액</Text>
          <Text
            style={[
              styles.boldtxt18,
              {fontSize: 16, color: '#28B766', marginLeft: 15},
            ]}>
            정산중
          </Text>
        </View>
        <BtnSubmit
          title="누적 현황 보기"
          subtitle=""
          style={{width: 116, height: 35}}
          textStyle={styles.mediumtxt16}
          onPress={() => {
            navigate('CumulativeList');
          }}
        />
      </View>
      <Text style={[styles.boldtxt18, {fontSize: 30, marginTop: 15}]}>
        2,775,000원
      </Text>
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
          <Image source={require('../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: -46,
                  marginLeft: 1,
                  width: width / 3,
                  paddingLeft: 10,
                },
                android: {
                  marginTop: -10,
                  paddingLeft: 11,
                  width: width / 2.89,
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
          <Image source={require('../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: -46,
                  marginLeft: 1,
                  width: width / 3,
                  paddingLeft: 10,
                },
                android: {
                  marginTop: -10,
                  paddingLeft: 11,
                  width: width / 2.89,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setYearAcco(`전체`)}>
            <Text style={{color: 'black', fontSize: 16}}>전체</Text>
          </MenuOption>
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
