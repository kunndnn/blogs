const Sidebar = ({steps}) => {
    return (
        <div className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4">
            <h3 className="text-xl font-semibold mb-2">Steps</h3>
            <ul className="list-decimal list-inside text-gray-700 space-y-2">
                {steps.map(({ name }, index) => (
                    <li key={index}>
                        <button
                            onClick={() =>
                                document.getElementById(`step-${index + 1}`).scrollIntoView({ behavior: "smooth" })
                            }
                            className="text-blue-500 hover:cursor-pointer capitalize"
                        >
                            {name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar