# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Erica Okeh**


## Required Functionality

The following **required** functionality is complete:

* [x ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ x] Game buttons each light up and play a sound when clicked. 
* [x ] Computer plays back sequence of clues including sound and visual cue for each button
* [ x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ x] User wins the game after guessing a complete pattern
* [x ] User loses the game after an incorrect guess

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[StackOverflow
W3schools
colormagic
]

3. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[I had challenges in ensuring each factor of both front end and back endconnected smoothly. Also, determining what I was debugging because I had a bit of a learning curve withjavaScript implementation, but my experience with Python helped me. Debugging was also a large part of my issues, smaller syntax errors would disconnect the functions related to synching button clicking with the respective sounds. Also I had some troubleshooting with the start/stop aspect of the button. At one point, I realized that I had accidentally missed applying these event handlers to one of the buttons, which explained why it wasn’t working properly. However, because I understood the logic behind the code, I knew I needed to change how the event listeners handled the start and stop of tones. During the last parts within recording, I also was having trouble with the alert of the end game showing up in the video. I was able to use OBS recording platform instead and that captured my pop up. Lastly, replits confined time for working on projects made me create a new account and fork it from the previous one of my email I was working on. Similar email I used for my loom interview. 
  ]

4. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[The questions I have is to what extent to built in functions and librares help speed the process of webdevelopment. When I was conceptualizing and drawing the decomposition diagram of my work, I realized that my manuel process was far more tedious and longer compared to the methods built in and shown. I also wonder how larger backends can handle and process large amounts of traffic and data even beyond a game. I am curious how logins, high site traffic and data structures all contribute to the final product. I also wonder how we can use other frameworks to build far more visually appealing projects that are more interactive and user friendly. How would utulizing API's fit intoweb development and to what extend can we utilize HTML, CSS, and JavaScript? ]

5. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours to work of this project, I would be sure to add an interactive game map that shows the levels in this game. Like an animation depicting an avatar moving through the levels after winning. There would be multiple levels increasing in length and difficulty and amount of buttons on each levels. An opening selection menue of the type of difficulty level or even an infinite game selection, or sound on/off toggle would allow a person to only experience visual buttons. Instead of hardcoding delays also, I’d make playback durations adjustable with a chnageable difficulty level. The game also relies on global variables like tonePlaying but making game logic more OOP like and encapsulating, make it easier to use/ expand. Lastly, I experienced some struggle with the Start/Stop so using one button and one function but using a boolean factor.  ]

## Video Walkthrough 

Add your screen recordings for specified implemented features here:
## Losing Screen Recording

[![Losing screen recording](https://s7.ezgif.com/tmp/ezgif-794a8f509f9336.gif)](https://drive.google.com/file/d/1weKYTJplOH8ldLYGTwxUPz14ltjkr-Wj/view?usp=sharing)

---

## Winning Screen Recording

[![Winning screen recording](https://ezgif.com/save/ezgif-2603c4ce38a69c.gif)](https://drive.google.com/file/d/1HCVHi3qc9nMZO2sZxaVINxzP6QXwTS00/view?usp=sharing)

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/9fd0ae2d15c244e8bbad878f5cfc000a?sid=a837e59f-5ddf-4993-82aa-dee88984f909)



## License

    Copyright [Erica Okeh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.