const Step = ({ stepNum }) => {
    return (
        <h3 id={`step-${stepNum}`} className="mt-8 text-2xl font-semibold">
            Step {stepNum}:
        </h3>
    )
}
export default Step

