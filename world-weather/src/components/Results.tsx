type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temeperature: string;
    conditionText: string;
    icon: string;
  };
};

const Results = ({ results }: ResultsPropsType) => {
  const { cityName, country, temeperature, conditionText, icon } = results;
  return (
    <>
      <div>{cityName && <div>{cityName}</div>}</div>
      <div>{country && <div>{country}</div>}</div>
      <div>
        {temeperature && (
          <div>
            {temeperature}
            <span>℃</span>
          </div>
        )}
      </div>
      <div>
        {conditionText && (
          <div>
            <img src={icon} alt="icon" />
            <span>{conditionText}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
