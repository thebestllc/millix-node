#!/usr/bin/env node

/**
 * API Documentation Generator
 * 
 * Generates comprehensive API documentation in HTML and Markdown formats
 * from the test results file for inclusion in the book.
 */

const fs = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const RESULTS_FILE = path.join(SCRIPT_DIR, 'results.txt');
const OUTPUT_MD = path.join(SCRIPT_DIR, 'API-Reference.md');
const OUTPUT_HTML = path.join(SCRIPT_DIR, 'API-Reference.html');

// Read and parse results
const resultsContent = fs.readFileSync(RESULTS_FILE, 'utf8');

// Load node.json for credentials
let nodeId = 'Unknown';
let nodeSignature = 'YOUR_NODE_SIGNATURE';
try {
    const nodeJsonPath = path.join(SCRIPT_DIR, 'node.json');
    const nodeJson = JSON.parse(fs.readFileSync(nodeJsonPath, 'utf8'));
    nodeId = nodeJson.node_id;
    nodeSignature = nodeJson.node_signature;
} catch (e) {
    // Fallback to extracting from results
    const nodeIdMatch = resultsContent.match(/\*\*Node ID:\*\* (.+)/);
    if (nodeIdMatch) nodeId = nodeIdMatch[1];
    
    // Extract node signature from examples in results
    const signatureMatches = resultsContent.matchAll(/\/api\/[^/]+\/([^/]+)\//g);
    for (const match of signatureMatches) {
        if (match[1] !== 'anonymous' && match[1].length > 20) {
            nodeSignature = match[1];
            break;
        }
    }
}

// Parse API sections
function parseAPISections(content) {
    const sections = [];
    const categoryRegex = /^## (.+ APIs)$/gm;
    const endpointRegex = /^### (.+)$\n\n\*\*Endpoint ID:\*\* `(.+)`\n\n\*\*Method:\*\* (.+)\n\n\*\*Description:\*\* (.+?)\n\n\*\*Response Time:\*\* (.+?)\n\n\*\*Priority:\*\* (.+?)\n\n\*\*Response:\*\*\n\n```json\n([\s\S]*?)\n```\n\n\*\*Insights for Documentation:\*\*\n\n([\s\S]*?)\n\n---/gm;
    
    let match;
    let currentCategory = null;
    let currentSection = null;
    
    const lines = content.split('\n');
    let i = 0;
    
    while (i < lines.length) {
        const line = lines[i];
        
        // Check for category header
        if (line.match(/^## (.+ APIs)$/)) {
            if (currentSection) {
                sections.push(currentSection);
            }
            currentCategory = line.replace(/^## (.+ APIs)$/, '$1').replace(' APIs', '');
            currentSection = {
                category: currentCategory,
                endpoints: []
            };
        }
        
        // Check for endpoint
        if (line.match(/^### (.+)$/) && currentSection) {
            const endpointName = line.replace(/^### /, '');
            let endpoint = {
                name: endpointName,
                category: currentCategory,
                method: 'GET',
                description: '',
                endpointId: '',
                response: null,
                insights: '',
                responseTime: '',
                priority: ''
            };
            
            // Parse endpoint details
            i++;
            while (i < lines.length && !lines[i].match(/^### |^## |^---$/)) {
                const detailLine = lines[i];
                
                if (detailLine.match(/^\*\*Endpoint ID:\*\* `(.+)`/)) {
                    endpoint.endpointId = detailLine.match(/^\*\*Endpoint ID:\*\* `(.+)`/)[1];
                } else if (detailLine.match(/^\*\*Method:\*\* (.+)/)) {
                    endpoint.method = detailLine.match(/^\*\*Method:\*\* (.+)/)[1];
                } else if (detailLine.match(/^\*\*Description:\*\* (.+)/)) {
                    endpoint.description = detailLine.match(/^\*\*Description:\*\* (.+)/)[1];
                } else if (detailLine.match(/^\*\*Response Time:\*\* (.+)/)) {
                    endpoint.responseTime = detailLine.match(/^\*\*Response Time:\*\* (.+)/)[1];
                } else if (detailLine.match(/^\*\*Priority:\*\* (.+)/)) {
                    endpoint.priority = detailLine.match(/^\*\*Priority:\*\* (.+)/)[1];
                } else if (detailLine.match(/^```json/)) {
                    // Parse JSON response
                    i++;
                    let jsonContent = '';
                    while (i < lines.length && !lines[i].match(/^```/)) {
                        jsonContent += lines[i] + '\n';
                        i++;
                    }
                    try {
                        endpoint.response = JSON.parse(jsonContent.trim());
                    } catch (e) {
                        endpoint.response = jsonContent.trim();
                    }
                } else if (detailLine.match(/^\*\*Insights for Documentation:\*\*/)) {
                    i++;
                    let insights = '';
                    while (i < lines.length && !lines[i].match(/^---|^### |^## /)) {
                        if (lines[i].trim()) {
                            insights += lines[i].replace(/^- /, '') + '\n';
                        }
                        i++;
                    }
                    endpoint.insights = insights.trim();
                    i--; // Back up one line
                }
                i++;
            }
            
            if (endpoint.endpointId) {
                currentSection.endpoints.push(endpoint);
            }
            i--; // Back up to process the next section properly
        }
        
        i++;
    }
    
    if (currentSection) {
        sections.push(currentSection);
    }
    
    return sections;
}

const apiSections = parseAPISections(resultsContent);

// Generate Markdown
function generateMarkdown() {
    let md = `# Millix Node API Reference\n\n`;
    md += `**Complete API Documentation for Millix Node**\n\n`;
    md += `This comprehensive reference covers all available APIs for interacting with a Millix node. `;
    md += `All examples use real data from a live node for accuracy and clarity.\n\n`;
    md += `---\n\n`;
    
    // Table of Contents
    md += `## Table of Contents\n\n`;
    apiSections.forEach((section, idx) => {
        const anchor = section.category.toLowerCase().replace(/\s+/g, '-');
        md += `${idx + 1}. [${section.category}](#${anchor})\n`;
    });
    md += `\n---\n\n`;
    
    // Introduction
    md += `## Introduction\n\n`;
    md += `The Millix Node API provides a RESTful interface for interacting with your Millix node. `;
    md += `All APIs use HTTPS and return JSON responses. Most endpoints require authentication using `;
    md += `your node ID and node signature.\n\n`;
    
    md += `### API URL Structure\n\n`;
    md += `The base URL structure for all API calls is:\n\n`;
    md += `\`\`\`\n`;
    md += `https://<host>:<port>/api/<node_id>/<node_signature>/<api_id>?p0=<value>&p1=<value>...\n`;
    md += `\`\`\`\n\n`;
    
    md += `**Components:**\n\n`;
    md += `- **host**: Your node's hostname or IP address (default: localhost)\n`;
    md += `- **port**: API port (default: 5500)\n`;
    md += `- **node_id**: Your node's unique identifier\n`;
    md += `- **node_signature**: Authentication signature (use "anonymous" for public endpoints)\n`;
    md += `- **api_id**: Unique identifier for the specific API endpoint\n`;
    md += `- **p0, p1, ...**: Optional parameters (p0, p1, p2, etc.)\n\n`;
    
    md += `### Authentication\n\n`;
    md += `Most endpoints require authentication using your node signature. You can find your `;
    md += `node_id and node_signature in the \`node.json\` file in your Millix data directory.\n\n`;
    md += `**Example node.json:**\n\n`;
    md += `\`\`\`json\n`;
    md += `{\n`;
    md += `  "key": "xprv9s21ZrQH143K332NUcLJ9v3MH1V5NYiJdNrAJMegxzmeV8D8DnwUQJMEE8icrdxQ8WZ3bBj3iFfsYRAartknwfJYzWywXtocyPyyk64dPf6",\n`;
    md += `  "node_id": "${nodeId}",\n`;
    md += `  "node_signature": "${nodeSignature}"\n`;
    md += `}\n`;
    md += `\`\`\`\n\n`;
    md += `**Note:** The actual values shown above are from a real node used for testing. `;
    md += `In production, keep your \`node.json\` file secure and never share your node_signature publicly.\n\n`;
    
    md += `### SSL Certificates\n\n`;
    md += `Millix nodes use self-signed SSL certificates. When making API calls, you may need to `;
    md += `disable SSL verification (use \`-k\` flag with curl) or accept the certificate in your client.\n\n`;
    
    md += `---\n\n`;
    
    // API Sections
    apiSections.forEach((section, sectionIdx) => {
        md += `## ${sectionIdx + 1}. ${section.category}\n\n`;
        md += `${section.endpoints.length} endpoint(s) in this category.\n\n`;
        
        section.endpoints.forEach((endpoint, endpointIdx) => {
            md += `### ${sectionIdx + 1}.${endpointIdx + 1} ${endpoint.name}\n\n`;
            md += `**Endpoint ID:** \`${endpoint.endpointId}\`\n\n`;
            md += `**Method:** ${endpoint.method}\n\n`;
            md += `**Description:** ${endpoint.description}\n\n`;
            md += `**Response Time:** ${endpoint.responseTime}\n\n`;
            md += `**Priority:** ${endpoint.priority}\n\n`;
            
            // Example URL
            const signature = endpoint.name === 'get_node_id' || endpoint.name === 'get_random_mnemonic' 
                ? 'anonymous' 
                : nodeSignature;
            md += `**Example Request:**\n\n`;
            md += `\`\`\`bash\n`;
            md += `curl -k "https://localhost:5500/api/${nodeId}/${signature}/${endpoint.endpointId}"\n`;
            md += `\`\`\`\n\n`;
            
            // Response
            md += `**Response:**\n\n`;
            md += `\`\`\`json\n`;
            if (typeof endpoint.response === 'object') {
                md += JSON.stringify(endpoint.response, null, 2);
            } else {
                md += endpoint.response;
            }
            md += `\n\`\`\`\n\n`;
            
            // Insights
            if (endpoint.insights) {
                md += `**Documentation Notes:**\n\n`;
                const insightLines = endpoint.insights.split('\n').filter(l => l.trim());
                insightLines.forEach(insight => {
                    md += `- ${insight.trim()}\n`;
                });
                md += `\n`;
            }
            
            md += `---\n\n`;
        });
    });
    
    // Quick Reference
    md += `## Quick Reference Table\n\n`;
    md += `| Endpoint Name | Endpoint ID | Method | Category |\n`;
    md += `|--------------|-------------|--------|----------|\n`;
    apiSections.forEach(section => {
        section.endpoints.forEach(endpoint => {
            md += `| ${endpoint.name} | \`${endpoint.endpointId}\` | ${endpoint.method} | ${section.category} |\n`;
        });
    });
    
    md += `\n---\n\n`;
    md += `*Generated from live API test results*\n`;
    
    return md;
}

// Generate HTML
function generateHTML() {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Millix Node API Reference</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        h2 {
            color: #34495e;
            margin-top: 40px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #ecf0f1;
        }
        h3 {
            color: #2c3e50;
            margin-top: 30px;
            margin-bottom: 15px;
        }
        h4 {
            color: #7f8c8d;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }
        pre {
            background: #2c3e50;
            color: #ecf0f1;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            margin: 15px 0;
        }
        pre code {
            background: none;
            padding: 0;
            color: inherit;
        }
        .endpoint {
            background: #f8f9fa;
            border-left: 4px solid #3498db;
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
        }
        .endpoint-id {
            background: #e74c3c;
            color: white;
            padding: 5px 10px;
            border-radius: 3px;
            font-family: monospace;
            display: inline-block;
            margin: 5px 0;
        }
        .method {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 3px;
            font-weight: bold;
            font-size: 0.85em;
            margin-left: 10px;
        }
        .method.GET {
            background: #27ae60;
            color: white;
        }
        .method.POST {
            background: #e67e22;
            color: white;
        }
        .method.PUT {
            background: #3498db;
            color: white;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background: #34495e;
            color: white;
        }
        tr:hover {
            background: #f5f5f5;
        }
        .toc {
            background: #ecf0f1;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .toc ul {
            list-style: none;
            padding-left: 0;
        }
        .toc li {
            padding: 5px 0;
        }
        .toc a {
            color: #3498db;
            text-decoration: none;
        }
        .toc a:hover {
            text-decoration: underline;
        }
        .badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 3px;
            font-size: 0.8em;
            font-weight: bold;
            margin-left: 10px;
        }
        .badge.high {
            background: #e74c3c;
            color: white;
        }
        .badge.medium {
            background: #f39c12;
            color: white;
        }
        .badge.low {
            background: #95a5a6;
            color: white;
        }
        .insights {
            background: #e8f5e9;
            border-left: 4px solid #4caf50;
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
        }
        .insights ul {
            margin-left: 20px;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #7f8c8d;
            font-size: 0.9em;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Millix Node API Reference</h1>
        <p><strong>Complete API Documentation for Millix Node</strong></p>
        <p>This comprehensive reference covers all available APIs for interacting with a Millix node. All examples use real data from a live node for accuracy and clarity.</p>
        
        <div class="toc">
            <h2>Table of Contents</h2>
            <ul>`;
    
    apiSections.forEach((section, idx) => {
        const anchor = section.category.toLowerCase().replace(/\s+/g, '-');
        html += `<li><a href="#${anchor}">${idx + 1}. ${section.category}</a></li>`;
    });
    
    html += `</ul></div>
        
        <h2>Introduction</h2>
        <p>The Millix Node API provides a RESTful interface for interacting with your Millix node. All APIs use HTTPS and return JSON responses. Most endpoints require authentication using your node ID and node signature.</p>
        
        <h3>API URL Structure</h3>
        <p>The base URL structure for all API calls is:</p>
        <pre><code>https://&lt;host&gt;:&lt;port&gt;/api/&lt;node_id&gt;/&lt;node_signature&gt;/&lt;api_id&gt;?p0=&lt;value&gt;&amp;p1=&lt;value&gt;...</code></pre>
        
        <h4>Components:</h4>
        <ul>
            <li><strong>host</strong>: Your node's hostname or IP address (default: localhost)</li>
            <li><strong>port</strong>: API port (default: 5500)</li>
            <li><strong>node_id</strong>: Your node's unique identifier</li>
            <li><strong>node_signature</strong>: Authentication signature (use "anonymous" for public endpoints)</li>
            <li><strong>api_id</strong>: Unique identifier for the specific API endpoint</li>
            <li><strong>p0, p1, ...</strong>: Optional parameters (p0, p1, p2, etc.)</li>
        </ul>
        
        <h3>Authentication</h3>
        <p>Most endpoints require authentication using your node signature. You can find your node_id and node_signature in the <code>node.json</code> file in your Millix data directory.</p>
        
        <h4>Example node.json:</h4>
        <pre><code>{
  "key": "xprv9s21ZrQH143K332NUcLJ9v3MH1V5NYiJdNrAJMegxzmeV8D8DnwUQJMEE8icrdxQ8WZ3bBj3iFfsYRAartknwfJYzWywXtocyPyyk64dPf6",
  "node_id": "${nodeId}",
  "node_signature": "${nodeSignature}"
}</code></pre>
        <p><strong>Note:</strong> The actual values shown above are from a real node used for testing. In production, keep your <code>node.json</code> file secure and never share your node_signature publicly.</p>
        
        <h3>SSL Certificates</h3>
        <p>Millix nodes use self-signed SSL certificates. When making API calls, you may need to disable SSL verification (use <code>-k</code> flag with curl) or accept the certificate in your client.</p>
        
        <hr>`;
    
    // API Sections
    apiSections.forEach((section, sectionIdx) => {
        const anchor = section.category.toLowerCase().replace(/\s+/g, '-');
        html += `
        <h2 id="${anchor}">${sectionIdx + 1}. ${section.category}</h2>
        <p><strong>${section.endpoints.length} endpoint(s) in this category.</strong></p>`;
        
        section.endpoints.forEach((endpoint, endpointIdx) => {
            const signature = endpoint.name === 'get_node_id' || endpoint.name === 'get_random_mnemonic' 
                ? 'anonymous' 
                : nodeSignature;
            
            html += `
        <div class="endpoint">
            <h3>${sectionIdx + 1}.${endpointIdx + 1} ${endpoint.name}</h3>
            <p><span class="endpoint-id">${endpoint.endpointId}</span> <span class="method ${endpoint.method}">${endpoint.method}</span> <span class="badge ${endpoint.priority}">${endpoint.priority}</span></p>
            <p><strong>Description:</strong> ${endpoint.description}</p>
            <p><strong>Response Time:</strong> ${endpoint.responseTime}</p>
            
            <h4>Example Request</h4>
            <pre><code>curl -k "https://localhost:5500/api/${nodeId}/${signature}/${endpoint.endpointId}"</code></pre>
            
            <h4>Response</h4>
            <pre><code>${JSON.stringify(endpoint.response, null, 2)}</code></pre>`;
            
            if (endpoint.insights) {
                html += `
            <div class="insights">
                <h4>Documentation Notes</h4>
                <ul>`;
                const insightLines = endpoint.insights.split('\n').filter(l => l.trim());
                insightLines.forEach(insight => {
                    html += `<li>${insight.trim()}</li>`;
                });
                html += `</ul></div>`;
            }
            
            html += `</div>`;
        });
    });
    
    // Quick Reference Table
    html += `
        <h2>Quick Reference Table</h2>
        <table>
            <thead>
                <tr>
                    <th>Endpoint Name</th>
                    <th>Endpoint ID</th>
                    <th>Method</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>`;
    
    apiSections.forEach(section => {
        section.endpoints.forEach(endpoint => {
            html += `
                <tr>
                    <td><code>${endpoint.name}</code></td>
                    <td><code>${endpoint.endpointId}</code></td>
                    <td><span class="method ${endpoint.method}">${endpoint.method}</span></td>
                    <td>${section.category}</td>
                </tr>`;
        });
    });
    
    html += `
            </tbody>
        </table>
        
        <div class="footer">
            <p><em>Generated from live API test results</em></p>
        </div>
    </div>
</body>
</html>`;
    
    return html;
}

// Generate files
console.log('Generating API documentation...');
const markdown = generateMarkdown();
const html = generateHTML();

fs.writeFileSync(OUTPUT_MD, markdown, 'utf8');
fs.writeFileSync(OUTPUT_HTML, html, 'utf8');

console.log(`✓ Markdown documentation written to: ${OUTPUT_MD}`);
console.log(`✓ HTML documentation written to: ${OUTPUT_HTML}`);
console.log(`\nTotal endpoints documented: ${apiSections.reduce((sum, s) => sum + s.endpoints.length, 0)}`);

