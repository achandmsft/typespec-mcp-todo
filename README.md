# TypeSpec based local TODO MCP Server
A TODO MCP server fully vibecoded using the [TypeSpec MCP Server Demo Script](https://github.com/bterlson/typespec-mcp/wiki/Demo-Script) in GitHub Copilot Agent mode with OpenAI GPT 4.1 model. 

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/achandmsft/typespec-mcp-todo.git
   ```

2. **Install dependencies:**
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

3. **Build the project:**
   Build the TypeSpec and TypeScript files using:
   ```bash
   npm run build
   ```

4. **Start the server:**
   Start the MCP server with:
   ```bash
   npm run mcp
   ```

5. **Inspect the server (optional):**
   Use the MCP Inspector to inspect the server:
   ```bash
   npm run inspect
   ```

## Notes

- Ensure you have Node.js and npm installed on your system.
- The `node_modules` folder is excluded from the repository. Use `npm install` to recreate it locally.

