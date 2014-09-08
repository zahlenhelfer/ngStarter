# How to setup a ubuntu vm for angular development

### (1) Basics

Install VM from iso-image (e.g. ubuntu-14.04.1-desktop-i386.iso)

Start the terminal an add it to the dock

Get all software updates

### (2) Cleanup

Remove shit like floppy drive, amazon and open office from the dock.

Remove spyware:

	sudo apt-get remove unity-lens-shopping

### (3) Brower

Install Chrome from [http://chrome.google.com]()

Load the Batarang extension from the chrome web store ([https://www.google.com/intl/de/chrome/webstore/]()): [https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk
]()	

### (4) nvm, node and friends

Install curl (yes, this is missing but we had a floppy drive on the dock)

	sudo apt-get install curl
	TODO: sudo apt-get install build-essentials

Install nvm 

	curl https://raw.githubusercontent.com/creationix/nvm/v0.15.0/install.sh | bash
	
Close and reopen terminal

Of course "this doesn't work under Ubuntu" (TM by Ubuntu Foundation), so add this line to the end of ~/.bashrc

	[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh

Close and reopen terminal again.
Now we can install node

	nvm install v0.10.24
	nvm alias default 0.10.24
	nvm use v0.10.24
		
Don't even think about installing 0.10.31 - this will break grunt etc.

Whatever version you install: **Make sure npm has version 1.x - not version 2**

	npm --version

npm 2 will break a lot of things :-(

### (5) Ruby

	sudo apt-get update
	sudo apt-get install ruby-dev
	sudo gem install compass

### (6) if npm should make any trouble, try this:

	npm cache clear

### (7) Yeoman and friends 

	npm install -g yo 
	npm install -g generator-angular

### (8) git

	sudo apt-get install git

### (9) install C++ (no, I'm NOT joking)

	sudo apt-get install g++

### (10) add PhantomJS

	sudo apt-get install phantomjs

add this to ~/.bashrc

	export PHANTOMJS_BIN=/usr/lib/phantomjs/phantomjs

Close and reopen terminal

### (11) more missing / broken stuff in ubuntu 

somebody forgot to mention that nasm is a must under Ubuntu

	sudo apt-get install nasm

Creating an app will now "crash under Ubuntu only" (TM by Ubuntu Foundation), because optipng-bin won't compile in the lastest versions 1.0.0 and 1.01
So we have to get an older version

	npm install -g optipng-bin@0.3.11

Under Ubuntu we will still get a warning "module 'chalk' not found'", so ...

	npm install -g chalk
 
### (12) create an test app

	cd
	mkdir projekte && cd projekte
	mkdir testapp && cd testapp
	yo angular test

### (13) Run the app

	grunt serve --force

### (14) Build a production version 

	grunt build --force
	cd dist
	python -m SimpleHTTPServer 4104

goto [http://localhost:4104]() in your favorite browser
