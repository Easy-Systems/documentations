---
sidebar_position: 1
---

# /create post
**Default Permissions:** Administrator
## Description
By using the **/create post** command you can manually create a post in any forum channel the app has access to by using the app. You can also edit the created post afterwards by using the **[/edit post](/docs/easythreads/general/edit/edit-post)** command!
## Options
- **channel**: The (forum) channel where you want to create the post in. *(required)*
- **post-name**: The name for the post your are creating. *(required)*
- **post-message:** The message you want to create the post with. This will be the first message of the post. *(optional\*)*
- **post-image**: The attachment you want to add to the post message. This will be part of the first message of the post. *(optional\*)*
- **post-cooldown**: The chat cooldown in the created forum post *(optional)*
- **lock-post**: Lock the post right after creation, this will only allow moderators to send messages in the post *(optional)*
- **archive-time**: The time of inactivity needed, before the post will be archived *(optional)*

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