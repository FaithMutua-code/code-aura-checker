// Enhanced language and library data
const languageData = {
    'javascript': { 
        keywords: ['function', 'const', 'let', 'var', '=>', 'console.log', 'import', 'export', 'require', 'async', 'await', 'try', 'catch'], 
        extensions: ['js', 'jsx', 'mjs', 'cjs'] 
    },
    'python': { 
        keywords: ['def ', 'import ', 'class ', 'print(', 'lambda ', 'try:', 'except ', 'with ', 'async', 'await', 'yield'], 
        extensions: ['py', 'pyw', 'pyc'] 
    },
    'java': { 
        keywords: ['public ', 'class ', 'import ', 'void ', 'System.out.println', 'new ', 'extends ', 'implements ', 'interface '], 
        extensions: ['java'] 
    },
    'c': { 
        keywords: ['#include', 'printf', 'scanf', 'int ', 'void ', 'char ', 'struct ', 'return ', 'typedef ', '#define'], 
        extensions: ['c', 'h'] 
    },
    'c++': { 
        keywords: ['#include', 'cout <<', 'cin >>', 'std::', 'using namespace', 'template<', 'class ', 'virtual ', 'override'], 
        extensions: ['cpp', 'hpp', 'hxx', 'cxx'] 
    },
    'c#': { 
        keywords: ['using ', 'namespace ', 'class ', 'public ', 'void ', 'Console.WriteLine', 'var ', '=>', 'async', 'await'], 
        extensions: ['cs'] 
    },
    'php': { 
        keywords: ['<?php', 'echo ', 'function ', 'class ', 'namespace ', 'use ', '$_GET', '$_POST', '->', '::'], 
        extensions: ['php', 'phtml'] 
    },
    'ruby': { 
        keywords: ['def ', 'class ', 'require ', 'puts ', 'module ', 'do ', 'end', 'attr_', 'yield'], 
        extensions: ['rb'] 
    },
    'go': { 
        keywords: ['package ', 'import ', 'func ', 'var ', 'const ', 'type ', 'for ', 'if ', 'struct ', 'interface '], 
        extensions: ['go'] 
    },
    'swift': { 
        keywords: ['import ', 'func ', 'var ', 'let ', 'class ', 'struct ', 'enum ', 'extension ', 'protocol '], 
        extensions: ['swift'] 
    },
    'rust': { 
        keywords: ['fn ', 'let ', 'mut ', 'pub ', 'impl ', 'trait ', 'use ', 'match ', 'mod ', 'unsafe '], 
        extensions: ['rs'] 
    },
    'typescript': { 
        keywords: ['type ', 'interface ', 'enum ', 'import ', 'export ', 'declare ', '=>', 'let ', 'const ', 'async', 'await'], 
        extensions: ['ts', 'tsx'] 
    },
    'html': { 
        keywords: ['<!DOCTYPE html>', '<html', '<head', '<body', '<div', '<span', '<a ', '<p ', '<script', '<style'], 
        extensions: ['html', 'htm'] 
    },
    'css': { 
        keywords: ['{', '}', ':', ';', '@media', '@keyframes', '@import', '@font-face', '#', '.', 'animation:'], 
        extensions: ['css', 'scss', 'sass', 'less'] 
    },
    'bash': { 
        keywords: ['#!/bin/bash', '#!/bin/sh', 'echo ', 'if [', 'for ', 'while ', 'do ', 'done', 'function '], 
        extensions: ['sh', 'bash'] 
    },
    'powershell': { 
        keywords: ['#Requires', 'Write-Host', 'function ', 'param(', 'foreach ', 'if ', 'else ', 'try ', 'catch '], 
        extensions: ['ps1'] 
    },
    'kotlin': { 
        keywords: ['fun ', 'val ', 'var ', 'class ', 'import ', 'when ', 'object ', 'companion ', 'data class '], 
        extensions: ['kt', 'kts'] 
    },
    'dart': { 
        keywords: ['void ', 'main()', 'class ', 'import ', '=>', 'final ', 'const ', 'async ', 'Future<', 'await '], 
        extensions: ['dart'] 
    },
    'scala': { 
        keywords: ['def ', 'val ', 'var ', 'class ', 'object ', 'trait ', 'extends ', 'with ', 'yield '], 
        extensions: ['scala'] 
    }
};

const libraryData = {
    'javascript': {
        'React': ['ReactDOM', 'React.Component', 'useState', 'useEffect', 'useRef', 'useContext'],
        'React Router': ['BrowserRouter', 'Route', 'Switch', 'Link', 'useHistory', 'useParams'],
        'jQuery': ['$', 'jQuery'],
        'Vue.js': ['Vue', 'new Vue', 'v-model', 'v-for', 'v-if', 'v-show', 'v-bind'],
        'Angular': ['@NgModule', '@Component', '@Injectable', 'ngOnInit', 'ngAfterViewInit'],
        'Express.js': ['express()', 'app.get', 'app.post', 'app.use', 'req.params', 'res.json'],
        'Moment.js': ['moment(', 'moment().format', 'moment().add', 'moment().subtract'],
        'Lodash': ['_.', '_.map', '_.filter', '_.reduce', '_.debounce', '_.throttle'],
        'Axios': ['axios.get', 'axios.post', 'axios.put', 'axios.delete', 'axios.create'],
        'Redux': ['createStore', 'combineReducers', 'useDispatch', 'useSelector', 'connect('],
        'Next.js': ['getServerSideProps', 'getStaticProps', 'useRouter', 'next/link', 'next/image'],
        'Three.js': ['THREE.', 'new THREE.Scene', 'new THREE.Mesh', 'new THREE.WebGLRenderer'],
        'ESLint': ['eslint-disable', 'eslint-enable', 'eslint-ignore'],
        'Prettier': ['prettier-ignore', '// prettier-ignore'],
        'Jest': ['describe(', 'it(', 'expect(', 'jest.mock('],
        'Aura.js': ['createAura()', 'goodAuraOnly', 'checkAuraLevel']
    },
    'python': {
        'Django': ['from django.', 'django.db.models', 'HttpResponse', 'render(', 'urlpatterns'],
        'Flask': ['Flask(', 'app.route(', 'flask.', 'request.', 'jsonify('],
        'Pandas': ['pd.', 'pandas.', 'DataFrame', 'read_csv', 'Series', 'groupby'],
        'NumPy': ['np.', 'numpy.', 'array(', 'linspace(', 'zeros(', 'ones('],
        'Matplotlib': ['plt.', 'matplotlib.', 'plot(', 'figure(', 'subplot(', 'show()'],
        'TensorFlow': ['tensorflow.', 'tf.', 'keras.', 'Dense', 'Sequential', 'compile('],
        'PyTorch': ['torch.', 'nn.', 'Tensor(', 'optim.', 'Dataset', 'DataLoader'],
        'FastAPI': ['FastAPI(', 'app.get(', 'app.post(', 'from fastapi import', 'Depends'],
        'Pytest': ['pytest.', 'with pytest.raises', 'fixture(', 'mark.', 'parametrize'],
        'Requests': ['requests.get', 'requests.post', 'response.json', 'response.text'],
        'Black': ['# fmt: off', '# fmt: on'],
        'Pylint': ['# pylint: disable', '# pylint: enable'],
        'Aura.py': ['good_aura.check()', 'aura_report.generate()']
    },
    'java': {
        'Spring Boot': ['@SpringBootApplication', '@RestController', '@Autowired', '@GetMapping', '@PostMapping'],
        'JUnit': ['@Test', 'Assertions.', '@BeforeEach', '@AfterEach', '@DisplayName'],
        'Mockito': ['@Mock', '@InjectMocks', 'Mockito.', 'when(', 'verify('],
        'Hibernate': ['@Entity', '@Table', '@Column', 'SessionFactory', 'CriteriaBuilder'],
        'Lombok': ['@Data', '@Getter', '@Setter', '@NoArgsConstructor', '@AllArgsConstructor'],
        'Jackson': ['ObjectMapper', '@JsonIgnore', '@JsonProperty', 'JsonNode', 'ObjectReader'],
        'Apache Commons': ['StringUtils.', 'FileUtils.', 'ArrayUtils.', 'CollectionUtils.'],
        'JavaAura': ['AuraCheck.run()', 'GoodAuraOnly.enable()']
    }
};

// DOM elements
const sourceCodeEl = document.getElementById('sourceCode');
const codeFileEl = document.getElementById('codeFile');
const fileNameEl = document.getElementById('fileName');
const repoUrlEl = document.getElementById('repoUrl');
const repoInfoEl = document.getElementById('repoInfo');
const repoNameEl = document.getElementById('repoName');
const repoDescriptionEl = document.getElementById('repoDescription');
const repoStarsEl = document.getElementById('repoStars');
const repoForksEl = document.getElementById('repoForks');
const repoWatchersEl = document.getElementById('repoWatchers');
const resultsEl = document.getElementById('results');
const suggestionsEl = document.getElementById('suggestions');
const suggestionsListEl = document.getElementById('suggestionsList');
const progressBarEl = document.getElementById('progressBar');
const progressEl = document.getElementById('progress');
const statusTextEl = document.getElementById('statusText');
const historyPanelEl = document.getElementById('historyPanel');
const historyListEl = document.getElementById('historyList');

// File upload handler
codeFileEl.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        fileNameEl.textContent = `Selected: ${e.target.files[0].name}`;
        fileNameEl.style.display = 'block';
    } else {
        fileNameEl.style.display = 'none';
    }
});

// Tab switching
function switchTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Deactivate all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Activate selected tab
    document.getElementById(`${tabName}-tab`).classList.add('active');
    document.querySelector(`.tab[onclick="switchTab('${tabName}')"]`).classList.add('active');
}

// GitHub repo analysis
async function fetchGitHubRepo() {
    const url = repoUrlEl.value.trim();
    
    if (!url.startsWith('https://github.com/')) {
        showError('Please enter a valid GitHub repository URL');
        return;
    }
    
    startAnalysis();
    
    try {
        // Extract owner and repo from URL
        const parts = url.replace('https://github.com/', '').split('/');
        const owner = parts[0];
        const repo = parts[1];
        
        if (!owner || !repo) {
            throw new Error('Invalid GitHub URL format');
        }
        
        // Fetch repository metadata
        const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!repoResponse.ok) {
            throw new Error('Repository not found or not public');
        }
        
        const repoData = await repoResponse.json();
        
        // Display repo info
        repoNameEl.textContent = repoData.full_name;
        repoDescriptionEl.textContent = repoData.description || 'No description provided';
        repoStarsEl.textContent = repoData.stargazers_count;
        repoForksEl.textContent = repoData.forks_count;
        repoWatchersEl.textContent = repoData.watchers_count;
        repoInfoEl.style.display = 'block';
        
        // Fetch repository contents
        const contentsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents`);
        const contentsData = await contentsResponse.json();
        
        // Analyze first few code files
        let combinedCode = '';
        const codeFiles = contentsData.filter(file => 
            file.name.match(/\.(js|py|java|php|html|css|cpp|c|cs|go|rb|swift|rs|ts|json|xml|md|txt)$/i)
        ).slice(0, 3);
        
        for (const file of codeFiles) {
            try {
                const fileResponse = await fetch(file.download_url);
                combinedCode += `// File: ${file.name}\n\n${await fileResponse.text()}\n\n`;
            } catch (error) {
                console.error(`Error fetching file ${file.name}:`, error);
            }
        }
        
        sourceCodeEl.value = combinedCode;
        analyzeCode();
    } catch (error) {
        console.error('GitHub API error:', error);
        showError('Error fetching repository. Make sure it\'s public and try again.');
        completeAnalysis();
    }
}

// Analyze file contents
function analyzeFile() {
    const file = codeFileEl.files[0];
    
    if (!file) {
        showError('Please select a file first');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        sourceCodeEl.value = e.target.result;
        analyzeCode();
    };
    
    reader.onerror = function() {
        showError('Error reading file. Please try again.');
    };
    
    startAnalysis();
    reader.readAsText(file);
}

// Show error message
function showError(message) {
    const errorEl = document.createElement('div');
    errorEl.className = 'language-card';
    errorEl.style.borderLeft = '6px solid var(--danger)';
    errorEl.innerHTML = `
        <h3><i class="fas fa-heart-broken" style="color: var(--danger);"></i> Bad Aura</h3>
        <p>${message}</p>
    `;
    
    resultsEl.innerHTML = '';
    resultsEl.appendChild(errorEl);
}

// Clear the code input
function clearCode() {
    sourceCodeEl.value = '';
    fileNameEl.style.display = 'none';
    codeFileEl.value = '';
    repoInfoEl.style.display = 'none';
    repoUrlEl.value = '';
    
    // Reset results
    resultsEl.innerHTML = `
        <div class="no-results">
            <i class="fas fa-ghost"></i>
            <p>No code aura detected yet. Paste, upload, or link your code to get started.</p>
        </div>
    `;
    
    suggestionsEl.style.display = 'none';
    historyPanelEl.style.display = 'none';
}

// Start analysis animation
function startAnalysis() {
    progressBarEl.style.display = 'block';
    statusTextEl.style.display = 'flex';
    progressEl.style.width = '0%';
    
    // Animate progress bar
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 90) {
            clearInterval(interval);
        } else {
            width += 10;
            progressEl.style.width = `${width}%`;
        }
    }, 300);
    
    // Add rotating emoji during analysis
    const emojis = ['🔍', '💻', '🧠', '✨', '📊'];
    let i = 0;
    statusTextEl.emojiInterval = setInterval(() => {
        statusTextEl.querySelector('span').textContent = `Analyzing ${emojis[i]}...`;
        i = (i + 1) % emojis.length;
    }, 300);
}

// Complete analysis animation
function completeAnalysis() {
    progressEl.style.width = '100%';
    clearInterval(statusTextEl.emojiInterval);
    statusTextEl.innerHTML = `<i class="fas fa-check-circle" style="color: var(--success);"></i><span>Aura check complete!</span>`;
    
    setTimeout(() => {
        progressBarEl.style.display = 'none';
        statusTextEl.style.display = 'none';
    }, 1500);
}

// Main analysis function
function analyzeCode() {
    const code = sourceCodeEl.value.trim();
    
    if (!code) {
        showError('Please enter or upload some code to check its aura');
        return;
    }
    
    startAnalysis();
    
    // Simulate analysis delay for UI effect
    setTimeout(() => {
        const { languages, libraries } = detectLanguagesAndLibraries(code);
        const metrics = analyzeCodeQuality(code);
        const auraScore = calculateAuraScore(languages, libraries, code);
        const hasGoodAura = auraScore > 60;
        
        displayResults(languages, libraries, metrics, auraScore, hasGoodAura);
        generateSuggestions(languages, libraries, auraScore);
        saveAnalysis({
            languages,
            libraries,
            score: auraScore,
            snippet: code.substring(0, 100) + '...'
        });
        showHistory();
        completeAnalysis();
    }, 1200);
}

// Detect languages and libraries in code
function detectLanguagesAndLibraries(code) {
    const languages = [];
    const libraries = {};
    
    // First detect the primary language
    for (const [lang, data] of Object.entries(languageData)) {
        let score = 0;
        const keywords = data.keywords;
        
        for (const keyword of keywords) {
            if (code.includes(keyword)) {
                score += 1;
            }
        }
        
        if (score > 0) {
            // Calculate confidence as percentage of keywords found (capped at 80% for matches)
            const confidence = Math.min(80, Math.round((score / keywords.length) * 100));
            
            // Add some random variance (simulating more complex analysis)
            const finalConfidence = confidence + Math.floor(Math.random() * 20);
            
            languages.push({
                name: lang,
                confidence: Math.min(100, finalConfidence)
            });
        }
    }
    
    // Add file extension detection if available
    if (fileNameEl.textContent) {
        const extension = fileNameEl.textContent.split('.').pop().toLowerCase();
        for (const [lang, data] of Object.entries(languageData)) {
            if (data.extensions.includes(extension)) {
                // Boost confidence for matching extensions
                const existingLang = languages.find(l => l.name === lang);
                if (existingLang) {
                    existingLang.confidence = Math.min(100, existingLang.confidence + 15);
                } else {
                    languages.push({
                        name: lang,
                        confidence: 60 // Base confidence for extension match
                    });
                }
            }
        }
    }
    
    // If no languages found, try to guess from structure
    if (languages.length === 0) {
        if (code.includes('<?') || code.includes('?>')) {
            languages.push({ name: 'php', confidence: 70 });
        } else if (/<\w+>.*<\/\w+>/.test(code)) {
            languages.push({ name: 'html', confidence: 60 });
        } else if (/[{};]+/.test(code)) {
            languages.push({ name: 'c-style language', confidence: 40 });
        }
    }
    
    // Sort by confidence
    languages.sort((a, b) => b.confidence - a.confidence);
    
    // Detect libraries based on primary language
    if (languages.length > 0) {
        const primaryLang = languages[0].name;
        
        if (libraryData[primaryLang]) {
            for (const [lib, identifiers] of Object.entries(libraryData[primaryLang])) {
                for (const identifier of identifiers) {
                    if (code.includes(identifier) && !libraries[lib]) {
                        // Found at least one identifier from this library
                        libraries[lib] = {
                            language: primaryLang,
                            identifiersFound: [identifier]
                        };
                        break;
                    }
                }
            }
        }
    }
    
    return { languages, libraries: Object.entries(libraries).map(([name, data]) => ({ name, ...data })) };
}

// Analyze code quality metrics
function analyzeCodeQuality(code) {
    const lines = code.split('\n');
    const commentLines = lines.filter(line => 
        line.trim().startsWith('//') || 
        line.trim().startsWith('#') || 
        line.trim().startsWith('/*') || 
        line.trim().startsWith('*') || 
        line.trim().startsWith('*/')
    ).length;
    
    const emptyLines = lines.filter(line => line.trim() === '').length;
    
    return {
        lines: lines.length,
        characters: code.length,
        commentLines,
        commentPercentage: Math.round((commentLines / lines.length) * 100),
        emptyLines,
        emptyPercentage: Math.round((emptyLines / lines.length) * 100),
        complexity: (code.match(/\bif\b|\belse\b|\bfor\b|\bwhile\b|\bswitch\b|\bcase\b/g) || []).length,
        functions: (code.match(/\bfunction\b|\bdef\b|\bfunc\b/g) || []).length,
        imports: (code.match(/\bimport\b|\brequire\b/g) || []).length
    };
}

// Calculate aura score
function calculateAuraScore(languages, libraries, code) {
    let score = 50; // Base score
    
    // Positive factors
    if (languages.length > 0) score += 10;
    if (libraries.length > 3) score += 5; // Using established libraries
    if (codeHasTests(code)) score += 15;
    if (code.length > 200) score += 5; // More substantial code
    
    // Code quality metrics
    const metrics = analyzeCodeQuality(code);
    if (metrics.commentPercentage > 10) score += 5; // Good comments
    if (metrics.complexity < 20) score += 5; // Not too complex
    if (metrics.functions > 3) score += 5; // Good modularity
    
    // Negative factors
    if (code.includes('eval(')) score -= 10;
    if (code.includes('var ')) score -= 5; // Prefer let/const
    if (metrics.emptyPercentage > 30) score -= 5; // Too many empty lines
    
    // Ensure score stays within bounds
    return Math.max(20, Math.min(100, score));
}

// Check if code has test indicators
function codeHasTests(code) {
    const testKeywords = ['test', 'spec', 'assert', 'expect', 'should', 'it(', 'describe('];
    return testKeywords.some(keyword => code.toLowerCase().includes(keyword));
}

// Display results in the UI
function displayResults(languages, libraries, metrics, auraScore, hasGoodAura) {
    if (languages.length === 0 && libraries.length === 0) {
        resultsEl.innerHTML = `
            <div class="no-results">
                <i class="fas fa-question-circle"></i>
                <p>Could not confidently detect any languages or libraries. Try with more code.</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    // Show "aura" rating at the top
    const auraIcon = hasGoodAura ? 'fa-smile-beam' : 'fa-meh';
    const auraColor = hasGoodAura ? 'var(--success)' : 'var(--warning)';
    
    html += `
        <div class="language-card" style="border-left-color: ${auraColor}; margin-bottom: 1.5rem;">
            <h3>
                <i class="fas ${auraIcon}" style="color: ${auraColor};"></i>
                Code Aura Level
                <span class="aura-rating" style="background: ${auraColor + '20'}; color: ${auraColor};">
                    ${auraScore}/100
                </span>
            </h3>
            <p>${hasGoodAura 
                ? 'Your code has great aura! Keep up the good work.' 
                : 'Your code aura could use some improvement. Check our suggestions below.'}</p>
            <div class="progress-bar">
                <div class="progress" style="width: ${auraScore}%; background: ${auraColor};"></div>
            </div>
        </div>
    `;
    
    // Show code metrics
    html += `
        <div class="metrics-card fade-in">
            <h3><i class="fas fa-chart-bar"></i> Code Metrics</h3>
            <div class="metrics-grid">
                <div class="metric">
                    <div class="metric-value">${metrics.lines}</div>
                    <div class="metric-label">Lines</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${metrics.characters}</div>
                    <div class="metric-label">Chars</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${metrics.commentPercentage}%</div>
                    <div class="metric-label">Comments</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${metrics.complexity}</div>
                    <div class="metric-label">Complexity</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${metrics.functions}</div>
                    <div class="metric-label">Functions</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${metrics.imports}</div>
                    <div class="metric-label">Imports</div>
                </div>
            </div>
        </div>
    `;
    
    // Then show suggestions section
    suggestionsEl.style.display = 'block';
    
    // Then show libraries if any
    if (libraries.length > 0) {
        html += '<h3 style="margin: 1.5rem 0 1rem 0;">Detected Libraries & Frameworks</h3>';
        
        libraries.forEach((lib, index) => {
            // Add delay for staggered animation
            const delay = index * 100;
            const identifiers = lib.identifiersFound.join(', ');
            
            html += `
                <div class="library-card fade-in" style="animation-delay: ${delay}ms;">
                    <h3>
                        <i class="fas fa-box-open"></i>
                        ${capitalize(lib.name)}
                        <span class="badge badge-secondary" style="margin-left: 0.5rem;">
                            for ${capitalize(lib.language)}
                        </span>
                    </h3>
                    <p><strong>Identifiers found:</strong> ${identifiers}</p>
                </div>
            `;
        });
    }
    
    // Finally show languages
    if (languages.length > 0) {
        html += '<h3 style="margin: 1.5rem 0 1rem 0;">Detected Languages</h3>';
        
        languages.forEach((lang, index) => {
            // Add delay for staggered animation
            const delay = (libraries.length + index) * 100;
            
            html += `
                <div class="language-card fade-in" style="animation-delay: ${delay}ms;">
                    <h3>
                        <i class="fab fa-${getLanguageIcon(lang.name)}"></i>
                        ${capitalize(lang.name)} 
                        <span class="badge badge-primary" style="margin-left: 0.5rem;">
                            ${lang.confidence}% confidence
                        </span>
                    </h3>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${lang.confidence}%;"></div>
                    </div>
                </div>
            `;
        });
    }
    
    // Insert results after the suggestions
    suggestionsEl.insertAdjacentHTML('afterend', html);
    
    // Force reflow to trigger animations
    void resultsEl.offsetWidth;
    
    // Add active class to all fade-in elements after a short delay
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('active');
        });
    }, 100);
}

// Generate suggestions based on detected tech stack
function generateSuggestions(languages, libraries, auraScore) {
    const suggestions = [];
    const detectedLibNames = libraries.map(lib => lib.name.toLowerCase());
    
    // General aura feedback
    if (auraScore > 80) {
        suggestions.push('🔥 Excellent aura detected! Your codebase is in great shape. Keep up the good work!');
    } else if (auraScore > 60) {
        suggestions.push('👍 Solid aura! Your code looks good but could benefit from some refinements.');
    } else {
        suggestions.push('⚠️ Your code aura could use some improvement. Consider these suggestions to level up your development game.');
    }
    
    if (languages.length > 0) {
        const primaryLang = languages[0].name;
        
        // Language specific suggestions
        if (primaryLang === 'javascript') {
            if (!detectedLibNames.includes('react') && !detectedLibNames.includes('vue.js') && !detectedLibNames.includes('angular')) {
                suggestions.push('Consider using a frontend framework like React, Vue.js, or Angular to enhance your development aura.');
            }
            
            if (!detectedLibNames.includes('eslint')) {
                suggestions.push('Improve your code style aura with ESLint to maintain consistency and catch potential issues.');
            }
            
            if (!detectedLibNames.includes('prettier')) {
                suggestions.push('Add Prettier to automate your code formatting and maintain clean aura.');
            }
            
            if (!codeHasTests(sourceCodeEl.value)) {
                suggestions.push('Add unit tests with Jest or Mocha to improve code reliability and maintainability.');
            }
            
            // Fun aura suggestion
            suggestions.push('Looking to level up your JS aura? Check out Aura.js for enhanced developer happiness!');
        }
        
        if (primaryLang === 'python') {
            if (!detectedLibNames.includes('black')) {
                suggestions.push('Python aura improve dramatically with Black - the uncompromising code formatter.');
            }
            
            if (!detectedLibNames.includes('pylint')) {
                suggestions.push('Boost your Python aura with Pylint to catch errors and enforce coding standards.');
            }
            
            if (!codeHasTests(sourceCodeEl.value)) {
                suggestions.push('Consider adding unit tests with pytest to ensure your Python code works as expected.');
            }
            
            // Fun aura suggestion
            suggestions.push('Want to maximize your Python aura? Try Aura.py for enhanced developer experience!');
        }
        
        if (primaryLang === 'java') {
            if (!detectedLibNames.includes('lombok')) {
                suggestions.push('Reduce boilerplate code in Java by using Lombok annotations.');
            }
            
            if (!codeHasTests(sourceCodeEl.value)) {
                suggestions.push('Add JUnit tests to your Java code to improve reliability and maintainability.');
            }
        }
        
        // General development suggestions
        if (libraries.length <= 3) {
            suggestions.push('Adding more well-chosen libraries can enhance your development experience and aura.');
        }
    }
    
    // Display suggestions at the top
    let html = '';
    suggestions.forEach((suggestion, index) => {
        const icon = suggestion.startsWith('🔥') ? 'fa-fire' : 
                     suggestion.startsWith('⚠️') ? 'fa-exclamation-triangle' :
                     suggestion.startsWith('👍') ? 'fa-thumbs-up' : 'fa-lightbulb';
        
        const coloredText = suggestion.replace('🔥', '').replace('⚠️', '').replace('👍', '');
        
        html += `
            <div class="suggestion-item fade-in" style="animation-delay: ${index * 100}ms;">
                <i class="fas ${icon}" style="color: var(--${icon === 'fa-fire' ? 'warning' : 
                                                                icon === 'fa-exclamation-triangle' ? 'danger' : 
                                                                icon === 'fa-thumbs-up' ? 'success' : 'success'});"></i>
                ${coloredText}
            </div>
        `;
    });
    
    suggestionsListEl.innerHTML = html;
    
    // Scroll suggestions into view
    setTimeout(() => {
        suggestionsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 500);
}

// Save analysis to history
function saveAnalysis(results) {
    const history = JSON.parse(localStorage.getItem('auraHistory') || '[]');
    history.unshift({
        date: new Date().toISOString(),
        languages: results.languages,
        libraries: results.libraries,
        score: results.score,
        snippet: results.snippet
    });
    
    // Keep only last 10 analyses
    localStorage.setItem('auraHistory', JSON.stringify(history.slice(0, 10)));
}

// Show analysis history
function showHistory() {
    const history = JSON.parse(localStorage.getItem('auraHistory') || '[]');
    if (history.length === 0) return;
    
    historyPanelEl.style.display = 'block';
    
    const historyHTML = history.map((item, index) => `
        <div class="history-item fade-in" style="animation-delay: ${index * 100}ms;" onclick="loadHistoryItem(${index})">
            <small>${new Date(item.date).toLocaleString()}</small>
            <p>${item.snippet}</p>
            <div class="badge" style="background: ${getAuraColor(item.score)}20; color: ${getAuraColor(item.score)}; border-color: ${getAuraColor(item.score)};">
                ${item.score}/100
            </div>
        </div>
    `).join('');
    
    historyListEl.innerHTML = historyHTML;
    
    // Trigger animations
    setTimeout(() => {
        document.querySelectorAll('.history-item.fade-in').forEach(el => {
            el.classList.add('active');
        });
    }, 100);
}

// Load history item
function loadHistoryItem(index) {
    const history = JSON.parse(localStorage.getItem('auraHistory') || '[]');
    if (index >= history.length) return;
    
    const item = history[index];
    sourceCodeEl.value = item.snippet;
    
    // Simulate analysis for UI
    startAnalysis();
    setTimeout(() => {
        displayResults(item.languages, item.libraries, analyzeCodeQuality(sourceCodeEl.value), item.score, item.score > 60);
        generateSuggestions(item.languages, item.libraries, item.score);
        completeAnalysis();
    }, 500);
}

// Get color based on aura score
function getAuraColor(score) {
    if (score > 80) return 'var(--success)';
    if (score > 60) return 'var(--warning)';
    return 'var(--danger)';
}

// Helper function to capitalize words
function capitalize(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Get icon for language
function getLanguageIcon(lang) {
    const icons = {
        'javascript': 'js',
        'python': 'python',
        'java': 'java',
        'c': 'cuttlefish',
        'c++': 'cuttlefish',
        'c#': 'microsoft',
        'php': 'php',
        'ruby': 'ruby',
        'go': 'golang',
        'swift': 'swift',
        'rust': 'rust',
        'typescript': 'js-square',
        'html': 'html5',
        'css': 'css3',
        'bash': 'terminal',
        'powershell': 'microsoft',
        'kotlin': 'android',
        'dart': 'mobile',
        'scala': 'scala'
    };
    
    return icons[lang] || 'code';
}