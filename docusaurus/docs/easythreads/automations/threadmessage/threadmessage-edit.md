---
sidebar_position: 9
---

# /threadmessage edit

:::info[Premium Limited]
This command is **limited to custom branding**. To use this command, you must purchase the **[Custom Branding](https://ezsys.link/premium)** version of EasyThreads.
:::

**Default Permissions:** Administrator

## Description
The **/threadmessage edit** command allows you to edit an existing automatic thread message in a specific channel. This is useful for updating the content, embed, or link button of a previously created automatic thread message. Please note, that this only works if there is already an automatic thread message set in the channel. You can find information about how to create an automatic thread message in the **[Create Automatic Thread Message](/docs/easythreads/automations/threadmessage/threadmessage-create)** command documentation.

## Options
- **channel:** The channel where you want to edit the automatic thread message. *(required)*
- **message:** The new message content to set. *(optional)*
- **image:** The new image to set. *(optional)*
- **embed-title:** The new embed title. *(optional)*
- **embed-description:** The new embed description. *(optional)*
- **embed-image:** The new embed image. *(optional)*
- **embed-color:** The new embed color. *(optional)*
- **link-button-label:** The new label for the link button. *(optional)*
- **link-button-url:** The new URL for the link button. *(optional)*

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
**Edit an automatic thread message:**
```bash
/threadmessage edit channel:mediachannel embed-title:"Talk here about the image!" link-button-label:"Channel Rules" link-button-url:"link-to-rules-here"
```
This will edit the automatic thread message in the channel "mediachannel" with the new embed title "Talk here about the image!" and add a link button with the label "Channel Rules" and URL "link-to-rules-here".
