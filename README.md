# Just Enough Code

Teaching web design in 2016 shouldn't be about software and which buttons to push. This 20-minute segment was part of a pre-conference workshop from the Visual Communication Division of [AEJMC](http://www.aejmc.org/).

In my view, code is empowering. Using code is like using brushes and paint, and using software tools is like using an Etch A Sketch.

![Photo: Etch A Sketch toy](images/etch-a-sketch.jpg)

*Don't teach your students to use this.*

## Step 1: HTML

Use [JSFiddle](https://jsfiddle.net/) to let students play with HTML tags. Students can create a free account, save their work, and turn in a JSFiddle URL for a grade. [Here is an example.](https://jsfiddle.net/macloo/3j60uz7b/) The key commands in JSFiddle are Run, Save and Update, and Set as Base.

![Screen capture: JSFiddle controls](images/JSFiddle-commands.png)

First, focus on headings, paragraphs, images, and links (as in the example). Emphasize that HTML is intended to reflect the document's structure. For example, use an `h1` tag *only* for the top-level heading in the document, and do not use `h` tags (`h1` through `h6`) on any text that is *not a heading*. The tags are not meant to make text *look* a certain way; they are meant to mark up the structural elements.
```
<h1> </h1>
<p> </p>
<img src="" alt="">
<a href=""> </a>
```
Note that all images must have an `alt` attribute, or the HTML will not [validate](https://html5.validator.nu/). If you don't believe me, [read this](https://www.joedolson.com/2015/03/are-alt-attributes-required-always/).

Another thing to note is that no tags require a slash at the end — `/>` — that was XHTML, and it's gone. All modern browsers support HTML5 now. Tags are either paired — `<p> </p>` — or empty — `<img>`.

The `<br>` tag is not intended for creating linespaces. [Its few legitimate uses](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br) include postal addresses and poetry.

```
Mary McFee<br>
123 Main Street<br>
Littletown, FL 32611<br>

A fly and a flea in a flue<br>
Were imprisoned, so what could they do?<br>
Said the fly: "Let us flee!"<br>
"Let us fly!" said the flea.<br>
So they flew through a flaw in the flue.<br>
```

If you want to introduce bold and italic styles, use the `<strong>` and `<em>` tags, not the old `<b>` and `<i>` tags!

Above all, do not let students insert style elements such as fonts and colors into the HTML tags. That is not how it's done in 2016.

After headings, paragraphs, images, and links, students should learn to use the three types of lists: ordered, unordered, and definition. Save forms and tables for *much* later. Also, we'll get to `html`, `head`, and `body` in step 3, below.

### Reliable HTML resources:

* [HTMLDog tutorials: HTML](http://htmldog.com/guides/html/beginner/)
* [Codecademy HTML & CSS](https://www.codecademy.com/learn/web)

## Step 2: CSS

Still using JSFiddle, you can introduce hexadecimal colors — see [video](https://www.youtube.com/watch?v=iJcIlC4yFIQ&index=22&list=PLZFU-W6LLeecJuSQh20QUU_gCmS30sLTB) (4 min.). In CSS, the `background` property determines the background color of an element, and the `color` property determines the foreground or text color.

Color will always be separated from the HTML. JSFiddle makes it easy to do this from the very start. [Here is an example.](https://jsfiddle.net/macloo/79fkd75m/)

```
body {
  background: #E2F0D6;
}
h1 {
  background: #95AB63;
  color: #F6FFE0;
}
```

Students like using the [Adobe Color site](https://color.adobe.com/) for experimenting with color palettes.

Along with colors, you can introduce link styles (pseudo classes). This is a simple way to start that reinforces working with hexadecimal colors and the background and color properties:
```
a {
    color: #95AB63;
}
a:hover {
    color: #F6FFE0;
    background: #152C73;
    text-decoration: none;
}
```
After students have some experience with colors and CSS, you can introduce padding, margins, borders, and the [CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model). (Do not get into DIVs, HTML5 elements, or positioning until students have experimented with padding, margins, and borders.)

Using borders is a great way to learn the different effects of margins and padding. [Here is an example.](https://jsfiddle.net/macloo/ux4kLdLg/) Note that every `p` element has a red border, and the left margin is 50 pixels. The `h1` element has no border and no margins, but it has 20 pixels of padding on all four sides.

I recommend saving fonts until later, when the students are working with real files and not JSFiddle.

### Reliable CSS resources:

* [HTMLDog tutorials: CSS](http://htmldog.com/guides/css/beginner/)
* [Codecademy HTML & CSS](https://www.codecademy.com/learn/web)

## Step 3: Using a Text Editor and Managing Files

There is more about code, I promise, but first we need to talk about text editors for Windows and Mac. You need to use a proper text editor for code, and you **must not use** Notepad (Windows) or TextEdit (Mac) because they don't do the right things in the right way.

![Screen capture: Atom text editor](images/atom-screen-shot.png)

[Atom](https://atom.io/) is my top recommendation for everyone — except it looks like Windows 10 users can't use it (yet?). [Notepad++](https://notepad-plus-plus.org/) will work for any Windows version. Both are free.

![Screen capture: Download from GitHub](images/download-zip.png)

Your students can now download a zipped copy of [this GitHub repo](https://github.com/macloo/just_enough_code): Click the **Clone or download** button and then click **Download ZIP**. This gives them a proper file structure for a project (with separate folders for *css, images,* and *scripts*) and a few file templates to work with.

### Good work habits

It's important to start with good work habits for files. A few tips:

1. Always create a new folder for a new code project.
2. Inside that folder, create three separate folders for *css, images,* and *scripts*.
3. Save files into their proper folders.
4. Use relative URLs for images and for links within the project, because this makes the project portable. When the complete folder is uploaded to a web server, everything will work just as it does on the local hard drive. Relative URLs and links are explained [in this video](https://www.youtube.com/watch?v=K9NVYCego_4&list=PLZFU-W6LLeecJuSQh20QUU_gCmS30sLTB&index=13).

### Document structure

The basic, correct, standard structure for an HTML document in 2016 is this:

```
<!DOCTYPE html>
<html>
    <head>
        <!-- meta tags, title, link tags -->
    </head>

    <body>
        <!-- all content visible to users goes here -->
    </body>
</html>
```

The contents of the `head` section *and their order* are quite important. The minimum inside the `head` is as follows:

```
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> write a good title for search engines </title>
</head>
```

If stylesheets are linked, the `link` tag goes inside the `head` and below the `title`.

### Relevance of step 3

In this outline, I recommend a learning order that corresponds to a progression of expertise in a newsroom or other editing/production environment. The basic level of knowledge is HTML (step 1) and the ability to write (or fix) links, images, etc.

A little more advanced is the ability to write (or fix) specific CSS styles, such as colors, font sizes, and margins (step 2). Steps 1 and 2 apply to working within content management systems as well as outside them.

Step 3 goes beyond content management systems (such as WordPress) and enables  students to create complete standalone documents outside a content management system. Being able to use a text editor and manage files means they can create a site consisting of many pages, or a single-page application for web or mobile, or both.

At this point, students can begin learning about:

* Page layouts and responsive design/design for mobile devices
* Responsive images
* Optimizing image file size for best performance
* [Accessibility](https://www.w3.org/standards/webdesign/accessibility) for disabilities

## Step 4: JavaScript and jQuery

Thanks to [JSFiddle](https://jsfiddle.net/), which was introduced above, students can experiment very quickly with JavaScript and jQuery. It helps to understand the basics of HTML and CSS first.

Why teach JavaScript and jQuery to beginners? Because JavaScript is what makes digital content *interactive.* If you want it to move, spin, fold, animate, calculate, or just plain respond, then it needs JavaScript!

[jQuery](http://jquery.com/) is a JavaScript library, and JSFiddle makes it easy to start using it. Open the menu in the JavaScript pane (shown below), change the two fields indicated, and you're ready to play.

![Screen capture: jQuery in JSFiddle](images/jQuery-in-JSFiddle.png)

I like to start students with something they can alter. Again, JSFiddle is perfect for this. [Here is an example.](https://jsfiddle.net/macloo/xegj2oe7/)

### The jQuery example

In that example, here are the important parts of the HTML:

```
<label>Subject</label>
<input type="text" id="subject" value="The rain">
<label>Verb</label>
<input type="text" id="verb" value="falls">
<label>Object</label>
<input type="text" id="object" value="on the plains">

<p id="sentence">
  Something new will appear here soon.
</p>
```

* `<label>` is a tag used for form fields. It contains text. This is not relevant to our JavaScript at all, but we did not mention this tag until now.
* `<input type="text">` creates a form field into which we can type. We can optionally give it a unique `id`. If we do not give it an optional `value`, it will be blank. (This is another tag that we have not mentioned before.)
* `<p id="sentence">` is a normal `p` tag with an optional unique `id` added.

The `id` is usually **the key to manipulating things with JavaScript.** If something in your HTML has an `id`, you can address it and do things to it with a script. It's *vital* that each `id` is unique on the page. If it's not, the script will not work properly because it will be looking at more than one thing when it expects only one!

Take a moment to play with the live example in the lower right pane in JSFiddle. Change the text several times and watch what happens as a result.

Now look at the JavaScript/jQuery code:

```
// when subject value changes, change the text
$('#subject').change(function() {
    s = ($('#subject').val());
	v = ($('#verb').val());
	o = ($('#object').val());
    $('#sentence').text(s + " " + v + " " + o);
});
```

There are two more chunks of code that are nearly identical to that one. See if you can find the one-word difference in each chunk.

If you discovered that the difference is `$('#subject').` and `$('#verb').` and `$('#object').` — congratulations!

What do those three things refer to? They refer to the unique `id` attributes **in the HTML.** Each `id` is in an `input` tag. Each chunk of script is "listening" to a specific `input` element — the one with the matching `id`. Listening — for what? For a *change* in the element. If you change the text and then Tab or Return, the script for that text-input goes into action.

What is the action that ensues? It takes place in four parts, one part per line of script. This is what each line does:

1. Puts the *value* of the text-input with `id` "subject" into a *variable,* s.
2. Puts the *value* of the text-input with `id` "verb" into a *variable,* v.
3. Puts the *value* of the text-input with `id` "object" into a *variable,* o.
4. Creates a *string* from s, v, and o by adding (actually, *concatenating*) them together with single spaces: `(s + " " + v + " " + o)`. Finds the element in the HTML with `id` "sentence" — because of `$('#sentence')`. Then *replaces* the text inside that element (the `p`) with the new string — because of `.text()`.

Right now you might be wondering how you would ever learn all those bits and pieces and how to put them together. Most people learn by looking at fairly simple scripts, playing with them, and modifying them. You don't need to know *everything* to be able to do *something.*
