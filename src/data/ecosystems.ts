export interface Animal {
  id: string;
  ecosystem: string;
  name: string;
  type: '동물' | '식물';
  imageUrl: string;
  description: string;
}

export const ecosystemData: Animal[] = [
  // 바다 생태계
  {
    id: '1',
    ecosystem: '바다',
    name: '흰수염고래',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '지구에서 가장 큰 동물이지만 새우처럼 작은 크릴을 먹고 살아!'
  },
  {
    id: '2',
    ecosystem: '바다',
    name: '돌고래',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '똑똑하고 장난꾸러기! 친구들과 함께 헤엄치며 놀기를 좋아해.'
  },
  {
    id: '3',
    ecosystem: '바다',
    name: '바다거북',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '100년 이상 살 수 있는 바다의 할아버지야!'
  },
  {
    id: '4',
    ecosystem: '바다',
    name: '상어',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '바다의 청소부! 아픈 물고기들을 잡아먹어서 바다를 깨끗하게 해줘.'
  },
  {
    id: '5',
    ecosystem: '바다',
    name: '해파리',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '95%가 물로 이루어져 있어서 거의 투명해!'
  },
  {
    id: '6',
    ecosystem: '바다',
    name: '문어',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '8개의 다리로 동시에 여러 가지 일을 할 수 있는 멀티플레이어!'
  },
  {
    id: '7',
    ecosystem: '바다',
    name: '해마',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '아빠가 아기를 낳는 신기한 물고기야!'
  },
  {
    id: '8',
    ecosystem: '바다',
    name: '가오리',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '날개처럼 생긴 지느러미로 바다를 날아다녀!'
  },
  {
    id: '9',
    ecosystem: '바다',
    name: '펭귄',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '턱시도를 입은 것처럼 멋있고, 헤엄치기 실력은 최고!'
  },
  {
    id: '10',
    ecosystem: '바다',
    name: '해달',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '등을 대고 둥둥 떠다니며 조개를 돌로 깨서 먹어!'
  },
  {
    id: '11',
    ecosystem: '바다',
    name: '미역',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '바다의 숲을 만들어주는 길고 멋진 해조류야!'
  },
  {
    id: '12',
    ecosystem: '바다',
    name: '다시마',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '미역보다 두껍고 넓어서 작은 물고기들의 숨바꼭질 장소!'
  },
  {
    id: '13',
    ecosystem: '바다',
    name: '산호',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '알록달록 예쁜 바다의 정원을 만들어줘!'
  },
  {
    id: '14',
    ecosystem: '바다',
    name: '김',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '얇고 검은색이지만 영양이 가득한 바다 채소!'
  },
  {
    id: '15',
    ecosystem: '바다',
    name: '파래',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '초록색으로 바다를 물들이는 작은 해조류야!'
  },
  
  // 숲 생태계
  {
    id: '16',
    ecosystem: '숲',
    name: '다람쥐',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '좋아하는 도토리를 땅속에 숨겨두고 나중에 까먹기도 해.'
  },
  {
    id: '17',
    ecosystem: '숲',
    name: '곰',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '겨울잠을 자는 동안 새끼를 낳는 신기한 동물!'
  },
  {
    id: '18',
    ecosystem: '숲',
    name: '사슴',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '봄마다 새로운 뿔이 자라는 숲의 왕자님!'
  },
  {
    id: '19',
    ecosystem: '숲',
    name: '올빼미',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '밤에 활동하며 360도로 고개를 돌릴 수 있어!'
  },
  {
    id: '20',
    ecosystem: '숲',
    name: '여우',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '꼬리로 균형을 잡고 눈 속에서도 쥐를 잡을 수 있어!'
  },
  {
    id: '21',
    ecosystem: '숲',
    name: '토끼',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '긴 귀로 멀리서 오는 소리까지 들을 수 있어!'
  },
  {
    id: '22',
    ecosystem: '숲',
    name: '딱따구리',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '하루에 1만 2천 번씩 나무를 쪼아도 머리가 안 아파!'
  },
  {
    id: '23',
    ecosystem: '숲',
    name: '고슴도치',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '위험할 때는 공처럼 둥글게 말려서 자신을 보호해!'
  },
  {
    id: '24',
    ecosystem: '숲',
    name: '개미',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '자신의 몸무게보다 50배 무거운 것도 들 수 있는 힘짱!'
  },
  {
    id: '25',
    ecosystem: '숲',
    name: '나비',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '애벌레에서 번데기를 거쳐 예쁜 나비로 변신!'
  },
  {
    id: '26',
    ecosystem: '숲',
    name: '참나무',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '도토리를 맺어 다람쥐들의 겨울 간식을 만들어줘!'
  },
  {
    id: '27',
    ecosystem: '숲',
    name: '소나무',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '1년 내내 푸른 잎을 유지하는 상록수의 대표!'
  },
  {
    id: '28',
    ecosystem: '숲',
    name: '단풍나무',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '가을이 되면 빨갛고 노란 예쁜 옷으로 갈아입어!'
  },
  {
    id: '29',
    ecosystem: '숲',
    name: '고사리',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '공룡이 살던 시대부터 지금까지 살아온 식물 할아버지!'
  },
  {
    id: '30',
    ecosystem: '숲',
    name: '버섯',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '나무의 영양분을 나누어 먹으며 함께 자라는 친구!'
  },

  // 강 생태계
  {
    id: '31',
    ecosystem: '강',
    name: '연어',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '알을 낳기 위해 태어난 강으로 다시 돌아오는 여행가!'
  },
  {
    id: '32',
    ecosystem: '강',
    name: '붕어',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '얕은 물에서도 잘 살 수 있는 적응력 최고의 물고기!'
  },
  {
    id: '33',
    ecosystem: '강',
    name: '잉어',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '100년 이상 살 수 있고 사람을 알아볼 수 있어!'
  },
  {
    id: '34',
    ecosystem: '강',
    name: '가재',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '집게발로 적을 위협하고 뒤로 헤엄쳐서 도망가!'
  },
  {
    id: '35',
    ecosystem: '강',
    name: '하마',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '몸집은 크지만 헤엄치기 실력은 정말 좋아!'
  },
  {
    id: '36',
    ecosystem: '강',
    name: '악어',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '공룡 시대부터 거의 변하지 않은 살아있는 화석!'
  },
  {
    id: '37',
    ecosystem: '강',
    name: '비버',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '나무를 갉아서 댐을 만드는 천재 건축가!'
  },
  {
    id: '38',
    ecosystem: '강',
    name: '카피바라',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '세상에서 가장 큰 설치류인데 성격은 정말 온순해!'
  },
  {
    id: '39',
    ecosystem: '강',
    name: '수달',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '손을 잡고 떠다니며 함께 자는 사랑꾼들!'
  },
  {
    id: '40',
    ecosystem: '강',
    name: '개구리',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '올챙이에서 개구리로 변하며 물과 땅 둘 다에서 살 수 있어!'
  },
  {
    id: '41',
    ecosystem: '강',
    name: '연꽃',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '진흙 속에서 자라지만 아름다운 꽃을 피워!'
  },
  {
    id: '42',
    ecosystem: '강',
    name: '부들',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '갈색 소시지 같은 꽃이 특징인 습지 식물!'
  },
  {
    id: '43',
    ecosystem: '강',
    name: '창포',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '칼처럼 날카로운 잎을 가진 강가의 수호자!'
  },
  {
    id: '44',
    ecosystem: '강',
    name: '물옥잠',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '물 위에 동동 떠서 자라는 예쁜 보라색 꽃!'
  },
  {
    id: '45',
    ecosystem: '강',
    name: '말풀',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '물 속에서 자라며 물고기들의 숨바꼭질 장소가 되어줘!'
  },

  // 갯벌 생태계
  {
    id: '46',
    ecosystem: '갯벌',
    name: '게',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '집게발을 높이 들며 친구들에게 신호를 보내!'
  },
  {
    id: '47',
    ecosystem: '갯벌',
    name: '조개',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '딱딱한 껍데기로 몸을 보호하며 바닷물을 걸러줘!'
  },
  {
    id: '48',
    ecosystem: '갯벌',
    name: '갯지렁이',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '갯벌을 파고 다니며 흙을 부드럽게 만들어줘!'
  },
  {
    id: '49',
    ecosystem: '갯벌',
    name: '망둥어',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '물 밖에서도 잠깐 숨을 참고 살 수 있는 특별한 물고기!'
  },
  {
    id: '50',
    ecosystem: '갯벌',
    name: '굴',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '바위에 딱 붙어 살며 바닷물 속 영양분을 걸러 먹어!'
  },
  {
    id: '51',
    ecosystem: '갯벌',
    name: '바지락',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '모래 속에 숨어 살며 길쭉한 관으로 숨을 쉬어!'
  },
  {
    id: '52',
    ecosystem: '갯벌',
    name: '짱뚱어',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '튀어나온 눈으로 360도를 볼 수 있는 갯벌의 망보기!'
  },
  {
    id: '53',
    ecosystem: '갯벌',
    name: '흰발농게',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '하나는 큰 집게, 하나는 작은 집게를 가진 개성파!'
  },
  {
    id: '54',
    ecosystem: '갯벌',
    name: '새우',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '투명한 몸으로 숨바꼭질을 잘하는 갯벌의 닌자!'
  },
  {
    id: '55',
    ecosystem: '갯벌',
    name: '백합',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '모래 속 깊이 숨어 살며 긴 관으로 먹이를 찾아!'
  },
  {
    id: '56',
    ecosystem: '갯벌',
    name: '함초',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '짠물에서도 잘 자라는 갯벌의 특별한 채소!'
  },
  {
    id: '57',
    ecosystem: '갯벌',
    name: '칠면초',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '가을이 되면 빨갛게 물들어 갯벌을 아름답게 만들어!'
  },
  {
    id: '58',
    ecosystem: '갯벌',
    name: '갈대',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '바람에 흔들리며 갯벌에 운치를 더해주는 키 큰 풀!'
  },
  {
    id: '59',
    ecosystem: '갯벌',
    name: '해홍나물',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '빨간 줄기가 특징이며 바닷바람을 맞으며 자라!'
  },
  {
    id: '60',
    ecosystem: '갯벌',
    name: '나문재',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '작고 동글동글한 잎을 가진 염분에 강한 식물!'
  },

  // 사막 생태계
  {
    id: '61',
    ecosystem: '사막',
    name: '낙타',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '등의 혹에 물을 저장해서 며칠간 물 없이도 살 수 있어!'
  },
  {
    id: '62',
    ecosystem: '사막',
    name: '전갈',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '꼬리의 독침으로 자신을 보호하는 사막의 전사!'
  },
  {
    id: '63',
    ecosystem: '사막',
    name: '사막여우',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '큰 귀로 열을 식히고 모래 속 소리까지 들어!'
  },
  {
    id: '64',
    ecosystem: '사막',
    name: '뱀',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '뜨거운 모래 위를 S자로 움직여서 화상을 피해!'
  },
  {
    id: '65',
    ecosystem: '사막',
    name: '도마뱀',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '위험할 때 꼬리를 스스로 자르고 도망가는 탈출 전문가!'
  },
  {
    id: '66',
    ecosystem: '사막',
    name: '독수리',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '하늘 높이 날며 멀리서도 먹이를 찾을 수 있는 눈을 가졌어!'
  },
  {
    id: '67',
    ecosystem: '사막',
    name: '거미',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '모래 속에 숨어 살며 밤에만 활동하는 야행성!'
  },
  {
    id: '68',
    ecosystem: '사막',
    name: '메뚜기',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '강한 뒷다리로 멀리멀리 뛸 수 있는 점프의 왕!'
  },
  {
    id: '69',
    ecosystem: '사막',
    name: '딱정벌레',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '딱딱한 껍데기로 사막의 강한 햇빛을 견뎌내!'
  },
  {
    id: '70',
    ecosystem: '사막',
    name: '개미핥기',
    type: '동물',
    imageUrl: '/api/placeholder/300/200',
    description: '긴 혀로 개미집에서 개미들을 쏙쏙 빼먹는 개미 사냥꾼!'
  },
  {
    id: '71',
    ecosystem: '사막',
    name: '선인장',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '가시로 몸을 보호하고 두꺼운 줄기에 물을 저장해!'
  },
  {
    id: '72',
    ecosystem: '사막',
    name: '알로에',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '잎 안에 젤리 같은 물질을 저장해서 건조함을 이겨내!'
  },
  {
    id: '73',
    ecosystem: '사막',
    name: '바오바브나무',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '거대한 줄기에 물을 저장하는 사막의 물탱크!'
  },
  {
    id: '74',
    ecosystem: '사막',
    name: '용설란',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '100년에 한 번 꽃을 피우고는 생을 마감하는 신비한 식물!'
  },
  {
    id: '75',
    ecosystem: '사막',
    name: '사막장미',
    type: '식물',
    imageUrl: '/api/placeholder/300/200',
    description: '메마른 사막에서도 아름다운 분홍빛 꽃을 피워내!'
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