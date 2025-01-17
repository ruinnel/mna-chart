# 열린국회정보 시각화
  - [열린국회정보 - 정보공개포탈](https://open.assembly.go.kr/portal/mainPage.do)에서 취득 가능한 정보를 시각화 합니다.
  - 이 repository는 [Observable Framework](https://observablehq.com/framework/)로 작성 후 생성 한 정적 사이트의 코드이며 [Githbu Pages](https://pages.github.com/)로 <https://law-making.work>에 배포되어 있습니다.
     - observable framework 코드 및 data 수집을 위한 코드는 포함되어 있지 않습니다.

## 수집 & 집계하는 정보
- [x] 국회의원 목록
  - 각 선출대수 별로 정리
- [x] 국회의원 발의법률안
  - [x] 국회의원별 발의한 법률안 건수
    - 각 선출대수 별로 정리
    - 국회의원별 법률발의 건수 및 본회의심의결과 별 건수
      - 대표발의 및 공동발의로 구분한 계수
  - [x] 정당별 발의한 법률안 건수
    - 각 선출대수 별로 정리
    - 정당별 법률발의 건수 및 본회의심의결과 별 건수
      - 대표발의자를 기준으로, 발의 당시 소속당 기준으로 계수
- [ ] 국회의원별 본회의 표결정보
  - 국회의원의 임기중 표결 참여율
  - 국회의원이 찬성한 법안의 대표발의자 정당분포
  - 국회의원이 반대한 법안의 대표발의자 정당분포
- [x] 국회의원 정치자금 지출내역 
- [x] 2024년 12월 7일 - 윤석렬 대통령 탄핵소추안 불참 명단
- [x] 2025년 01월 6일 - 윤석렬 관저 '인간방패' 명단

## known issue
  - API로 자료를 수집 및 집계하는 과정에 발생 한 예외상황 입니다.

### [본회의장 떠난 105인, 이름과 얼굴을 기록한다](https://www.hani.co.kr/arti/politics/politics_general/1171798.html)
  - 한겨례 신문 2024년 12월 9일자 1면
  - 위 기사에 포함된 명단을 [국회의원 정보 통합 API](https://open.assembly.go.kr/portal/data/service/selectAPIServicePage.do/OOWY4R001216HX11439)로 조회.

### [윤석열 관저 '인간방패' 45명 국힘 의원은 누구?(+사진)](https://www.ohmynews.com/NWS_Web/View/at_pg_w.aspx?CNTN_CD=A0003094249)
  - 오마이뉴스 2025년 01월 06일자 기사
  - 위 기사에 포함된 명단을 [국회의원 정보 통합 API](https://open.assembly.go.kr/portal/data/service/selectAPIServicePage.do/OOWY4R001216HX11439)로 조회.
  
### [국회의원 정보 통합 API](https://open.assembly.go.kr/portal/data/service/selectAPIServicePage.do/OOWY4R001216HX11439)

- <https://open.assembly.go.kr/portal/openapi/ALLNAMEMBER>
- known issue
  - `맹형규`의원 조회 결과의 `당선대수(GTELT_ERACO)`에 `17대`가 2번 나옴.
  - `유승민`의원 조회 결과의 `당선대수(GTELT_ERACO)`에 `17대`가 2번 나옴.
  - `전재희`, `최돈웅`의원 조회 결과의 `당선대수(GTELT_ERACO)`에 `16대`가 2번 나옴.
  - `이회창`의원 조회 결과의 `당선대수(GTELT_ERACO)`에 `15대`가 2번 나음.
  - `황희표`의원 조회 결과의 `당선대수(GTELT_ERACO)`에 `13대`가 2번 나음.
  - `성낙현`, `신용남`, `이호범`, `최석림`의원 조회 결과의 `당선대수(GTELT_ERACO)`에 `8대`가 2번 나음.
  - `이병옥`의원 조회 결과의 `당선대수(GTELT_ERACO)`에 `6대`가 2번 나음.
  - `김성탁`, `김원규`, `김익노`, `이정희`, `이종순`, `지영진`의원 조회 결과의 `당선대수(GTELT_ERACO)`에 `4대`가 2번 나음.
  - `손세희`, `조남수`의원 조회 결과의 `당선대수(GTELT_ERACO)`가 비어 있음.

### [국회의원 발의법률안](https://open.assembly.go.kr/portal/data/service/selectServicePage.do)

- <https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn>
- known issue
  - API로 조회는 `10대`부터 가능하며, `1~9대`는 API로 조회 불가 
  - 조회 결과의 제안자목록링크(`MEMBER_LIST`) 페이지에 표시되는 한자와 `국회의원 정보 통합 API`에서 조회 되는 국회의원 한자이름이 서로 다른 경우가 있음.
    - ex) (김종인)의 `종`이 의원정보의 한자와 다름.
      - <https://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_N2M4J0S1R1Q8W1X6W4V3E2B1Z8I4H2>

### [국회의원 정치자금 지출내역](https://github.com/OhmyNews/KA-money)
- 19대 `김영주(새누리당, 비례대표)` 데이터 누락 됨
- 2016년(19대) 데이터에 `강병원(20대, 더불어민주당, 서울 은평구을)` 데이터가 있음.
- 2016년(19대) 데이터에 `강석진(20대, 미래통합당, 경남 산청군함양군거창군합천군)` 데이터가 있음.
- 2016년(19대) 데이터에 `강훈식(20대, 더불어민주당, 충남 아산시을)` 데이터가 있음.