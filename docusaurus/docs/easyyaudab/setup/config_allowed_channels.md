---
sidebar_position: 1
---

# /config allowed_channels

**Required User Permissions:** Administrator

::::info
This requirement can be overridden by using the integrations tab in your server settings.<br/>
	:::warning
		Overriding the permissions for this command allows access to all /config commands
	:::
::::

## Description
The **/config allowed_channels** command allows you to add / remove channels for the default chat function and configure basic settings.
:::warning
	This configuration has no effect on the `/chat` command, please look at its' page to learn how to configure access to this function instead
:::

## Usage
`/config allowed_channels channel: <Channel> ping: <Ping> minified: <Minified>`
### Required options
- **\<Channel\>** Set the channel you want to modify. Depending on whether you already allowed a channel or not, this will be the channel to add / remove from the list of allowed channels for the default chat function.
### Optional options
:::info
	To change any of the following options for a channel that has already been set you have to first remove the channel then add it again with the new settings.
:::
- **\<Ping\>**
	- _Default:_ True
	- Allows one of True / False to be set. 
	- True means, users have to ping the bot for it to reply (e.g `@EasyYAUDAB Hello`)
	- False means, the bot will reply to any message in this channel (e.g. `Hello`)
- **\<Minified\>**
	- _Default:_ False
	- Allows one of True / False to be set. 
	- True means, the bot will reply in a minified format. This will be the similar to normal chat messages sent by users. Some server owners might prefer this setting since it will integrate better into the chat flow.
	- False means, the bot will reply in embed format. This format will give more information like the provider used, the time to response and more detailed error messages in case of a provider failure. We recommend this setting if you receive errors or weird responses often since it has more information helping us to troubleshoot.
	- At the end of the day, it depends on your personal opinion which option you choose, we recommend testing both and choosing the one which you like most

## Examples
:::warning
	Running any of these examples on a channel that has already been added will remove it from the list of allowed channels for the default chat function.<br/>
	Make sure to always carefully observe the output of this command to understand what it has done.
:::
`/config allowed_channels channel: #yourchannelname`<br/>
Allows a channel with default configuration.

`/config allowed_channels channel: #yourchannelname ping: False`<br/>
Allows a channel without needed ping and embed format.

`/config allowed_channels channel: #yourchannelname ping: True`<br/>
Allows a channel with needed ping and embed format. This matches the default configuration.

`/config allowed_channels channel: #yourchannelname ping: False minified: False`<br/>
Allows a channel without needed ping and minified format.

`/config allowed_channels channel: #yourchannelname ping: False minified: True`<br/>
Allows a channel without needed ping and embed format.

`/config allowed_channels channel: #yourchannelname ping: True minified: False`<br/>
Allows a channel with needed ping and minified format.

`/config allowed_channels channel: #yourchannelname ping: True minified: True`<br/>
Allows a channel with needed ping and embed format. This matches the default configuration.