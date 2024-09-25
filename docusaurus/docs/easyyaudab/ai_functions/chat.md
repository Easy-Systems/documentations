---
sidebar_position: 2
---

# /chat

**Required User Permissions:** No special permissions required

<details>
	<summary>Overview of general permissions</summary>
	
	These permissions are needed for users to run any commands at all in a channel
	- View Channel permissions
	- Send Messages permissions
	- Use Application Commands permissions
</details>

:::warning
	This command is available in all channels where users have the aforementioned general permissions no matter what you configured in `/config allowed_channels`.
	
	To prevent this, follow these steps
	
	- Go to your server settings
	- Go to the Integrations tab
	- Click on EasyYAUDAB
	- Click on the command you want to restrict
	- Configure overrides per role, member or channel
:::

## Description
The **/chat** command allows you to talk to an AI model.

Like the default chat function this function has context awareness, which means it will remember your previous messages as well as its' replies to some extent.<br/>
The context is stored per user per channel which means if you used the default chat function before in the same channel using this command will also use that information.<br/>
:::tip
	If you need to reset your context stored for a particular channel you can use the `/resetcontext` command.
:::

## Usage
`/chat text: <Prompt> model: <Model> `
### Required options
- **\<Prompt\>** The text (also called prompt) you want to give the AI model to responsd to.
### Optional options
- **\<Model\>**
	- _Default:_ GPT-4o-mini [128k tokens]
	- Allows to set one of the available models, currently
		- GPT-3.5 [16k tokens] (Legacy)
		- GPT-4o-mini [128k tokens] (Default)
		- GPT-4o [128k tokens] (Restricted)
:::note
	As GPT-4o costs a lot access to this model is restricted and has to be requested by the server owner for their server.<br/>
	If you are a server owner and want to request access to this model, open a ticket on our [Support Discord](https://ezsys.link/support)
:::

## Examples
`/chat text: Hi, what's up?`<br/>
Send "Hi, what's up?" to the AI model.<br/>
Will produce an output like "Hey there, _username_! 😊 Not much, just hanging out here in _servername_! How about you? Anything fun or interesting going on?✨"