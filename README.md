# pifm-node-zikcenter

A Node.js software to play musics from [zikcenter](https://github.com/cedced19/zikcenter) on a __FM radio__ in command line.  
Only on Raspberry Pi.
If you want to start your radio easily use [start-pifm](https://github.com/cedced19/start-pifm).

[![Build Status](https://travis-ci.org/cedced19/pifm-node-zikcenter.svg)](https://travis-ci.org/cedced19/pifm-node-zikcenter)

![](https://raw.githubusercontent.com/cedced19/pifm-node-zikcenter/master/demo.png)

## What say laws?

You do not have the right to broadcast radio in most countries.  
I am __not__ at all responsible for your actions.  

## Installation

```bash
git clone --depth=1 --branch=master https://github.com/cedced19/pifm-node-zikcenter
cd ./pifm-node-zikcenter/
npm install
chmod 777 pifm-1 && chmod 777 pifm-2
apt-get install sox
apt-get install libsox-fmt-mp3
node pifm-node.js
```

## Configuration

You can change the frequency, the url, the api path, the version of the raspberry pi on `config.json`

See default options:

```json
{
    "version": 2,
    "freq": 108.5,
    "url": "http://",
    "api": "/api"
}
```

## Why not use file?

The main advantage is if you have a zikcenter, you don't have to convert and save files in two folders.
There is few loss of quality!
If you are not convinced you can use [pifm-node](https://github.com/cedced19/pifm-node), an other software from me.
