---
sidebar_position: 8
---

# /threadmessage create

:::info[Premium Limited]
This command is **limited to custom branding**. If you want to use this command, you have to buy the **[Custom Branding](https://ezsys.link/premium)** Version of EasyThreads.
:::

**Default Permissions:** Administrator
## Description
By using the **/threadmessage create** command you can create an automatic thread message in a specific channel. This command is similar to the post-message option in the [/forumsettings-general](../docs/easythreads/autothreading/forumsettings/forumsettings-general) command, but with more customization options. Additionally, this command does not only work for forum posts, but also for normal threads. This command is useful for creating a message that will be sent automatically when a user creates a thread in the specified channel. 

## Options
- **channel:** The channel where you want to create the automatic thread message. *(required)*
- **message:** The message you want to send as an automatic thread message. *(optional)*
- **image:** The image you want to send as an automatic thread message. *(optional)*
- **embed-title:** The embed title you want to send as an automatic thread message. *(optional)*
- **embed-description:** The embed description you want to send as an automatic thread message. *(optional)*
- **embed-image:** The embed image you want to send as an automatic thread message. *(optional)*
- **embed-color:** The embed color you want to send as an automatic thread message. *(optional)*
- **link-button-label:** The label of the link button you want to send as an automatic thread message. *(optional)*
- **link-button-url:** The URL of the link button you want to send as an automatic thread message. *(optional)*

## Variables
- **\{message}**: The first 50 characters of the message triggering the autothreading
- **\{firstline}**: The first line of the message triggering the autothreading
- **\{filename}**: The name of the first provided file. If no file is provided it will be "No File Name
- **\{user}**: The username of the user sending the message
- **\{usernickname}**: The nickname/display Name of the user triggering the autothreading
- **\{usermention}**: This will mention the user triggering the autothreading
- **\{guild}**: The name of the server
- **\{newline}**: This will start a new line in messages sent by the app
- **\{time}**: This will be replaced with the current time. Default timezone is UTC, it can be changed guild-specific with the **[/timezone](/docs/easythreads/general/timezone)** command.
- **\{date}**: This will be replaced with the current date. Default timezone is UTC, it can be changed guild-specific with the **[/timezone](/docs/easythreads/general/timezone)** command.

## Examples
**Create an automatic thread message:**
```bash
/threadmessage create channel:mediachannel embed-title:"Use this thread for comments!"
```
This will create an automatic thread message in the channel "mediachannel" with the embed title "Use this thread for comments!".