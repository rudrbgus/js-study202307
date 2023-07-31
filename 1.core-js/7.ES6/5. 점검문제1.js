const traders = [
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2023,
      value: 500000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2022,
      value: 600000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 1200000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2023,
      value: 650000,
    },
    {
      trader: {
        name: "뽀로로",
        city: "부산",
      },
      year: 2023,
      value: 800000,
    },
    {
      trader: {
        name: "루피",
        city: "대전",
      },
      year: 2022,
      value: 780000,
    },
  ];
  
  // 연습 1: 2022년에 발생한 모든 거래를 찾아 
  //   거래자 정보(이름, 도시)를 배열에 매핑해주세요 
    traders
      .filter(user => user.year === 2022)
      .map(user => {
        return{
            name: user.trader.name,
            city: user.trader.city,
        };
      })
      .forEach(u => console.log(`거래자 정보 이름: ${u.name} 도시: ${u.city}`));
  
  // 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
  console.log('===================================');
  const traderCityInfo = traders
  .map(u => u.trader.city);
  console.log(traderCityInfo);
  
  // 연습 3: 대전에 근무하는 모든 거래자를 찾아 거래자정보를 배열에 매핑해주세요.
  console.log('===================================');
  const traderInDeaJeon =
  traders
  .filter(user => user.trader.city ==='대전')
  .map(user => {
    return{
        name: user.trader.name,
        city: user.trader.city,
    }
  });
  console.log(traderInDeaJeon);
  
  // 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
  console.log('===================================');
  const traderName = traders
  .map(user => user.trader.name)
  .forEach(a => console.log(a));
  
  //연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
  console.log('===================================');
  let totalValue =0;
  traders
    .filter(user => user.trader.city === "서울")
    .map(user => user.value)
    .forEach(value => totalValue += value);
  console.log(`모든 거래액의 총합: ${totalValue}`);

  

  
  