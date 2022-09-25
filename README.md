# Micro Challenge 4: Thought Mapping Prototype

## Links
- [Micro Challenge IV - FabAcademy BCN Local Documentation](https://fablabbcn-projects.gitlab.io/learning/fabacademy-local-docs/challenge/c_4/)
- [Jeremy's post](https://publish.obsidian.md/jeremyparadie/%F0%9F%8C%90+Website/MDEF/MDEF+Academy/Micro+Challenge+4)

## Initial ideas and concepts
I've been experimenting with [Obsidian](https://obsidian.md/) for taking notes and mapping my thoughts, but I found that it doesn't fit my needs. Instead of writing linearly as required by a text or markdown file, and instead of being restricted to a tree structure in most mind mapping software, I want to write in both diverging and converging patterns and construct arbitrary graphs of thoughts with plenty of semantic metadata so I can more easily work with them. I want to test if a tool that does this works better for me. I started by prototyping a web app where I can write and connect thoughts. 

## Design proposal
I'll make a simple web app with the ability to
1. Type thoughts onto the screen
2. Rearrange thoughts to different locations on the screen
3. Selectively connect thoughts together visually
4. Delete thoughts (and their connections)

## Planning
| Day              | Description        |
|:---------------- |:------------------ |
| 2022-05-31 · Tue | Concept            |
| 2022-06-01 · Wed | Research           |
| 2022-06-02 · Thu | Start development  |
| 2022-06-03 · Fri | Finish development | 

## Flow chart
![Pasted image 20220924221406](https://user-images.githubusercontent.com/14352758/192126660-9fd2bb75-bad5-447b-9124-e97f15ad79e6.png)

## Design process tools
I used the [p5.js web editor](https://editor.p5js.org/jparadie/sketches/gU_qqxFGN) and referenced the [p5.js documentation](https://p5js.org/reference/).

## Iterations
I refactored the mouse interaction code once, moving some code from the `Element` class to the mouse event listener functions.

## Screenshot
![Pasted image 20220924224730](https://user-images.githubusercontent.com/14352758/192126674-1b608ccd-b393-4369-a1f9-8d50ca72c16e.png)

## Problems and solutions
Everything was pretty straightforward and I didn't have any significant issues. My prior experience with software development was helpful in this regard. 

## Source code
The source code is available in this repository. It has been deployed with GitHub Pages, so you can [run it online](https://jeremyparadie.github.io/MDEF-Academy-Micro-Challenge-4/). Alternatively, you can open and run the project in the [p5.js web editor](https://editor.p5js.org/jparadie/sketches/gU_qqxFGN).

## How to use it
1. Follow this link to [run in browser](https://jeremyparadie.github.io/MDEF-Academy-Micro-Challenge-4/).
2. Click anywhere on the dark background to create an empty node.
3. Type a thought.
4. To move a thought to a different location, simply press-drag-release.
5. To connect two thoughts together, hold shift and click on a thought, and then click on another thought.
6. To select multiple thoughts, hold ctrl and click on multiple thoughts.
7. To delete selected thoughts, on Windows, press delete. On Mac, press fn + delete.

## Future developments
I'd like to add more features in the future, like a way to save user data, real-time multi-user collaboration, link types, thought types, thought groups, version control, thought chains, integration with markdown, and embeddable media. 

I continued development of this in the [Subatomic Notes repository](https://github.com/JeremyParadie/Subatomic-Notes).
