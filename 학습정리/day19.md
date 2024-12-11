# ⚡️ 한입 Next 강의 정리

## 열 아홉번째 날

### 이미지 최적화
- http archive 에 따르면 웹페이지에서 가장 용량을 많이 차지하는건 image. (약 58%)
  - 따라서 웹개발자들에게는 이미지 최적화가 매우 중요함
  ![image](https://github.com/user-attachments/assets/c9303a47-1d75-43ba-a123-9c624e817f54)
- 넥스트에서는 대부분의 최적화 기법을 대부분 잘 적용해줌. `<Image/>` 컴포넌트 사용.
- 이미지 성능 확인
  - 개발자도구의 Img 탭으로 확인 가능.
  - jpeg 보단 요즘은 webp, avcf 확장자가 더욱 압축률이 좋음.
  - 페이지에 보여지는 이미지 외에 필요없는 이미지들이 다 호출되고 이미지 크기가 쓸데없이 큰 이미지를 가져오게 됌
  - 이런것들이 쌓이고 쌓이면 성능악화의 결과를 불러오게 됌.
- Image 컴포넌트의 width, height 지정하는 이유 : 필요 이상의 크기를 넘지 않도록 최대 크기 조정.
- 그냥 image 컴포넌트를 사용할 수는 없고, next.config.js에서 설정해줘야 함. 특히 다른 사이트에서 가져온 이미지는 저절로 차단이 됌.
  -  ```javascript
     //... nextConfig의 객체 중 하나로 추가
     ...
     images : {
        domains: ["http를 제외한 스트링 url"]
     }
    - 이렇게 하면 최적화에 포함 됨.
    - 페이지에 보여지지 않으면 더이상 해당 페이지의 안보이는 나머지 이미지들은 안보임

### 검색엔진최적화 (SEO)
- 동적으로 페이지별로 나눠줄것.
- 각 page, 혹은 layout의 상단에 metadata 함수를 호출해주면 됌
  - `export const dynamic = "force-dynamic"`라우트 세그먼트와 같은 약속된 변수
  - type : MetaData
  - 기본내용
    - ```javascript
      title: "",
      description:"",
      openGraph: {
        title: "",
        description:"",
        images: [""] // /부터 시작하면 public부터 지정됌
      } 
- 검색어같은 동적인 값을 메타데이터에 넣으려면...?
  - generateMetadata() 라는, 마찬가지로 약속된 함수를 생성하면 가능
  - 현재 페이지 메타 데이터를 동적으로 생성하는 역할 수행.
  - 이 함수는 **해당 page의 props를 그대로 전달받을 수 있어서** 동적으로 메타데이터 생성이 가능해짐.
    - return문에 위 기본 내용 객체를 넣어주면 됌.
- generateMetadata() 에서도 api 호출해서 데이터 페칭이 가능. 이에 따라 동적으로 메타데이터 생성도 가능.
  - request memoization으로 동일페이지에서 동일 api 호출하더라도 중복호출 방지해줌.
- favicon : app 폴더 바로 하단에 파비콘 파일을 넣어두면 그대로 파비콘 설정 됌.  

### 느낀점
- 
