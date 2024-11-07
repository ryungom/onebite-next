# ⚡️ 한입 Next 강의 정리

## 여섯째날

### 사전랜더링
- ![image](https://github.com/user-attachments/assets/133638a6-ad23-4b65-bbdd-6422bc5b18c9)
- NEXT의 사전랜더링은 다음과같은 3가지 방식이 있음
  - ![image](https://github.com/user-attachments/assets/5a48a3aa-2b2c-4272-bf27-8effa137064e)
  - 용량이 클것으로 예상되는 데이터 요청은 빌드타임때 사전랜더링을 수행할 수 있도록 지정해 줄 수 있음 (SSG)
- SSR
  - getServerSideProps : 페이지라우터에서 서버컴포넌트 만드는 약속된 함수명인것같음. (강제된 프레임워크 문법임)
    - 해당 페이지의 컴포넌트보다 먼저 **사전랜더링**으로 실행되어서 컴포넌트에 필요한 데이터를 불러오는 함수
    - 리턴값은 props라는 단 하나의 객체를 담긴 객체가 리턴되어야함
      - 리턴값의 타입은 InferGetServerSidePropsType 을 불러오고 제네릭으로 typeof getServerSideProps 을 넣어주면 자동으로 타입추론 하게됌.
    - Next 프레임워크의 약속된 기능임.
    - 오로지 서버에서만 먼저 딱 한번만 실행됌.\
    - useEffect : 이 hook은 서버에서 실행이 안되고 마운트가 된 시점 이후에 브라우저에서만 실행되게끔 하는 hook이라, 애초에 Next 컴포넌트는 2번 실행됌. 맨처음 서버에서 실행되고 두번째로 브라우저에서 JS bundle이 전달되어 하이드레이션 된 후 실행됌. 그렇기에 맨처음 서버에서 실행됬을때 어떠한 조건도 없이 브라우저api가 있으면 여기에서 걸려서 에러가 걸리는것임. 컴포넌트에서만 실행시키기 위해서는 useEffect안에 넣어두면 됌
  - 기본적으로 아래와 같이 사용
    - ```javascript
      export const getServerSideProps = async () => {
        const allBooks = await fetchBoooks();
        const recoBooks = await fetchRandomBooks();
        return {
          props: { allBooks, recoBooks },
        };
      };
    - 여기서 Promise.all 메서드로 여러개 비동기 작업을 병렬로 작업 가능.
      ```javascript
      const [allBooks, recoBooks] = await Promise.all([fetchBoooks(), fetchRandomBooks()]);
  - context (타입 : GetServerSidePropsContext) 매개변수를 넣으면 현재 브라우저로부터 받은 모든 요청된 정보를 호출할 수 있음. 쿼리스트링까지도...
  - 느낌표 단언 : 확실하게 존재하는 경우에는 느낌표 넣어주기

---
### 느낀점
- 이제 페이지라우터의 서버컴포넌트 랜더링에 대해서 윤곽이 잡히는 느낌이다. 아 이래서 앱라우터에서는 이렇게 바뀌었구나 라는게 느껴진다. 일단 서버컴포넌트 구분, 클라이언트 컴포넌트 구분이 앱라우터에 와서 명확해진것, context 매개변수안에 쓰여진 여러 기능들을 앱라우터에서는 자체 내장 params 혹은 따로 next/navigation hook에 분리되어 사용되어진 느낌이다. 또한 따로 getServerSideProps를 써주지 않아도 앱라우터 상단에 'use client', 'use server'만 명시해주면 그 컴포넌트 자체가 서버컴포넌트, 클라이언트 컴포넌트로 구분되고 트리구조로 컴포넌트를 변경할 수 있으니 이 얼마나 편한지... 그래도 페이지 라우터는 기본적으로 클라이언트 컴포넌트 베이스에 getServerSideProps라는 서버액션을 상단에 지정해줄 수 있으니 이런방법도 나쁘지 않은것 같다.
