import pywhatkit
import time
from datetime import datetime, timedelta
import keyboard as k
import json

with open('phoneNumbers.json', 'r') as file:
    phoneNumbers = json.load(file)


for i in range(len(phoneNumbers)):
    message = "Dive into Market Wisdom with Wealth Avenue (NISM CERTIFIED)🎓📈 \n \n Supercharge your stock market insights with Wealth Avenue Telegram Channel for Analyst insights, market trends and timely updates. Let's navigate the market together! \n https://t.me/wealthavenue12"
    current_time = datetime.now()
    send_time = current_time + timedelta(minutes=1)
    send_time_str = send_time.strftime("%H:%M")
    pywhatkit.sendwhatmsg(phoneNumbers[i], message, send_time.hour, send_time.minute)
    time.sleep(10)
    k.press_and_release('enter')
    time.sleep(5)
    k.press_and_release('ctrl + w')

print("Messages scheduled successfully.")
