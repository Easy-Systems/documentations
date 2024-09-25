---
sidebar_position: 4
---

# /config remove-instructions

**Required User Permissions:** Administrator

::::info
	This requirement can be overridden by using the integrations tab in your server settings.<br/>
	:::warning
		Overriding the permissions for this command allows access to all /config commands
	:::
::::

## Description
The **/config remove-instructions** command allows you to remove a custom system prompt from a channel.

## Usage
`/config remove-instructions channel: <Channel>`
### Required options
- **\<Channel\>** Set the channel you want to remove a custom system prompt from.

## Examples
`/config remove-instructions channel: #yourchannelname`<br/>
Will remove your custom system prompt for a channel.