![ConnectUs][https://github.com/winnk/connectus/img/connetus.gif|alt=octocat]

# ConnectUs - Physician Search
## Demonstration API app connection to betterdoctor.com
[![Build Status](https://travis-ci.org/anfederico/Clairvoyant.svg?branch=master)](https://travis-ci.org/anfederico/Clairvoyant)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)
[![License](https://img.shields.io/badge/license-MIT%20License-brightgreen.svg)](https://opensource.org/licenses/MIT)
#### By Kaya Winn

## Description
A program to search a medical database via the betterdoctor.com API allowing users to locate doctors based symptom search.

## Specifications

| Behavior                   | Input Example     | Output Example    |
| -------------------------- | -----------------:| -----------------:|
| API call using city and symptom data  | Portland, cancer | JSON response 200 OK |
| JSON response object parses to DOM | Portland, cancer| panel results of treating physicians |

## Setup, Installation, Requirements
* [Clone repository]
* Install depencies
* Sign up for API key at https://developer.betterdoctor.com/
* An .env file is required. Create file and include a key containing: `var apiKey = "[apikey]"

### In the terminal go to top level of the cloned repo directory run the following:
* `npm install`  install backend dependencies and packages
* `bower install` installs frontend dependencies and packages
* `gulp build` to build application
* `gulp serve` to view application at http://localhost:4200

## Package Dependencies:
* npm gulp
* npm browserify
* npm source
* npm gulp-concat
* npm uglify
* npm util
* npm util
* npm del
* npm jshint
* npm gulp-jshint
* npm gulp-sass
* npm gulp-sourcemaps
* npm browser-sync
* bower jquery
* bower bootstrap
* bower moment
* bower-files

## Technologies Used
* JavaScript
* Node/NPM
* Bower
* Gulp
* Sass
* [Better Doctor API](https://developer.betterdoctor.com/)

## License

This project is licensed under the MIT License - [license]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE

Copyright (c) 2017

[apikey]: https://developer.betterdoctor.com/
[Clone repository]: https://github.com/winnk/connectUs.git
[issue]: https://github.com/winnk/connectUs/issues
[license]: https://opensource.org/licenses/MIT
