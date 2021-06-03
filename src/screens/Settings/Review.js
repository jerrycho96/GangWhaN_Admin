import * as React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Stars from 'react-native-stars';

import {
  BtnSubmit,
  IconBtn,
  InputText,
  Underline10,
} from '../../components/BOOTSTRAP';
import styles from '../../style/Style';

const reviewData = [
  {
    key: 1,
    date: '2021.01.02',
    name: '달달무슨달',
    review: '김치찌개 강추 !! 놀러와서 김치찌개 맛집을 알게 되었네요!!',
    commentstate: false,
    comment: null,
    commentname: null,
    commentdate: null,
    stars: 5,
    img: [
      {
        key: 1,
        src: require('../../images/reviewimg.png'),
      },
      {
        key: 2,
        src: require('../../images/reviewimg.png'),
      },
      {
        key: 3,
        src: require('../../images/reviewimg.png'),
      },
    ],
  },
  {
    key: 2,
    date: '2021.01.02',
    name: '민로라',
    review: '김치찌개 강추 !! 놀러와서 김치찌개 맛집을 알게 되었네요!!',
    commentstate: true,
    comment: '소중한 리뷰 감사합니다. ^^',
    commentname: '강화김치찌개',
    commentdate: '2021.01.02',
    stars: 5,
    img: [
      {
        key: 1,
        src: require('../../images/reviewimg.png'),
      },
    ],
  },
];

export default function Review() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        style={{flex: 1, backgroundColor: 'white'}}
        data={reviewData}
        renderItem={({item}) => <RenderReview item={item} />}
        ListFooterComponent={
          <IconBtn
            require={require('../../images/greenplus.png')}
            title="더보기"
            style={{backgroundColor: '#D9F5E5', margin: 15}}
            textStyle={{color: '#28B766'}}
          />
        }
      />
    </SafeAreaView>
  );
}

function RenderReview({item}) {
  return (
    <>
      <View style={{padding: 15}}>
        <View
          style={[
            styles.Row1,
            {justifyContent: 'space-between', marginBottom: 10},
          ]}>
          <View style={styles.Row1}>
            <Text style={{color: '#777777', marginRight: 10}}>{item.date}</Text>
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
          </View>
          {/* 리뷰 삭제 버튼 */}
          <Image source={require('../../images/categorydelete.png')} />
        </View>

        {/* 리뷰 점수 */}
        <ReviewStars />

        {/* 리뷰 내용 */}
        <Text style={{fontSize: 16, marginVertical: 10}}>{item.review}</Text>

        {/* 리뷰 이미지 */}
        <ReviewImage item={item} />

        {item.commentstate === false ? (
          // {/* 댓글 입력창 */}
          <CommentInput />
        ) : (
          // {/* 댓글 */}
          <Comment item={item} />
        )}
      </View>
      <Underline10 />
    </>
  );
}

const ReviewStars = () => {
  return (
    <View style={{alignItems: 'flex-start'}}>
      <Stars
        display={3.67}
        spacing={2}
        count={5}
        starSize={17}
        fullStar={require('../../images/reviewstar.png')}
        emptyStar={require('../../images/reviewstar.png')}
      />
    </View>
  );
};

const ReviewImage = ({item}) => {
  const width = Dimensions.get('window').width;

  return (
    <View style={[styles.Row1, {justifyContent: 'space-between'}]}>
      {item.img.map(img => {
        return (
          <View style={styles.Row1} id={img.key}>
            <Image
              source={img.src}
              style={{width: width / 3.4, height: width / 3.4}}
            />
          </View>
        );
      })}
    </View>
  );
};

const CommentInput = () => {
  return (
    <View style={[styles.Row1, {flex: 1, marginTop: 15}]}>
      <InputText placeholder="댓글 입력" style={{flex: 1}} />
      <BtnSubmit title="등록" style={{height: 45, width: 70, marginLeft: 10}} />
    </View>
  );
};

const Comment = ({item}) => {
  return (
    <View
      style={[
        styles.Row1,
        {
          borderWidth: 1,
          borderColor: '#E5E5E5',
          backgroundColor: '#F9F9F9',
          paddingHorizontal: 15,
          paddingVertical: 20,
          alignItems: 'flex-start',
          marginTop: 15,
        },
      ]}>
      <Image
        source={require('../../images/commenticon.png')}
        style={{marginRight: 15}}
      />
      <View style={{flex: 1}}>
        <View
          style={[
            styles.Row1,
            {
              justifyContent: 'space-between',
            },
          ]}>
          <View style={styles.Row1}>
            <Text style={styles.boldtxt18}>{item.commentname}</Text>
            <Text style={{color: '#777777', marginLeft: 10}}>
              {item.commentdate}
            </Text>
          </View>
          <Image source={require('../../images/categorydelete.png')} />
        </View>
        <Text style={{fontSize: 16, marginTop: 10}}>{item.comment}</Text>
      </View>
    </View>
  );
};
