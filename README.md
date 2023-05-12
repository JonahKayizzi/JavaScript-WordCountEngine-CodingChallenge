<a name="readme-top"></a>


<div align="center">

  <h3><b>WORD COUNT ENGINE CODING CHALLENGE</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 WORD COUNT ENGINE ](#-word-count-engine-)
  - [🛠 The Challenge ](#-the-challenge-)
    - [Tech Stack ](#tech-stack-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Run tests](#run-tests)
  - [👥 Authors ](#-authors-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 WORD COUNT ENGINE <a name="about-project"></a>


**WORD COUNT ENGINE** is a medium difficulty coding challenge that I found on PRAMP. Test your profficiency with strings and arrays.

## 🛠 The Challenge <a name="built-with"></a>
Implement a document scanning function `wordCountEngine` which receives a string `document` and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words `“Perfect”` and `“perfect”` should be considered the same word.
The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.
**Examples:**
`input:  document = "Practice makes perfect. you'll only`
                    `get Perfect by practice. just practice!"`

`output: [ ["practice", "3"], ["perfect", "2"],`
          `["makes", "1"], ["youll", "1"], ["only", "1"],` 
          `["get", "1"], ["by", "1"], ["just", "1"] ]`

**Important:** please convert the occurrence integers in the output list to strings (e.g. "3" instead of 3). We ask this because in compiled languages such as C#, Java, C++, C etc., it’s not straightforward to create mixed-type arrays (as it is, for instance, in scripted languages like JavaScript, Python, Ruby etc.). The expected output will simply be an array of string arrays.

**Constraints:**

**[time limit] 5000ms**
**[input] string document**
**[output] array.array.string**

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>Language</summary>
  <ul>
    <li><a href="https://www.javascript.com/">JavaScript</a></li>
  </ul>
</details>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

```sh
 npm install
 Nodejs
```


### Setup

Clone this repository to your desired folder:


```sh
  cd JavaScript-WordCountEngine-CodingChallenge
  git clone https://github.com/JonahKayizzi/JavaScript-WordCountEngine-CodingChallenge.git
```


### Run tests

To run tests, run the following command:


```sh
  npm run test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 **Jonathan Kayizzi**

- GitHub: [@JonahKayizzi](https://github.com/JonahKayizzi)
- Twitter: [@JonahKayizzi](https://twitter.com/JonahKayizzi)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/jonathan-kayizzi/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/JonahKayizzi/JavaScript-WordCountEngine-CodingChallenge/issues).

Contribute my providing more optimal approaches with better performance and time complexity

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>


If you like this project you can give me a ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank [Pramp](https://www.pramp.com/dashboard#/) for this coding challenge

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
