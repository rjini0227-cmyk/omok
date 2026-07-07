# 🚀 오목 한판 — 배포 & 수익화 가이드

이 폴더의 파일을 그대로 올리면 사이트가 완성됩니다. 순서대로 따라 하세요.

| 파일 | 역할 |
|---|---|
| `index.html` | 게임 본체 (AI·2인·온라인 대전) |
| `firebase-config.js` | 온라인 대전 설정 (2단계에서 수정) |
| `guide.html` | 오목 규칙·전략 콘텐츠 (애드센스 심사에 중요) |
| `privacy.html` | 개인정보처리방침 (애드센스 필수) |
| `sitemap.xml`, `robots.txt` | 검색엔진 등록용 |

---

## 1단계: GitHub Pages로 무료 배포 (약 10분)

1. [github.com](https://github.com) 가입 후 로그인
2. 우측 상단 **+ → New repository** 클릭
   - Repository name: `omok` (원하는 이름 가능)
   - **Public** 선택 → **Create repository**
3. **uploading an existing file** 링크 클릭 → 이 폴더의 파일 전부를 드래그해서 업로드 → **Commit changes**
4. 저장소에서 **Settings → Pages** 이동
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)` 선택 → **Save**
5. 1~2분 후 `https://내아이디.github.io/omok/` 에서 사이트가 열립니다 🎉

### 주소 교체 (검색 노출용)
배포 주소가 정해지면 아래 파일에서 `YOUR-USERNAME.github.io/omok`을 실제 주소로 바꿔서 다시 업로드하세요.
- `index.html` (canonical, og:url 2곳)
- `guide.html` (canonical 1곳)
- `sitemap.xml`, `robots.txt`

> 💡 수익을 본격적으로 낼 계획이면 **개인 도메인**(연 1~2만원, 예: omokhanpan.com) 연결을 추천합니다. 애드센스 승인율과 신뢰도가 올라갑니다. GitHub Pages Settings → Pages → Custom domain에서 연결할 수 있습니다.

---

## 2단계: Firebase 설정 — 온라인 대전 켜기 (약 15분)

1. [console.firebase.google.com](https://console.firebase.google.com) 접속 (구글 계정 필요)
2. **프로젝트 추가** → 이름 예: `omok-hanpan` → 애널리틱스는 꺼도 됨 → 만들기
3. 왼쪽 메뉴 **빌드 → Realtime Database → 데이터베이스 만들기**
   - 위치: `asia-southeast1 (싱가포르)` 권장
   - 보안 규칙: **테스트 모드**로 시작
4. **규칙(Rules)** 탭에서 아래로 교체 후 게시:
   ```json
   {
     "rules": {
       "rooms": { ".read": true, ".write": true },
       "lobby": { ".read": true, ".write": true }
     }
   }
   ```
5. 프로젝트 개요(⚙ 프로젝트 설정) → **내 앱 → 웹 앱 추가(</>)** → 앱 등록
6. 화면에 나오는 `firebaseConfig` 값을 복사해서 이 폴더의 **`firebase-config.js`** 에 붙여넣기
   - ⚠ `databaseURL` 이 없으면 Realtime Database 화면 상단의 주소(`https://...firebasedatabase.app`)를 복사해 추가
7. 같은 파일 맨 아래 `window.FIREBASE_ENABLED = false;` → **`true`** 로 변경
8. 수정한 `firebase-config.js`를 GitHub에 다시 업로드

이제 사이트에서 **온라인 → 빠른 대전 / 방 만들기 / 코드 참가**가 작동합니다.
무료(Spark) 요금제로 동시 접속 100명·월 다운로드 10GB까지 충분히 운영됩니다.

> ⚠ 위 규칙은 누구나 읽기/쓰기가 가능한 오픈 규칙입니다. 캐주얼 게임 데이터(좌표·닉네임)만 다루므로 위험은 낮지만, 트래픽이 커지면 Firebase 익명 인증 + 검증 규칙 도입을 권장합니다.

---

## 3단계: 광고 붙이기 — 수익화

### 구글 애드센스 (메인 수익원)
1. [adsense.google.com](https://adsense.google.com) 가입 → 사이트 주소 등록
2. 심사용 코드를 `index.html`의 `<head>` 안 **[광고 설정 1/3]** 주석 위치에 붙여넣기 (주석 해제 후 `ca-pub-XXXX`를 본인 ID로 교체)
3. 심사 통과까지 보통 2일~4주. **팁:**
   - `guide.html` 같은 텍스트 콘텐츠가 있어야 승인이 잘 됩니다 (이미 준비됨 ✅)
   - `privacy.html` 개인정보처리방침 필수 (이미 준비됨 ✅)
   - 승인 전 방문자가 어느 정도 있으면 유리 → 4단계 검색 등록을 먼저 하세요
4. 승인 후 애드센스에서 **광고 단위**를 만들어 발급된 코드를 아래 위치에 붙여넣기:
   - `index.html`의 `<div id="adTop">` (상단 728×90), `<div id="adSide">` (사이드 300×250), `<div id="adBottom">` (하단 728×90) — 안의 `AD` 텍스트를 지우고 코드로 교체
   - `guide.html`의 `.ad-slot` — 인아티클 광고 권장
5. 애드센스 안내에 따라 `ads.txt` 파일을 만들어 저장소 루트에 업로드

### 카카오 애드핏 (국내 트래픽 보조)
1. [adfit.kakao.com](https://adfit.kakao.com) 가입 → 매체(사이트) 등록 → 심사
2. 승인 후 광고 단위 생성 → 발급 스크립트를 위와 같은 광고 자리 중 원하는 곳에 붙여넣기
3. 같은 자리에 애드센스와 애드핏을 동시에 넣지 말고, 자리별로 나눠 쓰세요 (예: 상단=애드센스, 하단=애드핏)

### 예상 수익 참고
- 광고 수익은 방문자 수에 비례합니다. 대략 일 방문 1,000명 기준 월 수만~수십만 원 수준(콘텐츠·시즌에 따라 변동).
- 초기에는 4단계 검색 등록 + 커뮤니티 공유로 방문자를 모으는 것이 최우선입니다.

---

## 4단계: 검색 노출 (방문자 모으기)

1. **구글 서치콘솔** ([search.google.com/search-console](https://search.google.com/search-console))
   - 속성 추가 → URL 접두어에 배포 주소 입력 → HTML 태그 방식으로 소유 확인
   - Sitemaps 메뉴에 `sitemap.xml` 제출
2. **네이버 서치어드바이저** ([searchadvisor.naver.com](https://searchadvisor.naver.com))
   - 사이트 등록 → 소유 확인 → 사이트맵 제출 (국내 트래픽에 매우 중요)
3. **홍보 채널**: 보드게임 커뮤니티, 학교/직장 단톡방(방 코드로 바로 대전 가능한 점 어필), 카카오톡 오픈채팅 등
4. 이후 `guide.html`처럼 오목 관련 글(전략, 용어사전, 퍼즐 등)을 늘리면 검색 유입과 애드센스 수익이 함께 성장합니다.

---

## 요약 체크리스트

- [ ] GitHub Pages 배포 완료, 사이트 열림
- [ ] 4개 파일에서 `YOUR-USERNAME` 주소 교체
- [ ] Firebase 설정 + `FIREBASE_ENABLED = true` → 온라인 대전 확인
- [ ] 애드센스 신청 (심사 대기 중에도 게임은 정상 운영)
- [ ] 애드핏 신청
- [ ] 구글 서치콘솔 + 네이버 서치어드바이저 등록
- [ ] (선택) 개인 도메인 연결
