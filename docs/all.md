# CLI

* [Box Management](#box_lifecycle_cli)
    * [Aidbox Account](#box_lifecycle_cli_1)
    * [Logging In and Out](#box_lifecycle_cli_2)
    * [Getting Started](#box_lifecycle_cli_3)
    * [Box Commands](#box_lifecycle_cli_4)
    * [Example Workflow](#box_lifecycle_cli_5)
* [Users and Groups](#users_and_groups_cli)
# Aidbox CLI
First, create an account on https://aidbox.io.

Now you need to install aidbox-cli utility globally. Also you may need to install coffee-script.

``` bash
$ sudo npm install -g coffee-script
$ sudo npm install -g aidbox-cli
$ aidbox v
  OK: v0.5.9
```

## Logging In and Out

Let's log in your aidbox.io account throught the aidbox-cli utility:

``` bash
$ aidbox login
  Login: <enter your login>
  Password: <enter your password>
  OK: Auth success
```

Then try to log out:

``` bash
$ aidbox logout
  OK: Now you are logged out
  OK: All session data has been removed
```

## Getting Started

In order to start working with Aidbox, you have to do 3 things:

1. Create a box, which will host your application.
2. Create an implicit client, on behalf of which deploy and authorization will be performed.
3. Create users of the box.

## Box

__box__ is a command for managing boxes. By means of this command it's possible to create new boxes, view a list of all existing boxes, switch between boxes, delete boxes and so on.

To view a list of all possible subcommands, execute:

``` bash
$ aidbox box help
  box                 -- Display current box
  box new <boxname>   -- Create new box with specified  <boxname>
  box list            -- Display all available boxes
  box use <boxname>   -- Switch current box to <boxname>
  box destroy         -- Destroy current box [!not ready yet!]
```

##  Box Commands

### box

Outputs your current box:

``` bash
$ aidbox box
  OK: Your current box is [boxname]
```

### box new

Creates a new box. After creation of a new box, you will be automatically switched to the newly created box context. It means that all futher operations, such as creating users, clients, deploy, etc will be done in this box.

``` bash
$ aidbox box new <boxname>
  INFO: Create new box [boxname]
  OK: Box [boxname] has been created
  OK: Current box has been switched to [boxname]
```

### box list

Outputs a list of all available boxes.

``` bash
$ aidbox box list
  Outputs a list of all available boxes with their IDs and hosts. For now it's a raw JSON.
```

### box use

Switches a context of command execution to a specified box.

``` bash
$ aidbox box use <other-box>
  OK: Current box has been switched to box [other-box]
```

### box destroy - not ready yet

Deletes current box.

``` bash
$ aidbox destroy
  ; Not ready yet
```

### User Commands

__user__ is a command for working with users in current box. To view a list of all available subcommands, execute:

``` bash
$ aidbox user help
  user list                -- Display a list of users in current box
  user help                -- Show help information
  user new                 -- Create a user via wizard
  user new email:password  -- Create a user inline
```

### user list

Outputs a list of all users in current box.

``` bash
$ aidbox user list
  INFO: Display a list of users in box [boxname]
  ; For now it displays raw JSON
```

### user new

Creates a new user using a wizard, in current box.

``` bash
$ aidbox user new
  INFO: Create new user in box [boxname]
  Email: <test@gmail.com>
  Password: <password>
  OK: User [test@gmail.com] has been successfully created in box [boxname]
```

Another command to create a user inline without a wizard, has the following syntax:

aidbox user new email:password

``` bash
$ aidbox user new test_2@gmail.com:password
  INFO: Create new user in box [boxname]
  OK: User [test_2@gmail.com] has been successfully created in box [boxname]
```

### deploy

__deploy__ command deploys your application to a box. By default it deploys content of the `dist` folder in the root of your application. You can specify the folder to be depoyed in a box, as well. For example, it can be `public`, `build`, etc.

``` bash
$ aidbox deploy build
  INFO: Compress you app...
  INFO: Publish app...
  OK: You application has been successfully uploaded in box [boxname]
  OK: Temp files have been removed
```

## Example Workflow

Here is a typical development workflow. Let us suppose there are two boxes  __dev-myapp__ and __prod-myapp__. Currently you are working in  __dev-myapp__ box. When you want to deploy your application on __prod-myapp__,  all you need is to swich context to __prod-myapp__, execute deploy operation in __prod-myapp__, come back to __dev-myapp__ and continue development.

Thus,  a workflow for two boxes __dev-myapp__ and __prod-myapp__ may look like:

``` bash
$ aidbox login
$ aidbox box new dev-myapp
$ aidbox box new prod-myapp
$ aidbox box use dev-myapp

; Some actions for the development of an application
; Writing code, building application, testing
; Now you need to deploy your application to dev-myapp box
; and nake sure eerything is working

$ aidbox box
$ adibox deploy

; If everything works as intended, you can deploy application to prod-myapp box

$ aidbox box use prod-myapp
$ adibox deploy

; Return back into dev-myapp box

$ aidbox box use dev-myapp

; And continue development
```
# Box Management

## Dashboard

The Dashboard is a place where you can see all your existing boxes, and create, manage, share and destroy boxes. Each box in the Dashboard has a name, an URL where it will be deployed, a list of users the box is shared with, destroy option and payment plan indicator.

## Create a Box

1. Open Dashboard
2. Enter a name of your future box
3. Click on the "Create Box" button
  ![scr-14 04 2016_09-55-31](/imgs/docs/box_lifecycle/screens_01.png)
4. A new box with the entered name will appear on the dashboard
  ![scr-14 04 2016_09-55-37](/imgs/docs/box_lifecycle/screens_02.png)

## Manage a Box

1. Open Dashboard
2. Click on the box name
  ![scr-04 05 2016_15-44-30](/imgs/docs/box_lifecycle/screens_10.png)
3. You will be directed to the box dashboard where you will see navigation menu and information about your box like Fhirbase version, number of users and number of resources in the box:
  ![scr-04 05 2016_15-46-22](/imgs/docs/box_lifecycle/screens_11.png)

## Box Sharing

You can share your box with other aidbox users.

1. Click the 'Share Box' button
  ![scr-14 04 2016_09-56-36](/imgs/docs/box_lifecycle/screens_03.png)
2. Find a user in the list to share the box with (you can search by name)
  ![scr-14 04 2016_09-56-13](/imgs/docs/box_lifecycle/screens_04.png)
3. Close the list
  ![scr-14 04 2016_09-58-18](/imgs/docs/box_lifecycle/screens_05.png)
4. A small circle with initials of the user inside will be displayed under the box's name
  ![scr-14 04 2016_09-58-24](/imgs/docs/box_lifecycle/screens_06.png)

## Box Unsharing

1. Click the 'Share Box' button
2. Find a user in the list 'Owners and collaborators' (you can search by name)
3. Click on the 'Unshare' button
  ![scr-14 04 2016_09-56-21](/imgs/docs/box_lifecycle/screens_07.png)
4. Close the list

## Delete a Box

1. Open Dashboard
2. Click the 'Destroy Box' link
  ![scr-04 05 2016_14-35-15](/imgs/docs/box_lifecycle/screens_08.png)
3. Click 'OK' in the confirmation dialog
  ![scr-04 05 2016_14-35-33](/imgs/docs/box_lifecycle/screens_09.png)
4. The box will be deleted and disappear from the Dashboard
# Box Management CLI

<h2 id="box_lifecycle_cli_1">Aidbox Account</h2>

First, create an account on https://aidbox.io.

Now you need to install aidbox-cli utility globally. Also you may need to install coffee-script.

``` bash
$ sudo npm install -g coffee-script
$ sudo npm install -g aidbox-cli
$ aidbox v
  OK: v0.5.9
```

[Back To Top](#toc)

<h2 id="box_lifecycle_cli_2">Logging In and Out</h2>

Let's log in your aidbox.io account throught the aidbox-cli utility:

``` bash
$ aidbox login
  Login: <enter your login>
  Password: <enter your password>
  OK: Auth success
```

Then try to log out:

``` bash
$ aidbox logout
  OK: Now you are logged out
  OK: All session data has been removed
```

[Back To Top](#toc)

<h2 id="box_lifecycle_cli_3">Getting Started</h2>

In order to start working with Aidbox, you have to do 3 things:

1. Create a box, which will host your application.
2. Create an implicit client, on behalf of which deploy and authorization will be performed.
3. Create users of the box.

## Box

__box__ is a command for managing boxes. By means of this command it's possible to create new boxes, view a list of all existing boxes, switch between boxes, delete boxes and so on.

To view a list of all possible subcommands, execute:

``` bash
$ aidbox box help
  box                 -- Display current box
  box new <boxname>   -- Create new box with specified  <boxname>
  box list            -- Display all available boxes
  box use <boxname>   -- Switch current box to <boxname>
  box destroy         -- Destroy current box [!not ready yet!]
```

[Back To Top](#toc)

<h2 id="box_lifecycle_cli_4">Box Commands</h2>

### box

Outputs your current box:

``` bash
$ aidbox box
  OK: Your current box is [boxname]
```

### box new

Creates a new box. After creation of a new box, you will be automatically switched to the newly created box context. It means that all futher operations, such as creating users, clients, deploy, etc will be done in this box.

``` bash
$ aidbox box new <boxname>
  INFO: Create new box [boxname]
  OK: Box [boxname] has been created
  OK: Current box has been switched to [boxname]
```

### box list

Outputs a list of all available boxes.

``` bash
$ aidbox box list
  Outputs a list of all available boxes with their IDs and hosts. For now it's a raw JSON.
```

### box use

Switches a context of command execution to a specified box.

``` bash
$ aidbox box use <other-box>
  OK: Current box has been switched to box [other-box]
```

### box destroy - not ready yet

Deletes current box.

``` bash
$ aidbox destroy
  ; Not ready yet
```

### deploy

__deploy__ command deploys your application to a box. By default it deploys content of the ``` dist ``` folder in the root of your application. You can specify the folder to be depoyed in a box, as well. For example, it can be ```public```, ```build```, etc.

``` bash
$ aidbox deploy build
  INFO: Compress you app...
  INFO: Publish app...
  OK: You application has been successfully uploaded in box [boxname]
  OK: Temp files have been removed
```

[Back To Top](#toc)

<h2 id="box_lifecycle_cli_5">Example Workflow</h2>

Here is a typical development workflow. Let us suppose there are two boxes  __dev-myapp__ and __prod-myapp__. Currently you are working in  __dev-myapp__ box. When you want to deploy your application on __prod-myapp__,  all you need is to switch context to __prod-myapp__, execute deploy operation in __prod-myapp__, come back to __dev-myapp__ and continue development.

Thus,  a workflow for two boxes __dev-myapp__ and __prod-myapp__ may look like:

``` bash
$ aidbox login
$ aidbox box new dev-myapp
$ aidbox box new prod-myapp
$ aidbox box use dev-myapp

; Some actions for the development of an application
; Writing code, building application, testing
; Now you need to deploy your application to dev-myapp box
; and nake sure eerything is working

$ aidbox box
$ adibox deploy

; If everything works as intended, you can deploy application to prod-myapp box

$ aidbox box use prod-myapp
$ adibox deploy

; Return back into dev-myapp box

$ aidbox box use dev-myapp

; And continue development
```

[Back To Top](#toc)# Box Management Overview

If you already have aidbox account, then you can create your own boxes.
Box is an instance of FHIR server with separate database and url.

For example: you can create several boxes for development,
one box for staging and another for production.

Boxes could be created from dashboard UI, using REST API or aidbox-cli util.

We undertake the maintaining, scaling and updating of your boxes.

Box management is done on the 'Dashboard' page. The 'Dashboard' is a place where you can see all your existing boxes, and create, manage, share and destroy boxes. Each box in the Dashboard has a name, an URL where it will be deployed, a list of users the box is shared with, destroy option and payment plan indicator.

The primary box interface  is REST API.
Box is expected to be fully compliant to FHIR specification.

[Back To Top](#toc)# Box Management REST API

TODO

[Back To Top](#toc)# Box Management

* [Overview](#box_lifecycle_info)
* [UI Guide](#box_lifecycle_ui)
    * [Create a Box](#box_lifecycle_ui_1)
    * [Manage a Box](#box_lifecycle_ui_2)
    * [Box Sharing](#box_lifecycle_ui_3)
    * [Box Unsharing](#box_lifecycle_ui_4)
    * [Delete a Box](#box_lifecycle_ui_5)
* [CLI](#box_lifecycle_cli)
    * [Aidbox Account](#box_lifecycle_cli_1)
    * [Logging In and Out](#box_lifecycle_cli_2)
    * [Getting Started](#box_lifecycle_cli_3)
    * [Box Commands](#box_lifecycle_cli_4)
    * [Example Workflow](#box_lifecycle_cli_5)
* [REST API](#box_lifecycle_rest)# Box Management UI Guide

<h2 id="box_lifecycle_ui_1">Create a Box</h2>

1. Open Dashboard
2. Enter a name of your future box
3. Click on the "Create Box" button
  ![scr-14 04 2016_09-55-31](/imgs/docs/box_lifecycle/screens_01.png)
4. A new box with the entered name will appear on the dashboard
  ![scr-14 04 2016_09-55-37](/imgs/docs/box_lifecycle/screens_02.png)

[Back To Top](#toc)

<h2 id="box_lifecycle_ui_2">Manage a Box</h2>

1. Open Dashboard
2. Click on the box name
  ![scr-04 05 2016_15-44-30](/imgs/docs/box_lifecycle/screens_10.png)
3. You will be directed to the box dashboard where you will see navigation menu and information about your box like Fhirbase version, number of users and number of resources in the box:
  ![scr-04 05 2016_15-46-22](/imgs/docs/box_lifecycle/screens_11.png)

[Back To Top](#toc)

<h2 id="box_lifecycle_ui_3">Box Sharing</h2>

You can share your box with other aidbox users.

1. Click the 'Share Box' button
  ![scr-14 04 2016_09-56-36](/imgs/docs/box_lifecycle/screens_03.png)
2. Find a user in the list to share the box with (you can search by name)
  ![scr-14 04 2016_09-56-13](/imgs/docs/box_lifecycle/screens_04.png)
3. Close the list
  ![scr-14 04 2016_09-58-18](/imgs/docs/box_lifecycle/screens_05.png)
4. A small circle with initials of the user inside will be displayed under the box's name
  ![scr-14 04 2016_09-58-24](/imgs/docs/box_lifecycle/screens_06.png)

[Back To Top](#toc)

<h2 id="box_lifecycle_ui_4">Box Unsharing</h2>

1. Click the 'Share Box' button
2. Find a user in the list 'Owners and collaborators' (you can search by name)
3. Click on the 'Unshare' button
  ![scr-14 04 2016_09-56-21](/imgs/docs/box_lifecycle/screens_07.png)
4. Close the list

[Back To Top](#toc)

<h2 id="box_lifecycle_ui_5">Delete a Box</h2>

1. Open Dashboard
2. Click the 'Destroy Box' link
  ![scr-04 05 2016_14-35-15](/imgs/docs/box_lifecycle/screens_08.png)
3. Click 'OK' in the confirmation dialog
  ![scr-04 05 2016_14-35-33](/imgs/docs/box_lifecycle/screens_09.png)
4. The box will be deleted and disappear from the Dashboard

[Back To Top](#toc)
# Clients CLI

NONE

[Back To Top](#toc)# Clients Overview

Aidbox supports all basic OAuth 2.0 workflows:

* Web Application (Autorization Code)
* Single Page Applications (Implicite)
* REST clients (Client Credentials)

See [RFC6749](https://tools.ietf.org/html/rfc6749) for more information about OAuth 2.0 authorization.

Every box implements OAuth 2.0 Provider Service and all REST API calls is secured by OAuth.

On the 'Clients' page you can view a list of available clients, add new or edit existing clients.

[Back To Top](#toc)# Clients REST API

TODO

[Back To Top](#toc)# Clients

* [Overview](#clients_info)
* [UI Guide](#clients_ui)
    * [Default Client](#clients_ui_7)
    * [Implicit](#clients_ui_1)
    * [Authorization Code](#clients_ui_2)
    * [Client Credentials](#clients_ui_3)
    * [Edit Clients](#clients_ui_4)
    * [Delete Clients](#clients_ui_5)
    * [Search Clients](#clients_ui_6)
* [REST API](#clients_rest)# Clients UI Guide

<h2 id="clients_ui_7">Default Client</h2>

Each newly created box has a default __implicit__ client named __site__.

![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_01.png)
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_02.png)

In order to use this client, you will need to add the following policy:


```
{
 "required" : [ "client" ],
 "properties" : {
   "client" : {
     "type" : "object",
     "properties" : {
       "client_id" : {
         "constant" : "site"
       }
     }
   }
 }
}
```

[Back To Top](#toc)

<h2 id="clients_ui_1">Implicit</h2>

Let's add a client with type = Implicit and client_id = implicit_client123.

1. Open the Clients tab
2. Click the 'Create new item' button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_03.png)
3. Select the type 'Implicit for browser-based or mobile apps'
4. Fill in the fields:
  * Name = implicit_client
  * Client Id = implicit_client123
  * Redirect Uri = localhost
5. Click the Create button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_04.png)

In order to test implicit authorization, let's [add a new policy](/docs/Security.html) policy_for_implicit_client with Id = policy_for_implicit_client123 that will be checking for implicit client with the client_id = implicit_client123.

```
{
 "required" : [ "client" ],
 "properties" : {
   "client" : {
     "type" : "object",
     "properties" : {
       "client_id" : {
         "constant" : "implicit_client123"
       }
     }
   }
 }
}
```

![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_05.png)

In order to test the implicit authorization, let's [add a user](/docs/Users_and_Groups.html#users_and_groups_ui_2) with
Email = boxuser1@gmail.com and Password = 12345678.

![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_06.png)
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_07.png)

Remove the existing default implicit client named __site__ (to avoid confusion).

Edit dist/aidbox.js code: in the line with client_id: 'site' change 'site' to 'implicit_client123'. TODO: Remove this step after fix.
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_08.png)

Now let's check the implicit authentication.

1. [Deploy your aidbox](/docs/aidbox_CLI.html)
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_09.png)
2. Visit your application at the URL generated from the box name - e.g. https://mysuperapp.aidbox.io for the __mysuperapp__ box, you can use the link from your aidbox Dashboard.
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_10.png)
3. Click the 'Sign in' link
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_11.png)
4. You will see a login form labeled __Allow implicit_client to use your account__ where __implicit_client__ is the name of your client
5. Log in with the box user credentials (not your aidbox account credentials). In our example: Email = boxuser1@gmail.com and Password = 12345678.
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_12.png)
6. You will see Patients list page of the sample application
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_13.png)

[Back To Top](#toc)

<h2 id="clients_ui_2">Authorization Code</h2>

In order to test the Authorization Code type of authorization, you will need a tool for testing RESTful requests. For example [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).

Let's add a new client with the Authorization Code type.

1. Open the Clients tab.
2. Click the 'Create new item' button
3. Select the type 'Authorization Code for apps running on a web server'
3. Fill in the fields:
  * Name = auth_code
  * Client Id = auth_code123
  * Client Secret = pwd
  * Redirect Uri = localhost, www.getpostman.com
4. Click the Create button
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_14.png)
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_15.png)

Let's add a new policy that would allow an access for our client.

1. Open the Policies tab
2. Click the 'Create new item' button
3. Fill in the fields:
  * Id = policy_for_auth_code_client123
  * Title = policy_for_auth_code_client
  * Policy =
  ```
{
 "required" : [ "client" ],
 "properties" : {
   "client" : {
     "type" : "object",
     "properties" : {
       "client_id" : {
         "constant" : "auth_code123"
       }
     }
   }
 }
}
```
4. Click the Create button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_16.png)
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_17.png)

Now let's check the Authorization Code authentication.

1. Open Postman
2. Select method GET
3. Enter request URL: e.g. https://yourboxname.aidbox.io/users
4. Select Type = OAuth 2.0
5. Fill in the following fields:
  * Auth URL = https://yourboxname.aidbox.io/oauth/authorize
  * Access Token URL = https://yourboxname.aidbox.io/oauth/token
  * Client ID = auth_code123
  * Client Secret = pwd
  * Grant Type = Authorization Code
6. Click the 'Request Token' button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/postman_01.png)
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/postman_02.png)
7. You will see a login form labeled __Allow auth_code to use your account__ where __auth_code__ is the name of your client.
8. Log in with the box user credentials (not your aidbox account credentials). In our example: Email = boxuser1@gmail.com and Password = 12345678
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_18.png)
9. In the Postman click on the Token Name in order to add the token to the request URL, e.g. https://yourboxname.aidbox.io/users?access_token=1ba63588-45e5-4f0d-9a0c-0ae5ebe131f5
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/postman_03.png)
10. In the Postman click the 'Send' button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/postman_04.png)
11. Scroll down and check the request body below
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/postman_05.png)
12. You will see something like:
   ```
[
  {
    "id": 1,
    "status": null,
    "email": "boxuser1@gmail.com",
    "data": "null",
    "groups": null,
    "group-ids": []
  }
]
```

[Back To Top](#toc)

<h2 id="clients_ui_3">Client Credentials</h2>

Let's add a new client with the Client credentials type.

1. Open the Clients tab
2. Click the 'Create new item' button
3. Select the type 'Client credentials for application access'
3. Fill in the fields:
  * Name = client_credentials
  * Client Id = client_credentials123
  * Client Secret = secret
  * Redirect Uri = localhost, www.getpostman.com
4. Click the Create button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_19.png)
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_20.png)

Let's add a new policy that would allow an access for our client.

1. Open the Policies tab
2. Click the 'Create new item' button
3. Fill in the fields:
  * Id = policy_for_client_credentials_client123
  * Title = policy_for_client_credentials_client
  * Policy =
  ```
{
 "required" : [ "client" ],
 "properties" : {
   "client" : {
     "type" : "object",
     "properties" : {
       "client_id" : {
         "constant" : "client_credentials_client123"
       }
     }
   }
 }
}
```
4. Click the Create button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_21.png)
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_22.png)

Now let's check the Client Credentials authentication.



* Click the Request Token button.
* Click on Token Name in order to add the token to the request URL.
* Click the Send button.
* Check the request body below.

1. Open Postman
2. Select method GET
3. Enter request URL: e.g. https://yourboxname.aidbox.io/users/1
3. Select Type = OAuth 2.0
4. Fill in the following fields:
  * Auth URL = https://yourboxname.aidbox.io
  * Access Token URL = https://yourboxname.aidbox.io/oauth/token
  * Client ID = client_credentials123
  * Client Secret = secret
  * Grant Type = Client Credentials
5. Click the 'Request Token' button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/postman_06.png)
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/postman_07.png)
6. In the Postman click on the Token Name in order to add the token to the request URL, e.g. https://yourboxname.aidbox.io/users?access_token=1ba63588-45e5-4f0d-9a0c-0ae5ebe131f5
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/postman_08.png)
9. In the Postman click the 'Send' button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/postman_09.png)
10. Scroll down and check the request body below
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/postman_10.png)
11. You will see something like:
   ```
{
  "id": 1,
  "status": null,
  "email": "boxuser1@gmail.com",
  "password": "$s0$f0801$9T3nDgBQFyF1RU0sXjnyXg==$smBzJ4YzXNu4YkYjhXj0cwxeQM66xRD5F/FtQkytpqE=",
  "data": null,
  "groups": []
}
```

[Back To Top](#toc)

<h2 id="clients_ui_4">Edit Clients</h2>

TODO

[Back To Top](#toc)

<h2 id="clients_ui_5">Delete Clients</h2>

TODO

[Back To Top](#toc)

<h2 id="clients_ui_6">Search Clients</h2>

TODO

[Back To Top](#toc)
# Clients

Aidbox supports 3 types of Oauth 2.0 authorization:

1. __Implicit__ for browser-based or mobile apps
2. __Authorization Code__ for apps running on a web server
3. __Client credentials__ for application access

See [RFC6749](https://tools.ietf.org/html/rfc6749) for more information about OAuth 2.0 authorization.

On the __Clients__ page in the box [dashboard](/dashboard.html#/) you can view a list of available clients, add new or edit existing clients.
There is available by default __implicit__ client with id __site__.
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_01.png)
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_02.png)

In order to use this client, you will need to add the following policy:


```
{
 "required" : [ "client" ],
 "properties" : {
   "client" : {
     "type" : "object",
     "properties" : {
       "client_id" : {
         "constant" : "site"
       }
     }
   }
 }
}
```

## Implicit

Let's add a client with type = Implicit and client_id = implicit_client123.

1. Open the Clients tab
2. Click the 'Create new item' button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_03.png)
3. Select the type 'Implicit for browser-based or mobile apps'
4. Fill in the fields:
  * Name = implicit_client
  * Client Id = implicit_client123
  * Redirect Uri = localhost
5. Click the Create button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_04.png)

In order to test implicit authorization, let's [add a new policy](/docs/Security.html) policy_for_implicit_client with Id = policy_for_implicit_client123 that will be checking for implicit client with the client_id = implicit_client123.

```
{
 "required" : [ "client" ],
 "properties" : {
   "client" : {
     "type" : "object",
     "properties" : {
       "client_id" : {
         "constant" : "implicit_client123"
       }
     }
   }
 }
}
```

![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_05.png)

In order to test the implicit authorization, let's [add a user](/docs/Users_and_Groups.html) with
Email = boxuser1@gmail.com and Password = 12345678.

![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_06.png)
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_07.png)

Remove the existing default implicit client named __site__ (to avoid confusion).

Edit dist/aidbox.js code: in the line with client_id: 'site' change 'site' to 'implicit_client123'. TODO: Remove this step after fix.
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_08.png)

Now let's check the implicit authentication.

1. [Deploy your aidbox](/docs/aidbox_CLI.html)
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_09.png)
2. Visit your application at the URL generated from the box name - e.g. https://mysuperapp.aidbox.io for the __mysuperapp__ box, you can use the link from your aidbox Dashboard.
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_10.png)
3. Click the 'Sign in' link
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_11.png)
4. You will see a login form labeled __Allow implicit_client to use your account__ where __implicit_client__ is the name of your client
5. Log in with the box user credentials (not your aidbox account credentials). In our example: Email = boxuser1@gmail.com and Password = 12345678.
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_12.png)
6. You will see Patients list page of the sample application
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_13.png)

## Authorization Code

In order to test the Authorization Code type of authorization, you will need a tool for testing RESTful requests. For example [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).

Let's add a new client with the Authorization Code type.

1. Open the Clients tab.
2. Click the 'Create new item' button
3. Select the type 'Authorization Code for apps running on a web server'
3. Fill in the fields:
  * Name = auth_code
  * Client Id = auth_code123
  * Client Secret = pwd
  * Redirect Uri = localhost, www.getpostman.com
4. Click the Create button
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_14.png)
![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_15.png)

Let's add a new policy that would allow an access for our client.

1. Open the Policies tab
2. Click the 'Create new item' button
3. Fill in the fields:
  * Id = policy_for_auth_code_client123
  * Title = policy_for_auth_code_client
  * Policy =
  ```
{
 "required" : [ "client" ],
 "properties" : {
   "client" : {
     "type" : "object",
     "properties" : {
       "client_id" : {
         "constant" : "auth_code123"
       }
     }
   }
 }
}
```
4. Click the Create button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_16.png)
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_17.png)

Now let's check the Authorization Code authentication.

1. Open Postman
2. Select method GET
3. Enter request URL: e.g. https://yourboxname.aidbox.io/users
3. Select Type = OAuth 2.0
4. Fill in the following fields:
  * Auth URL = https://yourboxname.aidbox.io/oauth/authorize
  * Access Token URL = https://yourboxname.aidbox.io/oauth/token
  * Client ID = auth_code123
  * Client Secret = pwd
  * Grant Type = Authorization Code
5. Click the 'Request Token' button
  ![scr-06 05 2016_16-07-51](https://cloud.githubusercontent.com/assets/345535/15073895/b216fc4a-13a4-11e6-966d-5ff8181f8b9d.png)
6. You will see a login form labeled __Allow auth_code to use your account__ where __auth_code__ is the name of your client.
7. Log in with the box user credentials (not your aidbox account credentials). In our example: Email = boxuser1@gmail.com and Password = 12345678
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_18.png)
8. In the Postman click on the Token Name in order to add the token to the request URL, e.g. https://yourboxname.aidbox.io/users?access_token=1ba63588-45e5-4f0d-9a0c-0ae5ebe131f5
  ![scr-06 05 2016_16-10-11](https://cloud.githubusercontent.com/assets/345535/15073965/03fa8c5c-13a5-11e6-939c-6105b1bc4b21.png)
9. In the Postman click the 'Send' button
  ![scr-06 05 2016_16-11-36](https://cloud.githubusercontent.com/assets/345535/15074003/39b8b5b2-13a5-11e6-9365-ca10f8df6be2.png)
10. Scroll down and check the request body below
  ![scr-06 05 2016_16-12-41](https://cloud.githubusercontent.com/assets/345535/15074032/60579990-13a5-11e6-9892-a5606415f7b3.png)
11. You will see something like:
   ```
[
  {
    "id": 1,
    "status": null,
    "email": "boxuser1@gmail.com",
    "data": "null",
    "groups": null,
    "group-ids": []
  }
]
```

## Client credentials

Let's add a new client with the Client credentials type.

1. Open the Clients tab
2. Click the 'Create new item' button
3. Select the type 'Client credentials for application access'
3. Fill in the fields:
  * Name = client_credentials
  * Client Id = client_credentials123
  * Client Secret = secret
  * Redirect Uri = localhost, www.getpostman.com
4. Click the Create button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_19.png)
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_20.png)

Let's add a new policy that would allow an access for our client.

1\. Open the Policies tab
2\. Click the 'Create new item' button
3\. Fill in the fields:
  * Id = policy_for_client_credentials_client123
  * Title = policy_for_client_credentials_client
  * Policy =
    ```
    {
    "required" : [ "client" ],
    "properties" : {
      "client" : {
        "type" : "object",
        "properties" : {
          "client_id" : {
            "constant" : "client_credentials_client123"
          }
        }
      }
    }
    }
    ```
4\. Click the Create button
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_21.png)
  ![scr-04 05 2016_16-28-18](/imgs/docs/clients/clients_22.png)

Now let's check the Client Credentials authentication.



* Click the Request Token button.
* Click on Token Name in order to add the token to the request URL.
* Click the Send button.
* Check the request body below.

1. Open Postman
2. Select method GET
3. Enter request URL: e.g. https://yourboxname.aidbox.io/users/1
3. Select Type = OAuth 2.0
4. Fill in the following fields:
  * Auth URL = https://yourboxname.aidbox.io
  * Access Token URL = https://yourboxname.aidbox.io/oauth/token
  * Client ID = client_credentials123
  * Client Secret = secret
  * Grant Type = Client Credentials
5. Click the 'Request Token' button
  ![scr-06 05 2016_16-49-06](https://cloud.githubusercontent.com/assets/345535/15074920/74528824-13aa-11e6-929b-03bfc5cac61a.png)
6. In the Postman click on the Token Name in order to add the token to the request URL, e.g. https://yourboxname.aidbox.io/users?access_token=1ba63588-45e5-4f0d-9a0c-0ae5ebe131f5
  ![scr-06 05 2016_16-50-15](https://cloud.githubusercontent.com/assets/345535/15074955/a13980d6-13aa-11e6-87d2-955e7aa428d9.png)
9. In the Postman click the 'Send' button
  ![scr-06 05 2016_16-50-42](https://cloud.githubusercontent.com/assets/345535/15074967/b279e35e-13aa-11e6-9a90-56bd264e330f.png)
10. Scroll down and check the request body below
  ![scr-06 05 2016_16-51-24](https://cloud.githubusercontent.com/assets/345535/15074981/c67656c6-13aa-11e6-9325-5c248200ee42.png)
11. You will see something like:
   ```
{
  "id": 1,
  "status": null,
  "email": "boxuser1@gmail.com",
  "password": "$s0$f0801$9T3nDgBQFyF1RU0sXjnyXg==$smBzJ4YzXNu4YkYjhXj0cwxeQM66xRD5F/FtQkytpqE=",
  "data": null,
  "groups": []
}
```
# DB API

* [Conformance](#fhirbase_api_conformance)
* [Create storage](#fhirbase_api_create_storage)
* [Create resource](#fhirbase_api_create_resource)
* [Drop storage](#fhirbase_api_drop_storage)
* [Read resource](#fhirbase_api_read_resource)
* [Update resource](#fhirbase_api_update_resource)
* [Patch resource](#fhirbase_api_patch_resource)
* [Delete resource](#fhirbase_api_delete_resource)
* [Terminate resource](#fhirbase_api_terminate_resource)
* [Resource history](#fhirbase_api_resource_history)
* [Search](#fhirbase_api_search)
* [Fhirbase version](#fhirbase_api_fhirbase_version)# Developer Tools

* [REST API](REST_API.html)
* [CLI](CLI.html)
* [REST API](DB_API.html)# How to work with the REST and FHIRBase Consoles

First, you need to Open Fhirbase Console and call several functions.

Let's create a table of patients.

1\. Open FHIRBase Console
2\. Copy and paste the following query:

```sql
SELECT fhir_create_storage('{"resourceType": "Patient"}'::json);
```
3\. Click the 'Execute' button
  ![scr-04 05 2016_16-28-18](/imgs/docs/dev_tools/devtools_01.png)
4\. Check the result
  ![scr-04 05 2016_16-28-18](/imgs/docs/dev_tools/devtools_02.png)

Then you can add a new patient:

1\. Open REST Console
2\. Select the POST method
  ![scr-04 05 2016_16-28-18](/imgs/docs/dev_tools/devtools_03.png)
3\. Enter ```fhir/Patient``` after the slash
4\. Paste a JSON example of the Patient resource from the FHIR specification, having removed a line with id assigning, into the request body.

```json
{
  "managingOrganization": {
    "reference": "Organization\/1"
  },
  "contact": [
    {
      "period": {
        "_start": {
          "fhir_comments": [
            "   The contact relationship started in 2012   "
          ]
        },
        "start": "2012"
      },
      "gender": "female",
      "telecom": [
        {
          "value": "+33 (237) 998327",
          "system": "phone"
        }
      ],
      "name": {
        "given": [
          "B\u0413\u00a9n\u0413\u00a9dicte"
        ],
        "_family": [
          {
            "extension": [
              {
                "valueCode": "VV",
                "url": "http:\/\/hl7.org\/fhir\/StructureDefinition\/iso21090-EN-qualifier",
                "fhir_comments": [
                  "   the \"du\" part is a family name prefix (VV in iso 21090)   "
                ]
              }
            ]
          },
          null
        ],
        "family": [
          "du",
          "March\u0413\u00a9"
        ]
      },
      "relationship": [
        {
          "coding": [
            {
              "code": "partner",
              "system": "http:\/\/hl7.org\/fhir\/patient-contact-relationship"
            }
          ]
        }
      ]
    }
  ],
  "address": [
    {
      "period": {
        "start": "1974-12-25"
      },
      "postalCode": "3999",
      "state": "Vic",
      "district": "Rainbow",
      "city": "PleasantVille",
      "line": [
        "534 Erewhon St"
      ],
      "type": "both",
      "use": "home"
    }
  ],
  "deceasedBoolean": false,
  "_birthDate": {
    "extension": [
      {
        "valueDateTime": "1974-12-25T14:35:45-05:00",
        "url": "http:\/\/hl7.org\/fhir\/StructureDefinition\/patient-birthTime"
      }
    ]
  },
  "birthDate": "1974-12-25",
  "_gender": {
    "fhir_comments": [
      "   use FHIR code system for male \/ female   "
    ]
  },
  "gender": "male",
  "telecom": [
    {
      "use": "home",
      "fhir_comments": [
        "   home communication details aren't known   "
      ]
    },
    {
      "use": "work",
      "value": "(03) 5555 6473",
      "system": "phone"
    }
  ],
  "name": [
    {
      "given": [
        "Peter",
        "James"
      ],
      "family": [
        "Chalmers"
      ],
      "use": "official",
      "fhir_comments": [
        "   Peter James Chalmers, but called \"Jim\"   "
      ]
    },
    {
      "given": [
        "Jim"
      ],
      "use": "usual"
    }
  ],
  "active": true,
  "identifier": [
    {
      "assigner": {
        "display": "Acme Healthcare"
      },
      "period": {
        "start": "2001-05-06"
      },
      "value": "12345",
      "system": "urn:oid:1.2.36.146.595.217.0.1",
      "type": {
        "coding": [
          {
            "code": "MR",
            "system": "http:\/\/hl7.org\/fhir\/v2\/0203"
          }
        ]
      },
      "use": "usual",
      "fhir_comments": [
        "   MRN assigned by ACME healthcare on 6-May 2001   "
      ]
    }
  ],
  "text": {
    "div": "<div>\n      \n      <table>\n        \n        <tbody>\n          \n          <tr>\n            \n            <td>Name<\/td>\n            \n            <td>Peter James \n              <b>Chalmers<\/b> (&quot;Jim&quot;)\n            <\/td>\n          \n          <\/tr>\n          \n          <tr>\n            \n            <td>Address<\/td>\n            \n            <td>534 Erewhon, Pleasantville, Vic, 3999<\/td>\n          \n          <\/tr>\n          \n          <tr>\n            \n            <td>Contacts<\/td>\n            \n            <td>Home: unknown. Work: (03) 5555 6473<\/td>\n          \n          <\/tr>\n          \n          <tr>\n            \n            <td>Id<\/td>\n            \n            <td>MRN: 12345 (Acme Healthcare)<\/td>\n          \n          <\/tr>\n        \n        <\/tbody>\n      \n      <\/table>    \n    \n    <\/div>",
    "status": "generated"
  },
  "resourceType": "Patient"
}
```

5\. Click the 'Execute' button
  ![scr-04 05 2016_16-28-18](/imgs/docs/dev_tools/devtools_04.png)
6\. Check the response body
  ![scr-04 05 2016_16-28-18](/imgs/docs/dev_tools/devtools_05.png)

Let's check that the patient has been added:

1\. Open FHIRBase Console
2\. Copy and paste the following query:

```sql
select * from patient limit 5;
```

3\. Click the 'Execute' button
  ![scr-04 05 2016_16-28-18](/imgs/docs/dev_tools/devtools_06.png)
4\. Check the result
  ![scr-04 05 2016_16-28-18](/imgs/docs/dev_tools/devtools_07.png)

# Fhirbase Console

Fhirbase Console is a way to interact with Fhirbase,
which is built Aidbox.

[Fhirbase Console]: https://fhirbase.github.io/#positioning

[Fhirbase][] it self is an open source storage based
on the FHIR standard.

[Fhirbase]: https://fhirbase.github.io/#positioning

Interaction with Fhirbase Console going via writing
and executing `PostgreSQL` functions.
This is due to the fact that [Fhirbase is an
extension of `PostgreSQL`][PostgreSQL extension].

[PostgreSQL extension]: https://fhirbase.github.io/demo/tutorial.html#/fhirbase-introduction

First, you need to Open Fhirbase Console and call serveral functions.

## Create storage

`fhir_create_storage`

### Example

```sql
SELECT fhir_create_storage('{"resourceType": "Patient"}'::json);
```

3\. Click the 'Execute' button

### Response

```
{
  "message": "Table patient was created",
  "status": "ok"
}
```

## Create resource

`fhir_create_resource`

### Example

```sql
SELECT fhir_create_resource('
  {
    "resource": {
      "name": [
        {
          "given": [
            "Smith"
          ]
        }
      ],
      "resourceType": "Patient"
    }
  }
');
```

### Response

```json
{
  "meta": {
    "extension": [
      {
        "valueString": "POST",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ],
    "lastUpdated": "2016-05-05T16:57:26.202Z",
    "versionId": "0a75f4b1-1e15-4628-b1ad-ae8a8730af00"
  },
  "id": "c6258cdc-1c80-4dda-80d4-6027c2a23ffd",
  "name": [
    {
      "given": [
        "Smith"
      ]
    }
  ],
  "resourceType": "Patient"
}
```

## Create resource with id

### Example

Create patient with specific id

```sql
SELECT fhir_create_resource('
  {
    "resource": {
      "id": "smith",
      "resourceType": "Patient"
    },
    "allowId": true
  }
');
```

### Response

```json
{
  "meta": {
    "extension": [
      {
        "valueString": "POST",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ],
    "lastUpdated": "2016-05-06T13:38:11.910Z",
    "versionId": "c112dd87-1f5b-4c2a-a3c0-783e371cc721"
  },
  "id": "smith2",
  "resourceType": "Patient"
}
```

## Read resource

`fhir_read_resource`

### Example

Show patient by id

```sql
SELECT fhir_read_resource('{"resourceType": "Patient", "id": "smith"}');
```

### Response

```json
{
  "resourceType": "Patient",
  "meta": {
    "lastUpdated": "2016-05-06T13:18:20.996Z",
    "versionId": "c8da6a21-018f-4646-afbf-dc2e36baaef1",
    "extension": [
      {
        "valueString": "POST",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ]
  },
  "id": "smith"
}
```

## Update resource

`fhir_update_resource`

### Example

Update patient by id

```sql
SELECT fhir_update_resource('
  {
    "resource": {
      "name": [
        {
          "family": [
            "Smith"
          ],
          "given": [
            "John"
          ]
        }
      ],
      "id": "smith",
      "resourceType": "Patient"
    }
  }
');
```

### Response

```json
{
  "meta": {
    "extension": [
      {
        "valueString": "PUT",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ],
    "lastUpdated": "2016-05-06T13:46:09.571Z",
    "versionId": "946b91ac-b285-4751-9f6f-c6462d0e7465"
  },
  "name": [
    {
      "family": [
        "Smith"
      ],
      "given": [
        "John"
      ]
    }
  ],
  "id": "smith",
  "resourceType": "Patient"
}
```

## Patch resource

`fhir_patch_resource`

### Example

Patch patient by id

```sql
SELECT fhir_patch_resource('
  {
    "patch": [
      {
        "value": "Jane",
        "path": "\/name\/0\/given\/0",
        "op": "replace"
      }
    ],
    "resource": {
      "id": "johndoe",
      "resourceType": "Patient"
    }
  }
');
```

## Delete resource

`fhir_delete_resource`

### Example

Mark patient as deleted (i.e. keep history)

```sql
SELECT fhir_delete_resource('{"resourceType": "Patient", "id": "smith"}');
```

### Response

```json
{
  "resourceType": "Patient",
  "meta": {
    "lastUpdated": "2016-05-06T14:10:50.841Z",
    "versionId": "a307ff6c-d35d-4cc4-9784-a91865dfa933",
    "extension": [
      {
        "valueString": "DELETE",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ]
  },
  "id": "smith"
}
```

## Terminate resource

`fhir_terminate_resource`

### Example

Completely delete patient and its history

```sql
SELECT fhir_terminate_resource('{"resourceType": "Patient", "id": "smith"}');
```

### Response

```json
[
  "{\"id\": \"smith\", \"meta\": {\"extension\": [{\"url\": \"fhir-request-method\", \"valueString\": \"POST\"}, {\"url\": \"fhir-request-uri\", \"valueUri\": \"Patient\"}], \"versionId\": \"3074d414-2318-42e4-aebe-f521d0ef1aff\", \"lastUpdated\": \"2016-05-06T14:10:43.186Z\"}, \"resourceType\": \"Patient\"}",
  "{\"id\": \"smith\", \"meta\": {\"extension\": [{\"url\": \"fhir-request-method\", \"valueString\": \"DELETE\"}, {\"url\": \"fhir-request-uri\", \"valueUri\": \"Patient\"}], \"versionId\": \"a307ff6c-d35d-4cc4-9784-a91865dfa933\", \"lastUpdated\": \"2016-05-06T14:10:50.841Z\"}, \"resourceType\": \"Patient\"}"
]
```

## Resource history

`fhir_resource_history`

### Example

Show patient's history

```sql
SELECT fhir_resource_history('{"resourceType": "Patient", "id": "smith"}');
```

### Response

```json
{
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "meta": {
          "lastUpdated": "2016-05-06T13:18:20.996Z",
          "versionId": "c8da6a21-018f-4646-afbf-dc2e36baaef1",
          "extension": [
            {
              "valueString": "POST",
              "url": "fhir-request-method"
            },
            {
              "valueUri": "Patient",
              "url": "fhir-request-uri"
            }
          ]
        },
        "id": "smith"
      },
      "request": {
        "url": "Patient",
        "method": "POST"
      }
    }
  ],
  "type": "history",
  "meta": {
    "lastUpdated": "2016-05-06T13:46:48.278Z"
  },
  "total": 1,
  "resourceType": "Bundle"
}
```

## Search

`fhir_search`

### Example

Patient search

```sql
SELECT fhir_search('{"resourceType": "Patient", "queryString": "name=smith"}');
```

### Result

```json
{
  "entry": [
    {
      "resource": {
        "deceasedBoolean": "N",
        "resourceType": "Patient",
        "identifier": [
          {
            "system": "urn:oid:2.16.840.1.113883.4.3.42",
            "value": "010107112",
            "type": {
              "text": "External ID"
            }
          },
          {
            "system": "urn:oid:2.16.840.1.113883.4.3.45",
            "value": "160923",
            "type": {
              "text": "Internal ID"
            }
          },
          {
            "system": "urn:oid:2.16.840.1.113883.4.3.46",
            "value": "160923",
            "type": {
              "text": "Alternate ID"
            }
          },
          {
            "value": "5435435435",
            "type": {
              "text": "Account number"
            }
          },
          {
            "system": "http:\/\/hl7.org\/fhir\/sid\/us-ssn",
            "value": "123-22-1111",
            "type": {
              "text": "Social Security Number"
            }
          }
        ],
        "birthDate": "1996-02-16T04:17+03",
        "telecom": [
          {
            "system": "phone",
            "value": "090.293.5104 x4116",
            "use": "home"
          }
        ],
        "contact": [
          {
            "address": {
              "use": "Mailing Address"
            },
            "gender": "unknown",
            "name": {
              "middle": [
                "Ms."
              ],
              "family": [
                "Balistreri"
              ],
              "given": [
                "Bartholome"
              ],
              "text": "JEAN SANDY JACK",
              "use": "official"
            }
          }
        ],
        "address": [
          {
            "postalCode": "08928",
            "country": "USA",
            "state": "MI",
            "line": [
              "45713 Glennie Loaf",
              "Schumm Village"
            ],
            "city": "Rodriguezville"
          }
        ],
        "gender": "female",
        "name": [
          {
            "middle": [
              "Mrs."
            ],
            "family": [
              "Smitham"
            ],
            "given": [
              "Rudy"
            ],
            "text": "JEAN SANDY JACK"
          }
        ],
        "id": "97af0e81-29fc-4a97-935d-a7909da2c17d"
      }
    }
  ],
  "link": [
    {
      "url": "Patient\/search?name=smith&_page=0",
      "relation": "self"
    }
  ],
  "total": 1,
  "type": "searchset",
  "resourceType": "Bundle"
}
```

## Get search SQL

`fhir_search_sql`

### Example

See generated SQL

```sql
SELECT fhir_search_sql('
  {
    "queryString": "name=smith",
    "resourceType": "Patient"
  }
');
```

### Response

```json
[
  "SELECT * FROM \"patient\" tbl1
     WHERE fhir_extract_as_string(
             ( \"tbl1\".\"resource\" )::json,
             ( '[\"Patient\",\"name\"]' )::json,
             'HumanName'
           ) ilike $1
     LIMIT $2",
  "%^^smith%",
  10
]
```

## Fhirbase version

`fhirbase_version`

### Example

Show Fhirbase version

```sql
SELECT fhirbase_version();
```

### Response

```
1.3.0.13
```
# About Aidbox

Aidbox is heavily based on [FHIR](http://www.hl7.org/fhir/).
FHIR (Fast Healthcare Interoperability Resources) is a modern open HL7 standard
for exchanging healthcare information electronically.

FHIR describes about 100 models for medical data - [Resources]()
(such as Patient, Encounter, Observation etc)
and [REST API](/docs/REST_API.html) to access and manipulate such data (create, update, search etc).

Aidbox is a FHIR server as a service with some useful additions.

With Aidbox you can focus on your business ideas validation,
delegating technical details to us.

Aidbox provides you with everything you need to start
your next healthcare application:

* Scalable and powerful database  - [fhirbase](http://fhirbase.github.io/) - to store and query your data
* [FHIR](http://www.hl7.org/fhir/) compliant REST API to access and manipulate this data
* OAuth and flexible security rules to control access to application data
* API to manage application users, with optional registration module
* Terminology service for popular coding systems (LOINC, SNOMED, ICD10, RxNorm) and custom dictionaries (ValueSets)
* Hosting for Single Page Applications written in HTML and JavaScript

With Aidbox you can develop Mobile, Single Page, as well as classic Web Applications.

[Back To Top](#toc)# Features

* [About Aidbox](#about_aidbox)
* [Box Management](#box_lifecycle_info)
* [Users and Groups](#users_and_groups_info)
* [Policies](#policies_info)
* [Clients](#clients_info)
* [FHIR Server](#rest_console_info)
* [FHIR Storage](#fhirbase_console_info)
* [Hosting](#hosting_info)# FHIR API

FHIR REST API is one of Aidbox core features. While Aidbox Team tries
to stay close to FHIR specification, it's not always worthwhile or
technically possible to implement some tricky parts of FHIR
specification.

In this article we'll briefly cover all available REST interactions
with links to corresponding paragraphs from FHIR Specification. Also
you'll find list of unsupported or partly supported features at the
end of this article.

# General REST Information

## Server Root URL

In FHIR Specification all REST actions are relative to Server Root
URL, which itself described in
[[FHIR-2.1.0.1]](https://hl7-fhir.github.io/http.html#general) and
refered as `[base]` in other parts of Specification. When using
Aidbox, Server Root URL is composed in following way:

```
http(s)://<box-name>.aidbox.io/fhir
```

For box named `example` Server Root URL will be `http(s)://example.aidbox.io/fhir`.

## HTTP and HTTPS

Both HTTP and HTTPS are supported, but we strongly recommend our users
to use HTTPS for reasons of data safety.

## Authorization and Authentication

Aidbox uses OAuth for authenticating clients, so in most cases you
should provide `access_token` param in query string or request
headers. Proceed to [OAuth Section](/docs/Security.html) for more
comprehensive coverage of this topic.

For Authorization purposes Aidbox uses policies which are explained in
detail in [Security Section](/docs/Security.html). For testing
purposes, it's often useful to have just one policy
[which allows anonymous access to all FHIR URLs](/docs/todo.html).

## Request and Response Formats

[[FHIR-2.1.0.6]](https://hl7-fhir.github.io/http.html#mime-type)
declares both XML and JSON as valid formats for request and response
bodies. Hovewer, Aidbox supports only JSON for now.

Resources CRUD
--------------

## GET /fhir/[type]/[id]

[[FHIR-2.1.0.8]](https://hl7-fhir.github.io/http.html#read): Reads
current version of specific resource.

## GET /fhir/[type]/[id]/_history/[vid]

[[FHIR-2.1.0.9]](https://hl7-fhir.github.io/http.html#vread): Reads
historical version of specific resource.

## GET /fhir/[type]/[id]/_history/[vid]

[[FHIR-2.1.0.9]](https://hl7-fhir.github.io/http.html#vread): Reads
historical version of specific resource.

## PUT /fhir/[type]/[id]

[[FHIR-2.1.0.10]](https://hl7-fhir.github.io/http.html#update):
Updates existing resource or creates new one with client-defined
ID. When updating existing resource performs
[optimistic locking](https://en.wikipedia.org/wiki/Optimistic_concurrency_control)
via checking of `meta.versionId`.

## DELETE /fhir/[type]/[id]

[[FHIR-2.1.0.12]](https://hl7-fhir.github.io/http.html#delete):
Deletes resource.

### POST /fhir/[type]

[[FHIR-2.1.0.13]](https://hl7-fhir.github.io/http.html#create):
Creates new resource. Supports conditional create via `If-None-Exist`
header.

Search
------

## GET /fhir/[type]?[parameters]

[[FHIR-2.1.0.14]](https://hl7-fhir.github.io/http.html#search):
Searches a set of resources based on some filter criteria.

History
-------

## GET /fhir/[type]/[id]/_history

[[FHIR-2.1.0.17]](https://hl7-fhir.github.io/http.html#history):
Returns history of specific resource.

## GET /fhir/[type]/_history

[[FHIR-2.1.0.17]](https://hl7-fhir.github.io/http.html#history):
Returns history of all resources of specific type.

Other
-----

## GET /fhir/metadata

[[FHIR-2.1.0.15]](https://hl7-fhir.github.io/http.html#conformance):
Returns
[Conformance Resource](https://hl7-fhir.github.io/conformance.html)
describing available interactions of this FHIR Server.

## POST /fhir

[[FHIR-2.1.0.16]](https://hl7-fhir.github.io/http.html#transaction):
Performs atomic set of operations (transaction) on arbitrary FHIR
Resources.

## GET /fhir/ValueSet/[id]/$expand

[[FHIR-6.24.18.1]](https://hl7-fhir.github.io/valueset-operations.html#6.24.18.1):
Expands ValueSet.

Not Supported FHIR Features
---------------------------

Below is list of features not yet supported by Aidbox FHIR Server:

- XML format support
- Messaging [[FHIR-2.4]](https://hl7-fhir.github.io/messaging.html#2.4)
- `GET /fhir/_history` history of all resource types
- `GET /fhir/_search` search through all available resources
- Searching by `_text` and `_content` attributes
- Expanding ValueSets containing references to external NamingSystems
  (LOINC, SNOMED, etc)
# FHIR Server CLI

NONE

[Back To Top](#toc)# FHIR Server Overview

FHIR REST API is one of Aidbox core features. While Aidbox Team tries
to stay close to FHIR specification, it's not always worthwhile or
technically possible to implement some tricky parts of FHIR
specification.

In this article we'll briefly cover all available REST interactions
with links to corresponding paragraphs from FHIR Specification. Also
you'll find list of unsupported or partly supported features at the
end of this article.

[Back To Top](#toc)# FHIR Server REST API

<h2 id="fhir_api_general">General REST Information</h2>

### Server Root URL

In FHIR Specification all REST actions are relative to Server Root
URL, which itself described in
[[FHIR-2.1.0.1]](https://hl7-fhir.github.io/http.html#general) and
refered as `[base]` in other parts of Specification. When using
Aidbox, Server Root URL is composed in following way:

```
http(s)://<box-name>.aidbox.io/fhir
```

For box named `example` Server Root URL will be `http(s)://example.aidbox.io/fhir`.

### HTTP and HTTPS

Both HTTP and HTTPS are supported, but we strongly recommend our users
to use HTTPS for reasons of data safety.

### Authorization and Authentication

Aidbox uses OAuth for authenticating clients, so in most cases you
should provide `access_token` param in query string or request
headers. Proceed to [OAuth Section](/docs/Security.html) for more
comprehensive coverage of this topic.

For Authorization purposes Aidbox uses policies which are explained in
detail in [Security Section](/docs/Security.html). For testing
purposes, it's often useful to have just one policy
[which allows anonymous access to all FHIR URLs](/docs/todo.html).

### Request and Response Formats

[[FHIR-2.1.0.6]](https://hl7-fhir.github.io/http.html#mime-type)
declares both XML and JSON as valid formats for request and response
bodies. Hovewer, Aidbox supports only JSON for now.

[Back To Top](#toc)

<h2 id="fhir_api_resources_crud">Resources CRUD</h2>

### GET /fhir/[type]/[id]

[[FHIR-2.1.0.8]](https://hl7-fhir.github.io/http.html#read): Reads
current version of specific resource.

### GET /fhir/[type]/[id]/_history/[vid]

[[FHIR-2.1.0.9]](https://hl7-fhir.github.io/http.html#vread): Reads
historical version of specific resource.

## GET /fhir/[type]/[id]/_history/[vid]

[[FHIR-2.1.0.9]](https://hl7-fhir.github.io/http.html#vread): Reads
historical version of specific resource.

### PUT /fhir/[type]/[id]

[[FHIR-2.1.0.10]](https://hl7-fhir.github.io/http.html#update):
Updates existing resource or creates new one with client-defined
ID. When updating existing resource performs
[optimistic locking](https://en.wikipedia.org/wiki/Optimistic_concurrency_control)
via checking of `meta.versionId`.

### DELETE /fhir/[type]/[id]

[[FHIR-2.1.0.12]](https://hl7-fhir.github.io/http.html#delete):
Deletes resource.

### POST /fhir/[type]

[[FHIR-2.1.0.13]](https://hl7-fhir.github.io/http.html#create):
Creates new resource. Supports conditional create via `If-None-Exist`
header.

[Back To Top](#toc)

<h2 id="fhir_api_search">Search</h2>

### GET /fhir/[type]?[parameters]

[[FHIR-2.1.0.14]](https://hl7-fhir.github.io/http.html#search):
Searches a set of resources based on some filter criteria.

[Back To Top](#toc)

<h2 id="fhir_api_history">History</h2>

### GET /fhir/[type]/[id]/_history

[[FHIR-2.1.0.17]](https://hl7-fhir.github.io/http.html#history):
Returns history of specific resource.

### GET /fhir/[type]/_history

[[FHIR-2.1.0.17]](https://hl7-fhir.github.io/http.html#history):
Returns history of all resources of specific type.

[Back To Top](#toc)

<h2 id="fhir_api_other">Other</h2>

### GET /fhir/metadata

[[FHIR-2.1.0.15]](https://hl7-fhir.github.io/http.html#conformance):
Returns
[Conformance Resource](https://hl7-fhir.github.io/conformance.html)
describing available interactions of this FHIR Server.

### POST /fhir

[[FHIR-2.1.0.16]](https://hl7-fhir.github.io/http.html#transaction):
Performs atomic set of operations (transaction) on arbitrary FHIR
Resources.

### GET /fhir/ValueSet/[id]/$expand

[[FHIR-6.24.18.1]](https://hl7-fhir.github.io/valueset-operations.html#6.24.18.1):
Expands ValueSet.

[Back To Top](#toc)

<h2 id="fhir_api_not_supported">Not Supported FHIR Features</h2>

Below is list of features not yet supported by Aidbox FHIR Server:

- XML format support
- Messaging [[FHIR-2.4]](https://hl7-fhir.github.io/messaging.html#2.4)
- `GET /fhir/_history` history of all resource types
- `GET /fhir/_search` search through all available resources
- Searching by `_text` and `_content` attributes
- Expanding ValueSets containing references to external NamingSystems
  (LOINC, SNOMED, etc)


[Back To Top](#toc)
# FHIR Server

* [Overview](#rest_console_info)
* [UI Guide](#rest_console_ui)
    * [How to create a patient](#rest_console_ui_1)
    * [Bundle (Transaction)](#rest_console_ui_2)
* [REST API](#fhir_api_rest)
    * [General REST Information](#fhir_api_general)
    * [Resources CRUD](#fhir_api_resources_crud)
    * [Search](#fhir_api_search)
    * [History](#fhir_api_history)
    * [Other](#fhir_api_other)
    * [Not Supported FHIR Features](#fhir_api_not_supported)# FHIR Server UI Guide

<h2 id="rest_console_ui_1">How to create a patient</h2>

First, you need to create a table of patients (see [FHIRbase Console UI](FHIR_Storage.html#fhirbase_console_ui))

```sql
SELECT fhir_create_storage('{"resourceType": "Patient"}'::json);
```

or all tables

```
fhir_create_all_storages()
```

Then you can add a new patient:

1\. Open REST Console
2\. Select the POST method
    ![scr-14 04 2016_09-55-37](/imgs/docs/rest_console/rest_01.png)
3\. Enter ```fhir/Patient``` after the slash
4\. Paste a JSON example of the Patient resource from the FHIR specification, having removed a line with id assigning, into the request body.

```json
{
  "managingOrganization": {
    "reference": "Organization\/1"
  },
  "contact": [
    {
      "period": {
        "_start": {
          "fhir_comments": [
            "   The contact relationship started in 2012   "
          ]
        },
        "start": "2012"
      },
      "gender": "female",
      "telecom": [
        {
          "value": "+33 (237) 998327",
          "system": "phone"
        }
      ],
      "name": {
        "given": [
          "B\u0413\u00a9n\u0413\u00a9dicte"
        ],
        "_family": [
          {
            "extension": [
              {
                "valueCode": "VV",
                "url": "http:\/\/hl7.org\/fhir\/StructureDefinition\/iso21090-EN-qualifier",
                "fhir_comments": [
                  "   the \"du\" part is a family name prefix (VV in iso 21090)   "
                ]
              }
            ]
          },
          null
        ],
        "family": [
          "du",
          "March\u0413\u00a9"
        ]
      },
      "relationship": [
        {
          "coding": [
            {
              "code": "partner",
              "system": "http:\/\/hl7.org\/fhir\/patient-contact-relationship"
            }
          ]
        }
      ]
    }
  ],
  "address": [
    {
      "period": {
        "start": "1974-12-25"
      },
      "postalCode": "3999",
      "state": "Vic",
      "district": "Rainbow",
      "city": "PleasantVille",
      "line": [
        "534 Erewhon St"
      ],
      "type": "both",
      "use": "home"
    }
  ],
  "deceasedBoolean": false,
  "_birthDate": {
    "extension": [
      {
        "valueDateTime": "1974-12-25T14:35:45-05:00",
        "url": "http:\/\/hl7.org\/fhir\/StructureDefinition\/patient-birthTime"
      }
    ]
  },
  "birthDate": "1974-12-25",
  "_gender": {
    "fhir_comments": [
      "   use FHIR code system for male \/ female   "
    ]
  },
  "gender": "male",
  "telecom": [
    {
      "use": "home",
      "fhir_comments": [
        "   home communication details aren't known   "
      ]
    },
    {
      "use": "work",
      "value": "(03) 5555 6473",
      "system": "phone"
    }
  ],
  "name": [
    {
      "given": [
        "Peter",
        "James"
      ],
      "family": [
        "Chalmers"
      ],
      "use": "official",
      "fhir_comments": [
        "   Peter James Chalmers, but called \"Jim\"   "
      ]
    },
    {
      "given": [
        "Jim"
      ],
      "use": "usual"
    }
  ],
  "active": true,
  "identifier": [
    {
      "assigner": {
        "display": "Acme Healthcare"
      },
      "period": {
        "start": "2001-05-06"
      },
      "value": "12345",
      "system": "urn:oid:1.2.36.146.595.217.0.1",
      "type": {
        "coding": [
          {
            "code": "MR",
            "system": "http:\/\/hl7.org\/fhir\/v2\/0203"
          }
        ]
      },
      "use": "usual",
      "fhir_comments": [
        "   MRN assigned by ACME healthcare on 6-May 2001   "
      ]
    }
  ],
  "text": {
    "div": "<div>\n      \n      <table>\n        \n        <tbody>\n          \n          <tr>\n            \n            <td>Name<\/td>\n            \n            <td>Peter James \n              <b>Chalmers<\/b> (&quot;Jim&quot;)\n            <\/td>\n          \n          <\/tr>\n          \n          <tr>\n            \n            <td>Address<\/td>\n            \n            <td>534 Erewhon, Pleasantville, Vic, 3999<\/td>\n          \n          <\/tr>\n          \n          <tr>\n            \n            <td>Contacts<\/td>\n            \n            <td>Home: unknown. Work: (03) 5555 6473<\/td>\n          \n          <\/tr>\n          \n          <tr>\n            \n            <td>Id<\/td>\n            \n            <td>MRN: 12345 (Acme Healthcare)<\/td>\n          \n          <\/tr>\n        \n        <\/tbody>\n      \n      <\/table>    \n    \n    <\/div>",
    "status": "generated"
  },
  "resourceType": "Patient"
}
```

5\. Click the 'Execute' button
  ![scr-14 04 2016_09-55-37](/imgs/docs/rest_console/rest_02.png)
6\. Check the response body
  ![scr-14 04 2016_09-55-37](/imgs/docs/rest_console/rest_03.png)

Let's check that the patient has been added:

TODO

[Back To Top](#toc)

<h2 id="rest_console_ui_2">Bundle (Transaction)</h2>

Ensure, that you have already created necessary tables.

1\. Open REST Console
2\. Select the POST method
    ![scr-14 04 2016_09-55-37](/imgs/docs/rest_console/rest_01.png)
3\. Set the URL to ```/fhir/```
4\. Paste your JSON into the request body

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "name": [
          {
            "use": "official",
            "given": [
              "FirstName123"
            ],
            "family": [
              "LastName123"
            ]
          },
          {
            "use": "usual",
            "given": [
              "FirstName123"
            ],
            "family": [
              "LastName123"
            ]
          }
        ]
      },
      "request": {
        "method": "PUT",
        "url": "/Patient/f0587417-6e01-aa5e-06a7-b4a1a502a48d"
      }
    },
    {
      "resource": {
        "resourceType": "EpisodeOfCare",
        "status": "active",
        "reference": {
          "patient": "/Patient/f0587417-6e01-aa5e-06a7-b4a1a502a48d"
        }
      },
      "request": {
        "method": "POST",
        "url": "/EpisodeOfCare"
      }
    }
  ]
}
```
5\. Click EXECUTE

![scr-02 06 2016_16-53-50](https://cloud.githubusercontent.com/assets/345535/15747864/503c710c-28e5-11e6-9de3-f8be82091d6d.png)

6\. Check the RESPONSE BODY

![scr-02 06 2016_16-54-00](https://cloud.githubusercontent.com/assets/345535/15747868/546f436c-28e5-11e6-8343-3feb01d4d7ca.png)

[Back To Top](#toc)# Fhirbase API

<h2 id="fhirbase_api_conformance">Conformance</h2>

`fhir_conformance('{}'::json)`

### Arguments

Takes an argument `JSON`

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_create_storage">Create storage</h2>

`fhir_create_storage('{}'::json)`

### Arguments

Takes _Resource_ `JSON` with properties:

* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

### Example

Create patient table

```sql
SELECT fhir_create_storage('{"resourceType": "Patient"}'::json);
```

Response:

```
{
  "message": "Table patient was created",
  "status": "ok"
}
```

[Back To Top](#toc)

<h2 id="fhirbase_api_create_all_storages">Create all storages</h2>

`fhir_create_all_storages()`

### Arguments

Function has no arguments

### Returns

Returns an `string`

[Back To Top](#toc)

<h2 id="fhirbase_api_drop_storage">Drop storage</h2>

`fhir_drop_storage('{}'::json)`

### Arguments

Takes _Resource_ `JSON` with properties:

* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

[Back To Top](#toc)


<h2 id="fhirbase_api_drop_all_storages">Drop all storages</h2>

`fhir_drop_all_storages('{}'::json)`

### Arguments

Function has no arguments

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_describe_storage">Describe storage</h2>

`fhir_describe_storage('{}'::json)`

n### Arguments

Takes _Resource_ `JSON` with properties:

* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_truncate_storage">Truncate storage</h2>

`fhir_truncate_storage('{}'::json)`

### Arguments

Takes _Resource_ `JSON` with properties:

* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_create_resource">Create resource</h2>

`fhir_create_resource('{}'::json)`

### Arguments

Takes an argument `JSON` with properties:

* _allowId_ `boolean`
* _resource_ `JSON` with properties:
    * _resourceType_ `string` (mandatory)

### Returns

Returns _Resource_ `JSON`

### Example

#### Create patient

```sql
SELECT fhir_create_resource('
  {
    "resource": {
      "name": [
        {
          "given": [
            "Smith"
          ]
        }
      ],
      "resourceType": "Patient"
    }
  }
');
```

Response:

```json
{
  "meta": {
    "extension": [
      {
        "valueString": "POST",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ],
    "lastUpdated": "2016-05-05T16:57:26.202Z",
    "versionId": "0a75f4b1-1e15-4628-b1ad-ae8a8730af00"
  },
  "id": "c6258cdc-1c80-4dda-80d4-6027c2a23ffd",
  "name": [
    {
      "given": [
        "Smith"
      ]
    }
  ],
  "resourceType": "Patient"
}
```

#### Create patient with specific id

```sql
SELECT fhir_create_resource('
  {
    "resource": {
      "id": "smith",
      "resourceType": "Patient"
    },
    "allowId": true
  }
');
```

Response:

```json
{
  "meta": {
    "extension": [
      {
        "valueString": "POST",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ],
    "lastUpdated": "2016-05-06T13:38:11.910Z",
    "versionId": "c112dd87-1f5b-4c2a-a3c0-783e371cc721"
  },
  "id": "smith2",
  "resourceType": "Patient"
}
```

[Back To Top](#toc)

<h2 id="fhirbase_api_read_resource">Read resource</h2>

`fhir_read_resource('{}'::json)`

### Arguments

Takes _Resource_ `JSON` with properties:

* _id_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns _Resource_ `JSON`

### Example

#### Show patient by id

```sql
SELECT fhir_read_resource('{"resourceType": "Patient", "id": "smith"}');
```

Response:

```json
{
  "resourceType": "Patient",
  "meta": {
    "lastUpdated": "2016-05-06T13:18:20.996Z",
    "versionId": "c8da6a21-018f-4646-afbf-dc2e36baaef1",
    "extension": [
      {
        "valueString": "POST",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ]
  },
  "id": "smith"
}
```

[Back To Top](#toc)

<h2 id="fhirbase_api_vread_resource">Vread resource</h2>

`fhir_vread_resource('{}'::json)`

### Arguments

Takes _Resource_ `JSON` with properties:

* _id_ `string` (mandatory)
* _versionId_ `string` (mandatory)

### Returns

Returns _Resource_ `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_update_resource">Update resource</h2>

`fhir_update_resource('{}'::json)`

### Arguments

Takes _Resource_ `JSON` with properties:

* _id_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns _Resource_ `JSON`

### Example

#### Update patient by id

```sql
SELECT fhir_update_resource('
  {
    "resource": {
      "name": [
        {
          "family": [
            "Smith"
          ],
          "given": [
            "John"
          ]
        }
      ],
      "id": "smith",
      "resourceType": "Patient"
    }
  }
');
```

Response:

```json
{
  "meta": {
    "extension": [
      {
        "valueString": "PUT",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ],
    "lastUpdated": "2016-05-06T13:46:09.571Z",
    "versionId": "946b91ac-b285-4751-9f6f-c6462d0e7465"
  },
  "name": [
    {
      "family": [
        "Smith"
      ],
      "given": [
        "John"
      ]
    }
  ],
  "id": "smith",
  "resourceType": "Patient"
}
```

[Back To Top](#toc)

<h2 id="fhirbase_api_patch_resource">Patch resource</h2>

`fhir_patch_resource('{}'::json)`

### Arguments

Takes an argument `JSON` with properties:

* _patch_ `array` (mandatory) contains objects with properties:
    * _op_ `string` (mandatory)
    * _path_ `string` (mandatory)
    * _value_ `string` (mandatory)
* _resource_ `JSON`  (mandatory) with properties:
    * _id_ `string` (mandatory)
    * _resourceType_ `string` (mandatory)

### Returns

Returns _Resource_ `JSON`

### Example

#### Patch patient by id

```sql
SELECT fhir_patch_resource('
  {
    "patch": [
      {
        "value": "Jane",
        "path": "\/name\/0\/given\/0",
        "op": "replace"
      }
    ],
    "resource": {
      "id": "johndoe",
      "resourceType": "Patient"
    }
  }
');
```

Response:

```json
{
  "resourceType": "Patient",
  "name": [
    {
      "family": [
        "Doe"
      ],
      "given": [
        "Jane"
      ],
      "text": "John Doe"
    }
  ],
  "meta": {
    "lastUpdated": "2016-05-11T16:12:50.377Z",
    "versionId": "3541fd2e-4ca9-4790-9382-41f98c8b9ad7",
    "extension": [
      {
        "valueString": "PUT",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ]
  },
  "id": "johndoe"
}
```

[Back To Top](#toc)

<h2 id="fhirbase_api_delete_resource">Delete resource</h2>

`fhir_delete_resource('{}'::json)`

### Arguments

Takes _Resource_ `JSON` with properties:

* _id_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns _Resource_ `JSON`

### Example

#### Mark patient as deleted (i.e. keep history)

```sql
SELECT fhir_delete_resource('{"resourceType": "Patient", "id": "smith"}');
```

Response:

```json
{
  "resourceType": "Patient",
  "meta": {
    "lastUpdated": "2016-05-06T14:10:50.841Z",
    "versionId": "a307ff6c-d35d-4cc4-9784-a91865dfa933",
    "extension": [
      {
        "valueString": "DELETE",
        "url": "fhir-request-method"
      },
      {
        "valueUri": "Patient",
        "url": "fhir-request-uri"
      }
    ]
  },
  "id": "smith"
}
```

[Back To Top](#toc)

<h2 id="fhirbase_api_terminate_resource">Terminate resource</h2>

`fhir_terminate_resource('{}'::json)`

### Arguments

Takes _Resource_ `JSON` with properties:

* _id_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

### Example

#### Completely delete patient and its history

```sql
SELECT fhir_terminate_resource('{"resourceType": "Patient", "id": "smith"}');
```

Response:

```json

[
  "{\"id\": \"smith\", \"meta\": {\"extension\": [{\"url\": \"fhir-request-method\", \"valueString\": \"POST\"}, {\"url\": \"fhir-request-uri\", \"valueUri\": \"Patient\"}], \"versionId\": \"3074d414-2318-42e4-aebe-f521d0ef1aff\", \"lastUpdated\": \"2016-05-06T14:10:43.186Z\"}, \"resourceType\": \"Patient\"}",
  "{\"id\": \"smith\", \"meta\": {\"extension\": [{\"url\": \"fhir-request-method\", \"valueString\": \"DELETE\"}, {\"url\": \"fhir-request-uri\", \"valueUri\": \"Patient\"}], \"versionId\": \"a307ff6c-d35d-4cc4-9784-a91865dfa933\", \"lastUpdated\": \"2016-05-06T14:10:50.841Z\"}, \"resourceType\": \"Patient\"}"
]
```

[Back To Top](#toc)

<h2 id="fhirbase_api_resource_history">Resource history</h2>

`fhir_resource_history('{}'::json)`

### Arguments

Takes _Resource_ `JSON` with properties:

* _id_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns _Bundle_ `JSON`

### Example

#### Show patient's history

```sql
SELECT fhir_resource_history('{"resourceType": "Patient", "id": "smith"}');
```

Response:

```json
{
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "meta": {
          "lastUpdated": "2016-05-06T13:18:20.996Z",
          "versionId": "c8da6a21-018f-4646-afbf-dc2e36baaef1",
          "extension": [
            {
              "valueString": "POST",
              "url": "fhir-request-method"
            },
            {
              "valueUri": "Patient",
              "url": "fhir-request-uri"
            }
          ]
        },
        "id": "smith"
      },
      "request": {
        "url": "Patient",
        "method": "POST"
      }
    }
  ],
  "type": "history",
  "meta": {
    "lastUpdated": "2016-05-06T13:46:48.278Z"
  },
  "total": 1,
  "resourceType": "Bundle"
}
```

[Back To Top](#toc)

<h2 id="fhirbase_api_resource_type_history">Resource type history</h2>

`fhir_resource_type_history('{}'::json)`

### Arguments

Takes _Resource_ `JSON` with properties:

* _resourceType_ `string` (mandatory)

### Returns

Returns _Bundle_ `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_search">Search</h2>

`fhir_search('{}'::json)`

### Arguments

Takes an argument `JSON` with properties:

* _queryString_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns _Bundle_ `JSON`

### Example

#### Patient search

```sql
SELECT fhir_search('{"resourceType": "Patient", "queryString": "name=smith"}');
```

Response:

```json
{
  "entry": [
    {
      "resource": {
        "deceasedBoolean": "N",
        "resourceType": "Patient",
        "identifier": [
          {
            "system": "urn:oid:2.16.840.1.113883.4.3.42",
            "value": "010107112",
            "type": {
              "text": "External ID"
            }
          },
          {
            "system": "urn:oid:2.16.840.1.113883.4.3.45",
            "value": "160923",
            "type": {
              "text": "Internal ID"
            }
          },
          {
            "system": "urn:oid:2.16.840.1.113883.4.3.46",
            "value": "160923",
            "type": {
              "text": "Alternate ID"
            }
          },
          {
            "value": "5435435435",
            "type": {
              "text": "Account number"
            }
          },
          {
            "system": "http:\/\/hl7.org\/fhir\/sid\/us-ssn",
            "value": "123-22-1111",
            "type": {
              "text": "Social Security Number"
            }
          }
        ],
        "birthDate": "1996-02-16T04:17+03",
        "telecom": [
          {
            "system": "phone",
            "value": "090.293.5104 x4116",
            "use": "home"
          }
        ],
        "contact": [
          {
            "address": {
              "use": "Mailing Address"
            },
            "gender": "unknown",
            "name": {
              "middle": [
                "Ms."
              ],
              "family": [
                "Balistreri"
              ],
              "given": [
                "Bartholome"
              ],
              "text": "JEAN SANDY JACK",
              "use": "official"
            }
          }
        ],
        "address": [
          {
            "postalCode": "08928",
            "country": "USA",
            "state": "MI",
            "line": [
              "45713 Glennie Loaf",
              "Schumm Village"
            ],
            "city": "Rodriguezville"
          }
        ],
        "gender": "female",
        "name": [
          {
            "middle": [
              "Mrs."
            ],
            "family": [
              "Smitham"
            ],
            "given": [
              "Rudy"
            ],
            "text": "JEAN SANDY JACK"
          }
        ],
        "id": "97af0e81-29fc-4a97-935d-a7909da2c17d"
      }
    }
  ],
  "link": [
    {
      "url": "Patient\/search?name=smith&_page=0",
      "relation": "self"
    }
  ],
  "total": 1,
  "type": "searchset",
  "resourceType": "Bundle"
}
```

<h2 id="fhirbase_api_search_sql">Get search SQL</h2>

`fhir_search_sql('{}'::json)`

### Arguments

Takes an argument `JSON` with properties:

* _queryString_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

### Example

#### See generated SQL

```sql
SELECT fhir_search_sql('
  {
    "queryString": "name=smith",
    "resourceType": "Patient"
  }
');
```

Response:

```json
[
  "SELECT * FROM \"patient\" tbl1
     WHERE fhir_extract_as_string(
             ( \"tbl1\".\"resource\" )::json,
             ( '[\"Patient\",\"name\"]' )::json,
             'HumanName'
           ) ilike $1
     LIMIT $2",
  "%^^smith%",
  10
]
```

[Back To Top](#toc)

<h2 id="fhirbase_api_expand_valueset">Expand valueset</h2>

`fhir_expand_valueset('{}'::json)`

### Arguments

Takes an argument `JSON` with properties:

* _id_ `string` (mandatory)
* _filter_ `string`

### Returns

Returns _ValueSet_ `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_valueset_after">Analyze storage</h2>

`fhir_analyze_storage('{}'::json)`

Analyze on resource tables to update PostgreSQL statistic

### Arguments

Takes _Resource_ `JSON` with properties:

* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_index_parameter">Index parameter</h2>

`fhir_index_parameter('{}'::json)`

Create index for parameter

### Arguments

Takes an argument `JSON` with properties:

* _name_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_index_order">Index order</h2>

`fhir_index_order('{}'::json)`

Creates index for parameter sort

### Arguments

Takes an argument `JSON` with properties:

* _name_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_unindex_parameter">Unindex parameter</h2>

`fhir_unindex_parameter('{}'::json)`

### Arguments

Takes an argument `JSON` with properties:

* _name_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_unindex_order">Unindex order</h2>

`fhir_unindex_order('{}'::json)`

### Arguments

Takes an argument `JSON` with properties:

* _name_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_explain_search">Explain search</h2>

`fhir_explain_search('{}'::json)`

### Arguments

Takes an argument `JSON` with properties:

* _queryString_ `string` (mandatory)
* _resourceType_ `string` (mandatory)

### Returns

Returns an `integer`

[Back To Top](#toc)

<h2 id="fhirbase_api_transaction">Transaction</h2>

`fhir_transaction('{}'::json)`

### Arguments

Takes _Bundle_ `JSON` with properties:

* _resourceType_ `string` (mandatory)
* _entry_ `array` (mandatory) contains objects with properties:
    * _resource_ `JSON` (mandatory) with properties:
         * _resourceType_ `string` (mandatory)
    * _request_ `JSON` (mandatory) with properties:
         * _method_ `string` (mandatory)
         * _url_ `string` (mandatory)

### Returns

Returns _Bundle_ `JSON`

### Example

#### Create practitioner and associated patient

#### Patient search

```sql
SELECT fhir_transaction('
  {
    "resourceType": "Bundle",
    "id": "bundle-transaction-id",
    "type": "transaction",
    "entry": [
      {
        "resource": {
          "resourceType": "Practitioner"
        },
        "request": {
          "method": "PUT",
          "url": "/Practitioner/created-practitioner-id"
        }
      },
      {
        "resource": {
          "resourceType": "Patient",
          "careProvider": [
            {
              "reference": "/Practitioner/created-practitioner-id"
            }
          ]
        },
        "request": {
          "method": "PUT",
          "url": "/Patient/created-patient-id"
        }
      },
      {
        "request": {
          "method": "GET",
          "url": "/Patient?_id=created-patient-id&_include=careprovider"
        }
      }
    ]
  }
');
```

Response:

```json
{
  "resourceType": "Bundle",
  "type": "transaction-response",
  "entry": [
    {
      "resourceType": "Practitioner",
      "id": "created-practitioner-id",
      "meta": {
        "versionId": "b6de0892-0aa5-48f3-a645-b833fc4bf0c3",
        "lastUpdated": "2016-05-12T12:29:22.412Z",
        "extension": [
          {
            "url": "fhir-request-method",
            "valueString": "PUT"
          },
          {
            "url": "fhir-request-uri",
            "valueUri": "Practitioner"
          }
        ]
      }
    },
    {
      "resourceType": "Patient",
      "careProvider": [
        {
          "reference": "/Practitioner/created-practitioner-id"
        }
      ],
      "id": "created-patient-id",
      "meta": {
        "versionId": "ffc1c306-c2bd-472e-916f-d75ba2ce133d",
        "lastUpdated": "2016-05-12T12:29:22.414Z",
        "extension": [
          {
            "url": "fhir-request-method",
            "valueString": "POST"
          },
          {
            "url": "fhir-request-uri",
            "valueUri": "Patient"
          }
        ]
      }
    },
    {
      "resourceType": "Bundle",
      "type": "searchset",
      "total": 1,
      "link": [
        {
          "relation": "self",
          "url": "/Patient?_id=created-patient-id&_include=careprovider&_page=0"
        }
      ],
      "entry": [
        {
          "resource": {
            "id": "created-patient-id",
            "meta": {
              "extension": [
                {
                  "url": "fhir-request-method",
                  "valueString": "POST"
                },
                {
                  "url": "fhir-request-uri",
                  "valueUri": "Patient"
                }
              ],
              "versionId": "ffc1c306-c2bd-472e-916f-d75ba2ce133d",
              "lastUpdated": "2016-05-12T12:29:22.414Z"
            },
            "careProvider": [
              {
                "reference": "/Practitioner/created-practitioner-id"
              }
            ],
            "resourceType": "Patient"
          }
        },
        {
          "resource": {
            "id": "created-practitioner-id",
            "meta": {
              "extension": [
                {
                  "url": "fhir-request-method",
                  "valueString": "PUT"
                },
                {
                  "url": "fhir-request-uri",
                  "valueUri": "Practitioner"
                }
              ],
              "versionId": "b6de0892-0aa5-48f3-a645-b833fc4bf0c3",
              "lastUpdated": "2016-05-12T12:29:22.412Z"
            },
            "resourceType": "Practitioner"
          }
        }
      ]
    }
  ]
}
```

[Back To Top](#toc)

<h2 id="fhirbase_api_valueset_after_changed">Valueset after changed</h2>

`fhir_valueset_after_changed('{}'::json)`

### Arguments

Takes _[ValueSet][]_ `JSON` with properties:

* _id_ `string` (mandatory)

[ValueSet]: https://www.hl7.org/fhir/valueset.html

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_valueset_after_deleted">Valueset after deleted</h2>

`fhir_valueset_after_deleted('{}'::json)`

### Arguments

Takes _[ValueSet][]_ `JSON` with properties:

* _id_ `string` (mandatory)

[ValueSet]: https://www.hl7.org/fhir/valueset.html

### Returns

Returns an `JSON`

[Back To Top](#toc)

<h2 id="fhirbase_api_disk_usage_top">Disk usage</h2>

`fhirbase_disk_usage_top('{}'::json)`

### Arguments

Takes an argument `JSON`

### Returns

Returns an `array`

[Back To Top](#toc)

<h2 id="fhirbase_api_benchmark">Benchmark</h2>

`fhir_benchmark('{}'::json)`

### Arguments

Takes an argument `JSON`

### Returns

Returns an `array`

[Back To Top](#toc)

<h2 id="fhirbase_api_fhir_version">Fhir version</h2>

`fhir_version()`

### Arguments

Function has no arguments

### Returns

Returns _version_ `string`

### Example

```sql
SELECT fhir_version();
```

Response:

```
1.3.0
```

[Back To Top](#toc)

<h2 id="fhirbase_api_fhirbase_version">Fhirbase version</h2>

`fhirbase_version()`

### Arguments

Function has no arguments

### Returns

Returns _version_ `string`

### Example

```sql
SELECT fhirbase_version();
```

Response:

```
1.3.0.13
```

[Back To Top](#toc)

<h2 id="fhirbase_api_fhirbase_release_date">Fhirbase release date</h2>

`fhirbase_release_date()`

### Arguments

Function has no arguments

### Returns

Returns _datetime_ `string`

### Example

```sql
SELECT fhirbase_release_date();
```

Response:

```
1970-12-31T23:59:59Z
```

[Back To Top](#toc)
# Fhirbase Console Overview

Each Aidbox box includes separate PostgreSQL database with installed Fhirbase.
Fhirbase is an open source PostgreSQL extension for storing FHIR resources
in PostgreSQL.
You can get direct connection to it from Box Administration Interface.

Fhirbase Console is a way to interact with Fhirbase,
which is built Aidbox.

[Fhirbase Console]: https://fhirbase.github.io/#positioning

[Fhirbase][] itself is an open source storage based
on the FHIR standard.

[Fhirbase]: https://fhirbase.github.io/#positioning

Interaction with Fhirbase Console is performed via writing
and executing `PostgreSQL` functions.
This is due to the fact that [Fhirbase is an
extension of `PostgreSQL`][PostgreSQL extension].

[PostgreSQL extension]: https://fhirbase.github.io/demo/tutorial.html#/fhirbase-introduction

[Back To Top](#toc)# FHIR Storage

* [Overview](#fhirbase_console_info)
* [UI Guide](#fhirbase_console_ui)
* [DB API](#rest_console_rest)
    * [Conformance](#fhirbase_api_conformance)
    * [Create storage](#fhirbase_api_create_storage)
    * [Create all storages](#fhirbase_api_create_all_storages)
    * [Drop storage](#fhirbase_api_drop_storage)
    * [Drop all storages](#fhirbase_api_drop_all_storages)
    * [Describe storage](#fhirbase_api_describe_storage)
    * [Truncate storage](#fhirbase_api_truncate_storage)
    * [Create resource](#fhirbase_api_create_resource)
    * [Read resource](#fhirbase_api_read_resource)
    * [Vread resource](#fhirbase_api_vread_resource)
    * [Update resource](#fhirbase_api_update_resource)
    * [Patch resource](#fhirbase_api_patch_resource)
    * [Delete resource](#fhirbase_api_delete_resource)
    * [Terminate resource](#fhirbase_api_terminate_resource)
    * [Resource history](#fhirbase_api_resource_history)
    * [Resource type history](#fhirbase_api_resource_type_history)
    * [Search](#fhirbase_api_search)
    * [Get search SQL](#fhirbase_api_search_sql)
    * [Index parameter](#fhirbase_api_index_parameter)
    * [Index order](#fhirbase_api_index_order)
    * [Unindex parameter](#fhirbase_api_unindex_parameter)
    * [Unindex order](#fhirbase_api_unindex_order)
    * [Explain search](#fhirbase_api_explain_search)
    * [Transaction](#fhirbase_api_transaction)
    * [Expand valueset](#fhirbase_api_expand_valueset)
    * [Valueset after changed](#fhirbase_api_valueset_after_changed)
    * [Valueset after deleted](#fhirbase_api_valueset_after_deleted)
    * [Disk usage](#fhirbase_api_disk_usage_top)
    * [Benchmark](#fhirbase_api_benchmark)
    * [Fhir version](#fhirbase_api_fhir_version)
    * [Fhirbase version](#fhirbase_api_fhirbase_version)
    * [Fhirbase release date](#fhirbase_api_fhirbase_release_date)
# Fhirbase Console UI Guide

<h2 id="fhirbase_console_ui_1">How to work with the Fhirbase Console</h2>

First, you need to create a table of patients.

1\. Open Fhirbase Console
2\. Copy and paste the following query:

```sql
SELECT fhir_create_storage('{"resourceType": "Patient"}'::json);
```

3\. Click the 'Execute' button
  ![scr-14 04 2016_09-55-37](/imgs/docs/fhirbase_console/fhir_01.png)
4\. Check the result
  ![scr-14 04 2016_09-55-37](/imgs/docs/fhirbase_console/fhir_02.png)

Then you can add a new patient:

1\. Copy and paste the following query:

```sql
SELECT fhir_create_resource(' {"resource": {"resourceType": "Patient"}} ');
```

2\. Click the 'Execute' button

Let's check that the patient has been added:

1. Copy and paste the following query:

```sql
SELECT * FROM patient LIMIT 5;
```

2\. Click the 'Execute' button
  ![scr-14 04 2016_09-55-37](/imgs/docs/fhirbase_console/fhir_03.png)
3\. Check the result
  ![scr-14 04 2016_09-55-37](/imgs/docs/fhirbase_console/fhir_04.png)

[Back To Top](#toc)

<h2 id="getting_started_create_account">Creating an Account</h2>

To start working with Aidbox you have to [create a free Aidbox account](/landing.html#/signup). After you receive a confirmation email from us, click the link it contains to confirm that you own the email address.

[Back To Top](#toc)

<h2 id="getting_started_setup_environment">Setup Development Environment</h2>

For taking full advantage of Aidbox you will need [GIT](https://git-scm.com) and [NODE.JS](https://nodejs.org/).

* You can download and install GIT from [git-scm.com/downloads](https://git-scm.com/downloads).
* All the instructions how to install NODE.JS you can find at [nodejs.org/download](https://nodejs.org/download/)

You will also need [aidbox-cli](https://www.npmjs.com/package/aidbox-cli). You can install it with NPM. Just make sure that you have permissions for installing modules globally.

```sh
$ npm install -g aidbox-cli
$ aidbox v
```

If "aidbox v" returns OK, everything is ready for development of apps with Aidbox.

[Back To Top](#toc)

<h2 id="getting_started_clone_sample_app">Clone a Sample Application</h2>

To try Aidbox, run our [sample single-page application (SPA)](https://github.com/Aidbox/sample-spa.git).

Execute the following commands to clone it, and install modules and packages it depends on:

```sh
$ git clone https://github.com/Aidbox/sample-spa
$ cd sample-spa
$ npm install
```

__Sample App Structure__

It is a very simple app which consists of a minimal set of files.

```bsh
|-README.md
|- package.json
|- dist
    |- app.js
    |- index.html
    |- style.css
```

[Back To Top](#toc)

<h2 id="getting_started_prepare_box">Prepare a Box</h2>

You can work with Aidbox in two ways - using the [dashboard](/dashboard.html#/) or the command line interface (CLI) aidbox-cli. Command line interface is preferable because it provides more extensive functionality.

For preparing the box for work, you need to complete the following steps:

1. Log into Aidbox
1. Create a new box or switch to an existing one
1. Create users for your box

[Back To Top](#toc)

<h2 id="getting_started_aidbox_cli">Aidbox CLI</h2>

__Login__

For logging into Aidbox, execute the following command while in the root folder of your app:

```sh
$ aidbox login
```

Enter email and password of your Aidbox account.

__Boxes__

If you have created some boxes earlier, you can display all of your boxes by entering the command ``aidbox box list``. You have to choose a box to work with.

```sh
$ aidbox box list
$ aidbox box use <boxname>
```

Otherwise enter the command ``aidbox box new <boxname>`` to create your first box.

```sh
$ aidbox box new <boxname>
$ aidbox box list
```

__Users__

Now You can create users for all the people who will be using your box.

```sh
$ aidbox user new <username>:<password>
$ aidbox user list
```

Another way of doing this is to run a wizard by entering the command ``aidbox user new``.

[Back To Top](#toc)

<h2 id="getting_started_create_policy">Creating policy</h2>

You should add policy

```json
{
  "required": ["client"],
  "properties": {
    "client": {"type": "object"}
  }
}
```

by following [policies guide][]

[policies guide]: /docs/Policies.html#policies_ui_1

[Back To Top](#toc)

<h2 id="getting_started_run_sample_app">Run Sample App</h2>

Link your app to the box. In the file ``dist/app.js`` set the variable
``BOX_URL`` to the URL of your box. For instance, if the name of your
box is ``mysuperapp`` then set the variable ``BOX_URL`` this way:

```js
var BOX_URL = 'https://mysuperapp.aidbox.io';
```

Now you can start your app locally. To do this enter the following command:

```sh
$ npm run start
```

Your application will be running at [http://localhost:5000](http://localhost:5000). Click on login button and enter login and password of one of the box users. Just in case, these are the users you have just created with ``aidbox user`` command, not your Aidbox account user.

After logging in you will see a simple patient list which allows to filter, add and edit patients.

[Back To Top](#toc)

<h2 id="getting_started_deploy_sample_app">Deploy App into the Box</h2>

Now you can deploy your app into the box. To achieve this, enter the following command:

```sh
$ aidbox deploy
```

After receiving a message about successful deploy, you can visit your app at the URL generated from the box name - ``https://mysuperapp.aidbox.io`` for the box mysuperapp.

[Back To Top](#toc)
# Getting Started

An overview of Aidbox, how to start development, run your first app and deploy it into the cloud.

* [Creating an Account](#getting_started_create_account)
* [Setup Development Environment](#getting_started_setup_environment)
* [Clone a Sample Application](#getting_started_clone_sample_app)
* [Prepare a Box](#getting_started_prepare_box)
* [Aidbox CLI](#getting_started_aidbox_cli)
* [Creating policy](#getting_started_create_policy)
* [Run Sample App](#getting_started_run_sample_app)
* [Deploy App into the Box](#getting_started_deploy_sample_app)
# Getting Started

An overview of Aidbox, how to start development, run your first app and deploy it into the cloud.

## Creating an Account

To start working with Aidbox you have to [create a free Aidbox account](/landing.html#/signup). After you receive a confirmation email from us, click the link it contains to confirm that you own the email address.

## Setup Development Environment

For taking full advantage of Aidbox you will need [GIT](https://git-scm.com) and [NODE.JS](https://nodejs.org/).

* You can download and install GIT from [git-scm.com/downloads](https://git-scm.com/downloads).
* All the instructions how to install NODE.JS you can find at [nodejs.org/download](https://nodejs.org/download/)

You will also need [aidbox-cli](https://www.npmjs.com/package/aidbox-cli). You can install it with NPM. Just make sure that you have permissions for installing modules globally.

```sh
$ npm install -g aidbox-cli
$ aidbox v
```

If “aidbox v” returns OK, everything is ready for development of apps with Aidbox.

## Clone a Sample Application

To try Aidbox run our [sample single-page application (SPA)](https://github.com/Aidbox/sample-spa.git).

Execute the following commands to clone it, and install modules and packages it depends on:

```sh
$ git clone https://github.com/Aidbox/sample-spa
$ cd sample-spa
$ npm install
```

__Sample App Structure__

It is a very simple app which consists of a minimal set of files.

```bsh
|-README.md
|- package.json
|- dist
    |- app.js
    |- index.html
    |- style.css
```

## Prepare a Box

You can work with Aidbox in two ways - using the [dashboard](/dashboard.html#/) or the command line interface (CLI) aidbox-cli. Command line interface is preferable because it provides more extensive functionality.

For preparing the box for work, you need to complete the following steps:

* Log into Aidbox
* Create a new box or switch to an existing one
* Create users for your box

## Aidbox CLI

__Login__

For logging into Aidbox, execute the following command while in the root folder of your app:

```sh
$ aidbox login
```

Enter email and password of your Aidbox account.

__Boxes__

If you have created some boxes earlier, you can display all of your boxes by entering the command ``aidbox box list``. You have to choose a box to work with.

```sh
$ aidbox box list
$ aidbox box use <boxname>
```

Otherwise enter the command ``aidbox box new <boxname>`` to create your first box.

```sh
$ aidbox box new <boxname>
$ aidbox box list
```

__Users__

Now You can create users for all the people who will be using your box.

```sh
$ aidbox user new <username>:<password>
$ aidbox user list
```

Another way of doing this is to run a wizard by entering the command ``aidbox user new``.

## Run Sample App

Link your app to the box. In the file ``dist/app.js`` set the variable
``BOX_URL`` to the URL of your box. For instance, if the name of your
box is ``mysuperapp`` then set the variable ``BOX_URL`` this way:

```js
var BOX_URL = 'https://mysuperapp.aidbox.io';
```

Now you can start your app locally. To do this enter the following command:

```sh
$ npm run start
```

Your application will be running at [http://localhost:5000](http://localhost:5000). Click on login button and enter login and password of one of the box users. Just in case, these are the users you have just created with ``aidbox user`` command, not your Aidbox account user.

After logging in you will see a simple patient list which allows to filter, add and edit patients.

## Deploy App into the Box

Now you can deploy your app into the box. To achieve this, enter the following command:

```sh
$ aidbox deploy
```

After receiving a message about successful deploy, you can visit your app at the URL generated from the box name - ``https://mysuperapp.aidbox.io`` for the box mysuperapp.


# Hosting Overview

You can host One Page applications, written in HTML & JavaScript, directly on your box.
This applications could be easily developed on your local machine and deployed in box
in a seconds with one command (see [Getting Started](/docs/Getting_Started.html)).

[Back To Top](#toc)# Sample App Tutorial

We are offering this tutorial for learning core concepts of application development with Aidbox. We will develop a sample [AngularJS](https://angularjs.org) web application which consists of a form for on-boarding patients (CRUD) with a search by name function.

See [sample single-page application (SPA)](https://github.com/Aidbox/sample-spa.git).

![Sample SPA](/imgs/docs/spa_tutorial/spa01.png)

After completing this tutorial you should learn:

* how to create Aidbox Web applications with NodeJS and AngularJS
* how to use aidbox-cli
* how to use REST API and query the FHIR server

[Back To Top](#toc)

<h2 id="sample_application_1">Get Started</h2>

To start your development you have to install NodeJS. All the instructions how to install NODE.JS you can find at [nodejs.org/download](https://nodejs.org/download/)
. The next step of preparing your development environment is installation of aidbox-cli and box setup. All the information you need for working with aidbox-cli you can find on [its official page](https://www.npmjs.com/package/aidbox-cli).


```sh
$ npm install -g aidbox-cli
$ aidbox v
```

[Back To Top](#toc)

<h2 id="sample_application_2">Sample App Structure</h2>

Clone our [sample single-page application (SPA)](https://github.com/Aidbox/sample-spa.git).

Sample app consists of three main files:

```
├── package.json
└── dist
    ├── app.js
    └── index.html
```

* ``package.json`` - manifest file of your app. It contains the name of your project, its version, dependencies, commands to run etc You can read more about package.json file on [this page](https://docs.npmjs.com/files/package.json) of npm documentation.
* ``index.html`` - the first HTML file of your application.
* ``app.js`` - main part of your app. It contains all business logic, queries to the FHIR server via REST API, authorisation etc

Let’s look at each file more closely:

__Package.json__

``package.json`` contains only minimally required settings, one dependency ``http-server`` and one command ``start`` for starting a local Web server on the port 5000.

``package.json``

```js
{
  "name": "Aidbox-sample-spa",
  "version": "0.0.0",
  "dependencies": { },
  "devDependencies": {
    "http-server": "latest"
  },
  "engines": {
    "node": ">=0.12.0"
  },
  "scripts": {
    "start": "`npm bin`/http-server dist -p 5000"
  }
}
```

[Back To Top](#toc)

__index.html__

To simplify the app, let’s load all the styles and scripts from the CDN. Please pay attention that   ``angular-aidbox.js`` - is a service for the AngularJS framework providing REST API and authorization implementation. You can read more details about this project on the [aidboxjs](https://github.com/Aidbox/aidboxjs) official page.

``index.html``

```html
<!doctype html>
<html ng-app="app">
  <head>
    <meta charset="utf-8">
    <title>My sample app</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular.min.js" ></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular-cookies.min.js" ></script>
   <script src="//aidbox.io/angular-aidbox.js" ></script>
  </head>
  <body>
    <nav class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
        <div id="navbar" class="navbar">
          <ul class="nav navbar-nav navbar-right">
            <li ng-if="user" class="login">
              <a href="#">{{user.email}}</a>
            </li>
            <li ng-if="!user">
              <a ng-click="auth.signin()" href="#">Sign in</a>
            </li>
            <li ng-if="user">
              <a ng-click="auth.signout()" href="#">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <h3>Sample app</h3>
      <div ng-show="user" class="ng-hide">
      </div>
    </div>
  </body>
</html>
```

[Back To Top](#toc)

__app.js__

``app.js``

```js
(function() {
    var BOX_URL = 'https://myapp.aidbox.io';
    var app = angular.module('app', ['ngCookies', 'ngAidbox']);
    app.run(function($rootScope, $aidbox) {
        $aidbox.init({
            box: BOX_URL,
            onSignIn: function(user) {
                $rootScope.user = user;
            },
            onSignOut: function() {
                $rootScope.user = null;
            }
        });
    });
})();
```

<h2 id="sample_application_3">Run</h2>

```bsh
npm run start
```

[Back To Top](#toc)

<h2 id="sample_application_4">Create Patient Form</h2>

TODO

[Back To Top](#toc)


<h2 id="sample_application_5">Patients List</h2>

TODO

[Back To Top](#toc)

<h2 id="sample_application_6">Patients CRUD</h2>

TODO

[Back To Top](#toc)

<h2 id="sample_application_7">Deploy</h2>

```bsh
aibox deploy
```

[Back To Top](#toc)
# Hosting

* [Sample App Tutorial](#sample_application)
* [Get Started](#sample_application_1)
* [Sample App Structure](#sample_application_2)
* [Run](#sample_application_3)
* [Create Patient Form](#sample_application_4)
* [Patients List](#sample_application_5)
* [Patients CRUD](#sample_application_6)
* [Deploy](#sample_application_7)## Logs
# Overview

**Aidbox** is heavily based on [FHIR](http://www.hl7.org/fhir/).
**FHIR** (Fast Healthcare Interoperability Resources) is a modern open HL7 standard
for exchanging healthcare information electronically.

FHIR describes near 100 models for medical data - [**Resources**]()
(such as Patient, Encounter, Observation etc)
and [REST API]() to access and manipulate such data (Create, Update, Search etc).

**Aidbox** is FHIR server as a service with some useful additions.

With Aidbox you can focus on your business ideas validation,
deligating technical details to us.

Aidbox provides you with all you need to start
your next healthcare application:

* Scalable and powerful *database*  - [fhirbase](http://fhirbase.github.io/) - to store and query your data
* [FHIR](http://www.hl7.org/fhir/) compliant REST API to access and manipulate this data <!--  -->
* OAuth and flexible security rules to control access to application data
* API to manage application users, with optional registration module
* Terminology service for popular coding systems (LOINC, SNOMED, ICD10, RxNorm) and custom dictionaries (ValueSets)
* Hosting for Single Page Applicatons written in HTML and JavaScript


With **aidbox** you can develop Mobile, Single Page as well as classic Web Applications.

[Back To Top](#toc)

<h2 id="overview_1">Boxes</h2>

If you already have aidbox account, then you can create your own **boxes**.
**Box** is an instance of FHIR server with separate database and url.

For example: you can create several **boxes** for development,
one **box** for staging and another for production.

Boxes could be created from dashboard UI, using REST API or **aidbox-cli** util.

We undertake the maintaining, scaling and updating of your boxes.

[Back To Top](#toc)

<h2 id="overview_2">REST API</h2>

The primary **box** interface  is REST API.
Box is expected to be fully compliant to FHIR specification.

[Back To Top](#toc)

<h2 id="overview_3">OAuth</h2>

Every box implements OAuth 2.0 Provider Service and
all REST API calls is secured by OAuth. A

Aidbox supports all basic OAuth workflows:

* Web Application (Autorization Code)
* Single Page Applications (Implicite)
* REST clients (Client Credentials)
* JSON web tokens

[Back To Top](#toc)

<h2 id="overview_4">OAuth Scopes</h2>

## Security

Each box has their own users and security rules.
You can use REST API, **Box Admin UI** or **aidbox-cli** to manage users in box.
Also you can enable registration module to allow users register in box by themself.

Users could be assigned to groups and for each group you can create specific security rules.


## Database

Each **box** includes separate PostgreSQL database with installed **fhirbase**.
Fhirbase is an open source PostgreSQL extension to store FHIR resources
in PostgreSQL.
You can get direct connection to it from **Box Administration Interface**.


## Terminology

Almost all healthcare apps require a lot of terminologies, dictionaries and lookups.
Box implements FHIR Terminology Service Specification and shipped with
most popular Naming Systems, such as:

* LOINC
* SNOMED
* ICD10
* RxNorm

Also you can create and use your own NamingSystems and ValueSets.

## Static Hosting

You can host One Page applications, written in HTML & JavaScript, directly on your box.
This applications could be easyly developed on your local machine and deployed in box
in a seconds with one command (See Getting Started).

## SDK

You can interact with box from most popular platforms - Java, .NET, nodejs, Ruby, Python etc - using
FHIR reference libraries.

[Back To Top](#toc)# TOC

* [Overview](#overview)
* [Boxes](#overview_1)
* [REST API](#overview_2)
* [OAuth](#overview_3)
* [OAuth Scopes](#overview_4)# Overview

**Aidbox** is heavily based on [FHIR](http://www.hl7.org/fhir/).
**FHIR** (Fast Healthcare Interoperability Resources) is a modern open HL7 standard
for exchanging healthcare information electronically.

FHIR describes near 100 models for medical data - [**Resources**]()
(such as Patient, Encounter, Observation etc)
and [REST API]() to access and manipulate such data (Create, Update, Search etc).

**Aidbox** is FHIR server as a service with some useful additions.

With Aidbox you can focus on your business ideas validation,
deligating technical details to us.

Aidbox provides you with all you need to start
your next healthcare application:

* Scalable and powerful *database*  - [fhirbase](http://fhirbase.github.io/) - to store and query your data
* [FHIR](http://www.hl7.org/fhir/) compliant REST API to access and manipulate this data <!--  -->
* OAuth and flexible security rules to control access to application data
* API to manage application users, with optional registration module
* Terminology service for popular coding systems (LOINC, SNOMED, ICD10, RxNorm) and custom dictionaries (ValueSets)
* Hosting for Single Page Applicatons written in HTML and JavaScript

With **aidbox** you can develop Mobile, Single Page as well as classic Web Applications.



## Boxes

If you already have aidbox account, then you can create your own **boxes**.
**Box** is an instance of FHIR server with separate database and url.

For example: you can create several **boxes** for development,
one **box** for staging and another for production.

Boxes could be created from dashboard UI, using REST API or **aidbox-cli** util.

We undertake the maintaining, scaling and updating of your boxes.

## REST API

The primary **box** interface  is REST API.
Box is expected to be fully compliant to FHIR specification.

## OAuth

Every box implements OAuth 2.0 Provider Service and
all REST API calls is secured by OAuth. A

Aidbox supports all basic OAuth workflows:

* Web Application (Autorization Code)
* Single Page Applications (Implicite)
* REST clients (Client Credentials)
* JSON web tokens ???

# OAuth Scopes

## Security

Each box has their own users and security rules.
You can use REST API, **Box Admin UI** or **aidbox-cli** to manage users in box.
Also you can enable registration module to allow users register in box by themself.

Users could be assigned to groups and for each group you can create specific security rules.


## Database

Each **box** includes separate PostgreSQL database with installed **fhirbase**.
Fhirbase is an open source PostgreSQL extension to store FHIR resources
in PostgreSQL.
You can get direct connection to it from **Box Administration Interface**.


## Terminology

Almost all healthcare apps require a lot of terminologies, dictionaries and lookups.
Box implements FHIR Terminology Service Specification and shipped with
most popular Naming Systems, such as:

* LOINC
* SNOMED
* ICD10
* RxNorm

Also you can create and use your own NamingSystems and ValueSets.

## Static Hosting

You can host One Page applications, written in HTML & JavaScript, directly on your box.
This applications could be easyly developed on your local machine and deployed in box
in a seconds with one command (See Getting Started).

## SDK

You can interact with box from most popular platforms - Java, .NET, nodejs, Ruby, Python etc - using
FHIR reference libraries.
# Policies CLI

NONE

[Back To Top](#toc)# Policies Overview

Policy is a JSON schema filtering REST requests. A request succeeds if at least one of the policies is valid for it.

[Back To Top](#toc)# Policies REST API

TODO

[Back To Top](#toc)# Policies

* [Overview](#policies_info)
* [UI Guide](#policies_ui)
    - [General Information](#policies_ui_6)
    - [How to add a new policy rule](#policies_ui_1)
    - [Built-in Help](#policies_ui_2)
    - [Search by policy rule](#policies_ui_3)
    - [How to edit a policy rule](#policies_ui_4)
    - [How to delete a policy rule](#policies_ui_5)
    - [Examples](#policies_ui_7)
        - [Allow everything](#policies_ui_example_1)
        - [Read-only access to everything](#policies_ui_example_2)
        - [Access for a client with client_id = site](#policies_ui_example_3)
        - [Allow access for the 'Users' group](#policies_ui_example_4)
        - [Allow access for all clients](#policies_ui_example_5)
        - [Checks that user has specific email and at least one group](#policies_ui_example_6)
        - [Checks that user has at least one group](#policies_ui_example_7)
        - [Set access rights for administrators](#policies_ui_example_8)

* [REST API](#policies_rest)# Policies UI Guide

<h2 id="policies_ui_6">General Information</h2>

Let's consider the work of the Basic template. Here is the JSON schema of the template:

```
{
  "type": "object",
  "properties": {
    "method": {
      "constant": "GET"
    },
    "uri": {
      "type": "string",
      "pattern": "/fhir.*"
    }
  }
}
```
In this schema two constraints are introduced:

1. it is allowed to use only the GET method;
2. it is allowed to use only request URIs starting with "/fhir".

Below the template selection element there is a tool for debugging. This tool consists of the following elements:

- HTTP-method selection (GET, POST, PUT, DELETE);
- command line for entering address, starting with /fhir (implying the base server address going before the slash);
- the Debug button;
- the Request Body area.

The Request Body area is used for displaying the request, the schema and the result with errors and warnings if any.
For debugging the magic key __debug=true is used, so only request validation is performed, and the requests themselves
are not executed. Let's perform the following tests to check our Basic template:

**Positive:**

1. select the GET method
2. enter the URI /fhir/Patient
3. click the Debug button
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_01.png)
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_02.png)
4. Part 'result' shows that there are no errors
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_03.png)

**Negative:**

1. select the POST method
2. enter the URI /users
3. click the Debug button
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_04.png)
4. Part result shows that there are two errors:

  * POST method is used and only GET method is allowed
  * URI should start with /fhir, but it starts with /users

  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_05.png)

[Back To Top](#toc)

<h2 id="policies_ui_1">How to add a new policy rule</h2>

1. Open the Policies tab
2. Click the 'Create new item' button
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_06.png)
3. Fill in the fields Id, Title, Type, Policy. The 'Policy' field is used to enter a JSON schema. By default the Policy field is preset to the Basic template, you can select another template from available Basic, Advanced and Pro templates
4. Click the Create button
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_07.png)

[Back To Top](#toc)

<h2 id="policies_ui_2">Built-in Help</h2>

1. Click the Help button to get information about possible schema parameters
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_08.png)
2. Click the Close button to return to editing policy
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_09.png)

[Back To Top](#toc)

<h2 id="policies_ui_3">Search by policy rule</h2>

1. To search by policy rule, simply enter the search text in the filter field.
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_10.png)
2. Records in the list will be
immediately filtered according to your entry.
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_11.png)

[Back To Top](#toc)

<h2 id="policies_ui_4">How to edit a policy rule</h2>

1. Select required policy rule record in the list
2. Perform necessary editing
3. Click the Save button
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_12.png)
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_13.png)

[Back To Top](#toc)

<h2 id="policies_ui_5">How to delete a policy rule</h2>

1. Select required policy rule record in the list
2. Click the Delete button
3. The record will be deleted without confirmation
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_14.png)
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_15.png)

__Note:__ A request succeeds if at least one of the policies is valid for it.

<h2 id="policies_ui_7">Examples</h2>

<h3 id="policies_ui_example_1">Allow everything</h3>

__Note:__Empty schema allows everything and is not recommended to use.

```json
{}
```

[Back To Top](#toc)

<h3 id="policies_ui_example_2">Read-only access to everything</h3>

```
{
  "type" : "object",
  "properties" : {
  	"title" : "Read-only access to everything",
    "method" : {
      "enum" : [ "GET" ]
    }
  }
}
```

[Back To Top](#toc)

<h3 id="policies_ui_example_3">Access for a client with client_id = site</h3>

```
{
 "required" : [ "client" ],
 "properties" : {
   "client" : {
     "type" : "object",
     "properties" : {
       "client_id" : {
         "constant" : "site"
       }
     }
   }
 }
}
```

[Back To Top](#toc)

<h3 id="policies_ui_example_4">Allow access for the 'Users' group</h3>

```json
{
  "required" : [ "user" ],
  "properties" : {
    "uri" : {
      "type" : "string",
      "anyOf" : [ {
        "pattern" : "/users"
      }, {
        "pattern" : "/fhir/.+"
      } ]
    },
    "user" : {
      "type" : "object",
      "required" : [ "groups" ],
      "properties" : {
        "groups" : {
          "not" : {
            "items" : {
              "properties" : {
                "name" : {
                  "not" : {
                    "enum" : [ "Users" ]
                  }
                }
              }
            }
          },
          "type" : "array",
          "items" : {
            "type" : "object",
            "required" : [ "name" ]
          },
          "minItems" : 1
        }
      }
    },
    "method" : {
      "enum" : [ "GET" ]
    }
  }
}
```

[Back To Top](#toc)

<h3 id="policies_ui_example_5">Allow access for all clients</h3>

```
{
  "required" : [ "client" ],
  "properties" : {
    "client" : {
      "type" : "object"
    }
  }
}
```

[Back To Top](#toc)

<h3 id="policies_ui_example_6">Checks that user has specific email and at least one group</h3>

```json
{
  "type" : "object",
  "required" : [ "user" ],
  "properties" : {
    "user" : {
      "required" : [ "email", "groups" ],
      "properties" : {
        "email" : {
          "enum" : [ "boxuser1@gmail.com" ]
        },
        "groups" : {
          "type" : "array",
          "minItems" : 1
        }
      }
    }
  }
}
```

[Back To Top](#toc)

<h3 id="policies_ui_example_7">Checks that user has at least one group</h3>

```json
{
  "required" : [ "user" ],
  "properties" : {
    "user" : {
      "type" : "object",
      "required" : [ "groups" ],
      "properties" : {
        "groups" : {
          "type" : "array",
          "minItems" : 1
        }
      }
    }
  }
}
```

[Back To Top](#toc)

<h3 id="policies_ui_example_8">Set access rights for administrators</h3>

```json
{
  "required" : [ "user" ],
  "properties" : {
    "uri" : {
      "type" : "string",
      "title" : "Any string",
      "pattern" : ".+"
    },
    "user" : {
      "type" : "object",
      "required" : [ "groups" ],
      "properties" : {
        "groups" : {
          "not" : {
            "items" : {
              "required" : [ "name" ],
              "properties" : {
                "name" : {
                  "not" : {
                    "enum" : [ "Administrators" ]
                  }
                }
              }
            }
          },
          "description" : "Should be in Administrators group"
        }
      }
    },
    "method" : {
      "enum" : [ "GET", "POST", "PUT", "DELETE", "OPTION", "PATCH", "HEAD" ]
    }
  }
}
```

[Back To Top](#toc)## Simple queues & watchers API

Queues and watchers is simple, but flexible tool to
create workflows in aidbox.


## Working with queues and jobs

#### GET queues/

list queues

#### POST queues/

```
{id: 'queue name', description: 'description'}
```
 create new queue

#### POST queues/[queue-name]/jobs
```
{} // any payload
```
create new job

#### POST queues/[queue-name]/[attr]/[value]/[attr]/[value]
```
{} // any payload
```
create new job with {attr: value} merged into payload

#### GET queues/[queue-name]/job-id
get job

#### DELETE queues/[queue-name]/job-id
pick job

#### DELETE queues/[queue-name]/[attr]/[value]/[attr]/[value]
search jobs with attr=value
# REST API

* [Box Management](#box_lifecycle_rest)
* [Users and Groups](#users_and_groups_rest)
* [Policies](#policies_rest)
* [Clients](#clients_rest)
* [FHIR Server](#fhir_api_rest)# Policies

Policy is a JSON schema filtering REST requests. The policy type PostgreSQL function is available on the
form but at the moment only one policy type is working - JSON Schema. The Policy field is used to enter a JSON schema.
By default the Policy field is preset to the Basic template, you can select another template from available Basic,
Advanced and Pro templates.

Let's consider the work of the Basic template. Here is the JSON schema of the template:

```
{
  "type": "object",
  "properties": {
    "method": {
      "constant": "GET"
    },
    "uri": {
      "type": "string",
      "pattern": "/fhir.*"
    }
  }
}
```
In this schema two constraints are introduced:

1. it is allowed to use only the GET method;
2. it is allowed to use only request URIs starting with "/fhir".

Below the template selection element there is a tool for debugging. This tool consists of the following elements:

- HTTP-method selection (GET, POST, PUT, DELETE);
- command line for entering address, starting with /fhir (implying the base server address going before the slash);
- the Debug button;
- the Request Body area.

The Request Body area is used for displaying the request, the schema and the result with errors and warnings if any.
For debugging the magic key __debug=true is used, so only request validation is performed, and the requests themselves
are not executed. Let's perform the following tests to check our Basic template:

**Positive:**

1. select the GET method
2. enter the URI /fhir/Patient
3. click the Debug button
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_01.png)
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_02.png)
4. Part 'result' shows that there are no errors
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_03.png)

**Negative:**

1. select the POST method
2. enter the URI /users
3. click the Debug button
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_04.png)
4. Part 'result' shows that there are two errors:
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_05.png)
  - POST method is used, and only GET method is allowed
  - URI should start with /fhir, but it starts with /users


## Schema Examples

**Read-only access to everything:**

```
{
  "type" : "object",
  "title" : "Read-only access to everything",
  "properties" : {
    "method" : {
      "enum" : [ "GET" ]
    }
  }
}
```

**Access for a client with client_id = site:**

```
{
 "required" : [ "client" ],
 "properties" : {
   "client" : {
     "type" : "object",
     "properties" : {
       "client_id" : {
         "constant" : "site"
       }
     }
   }
 }
}
```

**Allow read-only access for the Doctors group:**

```
 {
 "required" : [ "user" ],
 "properties" : {
   "method": {
      "enum": [
        "GET"
      ]
    },
    "uri": {
      "type": "string",
      "pattern": "^/fhir/Patient.*"
    }
  },
	"user" : {
     "type" : "object",
     "properties" : {
       "groups" : {
       		"name" : {
         		"constant" : "Doctors"
       		}
       	}
     }
   }
 }
```

Allow access for all clients:

```
{
  "required" : [ "client" ],
  "properties" : {
    "client" : {
      "type" : "object"
    }
  }
}
```


## How to add a new policy rule

1. Open the Policies tab
2. Click the 'Create new item' button
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_06.png)
3. Fill in the fields Id, Title, Type, Policy
4. Click the Create button
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_07.png)

## Help

1. Click the Help button to get information about possible schema parameters
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_08.png)
2. Click the Close button to return to editing policy
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_09.png)

## Search by policy rule

1. To search by policy rule, simply enter the search text in the filter field.
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_10.png)
2. Records in the list will be
immediately filtered according to your entry.
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_11.png)

## How to edit a policy rule

1. Select required policy rule record in the list
2. Perform necessary editing
3. Click the Save button
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_12.png)
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_13.png)

## How to delete a policy rule

1. Select required policy rule record in the list
2. Click the Delete button
3. The record will be deleted without confirmation
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_14.png)
  ![scr-14 04 2016_09-55-37](/imgs/docs/policies/policies_15.png)

# Tools

* [Box Management](Box_Management.html)
* [Users and Groups](Users_and_Groups.html)
* [Policies](Policies.html)
* [Clients](Clients.html)
* [FHIR Server](FHIR_Server.html)
* [FHIR Storage](FHIR_Storage.html)
* [Hosting](Hosting.html)# Sample app tutorial

We are offering this tutorial for learning core concepts of application development with Aidbox. We will develop a sample [AngularJS](https://angularjs.org), Web application which consists of a form for onboarding patients (CRUD) with a search by name function.

![Sample SPA](/imgs/docs/spa_tutorial/spa01.png)

After completing this tutorial you should learn:

* how to create Aidbox Web applications with NodeJS and AngularJS
* how to use aidbox-cli
* how to use REST API and query the FHIR server
* __What else?__

## Get started

To start your development you have to install NodeJS. All the instructions how to install NODE.JS you can find at [nodejs.org/download](https://nodejs.org/download/)
. The next step of preparing your development environment is installation of aidbox-cli and box setup. All the information you need for working with aidbox-cli you can find on [its official page](https://www.npmjs.com/package/aidbox-cli).


```sh
$ npm install -g aidbox-cli
$ aidbox v
```

## Sample app structure

Sample app consists of three main files:

```bsh
├── package.json
└── dist
    ├── app.js
    └── index.html
```

* ``package.json`` - manifest file of your app. It contains the name of your project, its version, dependencies, commands to run etc You can read more about package.json file on [this page](https://docs.npmjs.com/files/package.json) of npm documentation.
* ``index.html`` - the first HTML file of your application.
* ``app.js`` - main part of your app. It contains all business logic, queries to the FHIR server via REST API, authorisation etc

Let’s look at each file more closely

__Package.json__

``package.json`` contains only minimally required settings, one dependency ``http-server`` and one command ``start`` for starting a local Web server on the port 5000.

``package.json``
```js
{
  "name": "Aidbox-sample-spa",
  "version": "0.0.0",
  "dependencies": { },
  "devDependencies": {
    "http-server": "latest"
  },
  "engines": {
    "node": ">=0.12.0"
  },
  "scripts": {
    "start": "`npm bin`/http-server dist -p 5000"
  }
}
```

__index.html__

To simplify the app let’s load all the styles and scripts from the CDN. Please pay attention that   ``angular-aidbox.js`` - is a service for the AngularJS framework providing REST API and authorisation implementation. You can read more details about this project on the [aidboxjs](https://github.com/Aidbox/aidboxjs) official page.

``index.html``
```html
<!doctype html>
<html ng-app="app">
  <head>
    <meta charset="utf-8">
    <title>My sample app</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular.min.js" ></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular-cookies.min.js" ></script>
   <script src="//aidbox.io/angular-aidbox.js" ></script>
  </head>
  <body>
    <nav class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
        <div id="navbar" class="navbar">
          <ul class="nav navbar-nav navbar-right">
            <li ng-if="user" class="login">
              <a href="#">{{user.email}}</a>
            </li>
            <li ng-if="!user">
              <a ng-click="auth.signin()" href="#">Sign in</a>
            </li>
            <li ng-if="user">
              <a ng-click="auth.signout()" href="#">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <h3>Sample app</h3>
      <div ng-show="user" class="ng-hide">
      </div>
    </div>
  </body>
</html>
```

__app.js__

``app.js``
```js
(function() {
    var BOX_URL = 'https://myapp.aidbox.io';
    var app = angular.module('app', ['ngCookies', 'ngAidbox']);
    app.run(function($rootScope, $aidbox) {
        $aidbox.init({
            box: BOX_URL,
            onSignIn: function(user) {
                $rootScope.user = user;
            },
            onSignOut: function() {
                $rootScope.user = null;
            }
        });
    });
})();
```

Run

```bsh
npm run start
```

## Create patient form


## Patients list

## Patients CRUD

## Deploy

```bsh
aibox deploy
```
# TOC

* [Box Management](#box_lifecycle_ui)
    * [Create a Box](#box_lifecycle_ui_1)
    * [Manage a Box](#box_lifecycle_ui_2)
    * [Box Sharing](#box_lifecycle_ui_3)
    * [Box Unsharing](#box_lifecycle_ui_4)
    * [Delete a Box](#box_lifecycle_ui_5)
* [Users and Groups](#users_and_groups_ui)
    * [How to add a new group](#users_and_groups_ui_1)
    * [How to add a new user](#users_and_groups_ui_2)
    * [Search by users and groups](#users_and_groups_ui_3)
    * [How to edit users and groups](#users_and_groups_ui_4)
    * [How to delete users and groups](#users_and_groups_ui_5)
* [Policies](#policies_ui)
    - [How to add a new policy rule](#policies_ui_1)
    - [Built-in Help](#policies_ui_2)
    - [Search by policy rule](#policies_ui_3)
    - [How to edit a policy rule](#policies_ui_4)
    - [How to delete a policy rule](#policies_ui_5)
* [Clients](#clients_ui)
    * [Implicit](#clients_ui_1)
    * [Authorization Code](#clients_ui_2)
    * [Client Credentials](#clients_ui_3)
    * [Edit Clients](#clients_ui_4)
    * [Delete Clients](#clients_ui_5)
    * [Search Clients](#clients_ui_6)
* [Fhirbase Console](#fhirbase_console_ui)
* [REST Console](#rest_console_ui)# Users and Groups CLI

### User Commands

__user__ is a command for working with users in current box. To view a list of all available subcommands, execute:

``` bash
$ aidbox user help
  user list                -- Display a list of users in current box
  user help                -- Show help information
  user new                 -- Create a user via wizard
  user new email:password  -- Create a user inline
```

### user list

Outputs a list of all users in current box.

``` bash
$ aidbox user list
  INFO: Display a list of users in box [boxname]
  ; For now it displays raw JSON
```

### user new

Creates a new user using a wizard, in current box.

``` bash
$ aidbox user new
  INFO: Create new user in box [boxname]
  Email: <test@gmail.com>
  Password: <password>
  OK: User [test@gmail.com] has been successfully created in box [boxname]
```

Another command to create a user inline without a wizard, has the following syntax:

aidbox user new email:password

``` bash
$ aidbox user new test_2@gmail.com:password
  INFO: Create new user in box [boxname]
  OK: User [test_2@gmail.com] has been successfully created in box [boxname]
```

[Back To Top](#toc)# Users and Groups Overview

Each aidbox box has its own users and security rules.
You can use REST API, Box Admin UI or aidbox-cli to manage users in an aidbox box.
Also you can enable registration module to allow users register in an aidbox box by themselves.

Users could be assigned to groups and for each group you can create specific security rules.

Users and Groups tools are used to create, edit and delete box users and user groups. These users' credentials are used to log in the application working on the top of the aidbox box.

[Back To Top](#toc)# Users and Groups REST API

Same tasks can be performed programmatically via REST API.

## POST /users

Creates new user.

Example Request:

```
POST https://[box-name].aidbox.io/users?access_token=[access-token]
Accept: application/json
Content-Type: application/json

{"email": "user@example.com", "password": "godloveskittens", "data": "{}"}
```

Example Response:

```
{
  "data": null,
  "password": "$s0$f0801$PAPMyIhrU98utG2MFZN66w==$L6xOyD4seflK3hzQtQLAQJ6U1PP01x/ciDvSQnxfVIg=",
  "email": "user@example.com",
  "status": null,
  "id": 2
}
// HTTP/1.1 201 Created
// Server: nginx
// Date: Thu, 05 May 2016 10:38:44 GMT
// Content-Type: application/json
// Content-Length: 152
// Connection: keep-alive
// Request duration: 0.307818s
```

In case of invalid data you'll receive `422 Unprocessable Entity`
status:

```
{
  "entity": {
    "data": "{}",
    "password": "godloveskittens",
    "email": "user@example.com"
  },
  "errors": {
    "email": [
      "email is already taken"
    ]
  }
}
// HTTP/1.1 422 Unprocessable Entity
// Server: nginx
// Date: Thu, 05 May 2016 10:49:06 GMT
// Content-Type: application/json
// Content-Length: 126
// Connection: keep-alive
// Request duration: 0.514180s
```

## GET /users

Returns list of existing box users.

Example Request:

```
GET https://[box-name].aidbox.io/users?access_token=[access-token]
```

Example Response:

```
[
  {
    "group-ids": [],
    "groups": null,
    "data": "{ }",
    "email": "user@example.com",
    "status": null,
    "id": 2
  }
]
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 10:51:55 GMT
// Content-Type: application/json
// Content-Length: 180
// Connection: keep-alive
// Request duration: 0.403116s
```

## GET /users/[id]

Retrieves data for specific user.

Example Request:

```
GET https://[box-name].aidbox.io/users/2?access_token=[access-token]
```

Example Response:

```
{
  "groups": [],
  "data": null,
  "password": "$s0$f0801$PAPMyIhrU98utG2MFZN66w==$L6xOyD4seflK3hzQtQLAQJ6U1PP01x/ciDvSQnxfVIg=",
  "email": "user@example.com",
  "status": null,
  "id": 2
}
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 12:53:39 GMT
// Content-Type: application/json
// Content-Length: 164
// Connection: keep-alive
// Request duration: 0.192518s
```

## PUT /users/[id]

Updates existing user.

Example Request:

```
PUT https://[box-name].aidbox.io/users/2?access_token=[access-token]
Accept: application/json
Content-Type: application/json

{"data": null, "password": "new-password", "email": "user@example.com"}
```

Example Response:

```
{
  "data": null,
  "password": "$s0$f0801$z7Q1dw22tyH5lkHTVSf0hQ==$NpBEXBOCbHty4cURu0FIm7rcSUCTXE3tHaPnE4fT5Ms=",
  "email": "user@example.com",
  "status": null,
  "id": 2
}
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 13:06:19 GMT
// Content-Type: application/json
// Content-Length: 152
// Connection: keep-alive
// Request duration: 0.357732s
```


## DELETE /users/[id]

Deletes specific user. Returns data of deleted user.

Example Request:

```
DELETE https://[box-name].aidbox.io/users/2?access_token=[access-token]
```

Example Response:

```
{
  "data": null,
  "password": "$s0$f0801$z7Q1dw22tyH5lkHTVSf0hQ==$NpBEXBOCbHty4cURu0FIm7rcSUCTXE3tHaPnE4fT5Ms=",
  "email": "user@example.com",
  "status": null,
  "id": 2
}
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 13:07:35 GMT
// Content-Type: application/json
// Content-Length: 152
// Connection: keep-alive
// Request duration: 0.387985s
```

[Back To Top](#toc)# Users and Groups

* [Overview](#users_and_groups_info)
* [UI Guide](#users_and_groups_ui)
    * [How to add a new group](#users_and_groups_ui_1)
    * [How to add a new user](#users_and_groups_ui_2)
    * [Search by users and groups](#users_and_groups_ui_3)
    * [How to edit users and groups](#users_and_groups_ui_4)
    * [How to delete users and groups](#users_and_groups_ui_5)
* [CLI](#users_and_groups_cli)
* [REST API](#users_and_groups_rest)# Users and Groups UI Guide

<h2 id="users_and_groups_ui_1">How to add a new group</h2>

1. Open the Groups tab
2. Click the 'Create new item' button
  ![scr-04 05 2016_16-27-54](/imgs/docs/users_and_groups/users_01.png)
3. Fill in the fields Name and Description
4. Click the Create button
  ![scr-04 05 2016_16-28-18](/imgs/docs/users_and_groups/users_02.png)

[Back To Top](#toc)

<h2 id="users_and_groups_ui_2">How to add a new user</h2>

1. Open the Users tab
2. Click the 'Create new item' button
  ![scr-04 05 2016_16-34-51](/imgs/docs/users_and_groups/users_03.png)
3. Fill in the fields Email, Password, Data (any valid JSON), select
   Group-ids (if there are groups)
4. Click the Create button
  ![scr-04 05 2016_16-35-04](/imgs/docs/users_and_groups/users_04.png)

[Back To Top](#toc)

<h2 id="users_and_groups_ui_3">Search by users and groups</h2>

1. To search by users and groups, simply enter the search text in the filter field.
  ![scr-04 05 2016_16-43-03](/imgs/docs/users_and_groups/users_05.png)
2. Records in the list will be immediately filtered according to your entry.
  ![scr-04 05 2016_16-43-09](/imgs/docs/users_and_groups/users_06.png)

[Back To Top](#toc)

<h2 id="users_and_groups_ui_4">How to edit users and groups</h2>

1. Select required user or group record in the list
2. Perform necessary editing
3. Click the Save button
  ![scr-04 05 2016_16-28-42](/imgs/docs/users_and_groups/users_07.png)
  ![scr-04 05 2016_16-35-24](/imgs/docs/users_and_groups/users_08.png)
  ![scr-04 05 2016_16-28-42](/imgs/docs/users_and_groups/users_09.png)
  ![scr-04 05 2016_16-35-24](/imgs/docs/users_and_groups/users_10.png)

[Back To Top](#toc)

<h2 id="users_and_groups_ui_5">How to delete users and groups</h2>

1. Select required user or group record in the list
2. Click the Delete button
3. The record will be deleted without confirmation
  ![scr-04 05 2016_16-28-46](/imgs/docs/users_and_groups/users_11.png)
  ![scr-04 05 2016_16-35-27](/imgs/docs/users_and_groups/users_12.png)

[Back To Top](#toc)# Users and Groups

## How to add a new group

1. Open the Groups tab
2. Click the 'Create new item' button
  ![scr-04 05 2016_16-27-54](/imgs/docs/users_and_groups/users_01.png)
3. Fill in the fields Name and Description
4. Click the Create button
  ![scr-04 05 2016_16-28-18](/imgs/docs/users_and_groups/users_02.png)

## How to add a new user

1. Open the Users tab
2. Click the 'Create new item' button
  ![scr-04 05 2016_16-34-51](/imgs/docs/users_and_groups/users_03.png)
3. Fill in the fields Email, Password, Data (any valid JSON), select
   Group-ids (if there are groups)
4. Click the Create button
  ![scr-04 05 2016_16-35-04](/imgs/docs/users_and_groups/users_04.png)

## Search by users and groups

1. To search by users and groups, simply enter the search text in the filter field.
  ![scr-04 05 2016_16-43-03](/imgs/docs/users_and_groups/users_05.png)
2. Records in the list will be immediately filtered according to your entry.
  ![scr-04 05 2016_16-43-09](/imgs/docs/users_and_groups/users_06.png)


## How to edit users and groups

1. Select required user or group record in the list
2. Perform necessary editing
3. Click the Save button
  ![scr-04 05 2016_16-28-42](/imgs/docs/users_and_groups/users_07.png)
  ![scr-04 05 2016_16-35-24](/imgs/docs/users_and_groups/users_08.png)
  ![scr-04 05 2016_16-28-42](/imgs/docs/users_and_groups/users_09.png)
  ![scr-04 05 2016_16-35-24](/imgs/docs/users_and_groups/users_10.png)

## How to delete users and groups

1. Select required user or group record in the list
2. Click the Delete button
3. The record will be deleted without confirmation
  ![scr-04 05 2016_16-28-46](/imgs/docs/users_and_groups/users_11.png)
  ![scr-04 05 2016_16-35-27](/imgs/docs/users_and_groups/users_12.png)

# REST API

Box Groups and Users management can be performed programmatically via
REST API.

## Groups

### GET /groups

Retrieves list of existing box groups.

```
GET https://[box-name].aidbox.io/groups?access_token=[access-token]
```

Response:

```
[
  {
    "created_at": "2016-05-05T13:59:23.939Z",
    "scopes": "null",
    "description": "Defaut group",
    "name": "default",
    "id": 5
  }
]
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 14:00:22 GMT
// Content-Type: application/json
// Content-Length: 112
// Connection: keep-alive
// Request duration: 0.204370s
```

### POST /groups

Creates new group.

```
POST https://[box-name].aidbox.io/groups?access_token=[access-token]
Accept: application/json
Content-Type: application/json

{"name": "default", "description": "Defaut group"}
```

Response:

```
{
  "created_at": "2016-05-05T13:59:23.939Z",
  "scopes": null,
  "description": "Defaut group",
  "name": "default",
  "id": 5
}
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 13:59:23 GMT
// Content-Type: application/json
// Content-Length: 108
// Connection: keep-alive
// Request duration: 0.193083s
```

### GET /groups/[id]

Returns data for specific group.

```
GET https://[box-name].aidbox.io/groups/[id]?access_token=[access-token]
```

Response:

```
{
  "created_at": "2016-05-05T13:59:23.939Z",
  "scopes": null,
  "description": "Defaut group",
  "name": "default",
  "id": 5
}
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 14:04:18 GMT
// Content-Type: application/json
// Content-Length: 108
// Connection: keep-alive
// Request duration: 0.376984s
```

### PUT /groups/[id]

Updates specific group.

```
PUT https://[box-name].aidbox.io/groups/[id]?access_token=[access-token]
Accept: application/json
Content-Type: application/json

{"name": "default", "description": "Updated description"}
```

Response:

```
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 14:26:53 GMT
// Content-Type: application/json
// Content-Length: 0
// Connection: keep-alive
// Request duration: 1.164948s
```

### DELETE /groups/[id]

Deletes specific group.

```
DELETE https://[box-name].aidbox.io/groups/[id]?access_token=[access-token]
```

Response:

```
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 14:26:53 GMT
// Content-Type: application/json
// Content-Length: 0
// Connection: keep-alive
// Request duration: 1.164948s
```

### POST /users

Creates new user.

Example Request:

```
POST https://[box-name].aidbox.io/users?access_token=[access-token]
Accept: application/json
Content-Type: application/json

{"email": "user@example.com", "password": "godloveskittens", "data": "{}", "group-ids": [5]}
```

Example Response:

```
{
  "data": null,
  "password": "$s0$f0801$PAPMyIhrU98utG2MFZN66w==$L6xOyD4seflK3hzQtQLAQJ6U1PP01x/ciDvSQnxfVIg=",
  "email": "user@example.com",
  "status": null,
  "id": 2
}
// HTTP/1.1 201 Created
// Server: nginx
// Date: Thu, 05 May 2016 10:38:44 GMT
// Content-Type: application/json
// Content-Length: 152
// Connection: keep-alive
// Request duration: 0.307818s
```

In case of invalid data you'll receive `422 Unprocessable Entity`
status:

```
{
  "entity": {
    "data": "{}",
    "password": "godloveskittens",
    "email": "user@example.com"
  },
  "errors": {
    "email": [
      "email is already taken"
    ]
  }
}
// HTTP/1.1 422 Unprocessable Entity
// Server: nginx
// Date: Thu, 05 May 2016 10:49:06 GMT
// Content-Type: application/json
// Content-Length: 126
// Connection: keep-alive
// Request duration: 0.514180s
```

### GET /users

Returns list of existing box users.

Example Request:

```
GET https://[box-name].aidbox.io/users?access_token=[access-token]
```

Example Response:

```
[
  {
    "group-ids": [],
    "groups": null,
    "data": "{ }",
    "email": "user@example.com",
    "status": null,
    "id": 2
  }
]
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 10:51:55 GMT
// Content-Type: application/json
// Content-Length: 180
// Connection: keep-alive
// Request duration: 0.403116s
```

### GET /users/[id]

Retrieves data for specific user.

Example Request:

```
GET https://[box-name].aidbox.io/users/2?access_token=[access-token]
```

Example Response:

```
{
  "group-ids": [
    5
  ],
  "groups": [
    {
      "created_at": "2016-05-05T13:59:23.939013",
      "scopes": null,
      "description": "Defaut group",
      "name": "default",
      "id": 5
    }
  ],
  "data": null,
  "password": "$s0$f0801$PAPMyIhrU98utG2MFZN66w==$L6xOyD4seflK3hzQtQLAQJ6U1PP01x/ciDvSQnxfVIg=",
  "email": "user@example.com",
  "status": null,
  "id": 2
}
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 12:53:39 GMT
// Content-Type: application/json
// Content-Length: 164
// Connection: keep-alive
// Request duration: 0.192518s
```

### PUT /users/[id]

Updates existing user.

Example Request:

```
PUT https://[box-name].aidbox.io/users/2?access_token=[access-token]
Accept: application/json
Content-Type: application/json

{"data": null, "password": "new-password", "email": "user@example.com"}
```

Example Response:

```
{
  "data": null,
  "password": "$s0$f0801$z7Q1dw22tyH5lkHTVSf0hQ==$NpBEXBOCbHty4cURu0FIm7rcSUCTXE3tHaPnE4fT5Ms=",
  "email": "user@example.com",
  "status": null,
  "id": 2
}
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 13:06:19 GMT
// Content-Type: application/json
// Content-Length: 152
// Connection: keep-alive
// Request duration: 0.357732s
```

### DELETE /users/[id]

Deletes specific user. Returns data of deleted user.

Example Request:

```
DELETE https://[box-name].aidbox.io/users/2?access_token=[access-token]
```

Example Response:

```
{
  "data": null,
  "password": "$s0$f0801$z7Q1dw22tyH5lkHTVSf0hQ==$NpBEXBOCbHty4cURu0FIm7rcSUCTXE3tHaPnE4fT5Ms=",
  "email": "user@example.com",
  "status": null,
  "id": 2
}
// HTTP/1.1 200 OK
// Server: nginx
// Date: Thu, 05 May 2016 13:07:35 GMT
// Content-Type: application/json
// Content-Length: 152
// Connection: keep-alive
// Request duration: 0.387985s
```
