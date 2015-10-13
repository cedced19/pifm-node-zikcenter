# pifm-node-zikcenter

A Node.js software to play musics from [zikcenter](https://github.com/cedced19/zikcenter) on a __FM radio__ in command line.  
Only on Raspberry Pi.

[![Build Status](https://travis-ci.org/cedced19/pifm-node-zikcenter.svg)](https://travis-ci.org/cedced19/pifm-node-zikcenter)

![](https://raw.githubusercontent.com/cedced19/pifm-node-zikcenter/master/demo.png)

## What say laws ?
You do not have the right to broadcast radio in most countries.  
I am __not__ at all responsible for your actions.  

## Installation

```bash
git clone --depth=1 --branch=master https://github.com/cedced19/pifm-node
cd ./pifm-node/
npm install
chmod 777 pifm-1 && chmod 777 pifm-2
apt-get install sox
apt-get install libsox-fmt-mp3
node pifm-node.js
```

## Configuration

You can change the frequency, the url, the version of the raspberry pi on `config.json`

See default options:

```json
{
    "version": 2,
    "freq": 108.5,
    "url": "http://website.com"
}
```
