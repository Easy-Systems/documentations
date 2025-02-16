---
sidebar_position: 4
---

# /edit forumpanel
**Default Permissions:** Administrator
## Description
Edit a forumpanel you have created before.

## Options
- **panelchannel**: The channel where the panel is located. *(required)*
- **content**: The new content of the button. *(required)*
- **custom-postmessage**: Whether to use a custom post message. Default: false *(optional)*
- **post-name**: The name for the created posts. *(optional)*

## Example
```bash
/edit forumpanel panelchannel:postcreator content:Create Post custom-postmessage:false post-name:post-{user}
```
