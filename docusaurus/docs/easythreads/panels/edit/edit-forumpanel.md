---
sidebar_position: 4
---

# /edit forumpanel
**Default Permissions:** Administrator

## Description
This command allows you to update the panel's content, embed, button appearance, and post creation options without having to delete and recreate the panel. You can change the embed title, description, footer, image, color, button text, color, emoji, and post creation options such as post name, message, cooldowns, and archive time.

## Options
- **panelchannel**: The channel where the panel is located. *(required)*
- **panel**: The message ID of the panel you want to edit. *(required)*
- **content**: The new content of the button. *(required)*
- **embed-title**: The new title of the embed. *(optional)*
- **embed-description**: The new description of the embed. *(optional)*
- **embed-footer**: The new footer of the embed. *(optional)*
- **embed-image**: The new image of the embed. *(optional)*
- **embed-color**: The new color of the embed. *(optional)*
- **button-text**: The new text of the button. *(optional)*
- **button-color**: The new color of the button. *(optional)*
- **button-emoji**: The new emoji of the button. *(optional)*
- **post-name**: The new name for the created posts. *(optional)*
- **custom-postname**: Allow the user to set the name used to create the post with. This will disable the post-name option. *(optional)*
- **post-message**: The new message that will be sent in the post. *(optional)*
- **custom-postmessage**: Allow the user to set the message used to create the post with. This will disable the post-message option. *(optional)*
- **post-chatcooldown**: The cooldown time to send messages in the post. *(optional)*
- **post-creation-cooldown**: The cooldown time to create a post using the panel (per-user). *(optional)*
- **archive-time**: The time of inactivity after which the post will be archived. *(optional)*

## Variables
- **\{user}**: The username of the user creating the post
- **\{usernickname}**: The nickname/display name of the user creating the post
- **\{usermention}**: This will mention the user creating the post
- **\{guild}**: The name of the server
- **\{newline}**: This will start a new line in messages sent by the app
- **\{time}**: This will be replaced with the current time. Default timezone is UTC, it can be changed guild-specific with the **[/timezone](/docs/easythreads/general/timezone)** command.
- **\{date}**: This will be replaced with the current date. Default timezone is UTC, it can be changed guild-specific with the **[/timezone](/docs/easythreads/general/timezone)** command.

## Example
```bash
/edit forumpanel panelchannel:postcreator content:Update Post embed-title:Updated Title embed-description:This panel has been updated! button-text:Update post-name:post-{user}
```
This will update the existing panel in the `postcreator` channel with new embed and button settings, and update how posts are created when users interact with the panel.
