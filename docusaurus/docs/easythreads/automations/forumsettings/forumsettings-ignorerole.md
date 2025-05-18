---
sidebar_position: 6
---

# /forumsettings ignorerole
**Default Permissions:** Administrator
## Description
The **/forumsettings ignorerole** command allows you to ignore a specific role in a channel for automatic forum settings. This means that users with the specified role will not be able to create threads in the specified channel.
## Options
- **channel:** The channel where you want to ignore the role. *(required)*
- **role:** The role to ignore. *(required)*
## Examples
**Ignore a role for automatic forum settings:**
```bash
/forumsettings ignorerole channel:general role:admin
```
This will ignore the role "admin" in the channel "general".
