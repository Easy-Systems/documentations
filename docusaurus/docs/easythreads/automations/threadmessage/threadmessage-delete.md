---
sidebar_position: 10
---

# /threadmessage delete

**Default Permissions:** Administrator

## Description
The **/threadmessage delete** command allows you to delete the automatic thread message in a specific channel. This is useful for removing the message that was automatically sent when a thread was created. Be careful when using this command, as it will permanently delete the message.

## Options
- **channel:** The channel where you want to delete the automatic thread message. *(required)*

## Examples
**Delete an automatic thread message:**
```bash
/threadmessage delete channel:mediachannel
```
This will delete the automatic thread message in the channel "mediachannel".
