# ⚡️ 한입 Next 강의 정리

## 열 두번째 날

### 데이터 페칭
- 페이지 라우터에서는 getServerSideProps, getStaticProps 등으로 데이터 페칭 진행.
  - 서버컴포넌트라는 개념이 없었기에 위 함수에서만 사용
  - props로 계속 내려줘야 했었음
  - 더군더나 async, await를 사용할 수 없었기에 (메모이제이션 문제 발생) 비동기로 호출하기 애매했었음. 권장되지도 않는 상황.
- 앱라우터에서는 위의 함수를 사용하지 않아도 됌. async, await등으로 비동기적으로 호출 가능.
  - 데이터가 필요한 컴포넌트에서만 데이터 요청하면 됌.
  - 오피셜) 데이터는 필요한 곳에서 직접 불러와라
    - ![image](https://github.com/user-attachments/assets/1fd299d0-17ea-49c5-956c-7da957088f90)
  - 환경변수 설정
    - NEXT_PUBLIC 을 빼먹으면 서버측에서만 접근할 수 있도록 동작. 클라이언트에서 접근불가능하게 됌.
    - 즉 클라이언트 컴포넌트에서도 접근이 가능해야하면 PUBLIC을 붙여줘야함.
- **Next 15버전 이후부터는 searchParams, params를 쓸 경우 await를 붙인 비동기로 사용해야 함.**

### 데이터 캐싱
- 불필요한 데이터 요청 수를 줄여서 웹서비스 성능을 크게 개선 가능
- 사용법 : 기존 fetch 호출에서 두번째 인자를 붙이면 됌. 4가지 정도의 옵션이 있음
  - ![image](https://github.com/user-attachments/assets/8bc19ff4-7748-490d-aa79-7aa46e7b42c5)
  - ![image](https://github.com/user-attachments/assets/18168641-3ebc-4257-b34b-3a606b52f6a6)
  - 단 axios 등 다른 http 호출 라이브러리에서는 사용 불가. fetch에서만 사용 가능.
    - Next에서의 fetch는 캐싱기능을 추가한 Next에서만 사용되는 확장판 개념의 특별한 메서드이기때문.
  - `{cache: "no-store"}`
    - 데이터페칭의 결과를 저장하지 않는 옵션. 아예 캐싱을 블록.
      - ![image](https://github.com/user-attachments/assets/2992b2d5-96ba-4c5a-b3d4-56c319f4a6f0)
      - **이렇게 따로 설정해주지 않아도 기본 설정은 no cache가 됌**
      - 로그에 데이터 캐싱값을 출력해주게 하려면 `next.config.mjs`파일을 손봐주면 됌
        - ```javascript
              const nextConfig = {
                logging: {
                  fetches : {
                    fullUrl: true,
                    }
                  }
                }
       - 위처럼 설정해주면 아래와 같은 로깅창이 뜸.
         - ![image](https://github.com/user-attachments/assets/d58daf63-45c2-48b9-b3a3-7059dc8ba34e)
       - 이 설정은 15버전부터 적용된 옵션.
   - `{cache: "force-cache}`
     - no-store과는 다름. 반드시 강제로 캐싱이 되도록 함.
       - ![image](https://github.com/user-attachments/assets/f17a1ffa-61ff-4725-8437-f2008c55d290)
       - 강제로 캐싱되게 만들어서 초기 이후 접속은 백엔드 서버를 통하지 않도록 작업.
       - 캐시된 데이터는 하단 폴더에 JS Bundle로 저장됌을 확
         - ![image](https://github.com/user-attachments/assets/4f0bb739-5856-4ac8-ad68-a1eb1ad3020b)
   - `{next: { revalidate: 3 }`
     - 특정시간을 주기로 캐시 업데이트. Page Router의 ISR 방식과 유사.
     - ![image](https://github.com/user-attachments/assets/e41076e4-2260-4e1d-985c-780b80d6075c)
     - ![image](https://github.com/user-attachments/assets/6c0181c7-0f58-4b5c-840c-e255a68fb472)
     - 위와 같이 3초가 지나면 캐시된 데이터 반환을 위해 STALE 상태로 변경하고 브라우저에 보내주게 되고 이후에 다시 데이터를 SET - HIT해서 최신데이터를 가져오게 됌.
   - `{next: { tags: ['a'] }`
     - 요청이 들어왔을때에만 데이터를 최신화. On-demand ISR의 방식과 유사.
    
### 리퀘스트 메모이제이션
- 요청을 기억한다 라는 의미. 중복요청 최소화
- ![image](https://github.com/user-attachments/assets/edcb257c-c786-40f4-8974-2e97ca712777)
- 위와 같이 중복요청시 리퀘스트 메모이제이션에 데이터 캐시처럼 저장됨
- **리퀘스트 메모이제이션에 저장(set) 됬을때는 데이터캐시 찾아보거나 백엔드 서버 찾아보는게 아닌 리퀘스트 메모이제이션 안에 저장된 값이 존재하는지 찾아보게 됌**
  - 저장값이 있으면 캐쉬된 데이터를 그대로 이용하게 됌. 
- 중요)) 데이터캐시와는 완전히 다름. 리퀘스트 메모이제이션은 하나의 페이지를 랜더링하는 동안에 중복된 api 요청을 캐싱하기 위해 존재. 랜더링이 종료되면 모든 캐시가 소멸됌.
  - 두번째 요청이 발성되면 다시 반복하게 됌.
  - 오직 중복된 api 요청 방지에만 목적이 있음.
  - 데이터 캐시는 백엔드 서버로부터 불러온 데이터를 거의 영구적으로 보관하기 위해 사용됌. 서버가 죽을때까지는 영구적으로 보관.
- 이 리퀘스트 메모이제이션이 필요한 이유
  - 페이지라우터에서는 서버측에서만 실행되는 함수를 호출해서 불러온 이후 하위 컴포넌트들에게 props로 드릴링하거나 context api로 넘겨줘야 했으나 앱라우터에서는 컴포넌트별로 필요한곳에서 계속 호출하게끔 바뀌었기 때문에, 이에 따라 중복된 api 호출요청이 존재할 수 있음. 이를 방지하기 위해서 이 리퀘스트 메모이제이션이 필요한 것.
  - ![image](https://github.com/user-attachments/assets/4e499eca-4fd0-4ce8-8c6e-6377431e3797)
  - ![image](https://github.com/user-attachments/assets/76a8ba6c-f3fa-4e44-81dd-033853353678)



 
  






---
### 느낀점
- 
