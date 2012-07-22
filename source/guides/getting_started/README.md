Getting Started with Titanium Desktop
-------------------------------------

###So what's Titanium?
Titanium is a rapid application development platform that utilises the best of HTML, JavaScript, and CSS to develop quick and dynamic applications. The framework also has support for Python, Ruby and PHP with access to both the Titanium framework itself and the DOM. Essentially, you can seamlessly create desktop web applications with you favourite back-end and front-end web technologies. If you're familiar with developing client-side web applications for the web, you can transfer your skills to the desktop with relative ease.

You may have heard of (or used) Adobe AIR, and there's no hiding that Titanium is a very similar product in a number of ways. The things that set it apart from Adobe's AIR include:

* The framework is released under the free/open source Apache license, for ultimate compatibility with your workflow, and infinite extensibility.
* Your existing skills in Python, Ruby, and PHP are immediately useful, without needing to learn Flash or Actionscript.
* Cloud publishing features to compile and publish your application for multiple platforms.
* And much more!


###How it all works
A Titanium application generally consists of a number of HTML, CSS, JavaScript, Python, Ruby, and PHP scripts, images, sounds, and any other resources your application requires. The application uses these resources in conjunction with a platform independent WebKit client and an extensive API. Key features include:

* Full filesystem access allows you to read and manage files in a more web-independent way.
* Internal SQLite database access makes storing local data a simple task.
* While AJAX is still available, the network API allows you to interface with HTTP at a much lower level, or even open socket connections to other services manually.
* Titanium includes wrappers around Desktop features such as notifications, tray icons, and window menus so you can create more natural applications for all major operating systems.



###Logging in
After installing Titanium Developer, you should start the Titanium Developer product and see the following welcome screen:

{@img developer-login.png Login Screen of the old Titanium Developer app}

If you already have an existing Appcelerator Network login, you can use those credentials to login. If not, you'll need to create an Appcelerator Network login. These credentials will give you access to a number of resources like Wiki (this site), the support and knowledge base portal, as well as access to cloud services like analytics.


###Initial application
Once you're logged in, you'll be able to create your first desktop project. Click the "New Project" button, select "Desktop" from the Project type drop down and you should see the following:

{@img developer-new-project.jpg New Project Screen of the old Titanium Developer app}



###Configuration fields

* _Name_ - This is the name of your application. Be sure to choose something unique and descriptive, because this is what your users will see when downloading and running your application.
* _App Id_ - This must be a unique ID for your project, usually a namespaced URL such as com.yourcompany.application_name. It's important that this ID does not contain anything except alphanumeric characters and periods.
* _Directory_ - This is the directory that will hold your application development directory. The full path to your project is directory/Project Name.
* _Company/Personal URL_ - This is the URL you would like associated with your application.
* _Titanium SDK version_ - This is the version of the Titanium Desktop SDK to use. This provides you will the ability to use different versions of the SDK for different applications. It's recommend that for new applications, you choose the latest version available.

Once you've filled out the required fields, you will be able to press the Create Project button to continue. Titanium Developer will create all the necessary files for your project.



###Verify your new application
After you've created your new project, you should verify that everything is working. Click the Test &amp; Package button in the middle of the project screen and then click the "Launch App" button near the bottom left. You should see the following:

{@img developer-run.png Run Screen of the old Titanium Developer app}

Opening the context menu (right-clicking or control-clicking) on the content area of your application should allow you to open up the WebKit web inspector. This is a quick way to experiment with the Titanium API.


###Application Resources
Now, you're ready to start looking at code. Let's look at the files that Titanium Developer created. There are a number of files and important folders in your Desktop project:

* _Resources_ - This folder is very important and contains all your application files such as your JavaScript, HTML, images, etc. This is the main folder you will use to include resources for your application. All files included in this folder are packaged and available to your application. Within your application you can use app:// URLs to refer to files within this folder. For instance, app://images/logo.png will refer to Resources/images/logo.png.
* _tiapp.xml_ - This is the main application configuration file which contains details about your application and it's windows. It's recommend to only edit this file when Titanium Developer is not running. Refer to the tiapp.xml guide for more information on the tiapp.xml file.
* _LICENSE.txt_ - This file describes the license that you application has. When a user first runs your application, they will see and have to agree to the contents of this file.
* _manifest_ - This file describes some low-level details of your application, such as the version of the runtime that your application uses. Generally you will not need to edit this file and it should not be changed while Titanium Developer is running.
* _dist_ - This directory is where Titanium Developer stages your application when you launch and package it. If you navigate into this directory, you can launch your application outside of Titanium Developer. As long as Titanium Developer is not running, it is safe to remove this directory.




###Configuring your application
In the project perspective, click the Edit button in the middle of the screen. You should see the following screen:

{@img developer-edit.png Edit Screen of the old Titanium Developer app}

This view allows you to modify other aspects of your application including:    
Now, you're ready to start looking at code. Let's look at the files that Titanium Developer created. There are a number of files and important folders in your Desktop project:

* _Version_ - This describes the version of your application. It should be of the form major.minor[.micro]. The major and minor portions should be an integer between 1 and 256, while micro portion of the version is optional and should be an integer between 1 and 65536. It's important to follow this format so that application updates work properly for your users.
* _Description_ - This should just be a short description of your application.
* _Publisher_ - This will be your name or the name of your organization as appropriate.
* _Application Icon_ - The application icon will be used as the default icon for you application in several places including the application bundle icon on OS X, the Start Menu and Desktop icons on Windows and the window and dock icon. The path displayed in the box is relative to your application Resources directory. If you choose a path outside of your project, Titanium Developer will copy the file to your Resources directory.
* _Copyright_ - This line should be the copyright attribution line used for your application.
* _Language Modules_ - Activating a language module will cause that language to be available for use in script tags. Be aware that adding a language module may add overhead to runtime and distribution of your application.


###Packaging and publishing your application
In the project perspective, click the Test & Package button in the middle of the screen and then select the Package tab. You should see the following screen:

{@img developer-package.png Package Screen of the old Titanium Developer app}

When packaging and publishing your application, it is sent to the Titanium packaging cloud and prepared for distribution on whatever platforms you wish. You have a few options when packaging:

* _Platforms_ - You can select any number of platforms for which to package your application. OS X applications are distributed as DMGs which contain an application bundle. Windows applications are distributed as MSI installer files. Linux applications are distributed as gzipped tar archives for either i386 or x86_64 installations.
* _Installer Type_ - You can either select your application to be network-installed or bundled. With network installs, when a user installs your application on a system without the Titanium runtime, it will be fetched via HTTP to their computer. A bundled application will be much large, but will include a copy of the Titanium runtime.
* _Publish Privacy_ - This determines whether or not the application will be visible to other people.
* _Release to Users_ - This setting controls whether or not users who are using your application will receive and automatic update notification when you publish your application.

Once you start the packaging process it may take several minutes for it to complete. when it finishes you'll be taken to the Links and given URLs to your freshly packaged application.