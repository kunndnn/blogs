import utility from '../../components/Utilities';
const { Code, Sidebar, Step } = utility;

const steps = [
  { name: 'Install Node.js' },
  { name: 'Install Nginx' },
  { name: 'Environment & PM2' },
  { name: 'Nginx Backend Proxy' },
  { name: 'Nginx Frontend Static' },
  { name: 'SSL (HTTPS)' },
];

const codes = {
  installNode: `# Using NodeSource (example for Node 20)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs`,
  installNginx: `sudo apt update`,
  installNginx2: `sudo apt install nginx`,
  installNginx3: `sudo systemctl status nginx`,
  installNginx4: `sudo ufw allow 'Nginx Full`,
  sslSetup1: `sudo apt install certbot python3-certbot-nginx -y`,
}

const Deployment = () => {
  const step = (num) => <Step stepNum={num} />;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8">
      {/* Main content */}
      <div className="lg:col-span-8 space-y-6">
        <h2 className="text-3xl font-bold mb-4 text-text-main">Project Deployment Guide</h2>
        <p className="text-gray-400">This guide covers manual VPS deployment with Nginx, PM2, and SSL, as well as an alternative deployment using Docker.</p>

        {step(1)}
        <h3 className="text-xl font-semibold text-text-main">Install Node.js</h3>
        <p>Ensure you have Node.js installed on your server.</p>
        <Code parts={[{ type: "text", text: codes?.installNode }]} />

        {step(2)}
        <h3 className="text-xl font-semibold text-text-main">Install Nginx</h3>
        <p>Update packages and install Nginx, then allow it through the firewall.</p>
        <Code parts={[{ type: "text", text: codes?.installNginx }]} />
        <Code parts={[{ type: "text", text: codes?.installNginx2 }]} />
        <Code parts={[{ type: "text", text: codes?.installNginx3 }]} />
        <Code parts={[{ type: "text", text: codes?.installNginx4 }]} />

        {step(3)}
        <h3 className="text-xl font-semibold text-text-main">Environment & PM2</h3>
        <p>Set up your environment variables and use PM2 to keep your application running in the background.</p>
        <p>Install pm2 globally</p>
        <Code parts={[{ type: "text", text: "npm install pm2 -g" }]} />
        <p className="mt-4">Create or update your .env file</p>
        <Code parts={[{ type: "text", text: "nano .env" }]} />
        <p className="mt-4">Start your project and configure PM2 to restart on reboot</p>
        <Code parts={[
          { type: "text", text: "pm2 start " },
          { type: "placeholder", text: "index.js" },
          { type: "text", text: " --name " },
          { type: "placeholder", text: "project-name" },
          { type: "text", text: "\npm2 save\npm2 startup" }
        ]} />

        {step(4)}
        <h3 className="text-xl font-semibold text-text-main">Nginx Configuration (Backend Proxy)</h3>
        <p>First, check if your domain is pointing to the server IP.</p>
        <Code parts={[
          { type: "text", text: "ping " },
          { type: "placeholder", text: "example.com" }
        ]} />
        <p className="mt-4">Create a new site configuration:</p>
        <Code parts={[
          { type: "text", text: "sudo nano /etc/nginx/sites-available/" },
          { type: "placeholder", text: "example.com" }
        ]} />
        <p className="mt-4">Paste the following configuration (adjust the port):</p>
        <Code parts={[
          {
            type: "text", text: `server {
    listen 80;
    server_name ` },
          { type: "placeholder", text: "example.com" },
          {
            type: "text", text: `;

    location / {
        proxy_pass http://127.0.0.1:` },
          { type: "placeholder", text: "8000" },
          {
            type: "text", text: `;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Optional: allow larger uploads
    client_max_body_size 50M;
}` }
        ]} />
        <p className="mt-4">Save (Ctrl + O, Enter) and Exit (Ctrl + X).</p>
        <p className="mt-4">Enable the site by creating a symbolic link:</p>
        <Code parts={[
          { type: "text", text: "sudo ln -s /etc/nginx/sites-available/" },
          { type: "placeholder", text: "example.com" },
          { type: "text", text: " /etc/nginx/sites-enabled/" }
        ]} />
        <p className="mt-4">Test the configuration and reload Nginx:</p>
        <Code parts={[{ type: "text", text: "sudo nginx -t" }]} />
        <Code parts={[{ type: "text", text: "sudo systemctl reload nginx" }]} />

        {step(5)}
        <h3 className="text-xl font-semibold text-text-main">Nginx Configuration (Frontend Static)</h3>
        <p>For frontend applications, use this configuration:</p>
        <Code parts={[
          { type: "text", text: "sudo nano /etc/nginx/sites-available/" },
          { type: "placeholder", text: "example.com" }
        ]} />
        <p className="mt-4">Paste the static site configuration:</p>
        <Code parts={[
          {
            type: "text", text: `server {
    listen 80;
    server_name ` },
          { type: "placeholder", text: "example.com" },
          {
            type: "text", text: `;

    root /var/www/` },
          { type: "placeholder", text: "project-path" },
          { type: "text", text: `/` },
          { type: "placeholder", text: "buildFolder" },
          {
            type: "text", text: `;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    # Optional: increase upload size limit if needed
    client_max_body_size 50M;
}` }
        ]} />
        <p className="mt-4">Enable the site, test, and reload Nginx:</p>
        <Code parts={[
          { type: "text", text: "sudo ln -s /etc/nginx/sites-available/" },
          { type: "placeholder", text: "example.com" },
          { type: "text", text: " /etc/nginx/sites-enabled/" }
        ]} />
        <p>Test the configuration and reload Nginx:</p>
        <Code parts={[{ type: "text", text: "sudo nginx -t" }]} />
        <Code parts={[{ type: "text", text: "sudo systemctl reload nginx" }]} />

        {step(6)}
        <h3 className="text-xl font-semibold text-text-main">Setup SSL (HTTPS)</h3>
        <p>Use Certbot to automatically configure SSL for your domain.</p>
        <Code parts={[{ type: "text", text: codes?.sslSetup1 }]} />
        <Code parts={[
          { type: "text", text: "sudo certbot --nginx -d " },
          { type: "placeholder", text: "example.com" }
        ]} />
      </div>
      <Sidebar steps={steps} />
    </div>
  );
};

export default Deployment;
