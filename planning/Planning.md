# Neatify

## Project Premise

Clean writing = Easy reading.
Who has time to read lines of text anymoore?
Say what you want quickly and keep your audience focused.

Writing, just like coding, is a skill that must be practiced.
Use Neatify to practice keeping your writing as DRY as your code.

## User story

As a beginner writer, I want to practice editing and de-cluttering my writing, so that I can convey a clean, clear message. I want to be able to submit my solutions and share with other writers to get input and feedback.

## Wireframing

**Models**

User:
username = "string"
email = "string"
password = "string"
input = "string"

Solution:
content = "string"

Comment:
entry = "string"

**Pseudocode**
For the rating:
On Click starts the whole thing:

set the stars equal to numbers
starOne (class name) = 1
starTwo (class name) = 2
starThree (class name) = 3
starFour (class name) = 4

if starOne = 1, then color the star
if starTwo = 2, then color the previous star + this star
if starThree = 3, then color the previous 2 stars + this starTwo
if starFour = 4, then color the previous 3 stars + this star

Bonus: maybe Modules for the login
