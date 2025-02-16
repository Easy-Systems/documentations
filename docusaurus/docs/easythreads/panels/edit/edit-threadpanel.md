---
sidebar_position: 3
---

# /edit threadpanel
**Default Permissions:** Administrator
## Description
Edit a threadpanel you have created before.

## Options
- **panelchannel**: The channel where the panel is located. *(required)*
- **content**: The new content of the button. *(required)*
- **custom-threadmessage**: Whether to use a custom thread message. Default: false *(optional)*
- **thread-name**: The name for the created threads. *(optional)*
- **private**: Whether the created thread should be private. Default: false *(optional)*

## Example
```bash
/edit threadpanel panelchannel:support content:Ticketsupport custom-threadmessage:true thread-name:ticket-{user} private:true
```
