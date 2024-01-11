const GetGeussStatistic = (attempt: string, randomWord: string) => {
  let geussStatis: { rate: number; color: string } = {
    rate: 0,
    color: "bg-white",
  };
  const wordArray = Array.from(randomWord);
  wordArray.forEach((char, index) => {
    if (char === attempt[index]) {
      geussStatis.rate++;
    }
  });
  if (geussStatis.rate == 1) geussStatis.color = "bg-green-100";
  if (geussStatis.rate == 2) geussStatis.color = "bg-green-200";
  if (geussStatis.rate == 3) geussStatis.color = "bg-green-300";
  if (geussStatis.rate == 4) geussStatis.color = "bg-green-400";
  if (geussStatis.rate == 5) geussStatis.color = "bg-green-500";
  if (geussStatis.rate == 6) geussStatis.color = "bg-green-600";
  if (geussStatis.rate >= 7) geussStatis.color = "bg-green-700";
  return geussStatis;
};

export default GetGeussStatistic;
