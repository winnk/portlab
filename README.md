![ConnectUs](https://github.com/winnk/connectUs/blob/master/img/connectus.gif)

# Physician Search via betterdoctor.com API
[![Build Status](https://travis-ci.org/anfederico/Clairvoyant.svg?branch=master)](https://travis-ci.org/anfederico/Clairvoyant)

![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)

![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

[![License](https://img.shields.io/badge/license-MIT%20License-brightgreen.svg)](https://opensource.org/licenses/MIT)
#### By Kaya Winn

## Description
A program to search a medical database via the betterdoctor.com API allowing users see a list of phsycisians in their area who can address their symptoms. .

## Screenshots

![screen1](https://cloud.githubusercontent.com/assets/5551534/26029491/0c2f8e98-37eb-11e7-91c1-96b47f28d5c9.JPG)
![screen2](https://cloud.githubusercontent.com/assets/5551534/26029492/0c2fd560-37eb-11e7-8af8-d18992cdf9df.JPG)
![screen3](https://cloud.githubusercontent.com/assets/5551534/26029490/0c2e50e6-37eb-11e7-8d31-c97b503dd5e1.JPG)
![screen4](https://cloud.githubusercontent.com/assets/5551534/26029493/0c31477e-37eb-11e7-9467-257627890b59.JPG)


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

Copyright (c) 2017

[apikey]: https://developer.betterdoctor.com/
[Clone repository]: https://github.com/winnk/connectUs.git
[issue]: https://github.com/winnk/connectUs/issues
[license]: https://opensource.org/licenses/MIT
