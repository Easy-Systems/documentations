---
sidebar_position: 4
---

# /forumsettings general
**Default Permissions:** Administrator
## Description
Automatically apply settings to a forum channel.

## Options
- **channel**: The forum channel where you want to apply settings. *(required)*
- **post-message**: The message to post automatically. *(optional)*
- **post-name**: The name of the post. *(optional)*
- **post-cooldown**: The cooldown for sending messages within the post. *(optional)*
- **post-reaction:**: The reaction to add to the post. *(optional)*
- **lock-post** Whether to lock the post after creation. *(optional)*
- **pin-startmessage**: If enabled, the bot will pin the message that it has created the post with. *(optional)*
- **pin-post**: If enabled, the bot will pin the post. Due to Discord limitations, this will make only the latest post to be pinned. *(optional)*


## Examples
**Apply settings to a forum channel:**
```bash
/forumsettings general channel:forum post-message:Thanks for creating the post
```
This will apply the settings to the forum channel "forum" and post the message "Thanks for creating the post".
