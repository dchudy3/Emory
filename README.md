# EcROP Application

## Background
This project that will allow ophthalmologists from around the world to determine the Economic Model of Retinopathy of Prematurity (EcROP) for their specific country within a single application.
Previously, many countries in the developing world simply did not screen for a preventable and treatable disorder that causes visual impairment and blindness in prematurely born children. Dr. Timothy Olsen and Mr. Mina Naguib, as well as others, conducted a study that found that screening these children would result in increased quality of life for those affected in an extremely cost effective manner.
The paper that was published on this topic focused on the United States and Mexico, and our clients believe that if the model can be applied to other countries by native ophthalmologists then it would be easier to convince those in positions of authority (e.g. Health Ministers) to implement and fund the screenings. However, there was no easy way for these ophthalmologists to enter their own data and create a model for their country. Our application provides that solution.
Our clients and their team were using very complex Excel spreadsheets and other proprietary software to do their calculations, meaning that it was very prohibitive for others to do their own calculations with their own data. We were able to wrap the majority of our clients’ formulas in an easy to use application so that the barrier to entry would be very low. Ophthalmologists would now be able to use our application without having to do any calculations of their own, and new ophthalmologists would be able to get on board easily through our “Research” and “Help” pages, without needing to understand complex Excel spreadsheets. The hard work has already been done for them.
Our team was very motivated to work on this solution because the problem itself seems both solvable and meaningful. A successful application meant profound effects on thousands of lives. This was our motivation in producing this project that succeeded in meeting the above goals.

## Release Notes
### Version 1.0
#### New Features
1) A calculator, shown on the "Calculator" page, that through the given inputs, is able to provide a deterministic analysis and spit out results.
2) The Emory research paper and supplemental tables shown on the "Research" page to help new ophthalmologists get on board.
3) User's profile information, that is editable, that is shown on the "Profile" page.
4) Frequently asked questions and an onboarding video shown in the "Help" page to also help new ophthalmologists get on board.
5) An dashboard for administrators to manage users' status and reach out to them if they notice that there are problems that need to be addressed.
6) A "Contact Emory" option in the top navigation bar that allows a user to email Dr. Olsen and Mr. Naguib, the heads of the Emory team, if they encounter problems with our application.
7) A "Registration" page as well as a "Login" page to enter our application and have data saved, as long as you have the appropriate permissions.

#### Bug Fixes since last release
This is the first release.
#### Known bugs and defects
1) Registration sometimes is a little buggy if a user is already in the system.
2) Logging in may sometimes lead to a "502: Bad Gateway" page.
3) The "Admin Dashboard" does not always show all users.

## Use Guide for Users
Navigate to [our website](http://ecrop-env.4zgda28xd7.us-east-1.elasticbeanstalk.com/) online. If you are not previously registered, you will have to register and login to be able to save your models. Alternatively, you can click on "Proceed without Login" to use the system in demo mode and not have any persistence on any of your data points.

## Install Guide for Developers
### Pre-requisites
You will need have Git installed on your machine, as well as Node/NPM. Depending on your machine, you will need to follow differing instructions below to get everything installed.
For Windows users:
1) Navigate [here](https://git-scm.com/download/win) and follow the installation prompts to install Git. This should set up the MINGW64 terminal you should use when pushing and pulling to GitHub. (This can be accessed by navigating to your eventual Git repository, right clicking on the window, and clicking "Git Bash Here").
2) Navigate [here](https://nodejs.org/en), and click on the large green rectangle under "Download for Windows" that says "Recommended For Most Users". Follow the prompts by running the installer (the .msi that is downloaded). Then, restart your computer.

For Mac users:
1) Execute the following commands in a Mac Terminal:
```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install git
brew install node
```
For Linux users:
1) Execute the following commands in a Linux terminal:
```sh
sudo apt-get update
sudo apt-get install git
sudo apt-get install nodejs
sudo apt-get install npm
```

For all users, you should then be able to navigate to your appropriate terminal and use Git and Node/NPM. Specifically, let's test it by configuring your local machine with your GitHub credentials. Open your appropriate terminal and execute the following commands:
```sh
git config --global user.name "<You>"
git config --global user.email "<you@email.com>"
```

You and you@email.com are your GitHub name and GitHub email, respectively.

### Dependent libraries that must be installed
There are no additional third party libraries that need to be installed.

### Download instructions
1) You want to clone our Git repository. For further development, we recommend you fork our repository by navigating [here](https://github.com/dchudy3/Emory) and clicking on "Fork" in the top right corner. (If you don't have a GitHub account, make one!)
2) You should now have our repository in your own repository. To start developing locally, go to the Green button on your version of our repository on GitHub, click on "Clone or download", and copy the url that appears in the window that pops up.
3) Navigate to your appropriate terminal. Cd into the directory that you want to have our code. Then, execute the following command:
```sh
git clone https://github.com/<username>/Emory.git
```
<username> is your GitHub username.

### Build instructions
To build locally, you don't need to setup any local server. You merely need to open the html page that you want to view by double clicking on it! The html pages are in the "views" folder. However, you may want to deploy to the server, especially to check admin permissions and such. For more information on how to do this, contact [Albert Abedi](mailto:aabedi3@gatech.edu?Subject=How%20To%20Deploy%20EcROP%20Application).

### Installation of actual application
There are no additional installation steps needed to be taken, as the application is just a web application, and instructions to develop and are described above.

### Troubleshooting
#### I don't know how to use Git!
Not to worry! We were in your shoes a few years ago. There is an excellent comprehensive guide on how to use Git shown [here](https://git-scm.com/docs). A quick cheat sheet is also shown [here](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf).

#### My Mac won't let me execute the install instructions.
You are probably missing some Xcode dependencies. Just execute the following command:
```sh
xcode-select --install
```
#### My Linux machine won't let me execute the install instructions.
You are probably missing essential dependencies. Just execute the following command:
```sh
sudo apt-get install build-essential curl m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev
```