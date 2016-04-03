# is-this-katy

A [Telegram bot](https://core.telegram.org/bots/) that verifies Katy's identity by asking her to scan her implanted NFC transponder.

Never again will you wonder whether Katy really is who she says she is!

![gif of the bot in action](https://raw.githubusercontent.com/kmoe/is-this-katy/master/isthiskaty.gif)

## What?

Invite [@IsThisKatyBot](telegram.me/IsThisKatyBot) to your Telegram chat, or message it directly. Then whenever you send a message including the string "is this katy" (regex subject to change), the bot will ping Katy asking her to scan her [xNT](https://dangerousthings.com/shop/xnt-ntag216-2x12mm-glass-tag/) on a [PN532 breakout board](https://www.adafruit.com/products/364) attached to her computer.

If the board detects the ID of her tag, the bot will reply to you with "🐼".

## Caveats

This was a quick Easter hack to see if I could get my xNT talking to Telegram over serial. It won't work if, among other things:

- the board isn't currently connected to my computer
- I'm not at my computer
- the bot isn't online
- you get one of those hacked Chinese chips, steal my computer, and spoof my tag ID (it's not private, it's in the gif)
- you're good at serial and send the appropriate data to my stolen computer some other way
