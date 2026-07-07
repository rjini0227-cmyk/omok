/* ═══════════════════════════════════════════════════════════
   [온라인 대전 설정] Firebase 설정 파일
   DEPLOY_GUIDE.md의 "2단계: Firebase 설정"을 따라 값을 채우고,
   맨 아래 FIREBASE_ENABLED를 true로 바꾸면 온라인 대전이 켜집니다.
   ═══════════════════════════════════════════════════════════ */

window.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxx"
};

/* 위 설정을 채운 뒤 true로 변경하세요 */
window.FIREBASE_ENABLED = false;
