---
sidebar_position: 1
---

# /panel threads
**Default Permissions:** Administrator
## Description
Allow anyone to create a thread by clicking a button.

## Options
- **channel**: The channel where the button will be placed. *(required)*
- **content**: The content of the button. *(required)*
- **thread-name**: The name for the created threads. *(optional)*
- **private**: Whether the created thread should be private. Default: false *(optional)*

## Example
```bash
/panel threads channel:support content:Create Ticket thread-name:ticket-{user} private:true
```
