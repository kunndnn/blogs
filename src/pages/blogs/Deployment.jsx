import utility from '../../components/Utilities';
const { Code, Image, Sidebar, Step } = utility;

import img1 from '../../assets/images/blogs/docker/img1.png';
import img2 from '../../assets/images/blogs/docker/img2.png';
import img3 from '../../assets/images/blogs/docker/img3.png';


const steps = [
  { name: 'Install docker' },
  { name: 'check installed docker version' },
  { name: 'Create docker image of the project' },
  { name: 'Push image to the docker hub' },
  { name: 'Deployment container commands' },
  { name: 'Deployment images commands' },
];

const codes = {
  dockerFile: `# Use official Python 3.13 slim image
FROM python:3.13-slim

# Set working directory
WORKDIR /app

# Upgrade pip
RUN pip install --upgrade pip

# Copy project files
COPY pyproject.toml ./
COPY main.py ./

# Install dependencies directly in final image
RUN pip install --no-cache-dir fastapi[standard] uvicorn

# Expose FastAPI port
EXPOSE 8000

# Start the app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`,
  dockerCmd: `docker pull yourusername/fastapi-backend:latest
docker run -d -p 8000:8000 yourusername/fastapi-backend:latest
`,
containerStarts:`docker stop CONTAINER_ID
docker start CONTAINER_ID
docker restart CONTAINER_ID
`,
}

const Deployment = () => {
  const step = (num) => <Step stepNum={num} />;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8">
      {/* Main content */}
      <div className="lg:col-span-8 space-y-6">
        <h2 className="text-3xl font-bold mb-4 text-text-main">Get started with docker</h2>
        <p>This blog explains how to setup docker.</p>

        {step(1)}
        <p>Install the docker from <a href="https://docs.docker.com/desktop" className='text-brand-primary hover:text-brand-secondary' target='_blank'>https://docs.docker.com/desktop</a> for your desired platform.</p>

        {step(2)}
        <p>Now check if docker is installed successfully.</p>
        <Code parts={[{ type: "text", text: "docker -v" }]} />



        <h3 className='mt-8 text-2xl font-semibold scroll-mt-24 text-text-main' id='step-3'> Create a docker image of the project</h3>
        <ul className='list-decimal lt-5'>
          <li>
            <p>Create Deployment image, first of all create a <b>Dockerfile</b> in the root of the project</p>
            <Code parts={[{ type: "text", text: codes.dockerFile }]} />
          </li>
          <li>
            <p>Now run the below command to make a docker Image file in which we have to pass our desired tag name</p>
            <Code parts={[
              { type: "text", text: `docker build -t ` },
              { type: "placeholder", text: `tag-name` },
              { type: "text", text: ` .` }
            ]} />
          </li>
          <li>
            <p>After successful execution of the command it will create a docker image to view the image you can run the below command</p>
            <Code parts={[{ type: 'text', text: 'docker images' }]} />
            <p>It will dispaly all the images in the system and i just made the image with tag <b>fastapi-backend</b> as shown. </p>
            <Image src={img1} alt="docker images" />
          </li>
          <li>
            <p>Now run the below command to run the docker image.</p>
            <p> <b>5001</b> is your system port and <b>8000</b> is the port which we defined in our project, and <b>fastapi-backend</b> is the tag name of the image. </p>
            <Code parts={[{ type: 'text', text: 'docker run -p 5001:8000 fastapi-backend' }]} />
            <p>Now you can access the project in <a href="http:localhost:5001" target='_blank'>http:localhost:5001</a> url</p>
          </li>
          <li>
            <p>To run the docker image in the background mode run the below command, we just have to add the  <b>-d</b> flag which means detach mode</p>
            <Code parts={[{ type: 'text', text: 'docker run -d -p 5001:8000 fastapi-backend' }]} />
          </li>
        </ul>

        <h3 className='mt-8 text-2xl font-semibold scroll-mt-24' id='step-4'>Push the image to the docker hub.</h3>
        <p>
          <ul className='list-decimal ml-5'>
            <li>Go to <a href="https://hub.docker.com" target='_blank' className='text-brand-primary hover:text-brand-secondary'>https://hub.docker.com</a> .</li>
            <li>Log in.</li>
            <li>Click “Create Repository”.</li>
            <li>Give it a name (e.g., fastapi-backend).</li>
            <li>Choose Public or Private.</li>
            <li>Click Create.</li>
            <Image src={img2} alt='create repo in docker hub' />
            <li className='mt-5'>Now login to the Deployment using the below command.
              <Code parts={[{ type: 'text', text: 'docker login' }]} />
            </li>
            <li>
              Suppose your Deployment Hub username is yourusername and your repo is fastapi-backend.
              <Code parts={[
                { type: "text", text: `docker tag ` },
                { type: "placeholder", text: `local-image-name` },
                { type: "text", text: ` ` },
                { type: "placeholder", text: `yourusername` },
                { type: "text", text: `/` },
                { type: "placeholder", text: `repo-name` },
                { type: "text", text: `:` },
                { type: "placeholder", text: `tag` },
              ]} />
            </li>
            <li>
              Push the image using below command.
              <Code parts={[{ type: 'text', text: 'docker push yourusername/fastapi-backend:latest' }]} />
            </li>
            <li>
              Go to <a href="https://hub.docker.com/repositories" target='_blank' className='text-brand-primary hover:text-brand-secondary'>https://hub.docker.com/repositories</a> → you should see your fastapi-backend repo with the latest tag.
              <Image src={img3} alt="docker repository" />

            </li>
            <li>
              <h2>Run from anywhere</h2>
              On any system with Deployment installed, you (or anyone) can now do:
              <Code parts={[{ type: 'text', text: codes.dockerCmd }]} />

            </li>
          </ul>
        </p>


        <h3 className='mt-8 text-2xl font-semibold scroll-mt-24 text-text-main' id='step-5'>Container commands</h3>
        <p>To view all the running containers.</p>
        <Code parts={[{ type: "text", text: "docker ps" }]} />
        <p>To view all the containers including stopped ones.</p>
        <Code parts={[{ type: "text", text: "docker ps -a" }]} />
        <p>Stop a specific container.</p>
        <Code parts={[{ type: "text", text: "docker stop <container_id>" }]} />
        <p>Remove a specific container.</p>
        <Code parts={[{ type: "text", text: "docker rm <container_id>" }]} />
        <p>View logs of a running container.</p>
        <Code parts={[{ type: "text", text: "docker logs -f <container_id>" }]} />
        <p>Remove all stopped containers.</p>
        <Code parts={[{ type: "text", text: "docker container prune" }]} />
        <p>Stop / Start / Restart containers</p>
        <Code parts={[{ type: "text", text: codes.containerStarts }]} />

        <h3 className='mt-8 text-2xl font-semibold scroll-mt-24 text-text-main' id='step-6'>Images commands</h3>
        <p>To view all the running images.</p>
        <Code parts={[{ type: "text", text: "docker images" }]} />
        OR
        <Code parts={[{ type: "text", text: "docker image ls" }]} />

        <p>Build an image.</p>
        <Code parts={[{ type: "text", text: "docker build -t myimage:tag ." }]} />
        <p>Tag an image.</p>
        <Code parts={[{ type: "text", text: "docker tag source-image:tag target-image:tag" }]} />
        <p>Remove an image.</p>
        <Code parts={[{ type: "text", text: "docker rmi image_id" }]} />
        OR
        <Code parts={[{ type: "text", text: "docker image rm image_id" }]} />
        <p>Force remove (if container is using it):</p>
        <Code parts={[{ type: "text", text: "docker rmi -f image_id" }]} />
        <p>Inspect an image</p>
        <Code parts={[{ type: "text", text: "docker inspect image_id" }]} />
        <p>Push an image to Deployment Hub</p>
        <Code parts={[{ type: "text", text: "docker push username/repo:tag" }]} />
        <p>Pull an image from Deployment Hub</p>
        <Code parts={[{ type: "text", text: "docker pull username/repo:tag" }]} />
        <p>Prune unused images
          <span className='block'>Remove all dangling images (not tagged, not used):</span>
          <Code parts={[{ type: "text", text: "docker image prune" }]} />
          <span>Remove all unused images:</span>
          <Code parts={[{ type: "text", text: "docker image prune -a" }]} />
        </p>

        <p>🔹 Remove everything unused.</p>
        <Code parts={[{ type: "text", text: "docker system prune -a" }]} />
      </div>
      <Sidebar steps={steps} />
    </div>
  )
}

export default Deployment