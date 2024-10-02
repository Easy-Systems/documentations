---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# /addchannel
**Default Permissions:** Administrator

## Description
With the **/addchannel** command you set up a creator channel and a category. If someone joined this channel, a new temporary voice channel will be created in the given category.

## Options
<Tabs>
  <TabItem value="Required">
	|	Option	|	Variable	|	Desctiption	|
	|	:---:	|	:---:	|	:---:	|
	|	**channel**	|		|	The voice channel you want to add as creator channel	|
	|	**category**	|		|	The category where the temporary voice channel will be created	|
  </TabItem>
  <TabItem value="Optional">
  
	|	Option	|	Variable	|	Desctiption	|
	|	:---	|	:---:	|	:---	|
	|	**name**	|		|	The name of the created temporary voice channel	|
	|	**limit**	|		|	The user limit of the temporary voice channel	|
	|	**lock**	|	(True/False)	|	Lock the temporary voice channel	|
	|	**hide**	|	(True/False)	|	Hide the temporary voice channel	|
	|	**sendpanel**	|	(True/False)	|	If true a control panel will be send in the temporary voice channel chat	|

  </TabItem>
  <TabItem value="Sendpanel options">
  To use this options you need to have set **sendpanel: True**
  
	|	Option	|	Variable	|	Desctiption	|
	|	:---	|	:---:	|	:---	|
	|	**disable-namebutton**	|	(True/False)	|	If true the name change button on the control panel will be enabled	|
	|	**disable-privacybutton**	|	(True/False)	|	If true the privacy button on the control panel will be enabled	|
	|	**disable-limitbutton**	|	(True/False)	|	If true the limit button on the control panel will be enabled	|
	|	**disable-whitelistbutton**	|	(True/False)	|	If true the whitelist button on the control panel will be enabled	|
	|	**disable-kickbutton**	|	(True/False)	|	If true the kick button on the control panel will be enabled	|
	|	**disable-banbutton**	|	(True/False)	|	If true the ban button on the control panel will be enabled	|
	|	**disable-regionbutton**	|	(True/False)	|	If true the region button on the control panel will be enabled	|
	|	**disable-claimbutton**	|	(True/False)	|	If true the claim button on the control panel will be enabled	|
	|	**disable-transferbutton**	|	(True/False)	|	If true the transfer button on the control panel will be enabled	|
	|	**disable-deletebutton**	|	(True/False)	|	If true the delete button on the control panel will be enabled	|

  </TabItem>
</Tabs>