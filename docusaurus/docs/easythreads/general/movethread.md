---
sidebar_position: 5
---

# /movethread
**Default Permissions:** Administrator
## Description
By using the **/movethread** command you can manually move a thread to another channel. You can also edit the created thread afterwards by using the **[/edit thread](/docs/easythreads/general/edit/edit-thread)**  command! In the free version you an move up to the last 50 messages of the thread, in the custom branded version you can move up to 200 messages of the thread.
## Options
- **thread**: This is the thread you want to move to another channel. *(required)* 
- **channel**: The channel where you want to move the thread to. The channel must be a text channel. *(required)*
- **messages** This is the amount of messages you want to move to the new channel, if no option is selected, the last 25 messages will be moved. *(optional)*
- **delete-old**: If set to true, the old thread will be deleted after moving to the new channel. Default: false *(optional)*

## Examples
```bash
/movethread thread: cat-memes channel: memes messages: 10 delete-old: true
```