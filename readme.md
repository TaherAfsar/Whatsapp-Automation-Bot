# Whatsapp-Automation-Bot - Phone Number Scraper and Message Sender

## Overview

This WhatsApp Automation Bot simplifies the process of scraping phone numbers from WhatsApp groups and sending custom messages to the extracted numbers. The bot utilizes a combination of a JavaScript script (`script.js`) and a Python script (`main.py`) to achieve this functionality.

## Prerequisites

- Google Chrome or any Chromium-based browser.
- Python 3.x installed on your system.

## Usage Instructions

### Step 1: Scraping Phone Numbers

1. Open WhatsApp Web in Google Chrome or a Chromium-based browser.
2. Navigate to the desired WhatsApp group from which you want to scrape phone numbers.
3. Open the browser's developer console (usually by pressing Ctrl + Shift + J or Cmd + Option + J).
4. Copy the content of `script.js` and paste it into the console. Press Enter to execute the script.
5. The script will initiate the scraping process, and a file named `phoneNumbers.json` will be downloaded to your system.

### Step 2: Sending Custom Messages

1. Place the `phoneNumbers.json` file in the same directory as `main.py`.
2. Open a terminal or command prompt and navigate to the directory containing the scripts.
3. Run the Python script by executing the following command:
   ```bash
   python main.py
   ```
4. The script will prompt you to enter the custom message that you want to send.
5. Once you provide the message, the bot will automatically send the custom message to each phone number extracted from the WhatsApp group.

## Important Notes

- Ensure that you comply with WhatsApp's terms of service and privacy policies.
- Use this bot responsibly and avoid spamming or violating any ethical guidelines.
- The bot is provided as-is, and the developers are not responsible for any misuse or legal consequences.

## Disclaimer

This project is for educational and personal use only. The developers do not endorse or encourage any form of spam, harassment, or unauthorized activities using this bot. Use it responsibly and respect privacy and legal regulations.

Feel free to contribute to the project or report issues by creating a pull request or opening an issue in the repository.
