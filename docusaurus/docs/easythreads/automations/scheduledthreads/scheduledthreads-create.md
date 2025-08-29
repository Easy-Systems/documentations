---
sidebar_position: 10
---

# /scheduledthreads create
**Default Permissions:** Administrator
## Description
By using the **/scheduledthreads create** command, you can schedule the creation of a thread for a specidied time. For performance reasons, free users only have a limited amount of scheduledthreads available, but custom branding subscribers have a higher limit which can also be manually increased upon request.
## Notes
For best behaviour, we recommand you setting your timezone with [/scheduledthreads create](/docs/easythreads/general/timezone) first or to use a Unix Timestamp
## Options
- **title**: The name/title of the thread you want to automatically create (variables supported). *(required)* 
- **channel**: The channel, you want to create the thread in. *(required)*
- **time**: The time, when you want the bot to create the thread. You can either use a Unix Timestamp or enter it in human readable format like this: `YYYY-MM-DD HH:MM`
- **privacy**: Here you can select whether the created thread shall be publicly visible or private
- **interval:**: The interval, you want the Bot to create the thread with. You can choose between Once, Every 5 minutes, Hourly, Daily, Weekly and Monthly (30 days)
## Example
```
/scheduledthreads create title:IamScheduled channel:timedthreads time:2025-08-25 10:35 interval:Daily
```
This will then create a thread every day at 10:35 in the timedthreads channel with the title "IamScheduled".

