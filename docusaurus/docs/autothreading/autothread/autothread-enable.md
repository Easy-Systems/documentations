---
sidebar_position: 2
---

# /autothread enable
**Default Permissions:** Administrator
## Description
By using the **/autothread enable** command, you can automatically enable the automatic thread creation in a channel, this will then start a new thread for any new message in the set channel.
## Options
- **channel**: The channel to enable autothreading in. *(required)*
- **name**: The name for the created threads. *(optional)*
- **threadmessage**: The message you want to send in the created threads. *(optional)*
- **delay**: The delay in seconds to wait before the thread is being created. Maximum delay is 10 seconds *(optional)*
- **cooldown**: The chat cooldown in seconds in the created in threads *(optional)*
- **ignorebots**: Whether to ignore messages by Bots *(optional)*
- **ignoreusers**: Whether to ignore messages by users  *(optional)*
- **pin-threadmessage**: Whether to pin the threadmessage sent in the thread, if set *(optional)*
- **lock-thread**: Whether to lock the thread right after creation. This will only allow moderators to send messages in the thread *(optional)*
- **archive-time**: The time of inactivity after which the thread will be closed/archived *(optional)*
- **private**: Whether the automatically created thread should be private or not. Default: false *(optional)*
- **block-invites**: If this and the private option is enabled, this will disable the ability of normal members to add users to the thread by pinging them *(optional)*
- **sticktomessage**: If enabled, the autothread of a message will automatically be removed once the message got deleted. *(optional)*

 \* optional, but at least one of these options must be applied!
## Variables
- **\{message}**: The first 50 characters of the message trigerring the autothreading
- **\{filename}**: The name of the first provided file. If no file is provided it will be "No File Name
- **\{user}**: The username of the user sending the message
- **\{usernickname}**: The nickname/display Name of the user triggeringthe autothreading
- **\{usermention}**: This will mention the user triggeringthe autothreading
- **\{guild}**: The name of the server
- **\{newline}**: This will start a new line in messages sent by the Bot
- **\{time}**: This will be replaced with the current time. Default timezone is UTC, it can be changed guild-specific with the **[/timezone](/general/timezone)** command.
- **\{date}**: This will be replaced with the current date. Default timezone is UTC, it can be changed guild-specific with the **[/timezone](/general/timezone)** command.

## Examples