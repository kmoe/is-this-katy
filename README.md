# is-this-katy

A [Telegram bot](https://core.telegram.org/bots/) that verifies Katy's identity by asking her to scan her implanted NFC transponder.

## What?

Invite [@IsThisKatyBot](telegram.me/IsThisKatyBot) to your Telegram chat, or message it directly. Then whenever you send a message including the string "is this katy" (regex subject to change), the bot will ping Katy asking her to scan her [xNT](https://dangerousthings.com/shop/xnt-ntag216-2x12mm-glass-tag/) on a [PN532 breakout board](https://www.adafruit.com/products/364) attached to her computer.

If the board detects the ID of her tag, it will reply to you with "🐼".

## Caveats

This was a quick Easter hack to see if I could get my xNT talking to Telegram over serial. It won't work if, among other things:

- the board isn't currently connected to my computer
- I'm not at my computer
- the bot isn't online
- you're good at serial and manage to steal my computer and send it the appropriate data
