---
sidebar_position: 2
---

# /create thread
**Default Permissions:** Administrator
## Description
By using the **/create thread** command you can manually create a thread in any channel the Bot has access to by using the Bot. You can also edit the created thread afterwards by using the **[/edit](/docs/easythreads/general/edit/edit-thread)** thread command!
## Options
- **channel**: The channel where you want to create the thread in. *(required)*
- **thread-name**: The name for the thread your are creating. *(required)*
- **thread-message:** The message you want to create the thread with. This will be the first message of the thread. *(optional\*)*
- **thread-image**: The attachment you want to add to the thread message. This will be part of the first message of the thread. *(optional\*)*
- **thread-cooldown**: The chat cooldown in the created forum post *(optional)*
- **lock-thread**: Lock the thread right after creation, this will only allow moderators to send messages in the thread *(optional)*
- **archive-time**: The time of inactivity needed, before the thread will be archived *(optional)*

 \* at least one of these options must me applied
## Variables
- **\{message}**: The first 50 characters of the message trigerring the autothreading
- **\{filename}**: The name of the first provided file. If no file is provided it will be "No File Name
- **\{user}**: The username of the user sending the message
- **\{usernickname}**: The nickname/display Name of the user triggeringthe autothreading
- **\{usermention}**: This will mention the user triggeringthe autothreading
- **\{guild}**: The name of the server
- **\{newline}**: This will start a new line in messages sent by the app
- **\{time}**: This will be replaced with the current time. Default timezone is UTC, it can be changed guild-specific with the **[/timezone](/docs/easythreads/general/timezone)** command.
- **\{date}**: This will be replaced with the current date. Default timezone is UTC, it can be changed guild-specific with the **[/timezone](/docs/easythreads/general/timezone)** command.

## Examples