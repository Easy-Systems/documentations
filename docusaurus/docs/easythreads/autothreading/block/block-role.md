---
sidebar_position: 3
---

# /block role

**Default Permissions:** Administrator
## Description
By using the **/block role** command you can block a role from autothreading in a specific channel. Autothreading has to enabled in the channel for this command to work. This will only block the role from autothreading in the specified channel, but not from all channels. This could be used, to block a role from autothreading in a channel, where the role is not allowed to post. For example, if you have a **Staff** role and you want to block them from autothreading in a **Support** channel, you can use this command.
## Options
- **role** : The role you want to block from autothreading. *(required)*

## Examples
```bash
/block role role: @Staff
```