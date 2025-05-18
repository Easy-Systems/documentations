---
sidebar_position: 3
---

# /stickymessage delete

:::info[Premium Limited]
This command is **limited to custom branding**. If you want to use this command, you have to buy the **[Custom Branding](https://ezsys.link/premium)** Version of EasyThreads.
:::

**Default Permissions:** Administrator
## Description
By using the **/stickymessage delete** command you can delete a sticky message in a specific channel. This will only work if autothreading is enabled in the channel and there is already a sticky message set in the channel. This command is useful for removing the sticky message when it is no longer needed. You can find information about how to create a sticky message in the **[Create Sticky Message](/docs/easythreads/autothreading/stickymessage/stickymessage-create)** command documentation. Be careful, this command will delete the sticky message and you will not be able to recover it. If you want to edit the sticky message, please use the **[Edit Sticky Message](/docs/easythreads/autothreading/stickymessage/stickymessage-edit)** command instead.
## Options
- **channel**: The channel containing the sticky message you want to delete. *(required)*

## Examples
```bash
/stickymessage delete channel:media
```