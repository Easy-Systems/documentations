---
sidebar_position: 9
---

# /threadmessage edit
**Default Permissions:** Administrator
## Description
Edit an automatic thread message.
## Options
- **channel:** The channel where you want to edit the message. *(required)*
- **embed-title:** The new title of the embed message. *(optional)*
- **link-button-label:** The label of the link button. *(optional)*
- **link-button-url:** The URL of the link button. *(optional)*
## Examples
**Edit an automatic thread message:**
```bash
/threadmessage edit channel:mediachannel embed-title:"Talk here about the image!" link-button-label:"Channel Rules" link-button-url:"link-to-rules-here"
```
This will edit the automatic thread message in the channel "mediachannel" with the new embed title "Talk here about the image!" and add a link button with the label "Channel Rules" and URL "link-to-rules-here".
