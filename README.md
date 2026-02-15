# Github_Copilot_CLI_Challenge


## Mini CLI Productivity Tool ##
📌 **Overview**

This project is a simple command-line productivity tool built with **Node.js**.
It allows users to manage tasks directly from the terminal using basic CLI commands.

The tool supports **adding**, **listing**, **marking** tasks as done, and **deleting** tasks.
All tasks are stored locally in a tasks.json file.

🚀 **Features**

+ Add new tasks

+ List all tasks

+ Mark tasks as completed

+ Delete tasks

+ Persistent storage using JSON

🛠 **How to Run**  

[Here is the screenshot of the demo](./images/results.GIF)

- Make sure [Node.js](https://nodejs.org/en/download) is installed in your system.

- Run the following commands inside the project folder in powershell:

```
node index.js add "Task name"
node index.js list
node index.js done 1
node index.js delete 1

```
🧠 **GitHub Copilot CLI Experience**

As part of the challenge, I installed [GitHub Copilot CLI](https://github.com/features/copilot/cli) and configured it in PowerShell to follow the challenge requirements.

During setup:

+ I installed the Copilot CLI globally using npm.

+ Configured execution policy in PowerShell.

+ Authenticated successfully.

However, after setup, I encountered a limitation:
My monthly GitHub Copilot quota had been reached, which prevented further usage of Copilot CLI for generating responses.

Although I have previously used the GitHub Copilot Chat extension in VS Code, I chose not to rely on it in order to respect the rules of the challenge and focus on using the CLI environment.

Instead of stopping, I proceeded to:

- Design the CLI tool manually

- Implement command parsing using process.argv

- Manage file persistence using Node’s fs module

- Build CRUD functionality for tasks

- Test and debug directly in PowerShell

This project reflects my ability to continue development even when tooling limitations occur.

📚 **What I Learned**

+ How to build a Node.js CLI application

+ Working with command-line arguments

+ Reading and writing JSON files

+ Handling state persistence

+ Debugging directly in PowerShell

+ Adapting when development tools are unavailable

💡 **Reflection**

While GitHub Copilot CLI was successfully installed, quota restrictions required me to complete the challenge manually.

This experience reinforced the importance of understanding core concepts rather than relying solely on AI tools.


🤖 **Use of AI Tools**

During development, I used AI tools (including ChatGPT) for guidance and troubleshooting while building the CLI tool manually.

_I should specify that I signed up for this challenge yesterday, February 14, 2026, and although I couldn't use GitHub Copilot CLI because I had used up my monthly quota, I still participated in the challenge and followed the instructions for downloading and installing the GitHub Copilot CLI. Previously, I used GitHub Copilot as an extension in VS Code_

