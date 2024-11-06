# ⚡️ 한입 Next 강의 정리

## 넷째날

### 전체적인 기본 퍼블리싱
- 페이지 컴포넌트에서 전체적인 컴포넌트 레이아웃은 따로 레이아웃용 컴포넌트 만들어서 children으로 감싼다
  - 앱라우터는 layout 파일로 적용가능한 느낌.
 
### 별개의 레이아웃 컴포넌트
- 왠지 이 컴포넌트는 앞서 말한 앱라우터의 layout 컴포넌트에서 해결이 가능할것으로 보이는데, 페이지 라우터 기준으로도 한번 익숙해져보는게 좋을듯 하다
- 일단 개별적으로 공용으로 써야하는 컴포넌트(a)를 만들고, 포함시켜야 하는 개별 컴포넌트(b) 하단에 다음과 같은 코드를 작성해준다
  - ```javascript
      // b 컴포넌트
      export default function Home() {
      return <h1>인덱스</h1>;
      }
  
      Home.getLayout = (page: ReactNode) => {
      return <SearchableLayout>{page}</SearchableLayout>;
      };
  - 여기서 getLayout은 아무 명칭이어도 상관없다 우리가 임의로 만드는 매개변수라서. 이렇게 만든 페이지는 SearchableLayout(a 컴포넌트)를 개별적으로 보여주게 된다.
- 다음엔 root 컴포넌트(app)에도 이 컴포넌트를 호출할 수 있게끔 하는 코드를 만들어줘야 한다
  - ```javascript
      const layout = Component.getLayout;
      return <GlobalLayout>{layout(<Component {...pageProps} />)}</GlobalLayout>;
  - 이렇게 작성되면 getLayout 메서드를 쓰는 컴포넌트에서는 SearchableLayout이 보여지게 된다. 그러나 반대로 전체 레이아웃에서 넘겨주게 되지만 해당 메서드를 호출하지 않는 컴포넌트는 undefined가 호출되기에 404에러가 발생하게 됌. 예외처리를 잡아줘야 한다
  - ``` javascript
    const layout = Component.getLayout ?? ((page: ReactNode) => page);
- 마지막으로 타입에러를 잡아줘야 한다. '&' <- 교집합 연산자로서 뒤에 붙는 타입을 +로 추가해주는걸 이용함.
  - getLayout이 우리가 임의로 만들어 준 타입이기 때문에...
  - ```javascript
    // 타입지정
    type NextPageWithLayout = NextPage & {
      getLayout: (page: ReactNode) => ReactNode;
    };

    // 컴포넌트에 타입 적용
    export default function App({
      Component,
      pageProps,
    }: AppProps & {
      Component: NextPageWithLayout;
    }) {
      const layout = Component.getLayout ?? ((page: ReactNode) => page);
      return <GlobalLayout>{layout(<Component {...pageProps} />)}</GlobalLayout>;
    }

  

  
---
### 느낀점
- 초반부터 예외처리를 빡시게 잡아야하는점을 깨달았다. 그리고 페이지라우터에서 앱라우터로 변화하며 어떤점을 불편했는지 알것 같기도 하다. 일단 layout과 page의 구분으로 공통레이아웃 컴포넌트 분할의 갈증이 가장 컸었던걸로 예상된다.
