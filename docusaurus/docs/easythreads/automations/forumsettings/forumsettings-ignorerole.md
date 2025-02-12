---
sidebar_position: 6
---

# /forumsettings ignorerole
## Description
Ignore a role for applying forum settings automatically. Executing this command again will unblock the role.
## Options
- **channel:** The channel where you want to ignore the role. *(required)*
- **role:** The role to ignore. *(required)*
## Examples
**Ignore a role for automatic forum settings:**
```bash
/forumsettings ignorerole channel:general role:admin
```
This will ignore the role "admin" in the channel "general".
