---
sidebar_position: 1
---

# Default chat function

**Required User Permissions:** No special permissions required

<details>
	<summary>Overview of general permissions</summary>
	
	These permissions are needed for users to use the default chat function in a channel
	- View Channel permissions
	- Send Messages permissions
</details>

## Description
The **default chat function** command allows you to talk to the default AI model (Currently GPT-4o-mini [128k tokens]) in an allowed channel (see [/config allowed_channels](../setup/config_allowed_channels)).

This function has context awareness, which means it will remember your previous messages as well as its' replies to some extent.<br/>
The context is stored per user per channel which means if you used the /chat command before in the same channel using the default chat function will also use that information.<br/>
:::tip
	If you need to reset your context stored for a particular channel you can use the `/resetcontext` command.
:::

## Usage
The usage depends on the configuration by the server owner.<br/>
The default configuration is that you have to ping EasyYAUDAB on every message but this can also be turned off.<br/>
If you're unsure about how the function is set up on the server you're trying to use it in ask the server team or observe other users interacting with the bot.<br/>
:::tip
	If you need to talk to a user in a channel where the default chat function is allowed, especially if the need to ping the bot is turned off, it's recommended to start your messages with `//`.<br/>
	**Example:** "// Hey _username_, you better use _#channelname_ for that message."<br/>
	This will make the bot ignore your message. It will be confirmed by a 💤 reaction on your message.
:::

## Examples
`@EasyYAUDAB Hi, what's up?`<br/>
Send "Hi, what's up?" to the AI model if pinging the bot is required.<br/>
Will produce an output like "Hey there, _username_! 😊 Not much, just hanging out here in _servername_! How about you? Anything fun or interesting going on?✨"

`Hi, what's up?`<br/>
Send "Hi, what's up?" to the AI model if pinging the bot is not required.<br/>
Will produce an output like "Hey there, _username_! 😊 Not much, just hanging out here in _servername_! How about you? Anything fun or interesting going on?✨"