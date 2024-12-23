# Word Game List Formatter

## Description
This package allows you to create a list of words in JSON format from a source text file, intended for use in a word game. The source file should contain one word per line. The package performs the following steps for each word:
1. __Accent removal:__ Accented characters are replaced with their non-accented equivalents.
2. __Uppercasing:__ Each word is converted to uppercase letters.

The final result is a JSON file containing a list of words, optimized for use in word games such as crosswords, Scrabble, or similar games.

## Example usage
* __Input:__ A text file with words like "élève", "forêt", "français".
* __Output:__ A JSON file with words like "ELEVE", "FORET", "FRANCAIS".

## Install

###  Clone the repos
```git clone https://github.com/rmondi/word-game-list-formatter.git```

### Install dependencies
```cd word-game-list-formatter && npm i```

## Settings
* Copy env file 
```cp env-example .env```

* Edit __.env__ file

## Run
``` npm run start ```