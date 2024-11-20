# ⭐ day11 : UI 새롭게 업데이트
![image](https://github.com/user-attachments/assets/0f3b93a2-b0bd-4ff2-8e2c-cf35cfee4aeb)

# ⭐ day12 : 데이터 페칭 & 캐시 옵션 추가
- 캐시옵션 추가 의의
  - index : 랜덤은 revalidate 3초, 전체 페이지는 60초
    - 랜덤페이지는 새로고침시 새롭게 보여줘야 하므로 캐시를 안줄까 싶었지만 너무 계속 바뀌면 서버에 부하를 줄 수 있으므로 3초정도로
    - 전체페이지는 크게 목록이 바뀌지 않을것 같으므로 60초로 설정했다. 다만 당분간 데이터가 바뀔 예정이 없다면 force-cache 옵션을 주어도 나쁘지 않을것 같다
  - search : 검색결과가 무엇이 나올지 모르므로... 따로 캐싱을 적용하지 않는것이 맞는것 같다.
  - movie : 동적으로 바뀌는 페이지라 on-demend 방식의 ISG 방식으로 만들어야 할것 같다. 아직 배우지 않은 tags 옵션을 이용해야 할것 같다.

# ⭐ day13 : 풀 라우트 캐싱 작업
- ![image](https://github.com/user-attachments/assets/24e89639-a36f-4f3b-8d08-4161ad55d60f)
- generateStaticParams 안에 데이터 페칭을 넣는방법은 처음 알았다.... 여기에는 정적인 SSG 캐싱을 위해서 넣어야 하니까 서버액션을 넣으면 당연히 안되는건줄 알고... 모두 다 페칭이 없는 값을 넣어야 하나 싶었는데. 이렇게 모든 페이지를 넣을 수가 있구나.

# ⭐ day14,15 : 스트리밍 및 스켈레톤 적용
- ![녹음 2024-11-20 121554](https://github.com/user-attachments/assets/687a1ca8-bda2-4338-a26f-15160d5ab123)
