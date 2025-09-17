import { useState, useEffect } from "react";
import Code from "../../components/Code";
import Image from '../../components/Image';
import img1 from '../../assets/images/blogs/githubReact/image1.png';
import img2 from '../../assets/images/blogs/githubReact/image2.png';
import img3 from '../../assets/images/blogs/githubReact/image3.png';

const steps = [
    { name: 'Create GitHub repository' },
    { name: 'Install gh-pages' },
    { name: 'Update vite.config.js' },
    { name: 'Add deploy scripts' },
    { name: 'Add homepage key' },
    { name: 'Deploy project to github' },
];
const ReactGithub = () => {
    const [visible, setVisible] = useState(false);

    // Show button after scrolling 300px
    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const step = (stepNum) => (
        <h3 id={`step-${stepNum}`} className="mt-8 text-2xl font-semibold">
            Step {stepNum}:
        </h3>
    ); return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8">
                {/* Main content */}
                <div className="lg:col-span-8 space-y-6">
                    <h2 className="text-3xl font-bold mb-4">Host React App with GitHub</h2>
                    <p>This blog explains how to deploy a React app using GitHub Pages.</p>

                    {step(1)}
                    <p>Create a GitHub repository and set it as public.</p>

                    {step(2)}
                    <p>Now Install gh-pages package:</p>
                    <Code parts={[{ type: "text", text: "npm install gh-pages" }]} />

                    {step(3)}
                    <p>Now add your GitHub repository name in the vite.config.js file as base in config method as shown in the image below:</p>
                    <Image src={img1} alt="Vite config" />

                    {step(4)}
                    <p>Now add predeploy and deploy scripts in package.json as shown in image below:</p>
                    <Image src={img2} alt="package.json scripts" />

                    {step(5)}
                    <p>Now add homepage key in the package.json file and here add your github repo link replace username with your github username and github-repo-name with your github repository name:</p>
                    <Image src={img3} alt="package.json homepage" />

                    {step(6)}
                    <p>After all the above steps now run the command :
                        this command will create the build of the react app and then publish the code to the github pages section wait for few minutes.
                    </p>
                    <Code parts={[{ type: 'text', text: 'npm run deploy' }]} />
                    <p>To access the live url of the web app visit the  <a href="https://username.github.io/github-repo-name">https://username.github.io/github-repo-name .</a>
                        <p> Replace the username with your github username and github-repo-name with your github repository name.</p>
                    </p>
                </div>

                {/* Sidebar */}
                <div className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4">
                    <h3 className="text-xl font-semibold mb-2">Steps</h3>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2">
                        {steps.map(({ name }, key) => (
                            <li key={key}>
                                <button
                                    onClick={() => document.getElementById(`step-${key++}`).scrollIntoView({ behavior: "smooth" })}
                                    className="text-blue-500 hover:cursor-pointer"
                                >
                                    {name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
                    aria-label="Back to top"
                >
                    ↑
                </button>
            )}
        </>

    );
};


export default ReactGithub;
