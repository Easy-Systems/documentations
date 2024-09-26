---
sidebar_position: 3
---

# /gen_img

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
The **/gen_img** command allows you to request an AI generated image from your prompt with up to 3 variations.

:::note
	Image models can take a long time, please allow up to 5 minutes for your generation(s) to finish
:::

## Usage
`/gen_img text: <Prompt> model: <Model> amount: <Amount> size: <Size> hd: <Hd>`
### Required options
- **\<Prompt\>** The text (also called prompt) you want to give the AI model to generate an image from.
### Optional options
- **\<Model\>**
	- _Default:_ DALL-E-2
	- Allows to set one of the available models, currently
		- DALL-E-2 (Default)
		- Stable Diffusion XL
		- Kandinsky 2.2
		- DALL-E 3 (1024px only)
:::note
	As DALL-E 3 costs a lot access to this model is restricted and has to be requested by the server owner for their server.<br/>
	If you are a server owner and want to request access to this model, open a ticket on our [Support Discord](https://ezsys.link/support)
:::
- **\<Amount\>**
	- _Default:_ 1
	- Allows to set one of 1, 2, 3
	- Sets how many variations (images with the same prompt) you wanna generate from your request
- **\<Size\>**
	- _Default:_ 512px x 512px
	- Allows to set one of the available sizes, currently
		- 256px x 256px
		- 512px x 512px (default)
		- 1024px x 1024px
- **\<Hd\>**
	- _Default:_ False
	- Allows one of True / False to be set. 
	- True means, the model will generate images with finer details and greater consistency across the image (according to OpenAI's documentation).
	- False means, the model will generate standard quality images.
:::info
	The Hd option is only available on DALL-E-3 and will be ignored on other models
:::


## Examples
`/gen_img text: Sunset at a beach`<br/>
Will generate an image of a sunset at a beach

`/gen_img text: Sunset at a beach size: 1024px x 1024px`<br/>
Will generate an image of a sunset at a beach in 1024x1024px resolution

`/gen_img text: Sunset at a beach model: Stable Diffusion XL`<br/>
Will generate an image of a sunset at a beach using the Stable Diffusion XL model

`/gen_img text: Sunset at a beach amount: 3`<br/>
Will generate 3 images (variations) of a sunset at a beach

`/gen_img text: Sunset at a beach model: DALL-E 3 (1024px only) size: 1024px x 1024px hd: True`<br/>
Will generate an image of a sunset at a beach in 1024x1024px resolution using DALL-E 3's HD option