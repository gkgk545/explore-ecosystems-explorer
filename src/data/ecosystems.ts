export interface Animal {
  id: string;
  ecosystem: string;
  name: string;
  type: '동물' | '식물';
  imageUrl: string;
  description: string;
}

export const ecosystemData: Animal[] = [
  // 바다 생태계 (30개)
  {
    id: '1',
    ecosystem: '바다',
    name: '흰수염고래',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=300&h=200&fit=crop',
    description: '지구에서 가장 큰 동물이지만 새우처럼 작은 크릴을 먹고 살아!'
  },
  {
    id: '2',
    ecosystem: '바다',
    name: '돌고래',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop',
    description: '똑똑하고 장난꾸러기! 친구들과 함께 헤엄치며 놀기를 좋아해.'
  },
  {
    id: '3',
    ecosystem: '바다',
    name: '바다거북',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop',
    description: '100년 이상 살 수 있는 바다의 할아버지야!'
  },
  {
    id: '4',
    ecosystem: '바다',
    name: '상어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=300&h=200&fit=crop',
    description: '바다의 청소부! 아픈 물고기들을 잡아먹어서 바다를 깨끗하게 해줘.'
  },
  {
    id: '5',
    ecosystem: '바다',
    name: '해파리',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '95%가 물로 이루어져 있어서 거의 투명해!'
  },
  {
    id: '6',
    ecosystem: '바다',
    name: '문어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559081842-5a5eaeeec778?w=300&h=200&fit=crop',
    description: '8개의 다리로 동시에 여러 가지 일을 할 수 있는 멀티플레이어!'
  },
  {
    id: '7',
    ecosystem: '바다',
    name: '해마',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop',
    description: '아빠가 아기를 낳는 신기한 물고기야!'
  },
  {
    id: '8',
    ecosystem: '바다',
    name: '가오리',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=300&h=200&fit=crop',
    description: '날개처럼 생긴 지느러미로 바다를 날아다녀!'
  },
  {
    id: '9',
    ecosystem: '바다',
    name: '펭귄',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=300&h=200&fit=crop',
    description: '턱시도를 입은 것처럼 멋있고, 헤엄치기 실력은 최고!'
  },
  {
    id: '10',
    ecosystem: '바다',
    name: '해달',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=300&h=200&fit=crop',
    description: '등을 대고 둥둥 떠다니며 조개를 돌로 깨서 먹어!'
  },
  {
    id: '11',
    ecosystem: '바다',
    name: '참치',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=200&fit=crop',
    description: '바다를 빠르게 헤엄치며 먼 거리를 여행하는 스피드왕!'
  },
  {
    id: '12',
    ecosystem: '바다',
    name: '고래상어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '몸집은 크지만 플랑크톤만 먹는 바다의 착한 거인!'
  },
  {
    id: '13',
    ecosystem: '바다',
    name: '바다표범',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=300&h=200&fit=crop',
    description: '수염으로 물속의 진동을 느끼며 먹이를 찾아!'
  },
  {
    id: '14',
    ecosystem: '바다',
    name: '오징어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559081842-5a5eaeeec778?w=300&h=200&fit=crop',
    description: '위험할 때 먹물을 뿜어서 적의 눈을 가려버려!'
  },
  {
    id: '15',
    ecosystem: '바다',
    name: '바다뱀',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=300&h=200&fit=crop',
    description: '물속에서도 숨을 참고 헤엄칠 수 있는 바다의 뱀!'
  },
  {
    id: '16',
    ecosystem: '바다',
    name: '새우',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '뒤로 헤엄치며 빠르게 도망가는 바다의 작은 전사!'
  },
  {
    id: '17',
    ecosystem: '바다',
    name: '게',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop',
    description: '옆으로 걸어다니며 집게발로 먹이를 잡는 바다의 권투선수!'
  },
  {
    id: '18',
    ecosystem: '바다',
    name: '불가사리',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=300&h=200&fit=crop',
    description: '다리가 잘려도 다시 자라나는 바다의 재생왕!'
  },
  {
    id: '19',
    ecosystem: '바다',
    name: '성게',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop',
    description: '온몸에 가시를 가지고 있어서 바다의 고슴도치라고 불려!'
  },
  {
    id: '20',
    ecosystem: '바다',
    name: '바다코끼리',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=300&h=200&fit=crop',
    description: '코끼리처럼 긴 코를 가진 바다의 거인!'
  },
  {
    id: '21',
    ecosystem: '바다',
    name: '범고래',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop',
    description: '흑백 무늬가 멋진 바다의 사냥꾼!'
  },
  {
    id: '22',
    ecosystem: '바다',
    name: '바다사자',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=300&h=200&fit=crop',
    description: '물 밖에서도 빠르게 움직일 수 있는 바다의 아크로바트!'
  },
  {
    id: '23',
    ecosystem: '바다',
    name: '조개',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '딱딱한 껍데기 안에서 안전하게 사는 바다의 은둔자!'
  },
  {
    id: '24',
    ecosystem: '바다',
    name: '바다말미잘',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=300&h=200&fit=crop',
    description: '꽃처럼 예쁘지만 실은 동물인 바다의 신기한 친구!'
  },
  {
    id: '25',
    ecosystem: '바다',
    name: '미역',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '바다의 숲을 만들어주는 길고 멋진 해조류야!'
  },
  {
    id: '26',
    ecosystem: '바다',
    name: '다시마',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop',
    description: '미역보다 두껍고 넓어서 작은 물고기들의 숨바꼭질 장소!'
  },
  {
    id: '27',
    ecosystem: '바다',
    name: '산호',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=300&h=200&fit=crop',
    description: '알록달록 예쁜 바다의 정원을 만들어줘!'
  },
  {
    id: '28',
    ecosystem: '바다',
    name: '김',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop',
    description: '얇고 검은색이지만 영양이 가득한 바다 채소!'
  },
  {
    id: '29',
    ecosystem: '바다',
    name: '파래',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=300&h=200&fit=crop',
    description: '초록색으로 바다를 물들이는 작은 해조류야!'
  },
  {
    id: '30',
    ecosystem: '바다',
    name: '바다포도',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '포도알처럼 동글동글한 모양의 신기한 해조류!'
  },
  
  // 숲 생태계 (30개)
  {
    id: '31',
    ecosystem: '숲',
    name: '다람쥐',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1554456854-55a089fd4cb2?w=300&h=200&fit=crop',
    description: '좋아하는 도토리를 땅속에 숨겨두고 나중에 까먹기도 해.'
  },
  {
    id: '32',
    ecosystem: '숲',
    name: '곰',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=300&h=200&fit=crop',
    description: '겨울잠을 자는 동안 새끼를 낳는 신기한 동물!'
  },
  {
    id: '33',
    ecosystem: '숲',
    name: '사슴',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=300&h=200&fit=crop',
    description: '봄마다 새로운 뿔이 자라는 숲의 왕자님!'
  },
  {
    id: '34',
    ecosystem: '숲',
    name: '올빼미',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1568641213752-8e5b53f91cc5?w=300&h=200&fit=crop',
    description: '밤에 활동하며 360도로 고개를 돌릴 수 있어!'
  },
  {
    id: '35',
    ecosystem: '숲',
    name: '여우',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=200&fit=crop',
    description: '꼬리로 균형을 잡고 눈 속에서도 쥐를 잡을 수 있어!'
  },
  {
    id: '36',
    ecosystem: '숲',
    name: '토끼',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?w=300&h=200&fit=crop',
    description: '긴 귀로 멀리서 오는 소리까지 들을 수 있어!'
  },
  {
    id: '37',
    ecosystem: '숲',
    name: '딱따구리',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&h=200&fit=crop',
    description: '하루에 1만 2천 번씩 나무를 쪼아도 머리가 안 아파!'
  },
  {
    id: '38',
    ecosystem: '숲',
    name: '고슴도치',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1520561805070-83c413349512?w=300&h=200&fit=crop',
    description: '위험할 때는 공처럼 둥글게 말려서 자신을 보호해!'
  },
  {
    id: '39',
    ecosystem: '숲',
    name: '개미',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '자신의 몸무게보다 50배 무거운 것도 들 수 있는 힘짱!'
  },
  {
    id: '40',
    ecosystem: '숲',
    name: '나비',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1518539104897-ff8792ba8979?w=300&h=200&fit=crop',
    description: '애벌레에서 번데기를 거쳐 예쁜 나비로 변신!'
  },
  {
    id: '41',
    ecosystem: '숲',
    name: '늑대',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=300&h=200&fit=crop',
    description: '무리를 지어 사냥하며 하울링으로 소통하는 숲의 사냥꾼!'
  },
  {
    id: '42',
    ecosystem: '숲',
    name: '멧돼지',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582729108075-c0d5669bafd8?w=300&h=200&fit=crop',
    description: '코로 땅을 파며 먹이를 찾는 숲의 굴삭기!'
  },
  {
    id: '43',
    ecosystem: '숲',
    name: '족제비',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1520561805070-83c413349512?w=300&h=200&fit=crop',
    description: '몸이 길고 유연해서 좁은 틈새도 쏙쏙 들어가!'
  },
  {
    id: '44',
    ecosystem: '숲',
    name: '박쥐',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '초음파로 길을 찾으며 밤하늘을 나는 유일한 포유동물!'
  },
  {
    id: '45',
    ecosystem: '숲',
    name: '청설모',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1554456854-55a089fd4cb2?w=300&h=200&fit=crop',
    description: '나무에서 나무로 점프하는 숲의 아크로바트!'
  },
  {
    id: '46',
    ecosystem: '숲',
    name: '산양',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=300&h=200&fit=crop',
    description: '가파른 절벽도 거뜬히 오르는 숲의 암벽등반 전문가!'
  },
  {
    id: '47',
    ecosystem: '숲',
    name: '스라소니',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=200&fit=crop',
    description: '귀 끝에 털뭉치가 있는 야생 고양이과 동물!'
  },
  {
    id: '48',
    ecosystem: '숲',
    name: '오소리',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582729108075-c0d5669bafd8?w=300&h=200&fit=crop',
    description: '땅을 파는 실력이 뛰어난 숲의 터널 전문가!'
  },
  {
    id: '49',
    ecosystem: '숲',
    name: '담비',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1520561805070-83c413349512?w=300&h=200&fit=crop',
    description: '나무 위를 자유자재로 뛰어다니는 숲의 닌자!'
  },
  {
    id: '50',
    ecosystem: '숲',
    name: '두더지',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '땅속 터널을 만들며 사는 숲의 지하 건축가!'
  },
  {
    id: '51',
    ecosystem: '숲',
    name: '참나무',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
    description: '도토리를 맺어 다람쥐들의 겨울 간식을 만들어줘!'
  },
  {
    id: '52',
    ecosystem: '숲',
    name: '소나무',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=300&h=200&fit=crop',
    description: '1년 내내 푸른 잎을 유지하는 상록수의 대표!'
  },
  {
    id: '53',
    ecosystem: '숲',
    name: '단풍나무',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
    description: '가을이 되면 빨갛고 노란 예쁜 옷으로 갈아입어!'
  },
  {
    id: '54',
    ecosystem: '숲',
    name: '고사리',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '공룡이 살던 시대부터 지금까지 살아온 식물 할아버지!'
  },
  {
    id: '55',
    ecosystem: '숲',
    name: '버섯',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '나무의 영양분을 나누어 먹으며 함께 자라는 친구!'
  },
  {
    id: '56',
    ecosystem: '숲',
    name: '은행나무',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
    description: '가을에 노란 잎이 아름다운 살아있는 화석!'
  },
  {
    id: '57',
    ecosystem: '숲',
    name: '대나무',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=300&h=200&fit=crop',
    description: '하루에 1미터씩 자라는 숲의 스피드 성장왕!'
  },
  {
    id: '58',
    ecosystem: '숲',
    name: '이끼',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '나무 껍질과 바위를 초록 양탄자로 덮어주는 작은 식물!'
  },
  {
    id: '59',
    ecosystem: '숲',
    name: '진달래',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '봄에 분홍빛 꽃으로 숲을 아름답게 만들어줘!'
  },
  {
    id: '60',
    ecosystem: '숲',
    name: '도토리',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
    description: '참나무의 열매로 숲 동물들의 소중한 먹이가 되어줘!'
  },

  // 강 생태계 (30개)
  {
    id: '61',
    ecosystem: '강',
    name: '연어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=200&fit=crop',
    description: '알을 낳기 위해 태어난 강으로 다시 돌아오는 여행가!'
  },
  {
    id: '62',
    ecosystem: '강',
    name: '붕어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=200&fit=crop',
    description: '얕은 물에서도 잘 살 수 있는 적응력 최고의 물고기!'
  },
  {
    id: '63',
    ecosystem: '강',
    name: '잉어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=200&fit=crop',
    description: '100년 이상 살 수 있고 사람을 알아볼 수 있어!'
  },
  {
    id: '64',
    ecosystem: '강',
    name: '가재',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop',
    description: '집게발로 적을 위협하고 뒤로 헤엄쳐서 도망가!'
  },
  {
    id: '65',
    ecosystem: '강',
    name: '하마',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=300&h=200&fit=crop',
    description: '몸집은 크지만 헤엄치기 실력은 정말 좋아!'
  },
  {
    id: '66',
    ecosystem: '강',
    name: '악어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=300&h=200&fit=crop',
    description: '공룡 시대부터 거의 변하지 않은 살아있는 화석!'
  },
  {
    id: '67',
    ecosystem: '강',
    name: '비버',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1520561805070-83c413349512?w=300&h=200&fit=crop',
    description: '나무를 갉아서 댐을 만드는 천재 건축가!'
  },
  {
    id: '68',
    ecosystem: '강',
    name: '카피바라',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582729108075-c0d5669bafd8?w=300&h=200&fit=crop',
    description: '세상에서 가장 큰 설치류인데 성격은 정말 온순해!'
  },
  {
    id: '69',
    ecosystem: '강',
    name: '수달',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=300&h=200&fit=crop',
    description: '손을 잡고 떠다니며 함께 자는 사랑꾼들!'
  },
  {
    id: '70',
    ecosystem: '강',
    name: '개구리',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '올챙이에서 개구리로 변하며 물과 땅 둘 다에서 살 수 있어!'
  },
  {
    id: '71',
    ecosystem: '강',
    name: '송어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=200&fit=crop',
    description: '맑고 차가운 물을 좋아하는 강의 청정요원!'
  },
  {
    id: '72',
    ecosystem: '강',
    name: '메기',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=200&fit=crop',
    description: '긴 수염으로 탁한 물에서도 먹이를 찾는 강의 탐지기!'
  },
  {
    id: '73',
    ecosystem: '강',
    name: '뱀장어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=200&fit=crop',
    description: '뱀처럼 길쭉한 몸으로 구불구불 헤엄치는 물고기!'
  },
  {
    id: '74',
    ecosystem: '강',
    name: '도롱뇽',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '다리가 잘려도 다시 자라나는 강의 재생왕!'
  },
  {
    id: '75',
    ecosystem: '강',
    name: '거북이',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop',
    description: '느리지만 꾸준히 살아가는 강의 현자!'
  },
  {
    id: '76',
    ecosystem: '강',
    name: '물방개',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '물속에서 헤엄치며 사냥하는 강의 잠수부!'
  },
  {
    id: '77',
    ecosystem: '강',
    name: '장구벌레',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '모기의 애벌레로 물속에서 거꾸로 매달려 살아!'
  },
  {
    id: '78',
    ecosystem: '강',
    name: '물달팽이',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop',
    description: '나선형 집을 지고 천천히 이동하는 강의 이사꾼!'
  },
  {
    id: '79',
    ecosystem: '강',
    name: '플라나리아',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '몸이 반으로 잘려도 두 마리가 되는 신기한 동물!'
  },
  {
    id: '80',
    ecosystem: '강',
    name: '피라미',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=200&fit=crop',
    description: '무리를 지어 헤엄치며 강물을 반짝이게 만들어!'
  },
  {
    id: '81',
    ecosystem: '강',
    name: '연꽃',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '진흙 속에서 자라지만 아름다운 꽃을 피워!'
  },
  {
    id: '82',
    ecosystem: '강',
    name: '부들',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '갈색 소시지 같은 꽃이 특징인 습지 식물!'
  },
  {
    id: '83',
    ecosystem: '강',
    name: '창포',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '칼처럼 날카로운 잎을 가진 강가의 수호자!'
  },
  {
    id: '84',
    ecosystem: '강',
    name: '물옥잠',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '물 위에 동동 떠서 자라는 예쁜 보라색 꽃!'
  },
  {
    id: '85',
    ecosystem: '강',
    name: '말풀',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '물 속에서 자라며 물고기들의 숨바꼭질 장소가 되어줘!'
  },
  {
    id: '86',
    ecosystem: '강',
    name: '수련',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '물 위에 떠서 하얀 꽃을 피우는 강의 요정!'
  },
  {
    id: '87',
    ecosystem: '강',
    name: '갈대',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '바람에 흔들리며 강변에 운치를 더해주는 키 큰 풀!'
  },
  {
    id: '88',
    ecosystem: '강',
    name: '물수세미',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '물 위에 떠다니며 자라는 작고 귀여운 식물!'
  },
  {
    id: '89',
    ecosystem: '강',
    name: '애기부들',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '부들보다 작지만 똑같이 갈색 꽃을 피우는 작은 식물!'
  },
  {
    id: '90',
    ecosystem: '강',
    name: '물별',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '별처럼 작고 하얀 꽃을 피우는 강의 작은 별!'
  },

  // 갯벌 생태계 (30개)
  {
    id: '91',
    ecosystem: '갯벌',
    name: '게',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop',
    description: '집게발을 높이 들며 친구들에게 신호를 보내!'
  },
  {
    id: '92',
    ecosystem: '갯벌',
    name: '조개',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '딱딱한 껍데기로 몸을 보호하며 바닷물을 걸러줘!'
  },
  {
    id: '93',
    ecosystem: '갯벌',
    name: '갯지렁이',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '갯벌을 파고 다니며 흙을 부드럽게 만들어줘!'
  },
  {
    id: '94',
    ecosystem: '갯벌',
    name: '망둥어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=200&fit=crop',
    description: '물 밖에서도 잠깐 숨을 참고 살 수 있는 특별한 물고기!'
  },
  {
    id: '95',
    ecosystem: '갯벌',
    name: '굴',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '바위에 딱 붙어 살며 바닷물 속 영양분을 걸러 먹어!'
  },
  {
    id: '96',
    ecosystem: '갯벌',
    name: '바지락',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '모래 속에 숨어 살며 길쭉한 관으로 숨을 쉬어!'
  },
  {
    id: '97',
    ecosystem: '갯벌',
    name: '짱뚱어',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=200&fit=crop',
    description: '튀어나온 눈으로 360도를 볼 수 있는 갯벌의 망보기!'
  },
  {
    id: '98',
    ecosystem: '갯벌',
    name: '흰발농게',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop',
    description: '하나는 큰 집게, 하나는 작은 집게를 가진 개성파!'
  },
  {
    id: '99',
    ecosystem: '갯벌',
    name: '새우',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '투명한 몸으로 숨바꼭질을 잘하는 갯벌의 닌자!'
  },
  {
    id: '100',
    ecosystem: '갯벌',
    name: '백합',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '모래 속 깊이 숨어 살며 긴 관으로 먹이를 찾아!'
  },
  {
    id: '101',
    ecosystem: '갯벌',
    name: '갯가재',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop',
    description: '작지만 용감한 갯벌의 꼬마 전사!'
  },
  {
    id: '102',
    ecosystem: '갯벌',
    name: '칠게',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop',
    description: '칠흑같이 검은 몸으로 갯벌에서 살아가는 게!'
  },
  {
    id: '103',
    ecosystem: '갯벌',
    name: '꼬막',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '삐죽삐죽한 껍데기를 가진 갯벌의 보석!'
  },
  {
    id: '104',
    ecosystem: '갯벌',
    name: '가무락조개',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '둥글둥글한 껍데기로 갯벌 속에 안전하게 살아!'
  },
  {
    id: '105',
    ecosystem: '갯벌',
    name: '털게',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop',
    description: '온몸에 털이 나서 털게라고 불리는 귀여운 게!'
  },
  {
    id: '106',
    ecosystem: '갯벌',
    name: '동죽',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '길쭉한 모양의 조개로 갯벌 속에 깊숙이 살아!'
  },
  {
    id: '107',
    ecosystem: '갯벌',
    name: '맛조개',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '칼처럼 생긴 조개로 모래 속을 파고 들어가!'
  },
  {
    id: '108',
    ecosystem: '갯벌',
    name: '피조개',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop',
    description: '빨간 피처럼 생긴 체액을 가진 특별한 조개!'
  },
  {
    id: '109',
    ecosystem: '갯벌',
    name: '갯강구',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '작고 동글동글한 갯벌의 청소부!'
  },
  {
    id: '110',
    ecosystem: '갯벌',
    name: '갈파래',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '갯벌에서 기어다니며 먹이를 찾는 작은 생물!'
  },
  {
    id: '111',
    ecosystem: '갯벌',
    name: '함초',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '짠물에서도 잘 자라는 갯벌의 특별한 채소!'
  },
  {
    id: '112',
    ecosystem: '갯벌',
    name: '칠면초',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '가을이 되면 빨갛게 물들어 갯벌을 아름답게 만들어!'
  },
  {
    id: '113',
    ecosystem: '갯벌',
    name: '갈대',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '바람에 흔들리며 갯벌에 운치를 더해주는 키 큰 풀!'
  },
  {
    id: '114',
    ecosystem: '갯벌',
    name: '해홍나물',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '빨간 줄기가 특징이며 바닷바람을 맞으며 자라!'
  },
  {
    id: '115',
    ecosystem: '갯벌',
    name: '나문재',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '작고 동글동글한 잎을 가진 염분에 강한 식물!'
  },
  {
    id: '116',
    ecosystem: '갯벌',
    name: '퉁퉁마디',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '마디마디가 통통하게 부은 갯벌의 귀여운 식물!'
  },
  {
    id: '117',
    ecosystem: '갯벌',
    name: '세모고랭이',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '세모 모양의 줄기를 가진 갯벌의 특별한 풀!'
  },
  {
    id: '118',
    ecosystem: '갯벌',
    name: '해안가재미꽃',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '갯벌 근처에서 예쁜 꽃을 피우는 작은 식물!'
  },
  {
    id: '119',
    ecosystem: '갯벌',
    name: '갯잔디',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '갯벌과 바닷가에서 자라는 짠맛에 강한 잔디!'
  },
  {
    id: '120',
    ecosystem: '갯벌',
    name: '해국',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '바다 근처에서 노란 꽃을 피우는 국화과 식물!'
  },

  // 사막 생태계 (30개)
  {
    id: '121',
    ecosystem: '사막',
    name: '낙타',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582729108075-c0d5669bafd8?w=300&h=200&fit=crop',
    description: '등의 혹에 물을 저장해서 며칠간 물 없이도 살 수 있어!'
  },
  {
    id: '122',
    ecosystem: '사막',
    name: '전갈',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '꼬리의 독침으로 자신을 보호하는 사막의 전사!'
  },
  {
    id: '123',
    ecosystem: '사막',
    name: '사막여우',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=200&fit=crop',
    description: '큰 귀로 열을 식히고 모래 속 소리까지 들어!'
  },
  {
    id: '124',
    ecosystem: '사막',
    name: '뱀',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=300&h=200&fit=crop',
    description: '뜨거운 모래 위를 S자로 움직여서 화상을 피해!'
  },
  {
    id: '125',
    ecosystem: '사막',
    name: '도마뱀',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '위험할 때 꼬리를 스스로 자르고 도망가는 탈출 전문가!'
  },
  {
    id: '126',
    ecosystem: '사막',
    name: '독수리',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&h=200&fit=crop',
    description: '하늘 높이 날며 멀리서도 먹이를 찾을 수 있는 눈을 가졌어!'
  },
  {
    id: '127',
    ecosystem: '사막',
    name: '거미',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '모래 속에 숨어 살며 밤에만 활동하는 야행성!'
  },
  {
    id: '128',
    ecosystem: '사막',
    name: '메뚜기',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '강한 뒷다리로 멀리멀리 뛸 수 있는 점프의 왕!'
  },
  {
    id: '129',
    ecosystem: '사막',
    name: '딱정벌레',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '딱딱한 껍데기로 사막의 강한 햇빛을 견뎌내!'
  },
  {
    id: '130',
    ecosystem: '사막',
    name: '개미핥기',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582729108075-c0d5669bafd8?w=300&h=200&fit=crop',
    description: '긴 혀로 개미집에서 개미들을 쏙쏙 빼먹는 개미 사냥꾼!'
  },
  {
    id: '131',
    ecosystem: '사막',
    name: '미어캣',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1520561805070-83c413349512?w=300&h=200&fit=crop',
    description: '똑바로 서서 망을 보는 사막의 파수꾼!'
  },
  {
    id: '132',
    ecosystem: '사막',
    name: '사막쥐',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1554456854-55a089fd4cb2?w=300&h=200&fit=crop',
    description: '물 없이도 살 수 있는 사막의 생존 전문가!'
  },
  {
    id: '133',
    ecosystem: '사막',
    name: '프레리도그',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582729108075-c0d5669bafd8?w=300&h=200&fit=crop',
    description: '땅속에 터널을 파고 살며 개처럼 짖는 귀여운 동물!'
  },
  {
    id: '134',
    ecosystem: '사막',
    name: '코요테',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=300&h=200&fit=crop',
    description: '밤에 달을 보며 울부짖는 사막의 늑대!'
  },
  {
    id: '135',
    ecosystem: '사막',
    name: '아르마딜로',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1582729108075-c0d5669bafd8?w=300&h=200&fit=crop',
    description: '갑옷을 입은 것처럼 단단한 껍데기를 가진 동물!'
  },
  {
    id: '136',
    ecosystem: '사막',
    name: '사막거북',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop',
    description: '물 없이도 오랫동안 살 수 있는 사막의 현자!'
  },
  {
    id: '137',
    ecosystem: '사막',
    name: '개미',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '뜨거운 모래 위를 빠르게 움직이며 먹이를 찾아!'
  },
  {
    id: '138',
    ecosystem: '사막',
    name: '사막벌',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '모래 속에 집을 만들어 사는 사막의 건축가!'
  },
  {
    id: '139',
    ecosystem: '사막',
    name: '도롱뇽',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '사막의 작은 오아시스 근처에서 살아가는 양서류!'
  },
  {
    id: '140',
    ecosystem: '사막',
    name: '박쥐',
    type: '동물',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
    description: '밤에 활동하며 사막의 곤충들을 잡아먹어!'
  },
  {
    id: '141',
    ecosystem: '사막',
    name: '선인장',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '가시로 몸을 보호하고 두꺼운 줄기에 물을 저장해!'
  },
  {
    id: '142',
    ecosystem: '사막',
    name: '알로에',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '잎 안에 젤리 같은 물질을 저장해서 건조함을 이겨내!'
  },
  {
    id: '143',
    ecosystem: '사막',
    name: '바오바브나무',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
    description: '거대한 줄기에 물을 저장하는 사막의 물탱크!'
  },
  {
    id: '144',
    ecosystem: '사막',
    name: '용설란',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '100년에 한 번 꽃을 피우고는 생을 마감하는 신비한 식물!'
  },
  {
    id: '145',
    ecosystem: '사막',
    name: '사막장미',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1529559968766-6bf6a362d0a5?w=300&h=200&fit=crop',
    description: '메마른 사막에서도 아름다운 분홍빛 꽃을 피워내!'
  },
  {
    id: '146',
    ecosystem: '사막',
    name: '유카',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '검처럼 날카로운 잎을 가진 사막의 검사!'
  },
  {
    id: '147',
    ecosystem: '사막',
    name: '팜파스그라스',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '부드러운 깃털 같은 꽃을 피우는 사막의 풀!'
  },
  {
    id: '148',
    ecosystem: '사막',
    name: '사막버드나무',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
    description: '오아시스 근처에서 자라는 사막의 그늘나무!'
  },
  {
    id: '149',
    ecosystem: '사막',
    name: '조슈아나무',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
    description: '팔을 뻗은 모양으로 자라는 사막의 독특한 나무!'
  },
  {
    id: '150',
    ecosystem: '사막',
    name: '사막쑥',
    type: '식물',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    description: '은빛 잎으로 햇빛을 반사시키는 사막의 지혜로운 풀!'
  }
];

export const ecosystems = ['바다', '강', '숲', '갯벌', '사막'];

export const searchAnimals = (ecosystem: string): Animal[] => {
  const normalizedEcosystem = ecosystem.trim();
  return ecosystemData.filter(animal => 
    animal.ecosystem.includes(normalizedEcosystem) ||
    normalizedEcosystem.includes(animal.ecosystem)
  );
};