---
sidebar_position: 3
---

# /config show-instructions

**Required User Permissions:** Administrator

::::info
	This requirement can be overridden by using the integrations tab in your server settings.<br/>
	:::warning
		Overriding the permissions for this command allows access to all /config commands
	:::
::::

## Description
The **/config show-instructions** command allows you to get your custom system prompt for a channel.

## Usage
`/config show-instructions channel: <Channel>`
### Required options
- **\<Channel\>** Set the channel you want to get the custom system prompt for.

## Examples
`/config show-instructions channel: #yourchannelname`<br/>
Will reply with your custom system prompt for that channel.