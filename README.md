# Puzzle
Here are some comments on my decisions.

Works on all major browsers.
Tested on IE9+, FF, Chrome, Android (Chrome), WP8 (IE), iPad (Safari).

#### Librarys
Only library used is Underscore, mainly for its template engine.

#### Semantics
In the template I could have used FIGURE and FIGCAPTION for better semantics. But that added an extra tag and more styling. Preferred in this case less code over better semantics.

#### Workarounds
Workarounds with code and comments, for the parts I couldn't find a pretty solution.

1. Preserve padding in bottom of ImageList.

```CSS
.imageList {
    /* Because of inline-block this trick is used to remove unwanted extra whitespace between images. */
    font-size: 0;
}

.imageList .figure {
    /* Aligns images side by side - using a float:left makes IE remove padding */
	display: inline-block;
	
	/* Align all images properly when last child has a margin-bottom. */
	vertical-align: top;
}

.imageList .figure:last-child {
	/* Adds margin in the bottom of the list. Only added to last child to be able to control margin between images. */
	margin-bottom: 20px;
}
```
