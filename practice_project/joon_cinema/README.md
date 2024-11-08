# ⭐챌린지 현황
## day03 
- supabase 세팅 완료
  - ![image](https://github.com/user-attachments/assets/8462d427-5eae-4d7a-973c-f6e901e5b38d)

## day04
- 기본 UI 세팅완료
  - ![image](https://github.com/user-attachments/assets/e291344c-f788-4dc7-892a-4c2e90b74470)

## day05
- UI 컴포넌트 작업 완료
  - 메인페이지
    - ![image](https://github.com/user-attachments/assets/fc9d26df-852e-44bd-880e-7cd428392a2f)
  - 결과페이지
    - ![image](https://github.com/user-attachments/assets/87acbd28-6d53-4f45-9d8d-c598926add17)
  
## day06
- getServerSideProps를 이용한 데이터 fetching
  - ![image](https://github.com/user-attachments/assets/ab9c9731-14ed-412b-8fc6-50e7f9c0fdb3)
  - 잘 나오긴 하는데 커스텀한 상세페이지에서 영화 길이가 길어질 경우... 제작사도 길 경우를 고려 안했더니 이런 처참한 UI가...이 부분은 다음 챌린지 전에 다시 깔끔하게 고쳐봐야겠다.
 
## day07
- 전체적으로 최대한 SSG 적용 많이 해보기
  - index : 초기 페이지 FST대응을 위해서 첫페이지는 가능하면 SSG로 랜더링하는것이 맞을듯. 다만 정적인 페이지를 호출하기 때문에 랜덤도서가 보여지게 되는건 불가능해서 (데이터 불러오는 새로고침이 일정시간 안됨) 랜덤도서가 보여져야 한다면...? SSR로 가는게 맞을것 같기도... 
  - search : 기본 베이스인 SSG로 가되 페이지 자체는 기본 SSG이지만 사전랜더링 이후 CSR 방식으로, 기존 리액트 방식으로 데이터를 호출하는 방식을 쓰는것이 맞을듯. SSR로 사용하기에는 서버 호출시간이 길어질 수 있으므로...
  - [id] : getStaticPaths를 이용하여 동적 페이지의 사전랜더링 방식을 이용하고, fallback을 true옵션이나 block 옵션을 활성화 하여 초기 정적 페이지 생성 이후 페이지 생성에 스무스하게 넘어갈 수 있도록 한다. 가능하면 true 옵션을 줘서 useRouter로 route.isFallback 옵션으로 fallback 상태를 가져올 수 있도록 조건분기 하여 데이터 fetching 화면을 보여줄 수 있게 하는게 좋을것 같다.
  - 뭔가 거의 다 SSG 방식으로 변환된 느낌... 강사님 말씀대로 데이터 로딩시간을 최소화할 수 있다면 최대한 SSG 방식으로 가는게 맞지 않나 싶다.
