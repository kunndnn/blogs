const Step = ({ stepNum }) => {
    return (
        <h3 id={`step-${stepNum}`} className="mt-8 text-2xl font-semibold scroll-mt-24 text-text-main">
            Step {stepNum}:
        </h3>
    )
}
export default Step

