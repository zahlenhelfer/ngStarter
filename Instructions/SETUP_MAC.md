# How to setup a mac as an angular dev machine

### (1) Basics

Install fresh OS-X (from USB stick)

Get all software updates

Remove unwanted stuff from the dock (iPhoto)


### (2) Additional software from the AppStore 
	
Xcode (includes command line tools like git and all the compilers)

Dash (great offline reference to all libraries / languages)

Text Wrangler (free text editor)

Visual Diff (great diff tool)

Acorn (picture editing)

xDiagram (Visio for grown-ups)


**Important:** Start XCode at least once to confirm the license and load the extensions

### (3) System settings

Enable software installation from insecure sources in System settings / security

### (4) Git Client

Either
	Sourcetree [http://www.sourcetreeapp.com/download]() or GitHub-Client: [https://central.github.com/mac/latest]()

### (5) Brower

Install Chrome from [http://chrome.google.com]()

Load the Batarang extension from the chrome web store ([https://www.google.com/intl/de/chrome/webstore/]()): [https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk
]()	

Enable Developer menu in Safari in Settings / extended

### (6) Terminal

Install iterm2 from [http://iterm2.com]()

### (7) Install NVM and NODE

	cd 
	curl https://raw.githubusercontent.com/creationix/nvm/v0.14.0/install.sh | bash

open new terminal window 

	nvm install v0.10.29 # DO NOT USE 0.10.31, nom 2 will break a lot of stuff
	nvm alias default 0.10.29

### (8) Install Yeoman and angular generator

	npm cache clear
	npm install -g yo
	npm update -g yo     # no longer necessary if you got yo 1.2.1
	npm install -g chalk # probably no longer necessary
	npm install -g generator-angular

Don't panic if grunt installation fails

### (10) Install Ruby & Compass 

	ruby —-version
	sudo gem install compass --no-rdoc --no-ri

### (11) Install Java (only necessary if you plan to use WebStorm or RubyMine ...)
enter in terminal
	
	java

and confirm that you want to install that (will forward you to the oracle/sun site)

### (12) Create a simple app and start it

	cd
	mkdir tmp && cd tmp
	mkdir testapp && cd testapp
	yo angular test
	npm install grunt --save-dev # right now the included grunt looks broken
	grunt serve

### (13) Build a production version

	grunt build
	cd dist
	python -m SimpleHTTPServer 4104

goto [http://localhost:4104]() in your favorite browser
