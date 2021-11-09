import Thunbnail from "./Thunbnail";

function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <Thunbnail key={result.di} result={result} />
      ))}
    </div>
  );
}

export default Results;
