---
sidebar_position: 1
---

# /panel threads
**Default Permissions:** Administrator
## Description
The **/panel threads** command allows you to create a panel with a button that creates a thread in a specific channel. This is useful for creating a ticket system or any other system where you want users to be able to create threads easily.

## Options
- **channel**: The channel where the button will be placed. *(required)*
- **content**: The content of the button. *(required)*
- **embed-title**: The title of the embed. *(optional)*
- **embed-description**: The description of the embed. *(optional)*
- **embed-footer**: The footer of the embed. *(optional)*
- **embed-image**: The image of the embed. *(optional)*
- **embed-color**: The color of the embed. *(optional)*
- **button-text**: The text of the button. *(optional)*
- **button-color**: The color of the button. *(optional)*
- **button-emoji**: The emoji of the button. *(optional)*
- **thread-name**: The name of the thread. *(optional)*
- **custom-threadname**: Allow the user to set the name used to create the thread with. This will disable the thread-name option *(optional)*
- **thread-message**: The message that will be sent in the thread. *(optional)*
- **pin-threadmessage**: Pin the thread message. *(optional)*
- **custom-threadmessage**: Allow the user to set the message used to create the thread with. This will disable the thread-message and pin-threadmessage option *(optional)*
- **pin-custommessage**: Pin the custom message. *(optional)*
- **private-thread**:Whether the thread should be private or not. *(optional)*
- **block-invites**: If private-thread option and this option are set to true, the thread will be private and no one except moderators can add users to the thread by mentioning them. *(optional)*
- **archive-time**: The time of inactivity after which the thread will be archived. *(optional)*

## Example
```bash
/panel threads channel:support content:Create Ticket thread-name:ticket-{user} private:true
```
