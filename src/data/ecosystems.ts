export interface Animal {
  id: string;
  ecosystem: string;
  name: string;
  type: '동물' | '식물';
  description: string;
}

export const ecosystemData: Animal[] = [
  // 바다 생태계 (50개)
  {
    id: '1',
    ecosystem: '바다',
    name: '흰수염고래',
    type: '동물',
    description: '지구에서 가장 큰 동물이지만 새우처럼 작은 크릴을 먹고 살아!'
  },
  {
    id: '2',
    ecosystem: '바다',
    name: '돌고래',
    type: '동물',
    description: '똑똑하고 장난꾸러기! 친구들과 함께 헤엄치며 놀기를 좋아해.'
  },
  {
    id: '3',
    ecosystem: '바다',
    name: '바다거북',
    type: '동물',
    description: '100년 이상 살 수 있는 바다의 할아버지야!'
  },
  {
    id: '4',
    ecosystem: '바다',
    name: '백상아리',
    type: '동물',
    description: '바다의 강력한 사냥꾼! 이빨이 빠져도 계속 새로 자라나.'
  },
  {
    id: '5',
    ecosystem: '바다',
    name: '해파리',
    type: '동물',
    description: '95%가 물로 이루어져 있어서 거의 투명해!'
  },
  {
    id: '6',
    ecosystem: '바다',
    name: '문어',
    type: '동물',
    description: '8개의 다리로 동시에 여러 가지 일을 할 수 있는 멀티플레이어!'
  },
  {
    id: '7',
    ecosystem: '바다',
    name: '해마',
    type: '동물',
    description: '아빠가 아기를 낳는 신기한 물고기야!'
  },
  {
    id: '8',
    ecosystem: '바다',
    name: '가오리',
    type: '동물',
    description: '날개처럼 생긴 지느러미로 바다를 날아다녀!'
  },
  {
    id: '9',
    ecosystem: '바다',
    name: '펭귄',
    type: '동물',
    description: '턱시도를 입은 것처럼 멋있고, 헤엄치기 실력은 최고!'
  },
  {
    id: '10',
    ecosystem: '바다',
    name: '해달',
    type: '동물',
    description: '등을 대고 둥둥 떠다니며 조개를 돌로 깨서 먹어!'
  },
  {
    id: '11',
    ecosystem: '바다',
    name: '참치',
    type: '동물',
    description: '바다를 빠르게 헤엄치며 먼 거리를 여행하는 스피드왕!'
  },
  {
    id: '12',
    ecosystem: '바다',
    name: '고래상어',
    type: '동물',
    description: '몸집은 크지만 플랑크톤만 먹는 바다의 착한 거인!'
  },
  {
    id: '13',
    ecosystem: '바다',
    name: '바다표범',
    type: '동물',
    description: '수염으로 물속의 진동을 느끼며 먹이를 찾아!'
  },
  {
    id: '14',
    ecosystem: '바다',
    name: '오징어',
    type: '동물',
    description: '위험할 때 먹물을 뿜어서 적의 눈을 가려버려!'
  },
  {
    id: '15',
    ecosystem: '바다',
    name: '바다뱀',
    type: '동물',
    description: '물속에서도 숨을 참고 헤엄칠 수 있는 바다의 뱀!'
  },
  {
    id: '16',
    ecosystem: '바다',
    name: '새우',
    type: '동물',
    description: '뒤로 헤엄치며 빠르게 도망가는 바다의 작은 전사!'
  },
  {
    id: '17',
    ecosystem: '바다',
    name: '게',
    type: '동물',
    description: '옆으로 걸어다니며 집게발로 먹이를 잡는 바다의 권투선수!'
  },
  {
    id: '18',
    ecosystem: '바다',
    name: '불가사리',
    type: '동물',
    description: '다리가 잘려도 다시 자라나는 바다의 재생왕!'
  },
  {
    id: '19',
    ecosystem: '바다',
    name: '성게',
    type: '동물',
    description: '온몸에 가시를 가지고 있어서 바다의 고슴도치라고 불려!'
  },
  {
    id: '20',
    ecosystem: '바다',
    name: '바다코끼리',
    type: '동물',
    description: '코끼리처럼 긴 코를 가진 바다의 거인!'
  },
  {
    id: '21',
    ecosystem: '바다',
    name: '범고래',
    type: '동물',
    description: '흑백 무늬가 멋진 바다의 사냥꾼!'
  },
  {
    id: '22',
    ecosystem: '바다',
    name: '바다사자',
    type: '동물',
    description: '물 밖에서도 빠르게 움직일 수 있는 바다의 아크로바트!'
  },
  {
    id: '23',
    ecosystem: '바다',
    name: '조개',
    type: '동물',
    description: '딱딱한 껍데기 안에서 안전하게 사는 바다의 은둔자!'
  },
  {
    id: '24',
    ecosystem: '바다',
    name: '바다말미잘',
    type: '동물',
    description: '꽃처럼 예쁘지만 실은 동물인 바다의 신기한 친구!'
  },
  {
    id: '25',
    ecosystem: '바다',
    name: '미역',
    type: '식물',
    description: '바다의 숲을 만들어주는 길고 멋진 해조류야!'
  },
  {
    id: '26',
    ecosystem: '바다',
    name: '다시마',
    type: '식물',
    description: '미역보다 두껍고 넓어서 작은 물고기들의 숨바꼭질 장소!'
  },
  {
    id: '27',
    ecosystem: '바다',
    name: '산호',
    type: '식물',
    description: '알록달록 예쁜 바다의 정원을 만들어줘!'
  },
  {
    id: '28',
    ecosystem: '바다',
    name: '김',
    type: '식물',
    description: '얇고 검은색이지만 영양이 가득한 바다 채소!'
  },
  {
    id: '29',
    ecosystem: '바다',
    name: '파래',
    type: '식물',
    description: '초록색으로 바다를 물들이는 작은 해조류야!'
  },
  {
    id: '30',
    ecosystem: '바다',
    name: '바다포도',
    type: '식물',
    description: '포도알처럼 동글동글한 모양의 신기한 해조류!'
  },
  {
    id: '31',
    ecosystem: '바다',
    name: '점박이물범',
    type: '동물',
    description: '몸에 귀여운 점박이 무늬가 있는 바다의 강아지!'
  },
  {
    id: '32',
    ecosystem: '바다',
    name: '귀상어',
    type: '동물',
    description: '머리가 망치처럼 생겨서 망치상어라고도 불려!'
  },
  {
    id: '33',
    ecosystem: '바다',
    name: '대왕오징어',
    type: '동물',
    description: '눈 크기가 농구공만 한, 아주 깊은 바다에 사는 거인 오징어야.'
  },
  {
    id: '34',
    ecosystem: '바다',
    name: '날치',
    type: '동물',
    description: '위험을 느끼면 물 위로 튀어올라 하늘을 나는 물고기!'
  },
  {
    id: '35',
    ecosystem: '바다',
    name: '복어',
    type: '동물',
    description: '몸을 풍선처럼 부풀려서 적을 놀라게 해!'
  },
  {
    id: '36',
    ecosystem: '바다',
    name: '흰동가리',
    type: '동물',
    description: '애니메이션 주인공 니모! 말미잘과 함께 사는 친구야.'
  },
  {
    id: '37',
    ecosystem: '바다',
    name: '대게',
    type: '동물',
    description: '길고 맛있는 다리를 가진 바다의 신사!'
  },
  {
    id: '38',
    ecosystem: '바다',
    name: '전복',
    type: '동물',
    description: '껍데기 안쪽에 진주처럼 반짝이는 부분이 있어.'
  },
  {
    id: '39',
    ecosystem: '바다',
    name: '가시복',
    type: '동물',
    description: '복어처럼 몸을 부풀리는데, 온몸에 가시가 돋아나!'
  },
  {
    id: '40',
    ecosystem: '바다',
    name: '청새치',
    type: '동물',
    description: '창처럼 뾰족하고 긴 주둥이를 가진 바다의 검객!'
  },
  {
    id: '41',
    ecosystem: '바다',
    name: '상괭이',
    type: '동물',
    description: '등지느러미가 없는 미소 짓는 토종 돌고래야.'
  },
  {
    id: '42',
    ecosystem: '바다',
    name: '쏠배감펭',
    type: '동물',
    description: '사자 갈기처럼 화려한 지느러미를 가졌지만 독이 있어!'
  },
  {
    id: '43',
    ecosystem: '바다',
    name: '쥐가오리',
    type: '동물',
    description: '거대한 날개를 펼치고 하늘을 날 듯 헤엄치는 바다의 비행기.'
  },
  {
    id: '44',
    ecosystem: '바다',
    name: '개복치',
    type: '동물',
    description: '몸이 동그랗고 납작해서 헤엄치는 모습이 독특해.'
  },
  {
    id: '45',
    ecosystem: '바다',
    name: '향유고래',
    type: '동물',
    description: '세상에서 가장 큰 뇌를 가진 똑똑한 잠수왕!'
  },
  {
    id: '46',
    ecosystem: '바다',
    name: '바다나리',
    type: '식물',
    description: '꽃처럼 보이지만 사실은 동물과 가까운 신기한 생물!'
  },
  {
    id: '47',
    ecosystem: '바다',
    name: '해면동물',
    type: '동물',
    description: '스펀지처럼 몸에 구멍이 많아서 물을 쭉쭉 빨아들여.'
  },
  {
    id: '48',
    ecosystem: '바다',
    name: '갯민숭달팽이',
    type: '동물',
    description: '껍데기가 없는 대신 화려한 색으로 몸을 뽐내는 바다의 패셔니스타!'
  },
  {
    id: '49',
    ecosystem: '바다',
    name: '거머리말',
    type: '식물',
    description: '물고기들의 숨숨집이 되어주는 중요한 바다 풀이야.'
  },
  {
    id: '50',
    ecosystem: '바다',
    name: '플랑크톤',
    type: '식물',
    description: '아주 작지만 바다 생물들의 중요한 먹이가 되어주는 생물!'
  },
  
  // 숲 생태계 (50개)
  {
    id: '51',
    ecosystem: '숲',
    name: '다람쥐',
    type: '동물',
    description: '좋아하는 도토리를 땅속에 숨겨두고 나중에 까먹기도 해.'
  },
  {
    id: '52',
    ecosystem: '숲',
    name: '곰',
    type: '동물',
    description: '겨울잠을 자는 동안 새끼를 낳는 신기한 동물!'
  },
  {
    id: '53',
    ecosystem: '숲',
    name: '사슴',
    type: '동물',
    description: '봄마다 새로운 뿔이 자라는 숲의 왕자님!'
  },
  {
    id: '54',
    ecosystem: '숲',
    name: '올빼미',
    type: '동물',
    description: '밤에 활동하며 360도로 고개를 돌릴 수 있어!'
  },
  {
    id: '55',
    ecosystem: '숲',
    name: '여우',
    type: '동물',
    description: '꼬리로 균형을 잡고 눈 속에서도 쥐를 잡을 수 있어!'
  },
  {
    id: '56',
    ecosystem: '숲',
    name: '토끼',
    type: '동물',
    description: '긴 귀로 멀리서 오는 소리까지 들을 수 있어!'
  },
  {
    id: '57',
    ecosystem: '숲',
    name: '딱따구리',
    type: '동물',
    description: '하루에 1만 2천 번씩 나무를 쪼아도 머리가 안 아파!'
  },
  {
    id: '58',
    ecosystem: '숲',
    name: '고슴도치',
    type: '동물',
    description: '위험할 때는 공처럼 둥글게 말려서 자신을 보호해!'
  },
  {
    id: '59',
    ecosystem: '숲',
    name: '개미',
    type: '동물',
    description: '자신의 몸무게보다 50배 무거운 것도 들 수 있는 힘짱!'
  },
  {
    id: '60',
    ecosystem: '숲',
    name: '나비',
    type: '동물',
    description: '애벌레에서 번데기를 거쳐 예쁜 나비로 변신!'
  },
  {
    id: '61',
    ecosystem: '숲',
    name: '늑대',
    type: '동물',
    description: '무리를 지어 사냥하며 하울링으로 소통하는 숲의 사냥꾼!'
  },
  {
    id: '62',
    ecosystem: '숲',
    name: '멧돼지',
    type: '동물',
    description: '코로 땅을 파며 먹이를 찾는 숲의 굴삭기!'
  },
  {
    id: '63',
    ecosystem: '숲',
    name: '족제비',
    type: '동물',
    description: '몸이 길고 유연해서 좁은 틈새도 쏙쏙 들어가!'
  },
  {
    id: '64',
    ecosystem: '숲',
    name: '박쥐',
    type: '동물',
    description: '초음파로 길을 찾으며 밤하늘을 나는 유일한 포유동물!'
  },
  {
    id: '65',
    ecosystem: '숲',
    name: '청설모',
    type: '동물',
    description: '나무에서 나무로 점프하는 숲의 아크로바트!'
  },
  {
    id: '66',
    ecosystem: '숲',
    name: '산양',
    type: '동물',
    description: '가파른 절벽도 거뜬히 오르는 숲의 암벽등반 전문가!'
  },
  {
    id: '67',
    ecosystem: '숲',
    name: '스라소니',
    type: '동물',
    description: '귀 끝에 털뭉치가 있는 야생 고양이과 동물!'
  },
  {
    id: '68',
    ecosystem: '숲',
    name: '오소리',
    type: '동물',
    description: '땅을 파는 실력이 뛰어난 숲의 터널 전문가!'
  },
  {
    id: '69',
    ecosystem: '숲',
    name: '담비',
    type: '동물',
    description: '나무 위를 자유자재로 뛰어다니는 숲의 닌자!'
  },
  {
    id: '70',
    ecosystem: '숲',
    name: '두더지',
    type: '동물',
    description: '땅속 터널을 만들며 사는 숲의 지하 건축가!'
  },
  {
    id: '71',
    ecosystem: '숲',
    name: '참나무',
    type: '식물',
    description: '도토리를 맺어 다람쥐들의 겨울 간식을 만들어줘!'
  },
  {
    id: '72',
    ecosystem: '숲',
    name: '소나무',
    type: '식물',
    description: '1년 내내 푸른 잎을 유지하는 상록수의 대표!'
  },
  {
    id: '73',
    ecosystem: '숲',
    name: '단풍나무',
    type: '식물',
    description: '가을이 되면 빨갛고 노란 예쁜 옷으로 갈아입어!'
  },
  {
    id: '74',
    ecosystem: '숲',
    name: '고사리',
    type: '식물',
    description: '공룡이 살던 시대부터 지금까지 살아온 식물 할아버지!'
  },
  {
    id: '75',
    ecosystem: '숲',
    name: '버섯',
    type: '식물',
    description: '나무의 영양분을 나누어 먹으며 함께 자라는 친구!'
  },
  {
    id: '76',
    ecosystem: '숲',
    name: '은행나무',
    type: '식물',
    description: '가을에 노란 잎이 아름다운 살아있는 화석!'
  },
  {
    id: '77',
    ecosystem: '숲',
    name: '대나무',
    type: '식물',
    description: '하루에 1미터씩 자라는 숲의 스피드 성장왕!'
  },
  {
    id: '78',
    ecosystem: '숲',
    name: '이끼',
    type: '식물',
    description: '나무 껍질과 바위를 초록 양탄자로 덮어주는 작은 식물!'
  },
  {
    id: '79',
    ecosystem: '숲',
    name: '진달래',
    type: '식물',
    description: '봄에 분홍빛 꽃으로 숲을 아름답게 만들어줘!'
  },
  {
    id: '80',
    ecosystem: '숲',
    name: '도토리',
    type: '식물',
    description: '참나무의 열매로 숲 동물들의 소중한 먹이가 되어줘!'
  },
  {
    id: '81',
    ecosystem: '숲',
    name: '너구리',
    type: '동물',
    description: '굴을 파고 그 속에서 겨울잠을 자는 귀여운 동물이야.'
  },
  {
    id: '82',
    ecosystem: '숲',
    name: '지렁이',
    type: '동물',
    description: '땅속을 돌아다니며 흙을 건강하게 만드는 숲의 농부!'
  },
  {
    id: '83',
    ecosystem: '숲',
    name: '장수풍뎅이',
    type: '동물',
    description: '커다란 뿔을 가진 숲속의 멋진 갑옷 장수!'
  },
  {
    id: '84',
    ecosystem: '숲',
    name: '사슴벌레',
    type: '동물',
    description: '큰 턱이 집게처럼 생긴 숲의 힘센 장사!'
  },
  {
    id: '85',
    ecosystem: '숲',
    name: '무당벌레',
    type: '동물',
    description: '빨간 등에 까만 점이 콕콕! 식물을 도와주는 착한 곤충이야.'
  },
  {
    id: '86',
    ecosystem: '숲',
    name: '반딧불이',
    type: '동물',
    description: '밤이 되면 엉덩이에서 빛을 내는 숲의 작은 전등!'
  },
  {
    id: '87',
    ecosystem: '숲',
    name: '달팽이',
    type: '동물',
    description: '자기 집을 등에 지고 다니는 느긋한 여행가!'
  },
  {
    id: '88',
    ecosystem: '숲',
    name: '뱀',
    type: '동물',
    description: '허물을 벗으며 성장하는 숲의 변신술사!'
  },
  {
    id: '89',
    ecosystem: '숲',
    name: '노루',
    type: '동물',
    description: '사슴과 비슷하지만 뿔이 더 작고 귀여워.'
  },
  {
    id: '90',
    ecosystem: '숲',
    name: '호랑이',
    type: '동물',
    description: '멋진 줄무늬를 가진 숲의 용감한 왕!'
  },
  {
    id: '91',
    ecosystem: '숲',
    name: '전나무',
    type: '식물',
    description: '크리스마스 트리로 자주 쓰이는 뾰족뾰족한 나무.'
  },
  {
    id: '92',
    ecosystem: '숲',
    name: '잣나무',
    type: '식물',
    description: '고소한 잣이 열리는, 늘 푸른 기상을 가진 나무.'
  },
  {
    id: '93',
    ecosystem: '숲',
    name: '느티나무',
    type: '식물',
    description: '마을을 지켜주는 것처럼 늠름하고 커다란 나무.'
  },
  {
    id: '94',
    ecosystem: '숲',
    name: '복분자',
    type: '식물',
    description: '달콤한 열매가 열리는 숲 속의 작은 보석.'
  },
  {
    id: '95',
    ecosystem: '숲',
    name: '도라지',
    type: '식물',
    description: '뿌리는 약으로도 쓰고, 예쁜 보라색 꽃을 피워.'
  },
  {
    id: '96',
    ecosystem: '숲',
    name: '민들레',
    type: '식물',
    description: '바람을 타고 씨앗을 멀리 퍼뜨리는 솜사탕 같은 꽃.'
  },
  {
    id: '97',
    ecosystem: '숲',
    name: '제비꽃',
    type: '식물',
    description: '봄에 예쁜 보라색 꽃을 피우는 작고 귀여운 꽃.'
  },
  {
    id: '98',
    ecosystem: '숲',
    name: '들국화',
    type: '식물',
    description: '가을 숲을 아름답게 수놓는 소박하고 예쁜 꽃.'
  },
  {
    id: '99',
    ecosystem: '숲',
    name: '산삼',
    type: '식물',
    description: '깊은 산속에서 자라는 아주 귀한 약초!'
  },
  {
    id: '100',
    ecosystem: '숲',
    name: '철쭉',
    type: '식물',
    description: '봄이 되면 온 산을 붉게 물들이는 화려한 꽃.'
  },

  // 강 생태계 (50개)
  {
    id: '101',
    ecosystem: '강',
    name: '연어',
    type: '동물',
    description: '알을 낳기 위해 태어난 강으로 다시 돌아오는 여행가!'
  },
  {
    id: '102',
    ecosystem: '강',
    name: '붕어',
    type: '동물',
    description: '얕은 물에서도 잘 살 수 있는 적응력 최고의 물고기!'
  },
  {
    id: '103',
    ecosystem: '강',
    name: '잉어',
    type: '동물',
    description: '100년 이상 살 수 있고 사람을 알아볼 수 있어!'
  },
  {
    id: '104',
    ecosystem: '강',
    name: '가재',
    type: '동물',
    description: '집게발로 적을 위협하고 뒤로 헤엄쳐서 도망가!'
  },
  {
    id: '105',
    ecosystem: '강',
    name: '하마',
    type: '동물',
    description: '몸집은 크지만 헤엄치기 실력은 정말 좋아!'
  },
  {
    id: '106',
    ecosystem: '강',
    name: '악어',
    type: '동물',
    description: '공룡 시대부터 거의 변하지 않은 살아있는 화석!'
  },
  {
    id: '107',
    ecosystem: '강',
    name: '비버',
    type: '동물',
    description: '나무를 갉아서 댐을 만드는 천재 건축가!'
  },
  {
    id: '108',
    ecosystem: '강',
    name: '카피바라',
    type: '동물',
    description: '세상에서 가장 큰 설치류인데 성격은 정말 온순해!'
  },
  {
    id: '109',
    ecosystem: '강',
    name: '수달',
    type: '동물',
    description: '손을 잡고 떠다니며 함께 자는 사랑꾼들!'
  },
  {
    id: '110',
    ecosystem: '강',
    name: '개구리',
    type: '동물',
    description: '올챙이에서 개구리로 변하며 물과 땅 둘 다에서 살 수 있어!'
  },
  {
    id: '111',
    ecosystem: '강',
    name: '송어',
    type: '동물',
    description: '맑고 차가운 물을 좋아하는 강의 청정요원!'
  },
  {
    id: '112',
    ecosystem: '강',
    name: '메기',
    type: '동물',
    description: '긴 수염으로 탁한 물에서도 먹이를 찾는 강의 탐지기!'
  },
  {
    id: '113',
    ecosystem: '강',
    name: '뱀장어',
    type: '동물',
    description: '뱀처럼 길쭉한 몸으로 구불구불 헤엄치는 물고기!'
  },
  {
    id: '114',
    ecosystem: '강',
    name: '도롱뇽',
    type: '동물',
    description: '다리가 잘려도 다시 자라나는 강의 재생왕!'
  },
  {
    id: '115',
    ecosystem: '강',
    name: '거북이',
    type: '동물',
    description: '느리지만 꾸준히 살아가는 강의 현자!'
  },
  {
    id: '116',
    ecosystem: '강',
    name: '물방개',
    type: '동물',
    description: '물속에서 헤엄치며 사냥하는 강의 잠수부!'
  },
  {
    id: '117',
    ecosystem: '강',
    name: '장구벌레',
    type: '동물',
    description: '모기의 애벌레로 물속에서 거꾸로 매달려 살아!'
  },
  {
    id: '118',
    ecosystem: '강',
    name: '물달팽이',
    type: '동물',
    description: '나선형 집을 지고 천천히 이동하는 강의 이사꾼!'
  },
  {
    id: '119',
    ecosystem: '강',
    name: '플라나리아',
    type: '동물',
    description: '몸이 반으로 잘려도 두 마리가 되는 신기한 동물!'
  },
  {
    id: '120',
    ecosystem: '강',
    name: '피라미',
    type: '동물',
    description: '무리를 지어 헤엄치며 강물을 반짝이게 만들어!'
  },
  {
    id: '121',
    ecosystem: '강',
    name: '연꽃',
    type: '식물',
    description: '진흙 속에서 자라지만 아름다운 꽃을 피워!'
  },
  {
    id: '122',
    ecosystem: '강',
    name: '부들',
    type: '식물',
    description: '갈색 소시지 같은 꽃이 특징인 습지 식물!'
  },
  {
    id: '123',
    ecosystem: '강',
    name: '창포',
    type: '식물',
    description: '칼처럼 날카로운 잎을 가진 강가의 수호자!'
  },
  {
    id: '124',
    ecosystem: '강',
    name: '물옥잠',
    type: '식물',
    description: '물 위에 동동 떠서 자라는 예쁜 보라색 꽃!'
  },
  {
    id: '125',
    ecosystem: '강',
    name: '말풀',
    type: '식물',
    description: '물 속에서 자라며 물고기들의 숨바꼭질 장소가 되어줘!'
  },
  {
    id: '126',
    ecosystem: '강',
    name: '수련',
    type: '식물',
    description: '물 위에 떠서 하얀 꽃을 피우는 강의 요정!'
  },
  {
    id: '127',
    ecosystem: '강',
    name: '갈대',
    type: '식물',
    description: '바람에 흔들리며 강변에 운치를 더해주는 키 큰 풀!'
  },
  {
    id: '128',
    ecosystem: '강',
    name: '물수세미',
    type: '식물',
    description: '물 위에 떠다니며 자라는 작고 귀여운 식물!'
  },
  {
    id: '129',
    ecosystem: '강',
    name: '애기부들',
    type: '식물',
    description: '부들보다 작지만 똑같이 갈색 꽃을 피우는 작은 식물!'
  },
  {
    id: '130',
    ecosystem: '강',
    name: '물별',
    type: '식물',
    description: '별처럼 작고 하얀 꽃을 피우는 강의 작은 별!'
  },
  {
    id: '131',
    ecosystem: '강',
    name: '오리',
    type: '동물',
    description: '꽥꽥! 물 위를 동동 떠다니는 귀여운 친구.'
  },
  {
    id: '132',
    ecosystem: '강',
    name: '백로',
    type: '동물',
    description: '하얀 깃털과 긴 다리를 가진 우아한 새.'
  },
  {
    id: '133',
    ecosystem: '강',
    name: '왜가리',
    type: '동물',
    description: '물고기를 기다릴 때 한 발로 서 있는 명상가!'
  },
  {
    id: '134',
    ecosystem: '강',
    name: '물총새',
    type: '동물',
    description: '파란 보석처럼 빛나는 깃털을 가진 물고기 사냥의 명수!'
  },
  {
    id: '135',
    ecosystem: '강',
    name: '가물치',
    type: '동물',
    description: '힘이 아주 세서 강 속의 폭군이라고 불려.'
  },
  {
    id: '136',
    ecosystem: '강',
    name: '쏘가리',
    type: '동물',
    description: '표범처럼 멋진 점무늬를 가진 민물고기의 왕!'
  },
  {
    id: '137',
    ecosystem: '강',
    name: '다슬기',
    type: '동물',
    description: '깨끗한 물에만 사는, 강바닥의 작은 청소부.'
  },
  {
    id: '138',
    ecosystem: '강',
    name: '재첩',
    type: '동물',
    description: '작은 조개지만 국물을 뽀얗게 만드는 마법사!'
  },
  {
    id: '139',
    ecosystem: '강',
    name: '잠자리',
    type: '동물',
    description: '애벌레 시절을 물속에서 보내는 하늘의 곡예사!'
  },
  {
    id: '140',
    ecosystem: '강',
    name: '소금쟁이',
    type: '동물',
    description: '물 위를 스케이트 타듯이 미끄러져 다니는 곤충!'
  },
  {
    id: '141',
    ecosystem: '강',
    name: '은어',
    type: '동물',
    description: '몸에서 수박향기가 나는 신기하고 맛있는 물고기.'
  },
  {
    id: '142',
    ecosystem: '강',
    name: '미꾸라지',
    type: '동물',
    description: '진흙 속에 파고들어 숨는 것을 좋아하는 미끌미끌 친구.'
  },
  {
    id: '143',
    ecosystem: '강',
    name: '빙어',
    type: '동물',
    description: '겨울에 얼음 밑에서 잡히는 투명하고 작은 물고기.'
  },
  {
    id: '144',
    ecosystem: '강',
    name: '황쏘가리',
    type: '동물',
    description: '온몸이 황금색으로 빛나는 아주 귀한 천연기념물이야.'
  },
  {
    id: '145',
    ecosystem: '강',
    name: '두꺼비',
    type: '동물',
    description: '울퉁불퉁한 피부를 가졌지만 복을 가져다준대!'
  },
  {
    id: '146',
    ecosystem: '강',
    name: '개구리밥',
    type: '식물',
    description: '작은 잎들이 모여 연못 위를 초록색으로 덮어줘.'
  },
  {
    id: '147',
    ecosystem: '강',
    name: '마름',
    type: '식물',
    description: '네모난 열매가 열리는, 물 위에 떠 있는 식물.'
  },
  {
    id: '148',
    ecosystem: '강',
    name: '검정말',
    type: '식물',
    description: '물속에서 자라며 깨끗한 산소를 만들어주는 고마운 식물.'
  },
  {
    id: '149',
    ecosystem: '강',
    name: '버드나무',
    type: '식물',
    description: '가지가 길게 늘어져 강가에 멋진 풍경을 만들어.'
  },
  {
    id: '150',
    ecosystem: '강',
    name: '물풀',
    type: '식물',
    description: '물고기들의 좋은 간식이자 숨숨집이 되어주는 풀!'
  },

  // 갯벌 생태계 (50개)
  {
    id: '151',
    ecosystem: '갯벌',
    name: '게',
    type: '동물',
    description: '집게발을 높이 들며 친구들에게 신호를 보내!'
  },
  {
    id: '152',
    ecosystem: '갯벌',
    name: '조개',
    type: '동물',
    description: '딱딱한 껍데기로 몸을 보호하며 바닷물을 걸러줘!'
  },
  {
    id: '153',
    ecosystem: '갯벌',
    name: '갯지렁이',
    type: '동물',
    description: '갯벌을 파고 다니며 흙을 부드럽게 만들어줘!'
  },
  {
    id: '154',
    ecosystem: '갯벌',
    name: '망둥어',
    type: '동물',
    description: '물 밖에서도 잠깐 숨을 참고 살 수 있는 특별한 물고기!'
  },
  {
    id: '155',
    ecosystem: '갯벌',
    name: '굴',
    type: '동물',
    description: '바위에 딱 붙어 살며 바닷물 속 영양분을 걸러 먹어!'
  },
  {
    id: '156',
    ecosystem: '갯벌',
    name: '바지락',
    type: '동물',
    description: '모래 속에 숨어 살며 길쭉한 관으로 숨을 쉬어!'
  },
  {
    id: '157',
    ecosystem: '갯벌',
    name: '짱뚱어',
    type: '동물',
    description: '튀어나온 눈으로 360도를 볼 수 있는 갯벌의 망보기!'
  },
  {
    id: '158',
    ecosystem: '갯벌',
    name: '흰발농게',
    type: '동물',
    description: '하나는 큰 집게, 하나는 작은 집게를 가진 개성파!'
  },
  {
    id: '159',
    ecosystem: '갯벌',
    name: '새우',
    type: '동물',
    description: '투명한 몸으로 숨바꼭질을 잘하는 갯벌의 닌자!'
  },
  {
    id: '160',
    ecosystem: '갯벌',
    name: '백합',
    type: '동물',
    description: '모래 속 깊이 숨어 살며 긴 관으로 먹이를 찾아!'
  },
  {
    id: '161',
    ecosystem: '갯벌',
    name: '갯가재',
    type: '동물',
    description: '작지만 용감한 갯벌의 꼬마 전사!'
  },
  {
    id: '162',
    ecosystem: '갯벌',
    name: '칠게',
    type: '동물',
    description: '칠흑같이 검은 몸으로 갯벌에서 살아가는 게!'
  },
  {
    id: '163',
    ecosystem: '갯벌',
    name: '꼬막',
    type: '동물',
    description: '삐죽삐죽한 껍데기를 가진 갯벌의 보석!'
  },
  {
    id: '164',
    ecosystem: '갯벌',
    name: '가무락조개',
    type: '동물',
    description: '둥글둥글한 껍데기로 갯벌 속에 안전하게 살아!'
  },
  {
    id: '165',
    ecosystem: '갯벌',
    name: '털게',
    type: '동물',
    description: '온몸에 털이 나서 털게라고 불리는 귀여운 게!'
  },
  {
    id: '166',
    ecosystem: '갯벌',
    name: '동죽',
    type: '동물',
    description: '길쭉한 모양의 조개로 갯벌 속에 깊숙이 살아!'
  },
  {
    id: '167',
    ecosystem: '갯벌',
    name: '맛조개',
    type: '동물',
    description: '칼처럼 생긴 조개로 모래 속을 파고 들어가!'
  },
  {
    id: '168',
    ecosystem: '갯벌',
    name: '피조개',
    type: '동물',
    description: '빨간 피처럼 생긴 체액을 가진 특별한 조개!'
  },
  {
    id: '169',
    ecosystem: '갯벌',
    name: '갯강구',
    type: '동물',
    description: '작고 동글동글한 갯벌의 청소부!'
  },
  {
    id: '170',
    ecosystem: '갯벌',
    name: '갈파래',
    type: '동물',
    description: '갯벌에서 기어다니며 먹이를 찾는 작은 생물!'
  },
  {
    id: '171',
    ecosystem: '갯벌',
    name: '함초',
    type: '식물',
    description: '짠물에서도 잘 자라는 갯벌의 특별한 채소!'
  },
  {
    id: '172',
    ecosystem: '갯벌',
    name: '칠면초',
    type: '식물',
    description: '가을이 되면 빨갛게 물들어 갯벌을 아름답게 만들어!'
  },
  {
    id: '173',
    ecosystem: '갯벌',
    name: '갈대',
    type: '식물',
    description: '바람에 흔들리며 갯벌에 운치를 더해주는 키 큰 풀!'
  },
  {
    id: '174',
    ecosystem: '갯벌',
    name: '해홍나물',
    type: '식물',
    description: '빨간 줄기가 특징이며 바닷바람을 맞으며 자라!'
  },
  {
    id: '175',
    ecosystem: '갯벌',
    name: '나문재',
    type: '식물',
    description: '작고 동글동글한 잎을 가진 염분에 강한 식물!'
  },
  {
    id: '176',
    ecosystem: '갯벌',
    name: '퉁퉁마디',
    type: '식물',
    description: '마디마디가 통통하게 부은 갯벌의 귀여운 식물!'
  },
  {
    id: '177',
    ecosystem: '갯벌',
    name: '세모고랭이',
    type: '식물',
    description: '세모 모양의 줄기를 가진 갯벌의 특별한 풀!'
  },
  {
    id: '178',
    ecosystem: '갯벌',
    name: '해안가재미꽃',
    type: '식물',
    description: '갯벌 근처에서 예쁜 꽃을 피우는 작은 식물!'
  },
  {
    id: '179',
    ecosystem: '갯벌',
    name: '갯잔디',
    type: '식물',
    description: '갯벌과 바닷가에서 자라는 짠맛에 강한 잔디!'
  },
  {
    id: '180',
    ecosystem: '갯벌',
    name: '해국',
    type: '식물',
    description: '바다 근처에서 노란 꽃을 피우는 국화과 식물!'
  },
  {
    id: '181',
    ecosystem: '갯벌',
    name: '낙지',
    type: '동물',
    description: '다리가 잘려도 다시 자라나는 똑똑한 연체동물.'
  },
  {
    id: '182',
    ecosystem: '갯벌',
    name: '주꾸미',
    type: '동물',
    description: '봄이 되면 알이 꽉 차는 맛있는 갯벌 친구!'
  },
  {
    id: '183',
    ecosystem: '갯벌',
    name: '소라',
    type: '동물',
    description: '뾰족한 껍데기를 가진, 파도 소리를 담고 있는 친구.'
  },
  {
    id: '184',
    ecosystem: '갯벌',
    name: '비단고둥',
    type: '동물',
    description: '비단처럼 고운 무늬를 가진 작은 고둥이야.'
  },
  {
    id: '185',
    ecosystem: '갯벌',
    name: '민챙이',
    type: '동물',
    description: '껍데기가 없는 민달팽이처럼 생겼어.'
  },
  {
    id: '186',
    ecosystem: '갯벌',
    name: '말뚝망둥어',
    type: '동물',
    description: '지느러미로 갯벌 위를 걷고 뛸 수 있는 신기한 물고기.'
  },
  {
    id: '187',
    ecosystem: '갯벌',
    name: '도요새',
    type: '동물',
    description: '긴 부리로 갯벌 속 숨어있는 생물들을 콕콕 찾아 먹어.'
  },
  {
    id: '188',
    ecosystem: '갯벌',
    name: '갈매기',
    type: '동물',
    description: '끼룩끼룩! 갯벌과 바다를 자유롭게 날아다니는 새.'
  },
  {
    id: '189',
    ecosystem: '갯벌',
    name: '해삼',
    type: '동물',
    description: '몸이 흐물흐물하지만 위험하면 내장을 뱉어내고 도망가!'
  },
  {
    id: '190',
    ecosystem: '갯벌',
    name: '불가사리',
    type: '동물',
    description: '별 모양을 한 갯벌의 귀여운 포식자.'
  },
  {
    id: '191',
    ecosystem: '갯벌',
    name: '엽낭게',
    type: '동물',
    description: '모래를 동글동글하게 뭉쳐 예술 작품을 만드는 게.'
  },
  {
    id: '192',
    ecosystem: '갯벌',
    name: '집게',
    type: '동물',
    description: '빈 소라 껍데기를 집으로 사용하는 이사 전문가!'
  },
  {
    id: '193',
    ecosystem: '갯벌',
    name: '따개비',
    type: '동물',
    description: '바위에 작은 화산처럼 붙어서 살아가는 동물.'
  },
  {
    id: '194',
    ecosystem: '갯벌',
    name: '갯고들빼기',
    type: '식물',
    description: '짠물이 닿는 바위틈에서도 꿋꿋하게 자라는 식물.'
  },
  {
    id: '195',
    ecosystem: '갯벌',
    name: '갯끈풀',
    type: '식물',
    description: '갯벌에 뿌리를 내려 흙을 단단하게 잡아주는 고마운 풀.'
  },
  {
    id: '196',
    ecosystem: '갯벌',
    name: '지채',
    type: '식물',
    description: '초록색 융단처럼 갯벌 위를 넓게 덮는 해조류.'
  },
  {
    id: '197',
    ecosystem: '갯벌',
    name: '서해비단고둥',
    type: '동물',
    description: '반짝이는 껍데기를 가진 서해 갯벌의 멋쟁이.'
  },
  {
    id: '198',
    ecosystem: '갯벌',
    name: '밤게',
    type: '동물',
    description: '밤처럼 어두운 색깔을 가진 야행성 게.'
  },
  {
    id: '199',
    ecosystem: '갯벌',
    name: '큰구슬우렁이',
    type: '동물',
    description: '다른 조개를 드릴처럼 뚫어 속살을 파먹는 사냥꾼!'
  },
  {
    id: '200',
    ecosystem: '갯벌',
    name: '잘피',
    type: '식물',
    description: '물고기들의 산란장이자 숨숨집이 되는 바다의 잔디밭.'
  },

  // 사막 생태계 (50개)
  {
    id: '201',
    ecosystem: '사막',
    name: '낙타',
    type: '동물',
    description: '등의 혹에 물을 저장해서 며칠간 물 없이도 살 수 있어!'
  },
  {
    id: '202',
    ecosystem: '사막',
    name: '전갈',
    type: '동물',
    description: '꼬리의 독침으로 자신을 보호하는 사막의 전사!'
  },
  {
    id: '203',
    ecosystem: '사막',
    name: '사막여우',
    type: '동물',
    description: '큰 귀로 열을 식히고 모래 속 소리까지 들어!'
  },
  {
    id: '204',
    ecosystem: '사막',
    name: '방울뱀',
    type: '동물',
    description: '꼬리를 흔들어 "치르르" 소리를 내서 위험을 알려!'
  },
  {
    id: '205',
    ecosystem: '사막',
    name: '도마뱀',
    type: '동물',
    description: '위험할 때 꼬리를 스스로 자르고 도망가는 탈출 전문가!'
  },
  {
    id: '206',
    ecosystem: '사막',
    name: '독수리',
    type: '동물',
    description: '하늘 높이 날며 멀리서도 먹이를 찾을 수 있는 눈을 가졌어!'
  },
  {
    id: '207',
    ecosystem: '사막',
    name: '거미',
    type: '동물',
    description: '모래 속에 숨어 살며 밤에만 활동하는 야행성!'
  },
  {
    id: '208',
    ecosystem: '사막',
    name: '메뚜기',
    type: '동물',
    description: '강한 뒷다리로 멀리멀리 뛸 수 있는 점프의 왕!'
  },
  {
    id: '209',
    ecosystem: '사막',
    name: '딱정벌레',
    type: '동물',
    description: '딱딱한 껍데기로 사막의 강한 햇빛을 견뎌내!'
  },
  {
    id: '210',
    ecosystem: '사막',
    name: '개미핥기',
    type: '동물',
    description: '긴 혀로 개미집에서 개미들을 쏙쏙 빼먹는 개미 사냥꾼!'
  },
  {
    id: '211',
    ecosystem: '사막',
    name: '미어캣',
    type: '동물',
    description: '똑바로 서서 망을 보는 사막의 파수꾼!'
  },
  {
    id: '212',
    ecosystem: '사막',
    name: '사막쥐',
    type: '동물',
    description: '물 없이도 살 수 있는 사막의 생존 전문가!'
  },
  {
    id: '213',
    ecosystem: '사막',
    name: '프레리도그',
    type: '동물',
    description: '땅속에 터널을 파고 살며 개처럼 짖는 귀여운 동물!'
  },
  {
    id: '214',
    ecosystem: '사막',
    name: '코요테',
    type: '동물',
    description: '밤에 달을 보며 울부짖는 사막의 늑대!'
  },
  {
    id: '215',
    ecosystem: '사막',
    name: '아르마딜로',
    type: '동물',
    description: '갑옷을 입은 것처럼 단단한 껍데기를 가진 동물!'
  },
  {
    id: '216',
    ecosystem: '사막',
    name: '사막거북',
    type: '동물',
    description: '물 없이도 오랫동안 살 수 있는 사막의 현자!'
  },
  {
    id: '217',
    ecosystem: '사막',
    name: '개미',
    type: '동물',
    description: '뜨거운 모래 위를 빠르게 움직이며 먹이를 찾아!'
  },
  {
    id: '218',
    ecosystem: '사막',
    name: '사막벌',
    type: '동물',
    description: '모래 속에 집을 만들어 사는 사막의 건축가!'
  },
  {
    id: '219',
    ecosystem: '사막',
    name: '도롱뇽',
    type: '동물',
    description: '사막의 작은 오아시스 근처에서 살아가는 양서류!'
  },
  {
    id: '220',
    ecosystem: '사막',
    name: '박쥐',
    type: '동물',
    description: '밤에 활동하며 사막의 곤충들을 잡아먹어!'
  },
  {
    id: '221',
    ecosystem: '사막',
    name: '선인장',
    type: '식물',
    description: '가시로 몸을 보호하고 두꺼운 줄기에 물을 저장해!'
  },
  {
    id: '222',
    ecosystem: '사막',
    name: '알로에',
    type: '식물',
    description: '잎 안에 젤리 같은 물질을 저장해서 건조함을 이겨내!'
  },
  {
    id: '223',
    ecosystem: '사막',
    name: '바오바브나무',
    type: '식물',
    description: '거대한 줄기에 물을 저장하는 사막의 물탱크!'
  },
  {
    id: '224',
    ecosystem: '사막',
    name: '용설란',
    type: '식물',
    description: '100년에 한 번 꽃을 피우고는 생을 마감하는 신비한 식물!'
  },
  {
    id: '225',
    ecosystem: '사막',
    name: '사막장미',
    type: '식물',
    description: '메마른 사막에서도 아름다운 분홍빛 꽃을 피워내!'
  },
  {
    id: '226',
    ecosystem: '사막',
    name: '유카',
    type: '식물',
    description: '검처럼 날카로운 잎을 가진 사막의 검사!'
  },
  {
    id: '227',
    ecosystem: '사막',
    name: '팜파스그라스',
    type: '식물',
    description: '부드러운 깃털 같은 꽃을 피우는 사막의 풀!'
  },
  {
    id: '228',
    ecosystem: '사막',
    name: '사막버드나무',
    type: '식물',
    description: '오아시스 근처에서 자라는 사막의 그늘나무!'
  },
  {
    id: '229',
    ecosystem: '사막',
    name: '조슈아나무',
    type: '식물',
    description: '팔을 뻗은 모양으로 자라는 사막의 독특한 나무!'
  },
  {
    id: '230',
    ecosystem: '사막',
    name: '사막쑥',
    type: '식물',
    description: '은빛 잎으로 햇빛을 반사시키는 사막의 지혜로운 풀!'
  },
  {
    id: '231',
    ecosystem: '사막',
    name: '타조',
    type: '동물',
    description: '날지는 못하지만 세상에서 가장 빨리 달리는 새!'
  },
  {
    id: '232',
    ecosystem: '사막',
    name: '하이에나',
    type: '동물',
    description: '독특한 웃음소리를 내는 사막의 청소부.'
  },
  {
    id: '233',
    ecosystem: '사막',
    name: '모래고양이',
    type: '동물',
    description: '발바닥이 털로 덮여 있어 뜨거운 모래 위도 걸을 수 있어.'
  },
  {
    id: '234',
    ecosystem: '사막',
    name: '뿔도마뱀',
    type: '동물',
    description: '위험하면 눈에서 피를 뿜어 적을 놀라게 해!'
  },
  {
    id: '235',
    ecosystem: '사막',
    name: '가젤',
    type: '동물',
    description: '아름다운 뿔을 가진, 아주 빠르게 달리는 동물.'
  },
  {
    id: '236',
    ecosystem: '사막',
    name: '자칼',
    type: '동물',
    description: '여우와 비슷하게 생겼지만 무리 지어 사냥해.'
  },
  {
    id: '237',
    ecosystem: '사막',
    name: '사막 이구아나',
    type: '동물',
    description: '뜨거운 바위 위에서 햇볕 쬐는 것을 좋아해.'
  },
  {
    id: '238',
    ecosystem: '사막',
    name: '벌거숭이두더지쥐',
    type: '동물',
    description: '땅속에서 거의 평생을 보내는 신기한 동물.'
  },
  {
    id: '239',
    ecosystem: '사막',
    name: '콘도르',
    type: '동물',
    description: '날개를 펼치면 아주 큰, 하늘의 왕!'
  },
  {
    id: '240',
    ecosystem: '사막',
    name: '거대캥거루쥐',
    type: '동물',
    description: '뒷다리로 캥거루처럼 깡충깡충 뛰어다녀.'
  },
  {
    id: '241',
    ecosystem: '사막',
    name: '아프리카가시쥐',
    type: '동물',
    description: '등에 고슴도치처럼 뻣뻣한 털이 나 있어.'
  },
  {
    id: '242',
    ecosystem: '사막',
    name: '길달리기새',
    type: '동물',
    description: '만화에 나오는 것처럼 정말 빨리 달리는 새!'
  },
  {
    id: '243',
    ecosystem: '사막',
    name: '치타',
    type: '동물',
    description: '세상에서 가장 빠른 육지 동물!'
  },
  {
    id: '244',
    ecosystem: '사막',
    name: '페커리',
    type: '동물',
    description: '멧돼지와 비슷하게 생긴, 무리 지어 사는 동물.'
  },
  {
    id: '245',
    ecosystem: '사막',
    name: '대추야자',
    type: '식물',
    description: '달콤한 열매가 열리는 사막의 고마운 나무.'
  },
  {
    id: '246',
    ecosystem: '사막',
    name: '크레오소트 부시',
    type: '식물',
    description: '비가 오면 독특한 냄새를 풍기는 강인한 떨기나무.'
  },
  {
    id: '247',
    ecosystem: '사막',
    name: '오코틸로',
    type: '식물',
    description: '가느다란 가지 끝에 빨간 꽃이 피는 신기한 식물.'
  },
  {
    id: '248',
    ecosystem: '사막',
    name: '프리클리 페어',
    type: '식물',
    description: '납작하고 동그란 줄기가 특징인 선인장 종류.'
  },
  {
    id: '249',
    ecosystem: '사막',
    name: '사막 메리골드',
    type: '식물',
    description: '건조한 땅에서도 노랗고 예쁜 꽃을 피우는 들꽃.'
  },
  {
    id: '250',
    ecosystem: '사막',
    name: '텀블위드',
    type: '식물',
    description: '바람이 불면 굴러다니며 씨앗을 퍼뜨리는 식물.'
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
