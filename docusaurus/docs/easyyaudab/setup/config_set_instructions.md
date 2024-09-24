---
sidebar_position: 2
---

# /config set-instructions

**Required User Permissions:** Administrator

:::info
This requirement can be overridden by using the integrations tab in your server settings.<br/>
**NOTE:** Overriding the permissions for this command allows access to all /config commands
:::

## Description
The **/config set-instructions** command allows you to set a custom system prompt for a specific channel.<br/>
This applies to both the default chat function as well as the `/chat` command.

:::danger
A custom system prompt can be used to circumvent the security measures implemented by us as well as OpenAI for preventing disallowed content from being generated.<br/>
Even though this is possible, it is against our Terms of Service and using such a system prompt will get your server banned permanently!
:::

## Usage
`/config set-instructions channel: <Channel> text: <Prompt>`
### Required options
- **\<Channel\>** Set the channel you want to modify.<br/>
- **\<Prompt\>** Set the prompt you want to set.
:::warning
	Crafting a system prompt in a way that makes the AI do what you want can be difficult. Make sure to consult online resources if you aren't experienced with custom system prompts.<br/>
	Using system prompts in a wrong way can prevent the AI from outputting useful content. If you run into such a situation, try removing the custom system prompt by running the `/config remove-instuctions` command.
:::
:::warning
	Instructions from system prompts can be overriden by user input for their specific conversation!<br/>
	Don't rely on system prompts to ensure a clean chat!
:::

## Examples
`/config set-instructions channel: #yourchannelname text: Reply only in German even if you're talked to in another language`<br/>
Will make the bot reply in german language no matter the language the user speaks.