# Contribute to iota-wiki

This document describes how to contribute to the IOTA wiki.

We encourage everyone with knowledge of IOTA technology to contribute.

Thanks! :heart:

<details>
<summary>Ways to contribute :mag:</summary>
<br>

To contribute to iota-wiki on GitHub, you can:

- Report a bug
- Suggest a new feature or topic for the wiki
- Add a new feature or topic to the wiki
- Write content for the wiki
</details>

<br>

<details>
<summary>Report a bug :bug:</summary>
<br>

This section guides you through reporting a bug. Following these guidelines helps maintainers and the community understand the bug, reproduce the behavior, and find related bugs.

### Before reporting a bug

Please check the following list:

- **Ensure the bug was not already reported** by searching on GitHub under [**Issues**](https://github.com/iota-community/iota-wiki/issues). If the bug has already been reported **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

**Note:** If you find a **Closed** issue that seems similar to what you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

### Submitting A Bug Report

To report a bug, [open a new issue](https://github.com/iota-community/iota-wiki/issues/new), and be sure to include as many details as possible, using the template.

**Note:** Minor changes such as fixing a typo can but do not need an open issue.

If you also want to fix the bug, submit a [pull request](#pull-requests) and reference the issue.
</details>

<br>

<details>
<summary>Suggest a new feature or topic for the wiki :bulb:</summary>
<br>

This section guides you through suggesting a new feature or adding a new topic to the wiki. Following these guidelines helps maintainers and the community collaborate to find the best possible way forward with your suggestion.

### Before suggesting a new feature

**Ensure the feature or topic has not already been suggested** by searching on GitHub under [**Issues**](https://github.com/iota-community/iota-wiki/issues).

### Suggesting a new feature or topic

To suggest a new feature/topic, [open a new issue](https://github.com/iota-community/iota-wiki/issues/new), using the suggestion template.

</details>

<br>

<details>
<summary>Add a new feature or topic to the wiki :hammer:</summary>
<br>

This section guides you through adding a new feature or topic. Following these guidelines helps give your feature/topic the best chance of being approved and merged.

### Before adding a new feature/topic

Check if there is already an [open issue](https://github.com/iota-community/iota-wiki/issues/) or [pull request (PR)](https://github.com/iota-community/iota-wiki/pulls), related to your feature/topic.

Otherwise, your feature may not be approved at all.

### Adding a new feature/topic

To build a new feature/topic, check out a new branch based on the `ddevelop` branch.
</details>

<br>

<details>
<summary>Pull requests :mega:</summary>
<br>

This section guides you through submitting a pull request (PR). Following these guidelines helps give your PR the best chance of being approved and merged.

### Before submitting a pull request

Before submitting a pull request, please follow these steps to have your contribution considered by the maintainers:

- A pull request should have exactly one concern (for example one feature or one bug). If a PR addresses more than one concern, it should be split into two or more PRs.

- A pull request can be merged only if it references an open issue

    **Note:** You don't need to open an issue for minor changes such as typos, but you can if you want.

- All code should be well tested

### Submitting a pull request

The following is a typical workflow for submitting a new pull request:

1. Fork this repository
2. Create a new branch based on your fork. For example, `git checkout -b fix/my-fix` or ` git checkout -b feat/my-feature`.
4. Commit changes and push them to your fork
5. Target your pull request to be merged with `develop`

If he maintainer approves the PR, it will be merged.

**Note:** Reviewers may ask you to complete additional work, tests, or other changes before your pull request can be approved and merged.
</details>

<br>

<details>
<summary>Write Content ✏️:</summary>
<br>
   
## Adding content

To edit a document, click the pencil (edit this file) in the top right corner when viewing in github.


   This will open up the Github editor so you can edit your file.


   All pages are themed and styled automatically and follow a standardised format throughout the wiki.


Each page’s content is preceded by its front matter information. This tells the wiki what it needs to know about the page to add it to the front-end in the right place. This does not need to be edited

```
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
```

   
```# Header 1``` – should only be used for page title/header using a single hash
   
```## Header 2``` – should be used for main sub-sections of the topic using a double hash
   
```### Header 3``` – should be used for internal sections of these sub-sections using treble hash


### Content

All page content should be written as standard text.

   
A paragraph can be created by leaving a double line break between two text blocks


### Formatting
   
Use single asterisk to make a word or sentence ```*italic*```

Use double asterisk to make a word or sentence ```**bold**```

Use triple asterisk to make a word or sentence ```***bold and italic***``` 

Use double tilde to ```~~strike through~~``` a word or sentence 

   
### Links
To add a link to a page we use square brackets to contain the link text followed by round brackets containing the link address:
```[this is a link](https://www.website.com)```

   
### Images
To add an image to a page we first need to upload the page to the [image folder]()
Then in our page we can add the image using the same method as a link preceded with an exclamation mark:
```![image text](https://image.link/here.jpg)```

   
### Image Links
To make an image a link, we can combine the two methods, by putting the link within the text section of the image code:
```[![Here is an example image](https://example.com/image.jpg)](https://example.com)```
   

### Lists
To create lists we use two different methods.

   ```
-	Bullet point
-	lists
-	using a hyphen
   ```

   ```
1.	Numbered
2.	Lists
3.	Using numbers
   ```

   
### Quotes
```
   >To add a quoted or embedded text, we use the greater than symbol at the start of the section. To close off a quote we create a new paragraph.
   ```

### Adding Code
There are two types of code entry we use ``` `inline code` ``` which is wrapped with single backticks
   
```
```Code blocks can be added in page where required
either to demonstrate function, 
or to add exclamation to a section,
by wrapping the section with treble backticks 
```
```

   
### Line Divider
   
We can add a line divider to break up the page by adding 4 dashes
```----
```
----
   

### Submitting your contribution
   
Once you have completed your contribution go to the bottom of the edit page to the commit changes section.

   
- In the title add the title of the page you have edited.
- Edited pagename.md
- In the description explain a little about your edits, whether it was fact correction, typo edits, or full page creation, page formatting, etc.
- Select create a new branch
- Name the branch after your name-pagename-edit
- Click commit changes
- This will open a pull request, where you can fill out the basic information for your updates.
- Then click the create pull request button
   
   
### Congratulations! You’re all done!

   
Enjoy contributing and if you have any questions or ideas send us an issue!


   
</details>
