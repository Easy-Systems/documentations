---
sidebar_position: 2
---

# /addchannel
**Default Permissions:** Administrator

## Description
With the **/addchannel** command you set up a creator channel and a category. If someone joined this channel, a new temporary voice channel will be created in the given category.

## Options
- **channel:** The voice channel you want to add as creator channel *(required)*
- **category:** The category where the temporary voice channel will be created *(required)*

	- **name:** The name of the created temporary voice channel *(optional)*
	- **limit:** The user limit of the temporary voice channel *(optional)*
	- **lock:** Lock the temporary voice channel *(optional)*
	- **hide:** Hide the temporary voice channel *(optional)*
	- **sendpanel: (True/False)** If true a control panel will be send in the temporary voice channel chat *(optional)*
		- **diable-namebutton: (True/False)** If true the name change button on the control panel will be enabled *(optional\*)*
		- **diable-privacybutton: (True/False)** If true the privacy button on the control panel will be enabled *(optional\*)*
		- **diable-limitbutton: (True/False)** If true the limit button on the control panel will be enabled *(optional\*)*
		- **diable-whitelistbutton: (True/False)** If true the whitelist button on the control panel will be enabled *(optional\*)*
		- **diable-kickbutton: (True/False)** If true the kick button on the control panel will be enabled *(optional\*)*
		- **diable-banbutton: (True/False)** If true the ban button on the control panel will be enabled *(optional\*)*
		- **diable-regionbutton: (True/False)** If true the region button on the control panel will be enabled *(optional\*)*
		- **diable-claimbutton: (True/False)** If true the claim button on the control panel will be enabled *(optional\*)*
		- **diable-transferbutton: (True/False)** If true the transfer button on the control panel will be enabled *(optional\*)*
		- **diable-deletebutton: (True/False)** If true the delete button on the control panel will be enabled *(optional\*)*
	
\* to use this options you need to have **sendpanel: True**