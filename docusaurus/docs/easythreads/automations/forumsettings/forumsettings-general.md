---
sidebar_position: 4
---

# /forumsettings general
**Default Permissions:** Administrator
## Description
The **/forumsettings general** command allows you to set up the default settings for a forum channel. This includes setting a message to be posted automatically when a new thread is created, as well as other options such as locking the post and pinning it.

## Options
- **channel**: The forum channel where you want to apply settings. *(required)*
- **post-message**: The message to post automatically. *(optional)*
- **post-name**: The name of the post. *(optional)*
- **post-cooldown**: The cooldown for sending messages within the post. *(optional)*
- **post-reaction:**: The reaction to add to the post. *(optional)*
- **lock-post** Whether to lock the post after creation. *(optional)*
- **pin-startmessage**: If enabled, the bot will pin the message that it has created the post with. *(optional)*
- **pin-postmessage**: If set to true, the bot will automatically pin the message set with the post-message option within the post *(optional)*
- **pin-post**: If enabled, the bot will pin the post. Due to Discord limitations, this will make only the latest post to be pinned. *(optional)*

## Variables
- **\{message}**: The first 50 characters of the message trigerring the autothreading
- **\{firstline}**: The first line of the message trigerring the autothreading
- **\{filename}**: The name of the first provided file. If no file is provided it will be "No File Name
- **\{user}**: The username of the user sending the message
- **\{usernickname}**: The nickname/display Name of the user triggering the autothreading
- **\{usermention}**: This will mention the user triggering the autothreading
- **\{guild}**: The name of the server
- **\{newline}**: This will start a new line in messages sent by the app
- **\{time}**: This will be replaced with the current time. Default timezone is UTC, it can be changed guild-specific with the **[/timezone](/docs/easythreads/general/timezone)** command.
- **\{date}**: This will be replaced with the current date. Default timezone is UTC, it can be changed guild-specific with the **[/timezone](/docs/easythreads/general/timezone)** command.

## Examples
**Apply settings to a forum channel:**
```bash
/forumsettings general channel:forum post-message:Thanks for creating the post
```
This will apply the settings to the forum channel "forum" and post the message "Thanks for creating the post".
