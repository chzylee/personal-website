---
title: "Optimizing AI-Assisted Development"
date: 2026-05-08
draft: false
description: "Method and mentality for accelerating and sharpening quality of AI-assisted development with Claude Code."
---

**Let's face it: traditional development is effectively gone forever.** With tools like Cursor, Claude Code, ChatGPT, and an ever-growing number of "vibecoding platforms" providing opportunities for anybody and everybody to build beautiful apps without touching a line of code by hand, our world is changed forever.

However, we still use words like "AI-assisted development" not to sugarcoat anything but because it is sincerely distinct from vibecoding in the exercise of sharpened design and implementation senses to build robust apps. Many of the best and brightest software engineers are using AI tools daily, but some in sharper ways than others.

Here are some strategies I have learned to help you get the most out of your AI software development experience.

## Follow the Rules

Asking Claude or ChatGPT or any AI how it would prompt itself is a powerful strategy to learn how to gain tighter control on your AI output. **One prompting technique is to add a "Rules" block to your prompt**, telling an agent strict guidelines to follow to ensure more predictable results.

Some basic rules you can give Claude for Python for example:
- Import modules as aliases rather than importing individual functions. This keeps calls readable.
- Always use f-strings instead of string concatenation when putting variables in strings.
- Use a `name` prefix with any `print` call where the `name` matches the module's domain and is consistent within a file.

**Each above example can be applied to any Python project to improve your code's readability**, helping you maintain and add to it in the future (you're welcome 👍). With Claude Code, you can add these to a Claude.md so Claude always obeys these for any code outputs. Even manual edits get easier when you build with these rules and tools.

## Discuss Your Design

First interface to AI chatbots is the chat itself. Just like a real chat, you can discuss your design and ask questions about what might be stable, extendable, or even questionable. Software design principles help a lot, but AI helps automate research to know what testing strategies or design patterns might fit into your project.

**Create a design document.** If you have a clear document of what your data model is or how you envision the experience of your app overall, it helps inform the AI of context for building out your app.

- Describe your data model
- List core technologies and integrations
- Outline core interactions and parts of the user journey

If you can train AI to operate with the same assumptions as you, your build quality and velocity will skyrocket.

## Teach Your AI

**The end goal is to train your AI helper to become the best worker for you that it can possibly be.** You can treat it like a human that can work really fast but is totally new to your workflow and needs to know how you think before it works at its best.

Optimizing AI usage is about reframing how you think to get the most out of its capabilities. My own rule: heavy use, zero faith — every generated line gets reviewed like a junior engineer's PR. The speed is real; the judgment is what makes the work yours.
