# ⚡️ 한입 Next 강의 정리

## 첫째날

- 프레임워크(Next.js), 라이브러리(React.js) 차이 : 주도권의 차이. 리액트는 개발자에게 주도권, 넥스트는 정해진 규율 안에서 작업해야함.
- 자유도가 높다? 기본기능 외 제공되는게 없음. 직접 다 만들어서 써야 함.
- 자유도가 낮다? 거의 모든 기능을 제공함
- Next는 거의 리액트의 확장판 느낌.
### CSR, SSR
- 먼저 리액트의 CSR 랜더링을 살펴보자
  ![image](https://github.com/user-attachments/assets/abf21a29-5b7f-4f0d-b36e-56cdfd8d72a5)
  > - 페이지 이동이 매우 빠르고 쾌적하다는 장점
  > - 초기접속에 필요한 컴포넌트가 아닌 웹사이트 전체 js 번들링 파일 전체가 요청됌
  > - 다만 단점도 명확함. 초기에 다 불러오는것처럼 초기 랜더링에 시간이 많이 소요됌
  > - FCP (First Contentful Paint) : 요청 시작점부터 컨텐츠가 화면에 처음 나타나는데 걸리는 시간
  > - ![image](https://github.com/user-attachments/assets/84544c27-3853-4430-aee4-a9278b279969)
  >> - 사용자 이탈률에도 사용되는 지표이기도 함
- Next에서 새롭게 등장한, CSR의 문제를 해결하기 위한 '사전 랜더링'
  > - ![image](https://github.com/user-attachments/assets/bcfd0aac-25dc-4589-868d-490c432695f1)
  >> - FCP가 획기적으로 단축됨
  >> -  
  

