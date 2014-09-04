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

### (4) npm & node 

	sudo apt-get install npm
	npm config set prefix ~/npm

append to .bashrc
	
	export PATH="$PATH:$HOME/npm/bin"

No idea what d***head had the idea to rename node to nodejs ... therefore:

	sudo apt-get install nodejs-legacy

### (5) Ruby

	sudo apt-get update
	sudo apt-get install ruby-dev
	sudo gem install compass

### (6) if npm should make any trouble, try this:

	sudo npm update -g
	sudo npm cache clear

### (7) Yeoman and friends 

	npm install -g yo 
	npm install -g grunt-cli 
	npm install -g bower
	npm install -g bower-config
	npm install -g generator-angular

### (8) git

	sudo apt-get install git

### (9) create an test app

	cd
	mkdir projekte && cd projekte
	mkdir testapp && cd testapp
	yo angular test

### (10) Run the app

	grunt serve 

### (11) Build a production version 

	grunt build
	cd dist
	python -m SimpleHTTPServer 4104

goto [http://localhost:4104]() in your favorite browser
