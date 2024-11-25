// OS-specific information
const osData = {
    arch: {
        experience: "2 years",
        skills: ["Bash", "Python", "Vim", "C"],
        tools: ["i3wm", "Gnome", "Kitty", "Pacman"],
        proficiency: "Intermediate Linux User"
    },
    mac: {
        experience: "10 years",
        skills: ["Swift", "Xcode", "Homebrew"],
        tools: ["iTerm2", "Kitty", "NeoVim", "FL Studio"],
        proficiency: "Advanced macOS User"
    },
    windows: {
        experience: "15 years+",
        skills: [".NET", "PowerShell", "WSL", "O365", "Azure", "Java"],
        tools: ["NeoVim", "Windows Terminal", "Active Directory"],
        proficiency: "Advanced Windows User"
    }
};

class TerminalPortfolio {
    constructor() {
        this.currentProject = null;
        this.currentOS = 'arch';
        this.terminalOutput = document.getElementById('terminal-output');
        this.isLoading = false;
        this.init();
    }

    init() {
        this.setupProjects();
        this.updateSystemInfo(this.currentOS);
        this.setupEventListeners();
    }

    setupProjects() {
        const projectList = document.querySelector('.project-list');
        const projects = [
            { name: 'Project1.md', tech: 'C', date: '2024' },
            { name: 'Project2.md', tech: 'Java', date: '2023' },
            { name: 'Project3.md', tech: 'Powershell/C#/Bash', date: '2023' }
        ];

        projects.forEach(project => {
            const projectElement = this.createProjectElement(project);
            projectList.appendChild(projectElement);
        });
    }

    updateSystemInfo(os) {
        const infoContent = document.querySelector('.info-content');
        const osInfo = osData[os];
        
        infoContent.innerHTML = `
            <div class="info-section">
                <span class="info-label">Name:</span> Override
            </div>
            <div class="info-section">
                <span class="info-label">Experience:</span> ${osInfo.experience}
            </div>
            <div class="info-section">
                <span class="info-label">Proficiency:</span> ${osInfo.proficiency}
            </div>
            <div class="info-section">
                <span class="info-label">Skills:</span> ${osInfo.skills.join(', ')}
            </div>
            <div class="info-section">
                <span class="info-label">Tools:</span> ${osInfo.tools.join(', ')}
            </div>
            <div class="social-links">
                <a href="https://github.com/TuringProblem" target="_blank" class="github-link">GitHub</a>
                <a href="https://www.linkedin.com/in/andrew-wellington-37a665246" target="_blank" class="linkedin-link">LinkedIn</a>
                <a href="mailto:overridezenyte@gmail.com" class="email-link">Email</a>
            </div>
        `;
    }

    createProjectElement(project) {
        const div = document.createElement('div');
        div.className = 'project-item';
        div.innerHTML = `
            <div>${project.name}</div>
            <small style="color: var(--text-secondary)">
                ${project.tech} • ${project.date}
            </small>
        `;
        
        div.addEventListener('click', () => this.selectProject(project));
        return div;
    }

    setupEventListeners() {
        document.querySelectorAll('.os-option').forEach(option => {
            option.addEventListener('click', () => {
                // Update active state
                document.querySelectorAll('.os-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
                
                // Update system info and theme
                const os = option.dataset.os;
                this.currentOS = os;
                this.updateSystemInfo(os);
                document.body.setAttribute('data-theme', os);
                
                // Update terminal prompt based on OS
                const userName = document.getElementById('user-name');
                switch(os) {
                    case 'arch':
                        userName.innerHTML = '<a href="https://github.com/TuringProblem">portfolio@Override: ~</a>';
                        break;
                    case 'mac':
                        userName.innerHTML = '<a href="https://github.com/TuringProblem">override@macbook-pro ~</a>';
                        break;
                    case 'windows':
                        userName.innerHTML = '<a href="https://github.com/TuringProblem">PS C:\\Users\\Override></a>';
                        break;
                }
            });
        });
    }

    async selectProject(project) {
        if (this.isLoading) return;
        this.isLoading = true;
        
        this.currentProject = project;
        this.terminalOutput.innerHTML = '';
        
        await this.typeText(`Loading ${project.name}...`);
        await this.loadProjectContent(project);
        this.isLoading = false;
    }

    async loadProjectContent(project) {
        this.terminalOutput.innerHTML = '';
        
        const mockMarkdown = {
            'Project1.md': `
         ____  ___________     __
       / ** \\/ **__/ ____/    / /
      / / / / **/ / **/ __   / / 
     / /_/ / /___/ /___/ /__/ /  
    /_____/_____/_____/\\_//__/  

# Text Editor Extraordinaire
## Author: \`\`\`@Override\`\`\`
## Will have Vim Motions
# DEMO:

### How to use;

| ***Direction/Inputs*** | ***Normal** Mode* | ***Visual** Mode* | ***Insert** Mode* | ***DESCRIPTION***|
|------------------|------------|-------------|-------------|-------------------------------------------|
| **UP**| j | same as {*NORMAL*}| ---- | Moves the cursor *UP* to the line ***ABOVE*** by **one**.|
|**DOWN**|k|same as {*NORMAL*}|----| Moves cursor *DOWN* to the line ***BELOW*** by **one**.|
|**LEFT**| h | same as {*NORMAL*} | ---- | Moves cursor to the *LEFT* by **one**.|
|**RIGHT**| l | same as {*NORMAL*} | ---- | Moves cursor to the *RIGHT* by **one**.|
|**NEXT CHAR LEFT** | w | same as {*NORMAL*} | ---- | Moves cursor to the next word (*TO THE* ***__LEFT__***)|
|**NEXT CHAR RIGHT** | b | same as {*NORMAL*} | ---- | Moves cursor to the next word (*TO THE* ***__RIGHT__***)|
|{*NORMAL*} mode| N/A | ESC | same as {*VISUAL*} | Changes current state into ***NORMAL MODE***. |
|{*INSERT*} mode| i | same as {*NORMAL*} | N/A| Changes current state into ***INSERT MODE***.| 
|{*VISUAL*} mode| v | N/A | same as {*NORMAL*}| Changes current state into ***VISUAL MODE***.|

# Built-in Txt-based scripting language:
## **TODO**() Function:

    DEEJ is not only just a Note-taking application,
    it is also a text editor and a text-based language with its very own functions.

# How to use TODO function:
    Syntax required is as follows:
    
### {it MUST BE WRAPPED WITH DOUBLE ** followed with 'TODO'}
ie:
    
        **TODO**
    you will also need also need Parenthesis () and content inside of the Parenthesis 
    and ended with a semi-colon ';':
ie: 
-----------------------------------------------------------------------------------------------------------------------------------------
    **TODO**(foo;)
    this creates a TODO table with the content of \`foo\`
     |IF YOU WOULD LIKE MULTIPLE ITEMS|
    {IMPORTANT: you MUST have a comma between each item ',':
ie:
----------------------------------------------------------------------------------------------------------------------------------------- 
         **TODO**(foo, bar;)
-----------------------------------------------------------------------------------------------------------------------------------------
    this creates a TODO table with contents \`foo\` and \`bar\`.

# Normal mode:
# Insert mode:
# Visual mode:

\`\`\`c
// Example implementation
int main() {
    printf("Text Editor Initialized\\n");
    initVimMotions();
    setupModes();
    return 0;
}

void initVimMotions() {
    // Vim motion implementations
    registerMotion('j', MOTION_UP);
    registerMotion('k', MOTION_DOWN);
    registerMotion('h', MOTION_LEFT);
    registerMotion('l', MOTION_RIGHT);
    registerMotion('w', MOTION_NEXT_WORD);
    registerMotion('b', MOTION_PREV_WORD);
}

void setupModes() {
    // Mode switching implementations
    registerMode(NORMAL_MODE, 'ESC');
    registerMode(INSERT_MODE, 'i');
    registerMode(VISUAL_MODE, 'v');
}
\`\`\``,
            'Project2.md': `# Java Application
\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
\`\`\``,
            'Project3.md': `# Script Collection
\`\`\`powershell
Write-Host "Hello from PowerShell"
\`\`\`
\`\`\`bash
echo "Hello from Bash"
\`\`\``
        };

        const content = mockMarkdown[project.name] || '# No content available';
        await this.renderMarkdown(content);
    }

    async renderMarkdown(markdown) {
        const lines = markdown.split('\n');
        this.terminalOutput.innerHTML = '';
        
        let inCodeBlock = false;
        let currentCodeBlock = '';
        let codeLanguage = '';
        let inTable = false;
        let tableContent = '';
        let inAsciiArt = false;
        let asciiArt = '';
        
        for (const line of lines) {
            await new Promise(resolve => setTimeout(resolve, 20));
            
            // Check for ASCII art (lines that are mostly special characters)
            if (line.trim() && line.match(/[^a-zA-Z0-9\s]/).length > line.length * 0.5) {
                if (!inAsciiArt) {
                    inAsciiArt = true;
                    asciiArt = '';
                }
                asciiArt += line + '\n';
                continue;
            } else if (inAsciiArt) {
                this.terminalOutput.innerHTML += `<pre class="ascii-art">${asciiArt}</pre>`;
                inAsciiArt = false;
                asciiArt = '';
            }
            
            // Handle tables
            if (line.startsWith('|') || line.startsWith('|-')) {
                if (!inTable) {
                    inTable = true;
                    tableContent = '';
                }
                tableContent += line + '\n';
                continue;
            } else if (inTable) {
                this.terminalOutput.innerHTML += `<div class="markdown-table">${tableContent}</div>`;
                inTable = false;
                tableContent = '';
            }
            
            // Handle code blocks
            if (line.startsWith('```')) {
                if (inCodeBlock) {
                    this.terminalOutput.innerHTML += `<pre class="code-block language-${codeLanguage}">${currentCodeBlock}</pre>`;
                    currentCodeBlock = '';
                    codeLanguage = '';
                } else {
                    codeLanguage = line.slice(3).trim();
                }
                inCodeBlock = !inCodeBlock;
                continue;
            }
            
            if (inCodeBlock) {
                currentCodeBlock += line + '\n';
            } else if (line.startsWith('#')) {
                const level = line.match(/^#+/)[0].length;
                const text = line.substring(level + 1);
                this.terminalOutput.innerHTML += `<h${level} class="md-heading">${text}</h${level}>\n`;
            } else if (line.match(/^-{3,}$/)) {
                this.terminalOutput.innerHTML += '<hr class="md-hr">\n';
            } else if (line.startsWith('    ')) {
                this.terminalOutput.innerHTML += `<pre class="code-block">${line}</pre>`;
            } else {
                this.terminalOutput.innerHTML += `${line}\n`;
            }
        }
        
        // Clean up any remaining blocks
        if (inTable) {
            this.terminalOutput.innerHTML += `<div class="markdown-table">${tableContent}</div>`;
        }
        if (inAsciiArt) {
            this.terminalOutput.innerHTML += `<pre class="ascii-art">${asciiArt}</pre>`;
        }
        
        this.terminalOutput.innerHTML += '<span class="cursor"></span>';
    }

    async typeText(text, speed = 30) {
        this.terminalOutput.innerHTML = '';
        for (let char of text) {
            await new Promise(resolve => setTimeout(resolve, speed));
            this.terminalOutput.innerHTML += char;
        }
        this.terminalOutput.innerHTML += '<span class="cursor"></span>';
    }
}

// Initialize the terminal
document.addEventListener('DOMContentLoaded', () => {
    const terminal = new TerminalPortfolio();
});
