---
sidebar_position: 4
---

# /translate

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
The **/translate** command allows you to have a text translated into any language you like, this even allows imaginary languages if you tell the AI what they mean.

## Usage
`/translate message: <Message> language: <Language>`
### Required options
- **\<Message\>** The text you want to have translated.
- **\<Language\>** The language you want the text translated to. 
:::tip
	You can also set instructions on how to translate the message in the Language field (Knowledge in Prompt engineering required).
:::

## Examples
`/translate text: Hello! What's up? language: German`<br/>
Will translate "Hello! What's up?" into german language<br/>
Will produce an output like "Hallo! Was gibt's?"