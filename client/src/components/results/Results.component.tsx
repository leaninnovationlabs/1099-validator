import { IValidationRequirements } from "../../features/upload/store/upload.types";
import "./Results.component.css";

export interface IResultsProps {
  results: IValidationRequirements;
  handleReturnToTop: () => void;
}

const Results = (props: IResultsProps) => {
  const { results, handleReturnToTop } = props;
  const numberOfErrors = results.length;

  return (
    <>
      <div className="results-header">
        <div className="results-title">Validation Results</div>
        <div className="results-summary">
          <div className="results-button">{numberOfErrors}</div>
          <div> Errors</div>
        </div>
      </div>
      <div className="results-description">
        The following errors were found in your form, based on the validation
        rules you provided. Please resolve the issues and re-submit.
      </div>
      <div className="results-section-main-content">
        {results.map((result, i) => {
          if (Object.keys(result).length !== 1) return;

          const label = Object.keys(result)[0];
          const value = Object.values(result)[0];

          return (
            <div key={i} className="result-item">
              <div className="result-error-spot" />
              <div className="result-item-label">{label}</div>
              <div className="result-item-value">{value}</div>
            </div>
          );
        })}
        <div className="return-to-top" onClick={handleReturnToTop}>
          Return to top
        </div>
      </div>
    </>
  );
};

export default Results;
