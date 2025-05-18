---
sidebar_position: 3
---

# /edit threadpanel
**Default Permissions:** Administrator

## Description
The **/edit threadpanel** command allows you to edit an existing thread panel. This command is useful for updating the content of the panel, such as changing the embed title, description, or button text. You can also change the settings for how threads are created when users interact with the panel.

## Options
- **panelchannel**: The channel where the panel is currently located. *(required)*
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
- **thread-name**: The name for the created threads. *(optional)*
- **custom-threadname**: Allow the user to set the name used to create the thread with. Disables the thread-name option. *(optional)*
- **thread-message**: The message that will be sent in the thread. *(optional)*
- **pin-threadmessage**: Pin the thread message. *(optional)*
- **custom-threadmessage**: Allow the user to set the message used to create the thread with. Disables thread-message and pin-threadmessage. *(optional)*
- **pin-custommessage**: Pin the custom message. *(optional)*
- **private-thread**: Whether the created thread should be private. *(optional)*
- **block-invites**: If private-thread and this option are set to true, only moderators can add users to the thread. *(optional)*
- **archive-time**: The time of inactivity after which the thread will be archived. *(optional)*

## Variables
- **\{user}**: The username of the user creating the thread
- **\{usernickname}**: The nickname/display name of the user creating the thread
- **\{usermention}**: Mentions the user creating the thread
- **\{guild}**: The name of the server
- **\{newline}**: Starts a new line in messages sent by the app
- **\{time}**: The current time (timezone can be set with the [/timezone](/docs/easythreads/general/timezone) command)
- **\{date}**: The current date (timezone can be set with the [/timezone](/docs/easythreads/general/timezone) command)

## Example
```bash
/edit threadpanel panelchannel:support content:UpdatedSupport embed-title:"Support Panel" embed-description:"Click below to open a ticket." button-text:"Open Ticket" button-color:Green thread-name:ticket-{user} private-thread:true thread-message:"Welcome {usermention}, please describe your issue."
```
This will update the existing panel in the `support` channel with new embed and button settings, and update how threads are created when users interact with the panel.