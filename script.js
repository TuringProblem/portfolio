const osData = {
    arch: {
        experience: "2 years",
        skills: ["Bash", "Python", "Vim", "C"],
        tools: ["i3wm", "Gnome", "Kitty"],
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
                <a href="https://github.com/TuringProblem" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
                <a href="mailto:your@email.com">Email</a>
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

    selectProject(project) {
        this.currentProject = project;
        this.typeText(`Loading ${project.name}...`);
    }

    async typeText(text, speed = 50) {
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
