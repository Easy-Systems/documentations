---
sidebar_position: 2
---

# /removeuser channel
**Default Permissions:** Administrator
## Description
By using the **/removeuser channel** command you can manually remove a user from all threads or forum posts in a specific channel. A potential use case for this command is, to remove former staff members from private thread tickets. This command requires custom branding. Please note, that this command might take a while to process, depending on the number of threads in the channel and the number of users in the server.
## Options
- **user** : The user you want to remove from all threads in the channel. *(required)*
- **channel**: The channel you want to remove the user from. *(required)*


## Example
```
/removeuser user:@formerstaff channel: ticket-support
```
