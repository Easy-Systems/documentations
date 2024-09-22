# Contributing to the EasySystems Documentation

[EasySystems](https://easysystems.live) is a german Company that creates various Discord Apps (formerly known as "Bots"). 
We currently have only one open source project and that's our documentation!! If you're interested in contributing to the EasySystems Documentation, hopefully, this document makes the process for contributing clear.

The [Open Source Guides](https://opensource.guide/) website has a collection of resources for individuals, communities, and companies who want to learn how to run and contribute to an open source project. Contributors and people new to open source alike will find the following guides especially useful:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Building Welcoming Communities](https://opensource.guide/building-community/)

## Code of Conduct

EasySystems has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://github.com/Easy-Systems/documentations/blob/main/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Get Involved

There are many ways to contribute to the EasySystems App Documentation, and many of them do not involve writing any code. Here's a few ideas to get started:

- Simply start reading the documentation. Go through the [documentation](https://docs.easysystems.live). Does everything work as expected? Do you think something could be confusing?
 If not, we're always looking for improvements. Let us know by [opening an issue](#issues).
- Look through the [open issues](https://github.com/Easy-Systems/documentations/issues). Provide workarounds, ask for clarification, or suggest labels. Help [triage issues](#triaging-issues-and-pull-requests).
- If you find an issue you would like to fix, [open a pull request](#pull-requests). Issues tagged as [_Good first issue_](https://github.com/Easy-Systems/documentations/labels/Good%20first%20issue) are a good place to get started.
- Take a look at the [features requested](https://github.com/Easy-Systems/documentations/labels/feature) by others in the community and consider opening a pull request if you see something you want to work on.

Contributions are very welcome. If you think you need help planning your contribution, you can visit us in [`#contributor`](https://discord.gg/58xeDxNu8F)³ in EasySystems Labs and let us know you are looking for a bit of help.

### Join our Discord Channel

We have the [`#contributor`](https://discord.gg/58xeDxNu8F)³ channel on [Discord](https://ezsys.link/labs)³ to discuss all things about EasySystems docs development. You can also be of great help by helping other users in the [`#support`](https://discord.gg/MwtqUtw7Vk)² channel.

### Triaging Issues and Pull Requests

One great way you can contribute to the project without writing any code is to help triage issues and pull requests as they come in.

- Ask for more information if you believe the issue does not provide all the details required to solve it.
- Suggest [labels](https://github.com/Easy-Systems/documentations/labels) that can help categorize issues.
- Flag issues that are stale or that should be closed.
- Ask for test plans and review code.

## Our Development Process

The EasySystems docs uses [GitHub](https://github.com/Easy-Systems/documentations) as its source of truth. The core team will be working directly there. All changes will be public from the beginning.

 As base for the documentations we use [Docusaurus](https://docusaurus.io).

All pull requests will be checked by the continuous integration system, GitHub actions.

### Branch Organization

The EasySystems documentations have one primary branch `main` and we use feature branches with deploy previews to deliver new features with pull requests. These branches will be named after this scheme: `name/feature-name` (e.g.: `themelon/premium-guide)`

## Issues

When [opening a new issue](https://github.com/Easy-Systems/documentations/issues/new/choose), always make sure to fill out the issue template. **This step is very important!** Not doing so may result in your issue not being managed in a timely fashion. Don't take this personally if this happens, and feel free to open a new issue once you've gathered all the information required by the template.

**Please don't use the GitHub issue tracker for questions.** If you have questions about the EasySystems Apps and/or Documentations, use any of our [support channels](https://ezsys.link/support), and we will do our best to answer your questions.

### Bugs

We use [GitHub Issues](https://github.com/Easy-Systems/documentations/issues) for our public bugs. If you would like to report a problem, take a look around and see if someone already opened an issue about it. If you are certain this is a new, unreported bug, you can submit a [bug report](https://github.com/Easy-Systems/documentations/issues/new?assignees=&labels=bug%2Cstatus%3A+needs+triage&template=bug.yml).

- **One issue, one bug:** Please report a single bug per issue.
- **Provide reproduction steps:** List all the steps necessary to reproduce the issue. The person reading your bug report should be able to follow these steps to reproduce your issue with minimal effort.

If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend filing an issue detailing what you're fixing. This is helpful in case we don't accept that specific fix but want to keep track of the issue.

### Security Bugs
Please do not file public issues; go through the process outlined on that page.

### Feature requests

If you would like to request a new feature or enhancement but are not yet thinking about opening a pull request, you can file an issue with the [feature template](https://github.com/Easy-Systems/documentations/issues/new?assignees=&labels=feature%2Cstatus%3A+needs+triage&template=feature.yml) in the form of an **elaborated RFC**. 

### Proposals

If you intend to make any non-trivial changes to existing implementations, we recommend filing an issue with the [proposal template](https://github.com/Easy-Systems/documentations/issues/new?assignees=&labels=proposal%2Cstatus%3A+needs+triage&template=proposal.yml). This lets us reach an agreement on your proposal before you put significant effort into it. These types of issues should be rare.

### Claiming issues

We have a list of [beginner-friendly issues](https://github.com/Easy-Systems/documentations/labels/good%20first%20issue) to help you get your feet wet in the EasySystems codebase and familiar with our contribution process. This is a great place to get started.

Apart from the `good first issue`, the following labels are also worth looking at:

- [`help wanted`](https://github.com/Easy-Systems/documentations/labels/help%20wanted): if you have specific knowledge in one domain, working on these issues can make your expertise shine.
- [`status: accepting pr`](https://github.com/Easy-Systems/documentations/labels/status%3A%20accepting%20pr): community contributors can feel free to claim any of these.

If you want to work on any of these issues, just drop a message saying "I'd like to work on this", and we will assign the issue to you and update the issue's status as "claimed". **You are expected to send a pull request within seven days** after that, so we can still delegate the issue to someone else if you are unavailable.

Alternatively, when opening an issue, you can also click the "self service" checkbox to indicate that you'd like to work on the issue yourself, which will also make us see the issue as "claimed".

## Development

### Online one-click setup for contributing

You can try using the new [github.dev](https://github.dev/Easy-Systems/documentations) feature. While you are browsing any file, changing the domain name from `github.com` to `github.dev` will turn your browser into an online editor. You can start making changes and send pull requests right away.

### Installation

1. Install Node.js (version 18.0 or above required)
    - You can Download an prebuilt installer for [Node.js](https://nodejs.org/en/download/prebuilt-installer)
        - <sub>When installing Node.js, you are recommended to check all checkboxes related to dependencies.</sub>

2. Ensure you have [Yarn](https://yarnpkg.com/) installed.
<!-- Yarn installation need to be added ?! -->
3. Download the repository [Download ZIP](https://docs.easysystems.live/docs/opensource#step-12-optional-clone-the-repository) or clone the repository with [GitHub Desktop](https://github.com/apps/desktop)
     - After downloading/cloning the repository, run* `yarn set version stable` and `yarn install` in the root* of the repository. This will install all dependencies as well as build all local packages.

5. To start a development server, run* `yarn run start`.
    - run* the command inside of the CMD console or via a .batch(call)
         - <sub>root* of the repository = (path_to\docusaurus) folder.</sub>
### Code Conventions

- **Most important: Look around.** Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation, etc.
- "Attractive"
- **For documentation**: Do not wrap lines at 80 characters - configure your editor to soft-wrap when editing documentation.

Don't worry too much about styles in general—the maintainers will help you fix them as they review your code. :)

## Pull Requests

So you have decided to contribute code back to upstream by opening a pull request. You've invested a good chunk of time, and we appreciate it. We will do our best to work with you and get the PR looked at.

Working on your first Pull Request? You can learn how from this free video series:

[**How to Contribute to an Open Source Project on GitHub**](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

Please make sure the following is done when submitting a pull request:

1. **Keep your PR small.** Small pull requests (~300 lines of diff) are much easier to review and more likely to get merged. Make sure the PR does only one thing, otherwise please split it.
2. **Use descriptive titles.** It is recommended to follow this [commit message style](#semantic-commit-messages).
3. **Test your changes.** Describe your [**test plan**](#test-plan) in your pull request description.
4. **CLA.** If you haven't already, [sign the CLA](https://ezsys.link/cla). Otherwise, we won't be able to merge your code.

All pull requests should be opened against the `main` branch.

The maintainers will review your code and fix obvious issues for you. These systems' duty is to make you worry as little about the chores as possible. Your code contributions are more important than sticking to any procedures, although completing the checklist will surely save everyone's time.

### Semantic Commit Messages

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional. If your change is specific to one/two packages, consider adding the scope. Scopes should be brief but recognizable, e.g. `easythreads-docs`, `design`, `core`

The various types of commits:

- `feat`: a new API or behavior **for the end user**.
- `fix`: a bug fix **for the end user**.
- `docs`: a change to the website or other Markdown documents in our repo.
- `refactor`: a change to production code that leads to no behavior difference, e.g. splitting files, renaming internal variables, improving code style...
- `test`: adding missing tests, refactoring tests; no production code change.
- `chore`: upgrading dependencies, releasing new versions... Chores that are **regularly done** for maintenance purposes.
- `misc`: anything else that doesn't change production code, yet is not `test` or `chore`. e.g. updating GitHub actions workflow.

Do not get too stressed about PR titles, however. Your PR will be squash-merged and your commit to the `main` branch will get the title of your PR, so commits within a branch don't need to be semantically named. The maintainers will help you get the PR title right, and we also have a PR label system that doesn't equate with the commit message types. Your code is more important than conventions!

Example:

```
feat(core): allow overriding of webpack config
^--^^----^  ^------------^
|   |       |
|   |       +-> Summary in present tense. Use lower case not title case!
|   |
|   +-> The package(s) that this change affected.
|
+-------> Type: see above for the list we use.
```

### Versioned Docs
**Currently we aren't using any versions!**
> If you only want to make doc changes, you just need to be aware of versioned docs.
> 
> - `website/docs` - The files here are responsible for the "next" version at https://docs.easysystems.live/next/installation.
> - `website/versioned_docs/version-X.Y.Z` - These are the docs for the X.Y.Z version at https://docs.easysystems.live/X.Y.Z/installation.

**BE AWARE...**
Do not edit the auto-generated files within `versioned_docs/` or `versioned_sidebars/` unless you are sure it is necessary. For example, information about new features should not be documented in versioned docs. Edits made to older versions will not be propagated to newer versions of the docs.

### Test Plan

A good test plan has the exact commands you ran and their output and provides screenshots or videos if the pull request changes UI. If you've changed UI update the documentation.

Tests are integrated into our continuous integration system, so you don't always need to run local tests. However, for significant code changes, it saves both your and the maintainers' time if you can do exhaustive tests locally first to make sure your PR is in good shape. There are many types of tests:

- **Build and typecheck.** We use TypeScript in our codebase, which can make sure your code is consistent and catches some obvious mistakes early.
- **Dogfooding.** Our website itself covers all kinds of potential configuration cases. Don't be afraid to update our website's configuration in your PR—it can help the maintainers preview the effects. We can decide if the website change should be kept when merging and deploying for production.

### Licensing

By contributing to EasySystems, you agree that your contributions will be licensed under its MIT license. Copy and paste this to the top of your new file(s):

```js
/**
 * Copyright (c) EasySystems and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
```



### Contributor License Agreement (CLA)

In order to accept your pull request, we need you to submit a CLA. You only need to do this once, so if you've done this for another EasySystems open source project, you're good to go. The link to [complete your CLA is here](https://ezsys.link/cla).

After you have signed the CLA, we are able to merge your PR. :)

**CLAs are required for us to merge your pull request.** While we value your effort and are willing to wait for you to come back and address the reviews in case you are unavailable after sending the pull request, pull requests that are ready to merge but have CLA missing and no response from the author **will be closed within two weeks of opening**. If you have further questions about the CLA, please stay in touch with us.

If it happens that you were unavailable and your PR gets closed, feel free to reopen once it's ready! We are still happy to review it, help you complete it, and eventually merge it.

### Breaking Changes

When adding a new breaking change, follow this template in your pull request:

```md
### New breaking change here

- **Who does this affect**:
- **How to migrate**:
- **Why make this breaking change**:
- **Severity (number of people affected x effort)**:
```

### What Happens Next?

The EasySystem content writing team will be monitoring pull requests. Do help us by keeping pull requests consistent by following the guidelines above.

---
² = This link redirect you to our main Discord Server "EasySystems"
³ = This link redirect you to our beta/alpha testing Discord Server "EasySystems Labs"
