# How to setup a ubuntu vm for angular development

### (1) Basics

Install VM from iso-image (e.g. ubuntu-14.04.1-desktop-i386.iso)

Start the terminal an add it to the dock

Select the option "Run command in login shell" in Terminal / Edit / Profiles / Edit / Title and Command

Get all software updates

### (2) Cleanup

Remove shit like floppy drive, amazon and open office from the dock.

Remove spyware:

	sudo apt-get remove unity-lens-shopping

### (3) Brower

Install Chrome from [http://chrome.google.com]()

Load the Batarang extension from the chrome web store ([https://www.google.com/intl/de/chrome/webstore/]()): [https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk
]()	

### (4) Install basic stuff

	sudo apt-get update
    sudo apt-get install build-essential
	sudo apt-get install curl

### (5) nvm, node and friends

	curl https://raw.githubusercontent.com/creationix/nvm/v0.15.0/install.sh | bash
	
Close and reopen terminal

Now we can install node

	nvm install v0.10.29
	nvm alias default v0.10.29

Don't even think about installing 0.10.31 - the included npm 2 will break a lot of things

Whatever version you install: **Make sure npm has version 1.x - not version 2**

	npm --version

npm 2 will break a lot of things :-(

### (6) Ruby

	sudo apt-get install ruby-dev
	sudo gem install compass

### (7) if npm should make any trouble, try this:

	npm cache clear

### (8) Yeoman and friends

	npm install -g yo
	npm update -g yo     # no longer necessary if you got yo 1.2.1
	npm install -g chalk # probably no longer necessary
	npm install -g generator-angular

### (9) git

	sudo apt-get install git

### (10) add PhantomJS

	sudo apt-get install phantomjs

Close and reopen terminal

### (11) more missing / broken stuff in ubuntu 

somebody forgot to mention that nasm is a must under Ubuntu

	sudo apt-get install nasm

	# npm install -g optipng-bin@0.3.11

### (12) create an test app

	cd
	mkdir projekte && cd projekte
	mkdir testapp && cd testapp
	yo angular test
	npm install grunt --save-dev # right now the included grunt looks broken

Don't panic if you get hundreds of errors and warnings at the "yo angular test" step

### (13) Run the app

	grunt serve --force

### (14) Build a production version 

	grunt build --force
	cd dist
	python -m SimpleHTTPServer 4104

goto [http://localhost:4104]() in your favorite browser
