# Deploying Your Portfolio: VPS + Nginx

A ground-up guide to getting your site live on a real server with a real domain.
No shortcuts — you're going to understand every layer.

---

## The Big Picture

When someone types `yourname.com` into a browser, here is literally what happens:

1. Their computer asks a DNS server "what IP address is `yourname.com`?"
2. DNS says "it's at `123.456.789.0`"
3. Their browser sends an HTTP request to that IP address
4. A web server (nginx) on your VPS receives it
5. Nginx reads the request, finds your files, and sends them back
6. The browser renders your site

That's it. The whole internet is basically this loop. Everything you're about to learn
is just the setup work to make this happen reliably.

---

## Concepts to Understand First

Before touching a server, make sure you understand these terms. They will come up
constantly and confusing them will make everything harder.

### IP Address
A unique number assigned to every device on the internet. Your VPS will have one.
Think of it like a phone number for your server. Example: `167.99.45.201`

### DNS (Domain Name System)
The phonebook of the internet. DNS translates human-readable domain names
(`yourname.com`) into IP addresses (`167.99.45.201`). You configure DNS records
through wherever you bought your domain.

The two records you'll use:
- **A record** — points a domain to an IPv4 address
- **CNAME record** — points a domain to another domain (aliases)

### VPS (Virtual Private Server)
A rented Linux computer that runs 24/7 in a data center. You don't own it physically
but you have full root access. DigitalOcean calls theirs "Droplets".

### SSH (Secure Shell)
How you connect to and control your VPS from your terminal. Instead of sitting at
the server's keyboard, you open a terminal on your laptop and type commands that
run on the remote machine.

```bash
ssh root@167.99.45.201
```

### Web Server (Nginx)
Software that runs on your VPS and listens for incoming HTTP requests. When a
browser connects to your server's IP on port 80 (HTTP) or 443 (HTTPS), nginx
handles the request and serves the right files back.

### SSL / HTTPS
The `https://` in URLs. An SSL certificate encrypts traffic between the browser and
your server. Let's Encrypt gives these out for free. Certbot is the tool that
automates getting and renewing them.

---

## What You Need to Buy

| Thing | Where | Cost |
|---|---|---|
| Domain name | Cloudflare Registrar, Namecheap, or Porkbun | ~$10-15/year |
| VPS | DigitalOcean, Linode, or Vultr | ~$4-6/month |

**Domain advice:** Cloudflare Registrar sells domains at cost (no markup) and their
DNS management is excellent. Namecheap and Porkbun are also solid. Avoid GoDaddy.

**VPS advice:** DigitalOcean's $6/month basic Droplet (1GB RAM, 1 CPU) is more than
enough for a static portfolio. Their UI and documentation are the best in the industry
for beginners.

---

## Step-by-Step Process

### Step 1 — Create Your VPS

1. Sign up at DigitalOcean (or Linode/Vultr)
2. Create a new Droplet/server with these settings:
   - OS: **Ubuntu 24.04 LTS**
   - Size: cheapest shared CPU option (~$6/mo)
   - Region: wherever is geographically closest to you
   - Authentication: **SSH Key** (not password — more on this below)
3. Note the IP address DigitalOcean gives you

#### Setting up SSH keys (do this before creating the Droplet)

SSH keys are a pair of files — a private key that stays on your laptop, and a public
key you give to the server. Only someone with the private key can log in.

```bash
# Generate a key pair on your local machine
ssh-keygen -t ed25519 -C "your@email.com"

# This creates two files:
# ~/.ssh/id_ed25519       (private key — never share this)
# ~/.ssh/id_ed25519.pub   (public key — this goes on the server)

# Copy your public key to paste into DigitalOcean's UI
cat ~/.ssh/id_ed25519.pub
```

Paste the output of that last command into DigitalOcean when it asks for your SSH key.

---

### Step 2 — Connect to Your Server

```bash
ssh root@YOUR_SERVER_IP
```

You're now inside a Linux machine in a data center somewhere. Every command you type
runs there, not on your laptop.

---

### Step 3 — Basic Server Setup

Run these after first logging in. You only do this once.

```bash
# Update the package list and upgrade existing packages
apt update && apt upgrade -y

# Create a non-root user (running as root all the time is bad practice)
adduser yourname

# Give that user sudo privileges
usermod -aG sudo yourname

# Copy your SSH key to the new user so you can log in as them
rsync --archive --chown=yourname:yourname ~/.ssh /home/yourname

# Switch to your new user
su - yourname
```

From now on, connect with `ssh yourname@YOUR_SERVER_IP` instead of root.

---

### Step 4 — Install Nginx

```bash
sudo apt install nginx -y

# Start nginx and enable it to start on boot
sudo systemctl start nginx
sudo systemctl enable nginx

# Allow HTTP and HTTPS traffic through the firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

At this point, if you open your browser and go to `http://YOUR_SERVER_IP` you should
see the default nginx welcome page. That means it's working.

---

### Step 5 — Get Your Files on the Server

Back on your **local machine** (not the server), build your Elm site and copy the
files over:

```bash
# Build with optimizations for production
elm make src/Main.elm --optimize --output=elm.js

# Copy your static files to the server
# The : at the end means "home directory of yourname on the server"
scp -r index.html elm.js style.css images/ yourname@YOUR_SERVER_IP:

# SSH back into the server
ssh yourname@YOUR_SERVER_IP

# Move files to the standard web root directory
sudo mkdir -p /var/www/yourname
sudo mv index.html elm.js style.css images /var/www/yourname/
sudo chown -R www-data:www-data /var/www/yourname
```

`/var/www/` is the conventional location for websites on a Linux server.
`www-data` is the user that nginx runs as — giving it ownership lets nginx read the files.

---

### Step 6 — Configure Nginx

Nginx uses config files called "server blocks" (similar to virtual hosts in Apache)
to know which files to serve for which domain.

```bash
sudo nano /etc/nginx/sites-available/yourname.com
```

Paste this config (replace `yourname.com` with your actual domain):

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name yourname.com www.yourname.com;

    root /var/www/yourname;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Enable the config and test it:

```bash
# Create a symlink from sites-available to sites-enabled
sudo ln -s /etc/nginx/sites-available/yourname.com /etc/nginx/sites-enabled/

# Test the config for syntax errors
sudo nginx -t

# Reload nginx to apply changes
sudo systemctl reload nginx
```

---

### Step 7 — Point Your Domain to Your Server

In your domain registrar's DNS settings, add an A record:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | YOUR_SERVER_IP | Auto |
| A | www | YOUR_SERVER_IP | Auto |

`@` means the root domain (`yourname.com`). The `www` record handles `www.yourname.com`.

DNS changes can take anywhere from a few minutes to 48 hours to propagate globally,
though it's usually under an hour. You can check propagation at `dnschecker.org`.

---

### Step 8 — HTTPS with Let's Encrypt

Once DNS is pointing at your server, get a free SSL certificate:

```bash
# Install certbot and the nginx plugin
sudo apt install certbot python3-certbot-nginx -y

# Get a certificate (replace with your domain)
sudo certbot --nginx -d yourname.com -d www.yourname.com
```

Certbot will:
1. Verify you own the domain (by checking DNS)
2. Issue a certificate
3. Automatically update your nginx config to use HTTPS
4. Set up a cron job to auto-renew the certificate before it expires

After this, `https://yourname.com` is live.

---

### Step 9 — Deploying Updates

Every time you make changes to your site:

```bash
# On your local machine:
elm make src/Main.elm --optimize --output=elm.js
scp index.html elm.js style.css yourname@YOUR_SERVER_IP:/var/www/yourname/
```

That's it. Nginx serves files directly from disk so there's no restart needed.

---

## What You've Learned by Doing This

- **Linux basics** — navigating a server, file permissions, users
- **SSH** — how to securely connect to remote machines
- **Nginx** — how web servers work, how to configure one
- **DNS** — how domain names map to IP addresses, how to configure records
- **HTTPS/SSL** — how certificates work and how to get one for free
- **SCP** — how to transfer files between machines

These are foundational skills. Every cloud platform (AWS, GCP, Azure) is just an
abstraction layer on top of exactly this.

---

## Resources

### Videos

Search these on YouTube — these channels are reliable and beginner-friendly:

- **NetworkChuck** — "how to set up a web server", "linux for beginners", "SSH tutorial"
  Great energy, explains concepts visually, good for absolute beginners
- **Traversy Media** — "VPS deployment", "nginx crash course"
  Practical and to the point, good code-along style
- **TechWorld with Nana** — anything on Linux, networking, or DevOps fundamentals
  More thorough and structured, good if you want real depth

### Written Guides

DigitalOcean's documentation is genuinely the best free resource on the internet
for this exact stack. Search directly on their site:

- `digitalocean.com/community/tutorials` — search "nginx ubuntu", "initial server setup",
  "certbot let's encrypt nginx"

Their tutorials are kept up to date, have copy-paste commands that actually work,
and explain the why behind each step.

### For Understanding DNS Specifically

- Search "how DNS works" on YouTube — there are several good 5-10 minute animated
  explainers that make the phonebook analogy click visually
- Cloudflare's "Learning Center" (search `cloudflare.com learning dns`) has excellent
  written explanations of every DNS concept

### Linux Command Line Basics

If you're not comfortable in the terminal yet, do this before touching the server:

- Search "linux command line crash course" on YouTube (Traversy Media has a good one)
- The commands you absolutely need: `ls`, `cd`, `mkdir`, `mv`, `cp`, `rm`, `nano`,
  `sudo`, `chmod`, `chown`, `systemctl`

---

## Common Things That Go Wrong

**Can't SSH in:** Check that your SSH key was added correctly, check the IP address,
make sure the firewall isn't blocking port 22.

**Site not loading after DNS change:** DNS hasn't propagated yet. Wait 30 minutes
and try again. Check `dnschecker.org` to see if your domain is resolving globally.

**Nginx config test fails:** You have a syntax error. Read the error message — it
tells you the line number. Common mistake is a missing semicolon.

**Certbot fails:** DNS hasn't propagated yet. Certbot needs to be able to look up
your domain and reach your server. Wait for DNS to propagate first.

**Files aren't updating:** Make sure you're copying to the right path. Run
`ls /var/www/yourname/` on the server to confirm the files are there.
