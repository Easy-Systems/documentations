---
sidebar_position: 8
---

# /threadmessage create
**Default Permissions:** Administrator
## Description
Create a message to automatically send in all new created threads and posts of a specific channel.
## Options
- **channel:** The channel where you want to create the message. *(required)*
- **embed-title:** The title of the embed message. *(optional)*
## Examples
**Create an automatic thread message:**
```bash
/threadmessage create channel:mediachannel embed-title:"Use this thread for comments!"
```
This will create an automatic thread message in the channel "mediachannel" with the embed title "Use this thread for comments!".
