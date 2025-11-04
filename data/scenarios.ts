import type { Scenario } from '../types';

export const scenarios: Scenario[] = [
  { // ID 1
    id: 1,
    situation: "방에서 쉬고 있는데, 뭔가 타는 냄새가 나고 연기가 스멀스멀 흘러나오네요. 가장 먼저 무엇을 하면 좋을까요?",
    choices: [
      { text: '큰 소리로 "불이야!"라고 외치고 119에 신고한다.', feedback: "아주 좋은 판단이에요! 덕분에 다른 사람들도 대피를 시작합니다.", scoreChange: 300, nextScenarioId: 2 },
      { text: "무서우니 연기를 피해 장롱 속으로 들어간다.", feedback: "절대 무섭다고 숨으면 안 됩니다. 구조대원이 발견하지 못할 수 있어요.", scoreChange: -300, nextScenarioId: 2 },
      { text: "불을 끄기 위해 물을 떠온다.", feedback: "항상 대피가 먼저입니다! 화재 원인이나 규모를 모를 때는 대피로 확보가 우선입니다.", scoreChange: -100, nextScenarioId: 2 },
    ]
  },
  { // ID 2
    id: 2,
    situation: "이제 119에 신고하려고 합니다. 가장 중요하게 알려줘야 할 정보는 무엇일까요?",
    choices: [
      { text: "불이 난 장소의 정확한 주소 또는 위치", feedback: "정확한 정보 덕분에 소방차가 신속하게 출동할 수 있습니다. 훌륭해요!", scoreChange: 200, nextScenarioId: 3 },
      { text: "내 이름과 학교", feedback: "이름도 중요하지만, 지금 가장 급한 건 위치를 알리는 거예요!", scoreChange: -200, nextScenarioId: 3 },
      { text: "불이 얼마나 큰지 자세하게 설명한다.", feedback: "불의 크기보다는 정확한 위치가 먼저입니다. 위치를 알려주면 소방관이 규모를 파악할 수 있어요.", scoreChange: -100, nextScenarioId: 3 },
    ]
  },
  { // ID 3
    id: 3,
    situation: "매캐한 연기가 점점 더 많이 흘러 나옵니다. 콜록콜록! 기침이 납니다. 이젠 어떻게 해야 할까요?",
    choices: [
      { text: "화장실로 가서 손수건 또는 옷에 물을 묻혀 코와 입을 막는다.", feedback: "정답입니다! 화재 시 가장 무서운 것은 불길보다 연기입니다. 젖은 수건으로 유독가스를 막는 것은 최고의 선택입니다!", scoreChange: 200, nextScenarioId: 4 },
      { text: "빠른 탈출만이 살길! 바로 문으로 뛰어간다.", feedback: "연기를 마시면 위험해요! 뛰어가다 갑자기 어지러움을 느끼고 쓰러질 수 있습니다.", scoreChange: -200, nextScenarioId: 4 },
      { text: "연기가 들어오지 않도록 방에 들어가 문을 닫고 숨는다.", feedback: "잘못된 선택입니다! 창문과 문틈으로 연기가 스며들어오기 시작합니다. 위험을 깨닫고 다시 나왔습니다.", scoreChange: -300, nextScenarioId: 4 },
    ]
  },
  { // ID 4
    id: 4,
    situation: "방문을 열고 다른 곳으로 나가야 합니다. 어떻게 할까요?",
    choices: [
      { text: "문을 손등으로 살짝 대어보고 뜨겁지 않으면 문을 연다.", feedback: "아주 잘했어요! 문이 뜨겁지 않다는 건 반대편이 아직 안전하다는 신호일 수 있습니다.", scoreChange: 300, nextScenarioId: 5 },
      { text: "늦으면 안돼! 보이는 문을 거침없이 열고 나간다.", feedback: "앗, 뜨거워! 문 뒤에 불길이 있을 수 있어요. 항상 문고리를 확인하는 습관을 들여야 합니다.", scoreChange: -100, nextScenarioId: 5 },
      { text: "창문을 깨고 탈출한다.", feedback: "위험해요! 깨진 창문에 다칠 수 있고, 외부 상황을 알 수 없어 더 위험해질 수 있습니다.", scoreChange: -200, nextScenarioId: 5 },
    ]
  },
  { // ID 5
    id: 5,
    situation: "거실로 나갔더니 프라이팬 기름에 불이 붙었습니다. 어떤 경우에만 불을 직접 꺼야 할까요?",
    imageUrl: "https://www.fpn119.co.kr/imgdata/fpn119_co_kr/202112/2021123025022137.jpg",
    choices: [
      { text: "불이 아주 작아 위험도가 낮을 때", feedback: "맞아요. 불이 작을 때 초기 진화를 시도할 수 있습니다. 하지만 대피로가 확보되었는지도 꼭 확인해야 해요!", scoreChange: 200, nextScenarioId: 6 },
      { text: "불이 번지더라도 대피로가 확실히 확보되어 있을 때", feedback: "정답입니다! 안전이 최우선이죠. 실패하더라도 안전하게 대피할 수 있다는 확신이 있을 때만 불을 꺼야 합니다.", scoreChange: 300, nextScenarioId: 6 },
      { text: "불 주변에 폭발 가능성이 있는 물건이 있을 때", feedback: "절대 안 돼요! 주변에 가스통 같은 폭발 위험 물질이 있다면 즉시 대피해야 합니다.", scoreChange: -300, nextScenarioId: 6 },
    ]
  },
  { // ID 6
    id: 6,
    situation: "초기 진화를 시도합니다. 기름 화재는 어떻게 꺼야 할까요?",
    choices: [
      { text: "가스밸브를 잠그고, 젖은 수건이나 뚜껑으로 덮는다.", feedback: "정답입니다! 가스 공급을 차단하고 산소를 막는 것이 기름 화재를 끄는 가장 좋은 방법입니다.", scoreChange: 200, nextScenarioId: 7 },
      { text: "근처의 ABC 분말 소화기를 사용한다.", feedback: "ABC 소화기도 도움이 되지만, 식용유 화재에는 K급 소화기가 가장 효과적입니다. 불이 다시 붙을 수 있으니 조심하세요!", scoreChange: 100, nextScenarioId: 7 },
      { text: "온도를 낮추기 위해 물을 뿌린다.", feedback: "안 돼요! 기름 화재에 물을 부으면 불이 더 크게 번집니다. 절대 금물이에요!", scoreChange: -300, nextScenarioId: 7 },
    ]
  },
  { // ID 7
    id: 7,
    situation: "소화에 실패하여 현관문을 열고 나갔습니다. 그런데 계단에 사람이 너무 많네요.",
    choices: [
      { text: "다른 사람들 뒤를 따라 질서있게 계단으로 이동한다.", feedback: "조금 느리더라도 차분하게 대피하면 모두가 빠져나올 수 있습니다. 안전하게 이동합니다.", scoreChange: 200, nextScenarioId: 8 },
      { text: "아직 불길이 멀었으니 엘리베이터를 타고 1층으로 내려간다.", feedback: "어? 엘리베이터 전등이 깜빡입니다. 화재로 전기가 끊길 수 있어요. 무서워서 문이 닫히기 전에 얼른 나왔습니다.", scoreChange: -300, nextScenarioId: 8 },
      { text: "빨리 내려가기 위해 사람들 틈을 파고든다.", feedback: "악! 밀지 마세요! 앞에서 소리가 들리고 뒤에서도 나를 미는 손길이 느껴집니다. 매우 위험한 행동입니다!", scoreChange: -300, nextScenarioId: 8 },
    ]
  },
  { // ID 8
    id: 8,
    situation: "계단에 도착했습니다. 아래로 가는 계단은 복잡하고, 위로 가는 계단은 한산합니다. 위로 갈까요? 아래로 갈까요?",
    choices: [
      { text: "무조건 아래쪽이지! 아래로 간다.", feedback: "연기는 위로 올라가므로 아래로 대피하는 것이 원칙! 눈이 맵고 기침이 나지만 벽을 따라 1층에 도착했습니다. A루트로 탈출을 계속합니다.", scoreChange: 300, nextScenarioId: 9 },
      { text: "아래로 가는 계단은 너무 복잡하다. 좀 더 한산한 위로 가자!", feedback: "위 층으로 올라오니 아직 연기가 덜합니다. 하지만 이제 어떡하죠? B루트로 탈출을 계속합니다.", scoreChange: 200, nextScenarioId: 11 },
    ]
  },
  { // ID 9
    id: 9,
    situation: "1층도 연기가 너무 많네요. 앞이 잘 보이지 않아요. 출구는 도대체 어디죠?",
    choices: [
      { text: "수상한 초록 불 빛을 따라간다.", feedback: "비상구 유도등 덕분에 출입구를 빠르게 찾았습니다. 아주 잘했어요!", scoreChange: 300, nextScenarioId: 10 },
      { text: "벽을 짚고 한쪽 방향으로 계속 이동한다.", feedback: "연기로 방향 감각이 사라질 수 있으니 벽을 짚고 이동하는 것도 좋은 방법입니다. 단, 장애물을 주의하세요.", scoreChange: 100, nextScenarioId: 10 },
      { text: "그 자리에 멈춰 구조를 기다린다.", feedback: "연기가 가득한 곳에서 기다리는 것은 위험합니다. 움직일 수 있다면 출구를 찾아야 합니다.", scoreChange: -100, nextScenarioId: 10 },
    ]
  },
  { // ID 10
    id: 10,
    situation: "드디어 출입구에 도착했습니다. 어? 그런데 입구가 이상한 것으로 막혀있어요.",
    imageUrl: "https://ojsfile.ohmynews.com/STD_IMG_FILE/2020/0404/IE002626084_STD.JPG",
    choices: [
      { text: "문에 손등을 살짝 대어보고 뜨거우면 다른 출입구로 간다.", feedback: "문을 만져보니 뜨겁네요. 이쪽은 위험하다는 뜻입니다. 다른 출입구로 안전하게 이동합시다.", scoreChange: 200, nextScenarioId: null },
      { text: "당장 입구가 코앞인데 뭘 망설여? 거침없이 문을 연다.", feedback: "앗! 뜨거워!! 문 뒤에 불길이 넘실거리네요. 손에 화상을 입고 다른 출입구로 갑니다.", scoreChange: -200, nextScenarioId: null },
      { text: "다른 출입구를 찾아 되돌아간다.", feedback: "다른 출입구에도 방화벽이 내려와 있을 수 있습니다. 먼저 문 손잡이를 확인하는 것이 순서입니다.", scoreChange: -300, nextScenarioId: null },
    ]
  },
  { // ID 11
    id: 11,
    situation: "일단 위층으로 올라오긴 했는데, 연기가 계속 올라오고 있습니다. 이제 어떻게 해야 할까요?",
    choices: [
      { text: "연기가 없는 창문으로 가서 옷을 흔들며 살려달라고 외친다.", feedback: "좋은 방법입니다. 다행히 구조대가 여러분을 발견했습니다!", scoreChange: 200, nextScenarioId: 12 },
      { text: "연기를 피해 옥상까지 올라가자!", feedback: "옥상에서 살려달라고 외치자, 다행히 구조대가 여러분을 발견했습니다!", scoreChange: 200, nextScenarioId: 12 },
      { text: "더 이상 갈 곳이 없다.. 뛰어내려도 죽진 않을 거야!", feedback: "고층에서 뛰어내리는 것은 매우 위험해요! 절대 뛰어내리면 안 됩니다. 구조를 기다리세요.", scoreChange: -300, nextScenarioId: 12 },
    ]
  },
  { // ID 12
    id: 12,
    situation: "구조대를 기다리는 동안 누군가 이상한 것을 발견했다고 외칩니다. 이건 무엇일까요?",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn78FJOq1psYNt92kpfYMIcKgKRMde55dEw&s",
    choices: [
      { text: "이것은 완강기이다. 사용법에 맞게 탈출한다.", feedback: "정확한 이름과 사용법을 알고 있었군요! 올바르게 사용하여 안전하게 탈출합니다.", scoreChange: 500, nextScenarioId: null },
      { text: "비상 탈출용 번지점프다! 허리에 벨트를 매고 뛰어내린다.", feedback: "왜 자꾸 뛰어내리려고 하나요... 여러분의 몸은 소중합니다. 절대 안 돼요!", scoreChange: -300, nextScenarioId: null },
      { text: "어차피 구조대가 올 거니 무시한다.", feedback: "그래도 이름과 사용 방법 정도는 알아두는 것이 좋겠죠? 위급 상황에 큰 도움이 될 수 있습니다.", scoreChange: 100, nextScenarioId: null },
    ]
  }
];