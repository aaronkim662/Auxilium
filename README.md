# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# Auxilium: Have a learning Experience

This app allows students to make an appointment with teachers if they have questions about certain topics. Students and teachers can agree on an online meeting time. All users can edit their information or delete their account. 

A student from GA is doing their homework. It is 9 P.M at night, he/she is stuck and in desperate need of help. They can make an appointment with a teacher and ask for help. It can be almost immediate or drawn out. 

Technologies used:
    - React
    - Ruby on Rails
    - React Calendar
    - React animation
    - Custom build API
    - Admin: Bcrypt, Auth
    - Axios
    - Cors
    - Action mailer
#### CRUD
Create: All users can create an account
Read : All users can view other profiles and appointments
Update: All users can edit their information
Delete: All users can delete their account

#### ERD

![erd](https://res.cloudinary.com/dyeho7qym/image/upload/v1570199113/Screen_Shot_2019-10-04_at_10.24.10_AM_vwy8i7.png) 

#### Wireframe

![](https://res.cloudinary.com/dyeho7qym/image/upload/a_0/v1570196806/Images/20191004_092633_gkh2ha.jpg)

![](https://res.cloudinary.com/dyeho7qym/image/upload/v1570196823/Images/20191004_094207_bejp9h.jpg)

#### Component heirarchy

![](https://res.cloudinary.com/dyeho7qym/image/upload/a_auto_right/v1570196837/Images/20191004_094401_ffikp5.jpg)

#### MVP

Users can login
Different login page for TA and students
Infomation stored in the back end
Users can edit or delete their account
TAs will be viewed in a list
Students can delete their appointments

#### PostMVP

Students can request an appointment based on TAs time
TAs will receive a notification
TAs can be rated
TAs can deny an appointment which will send back to the student a denial notification

#### Timeline 

| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: |
| Create api | H |  1 Hr |  |  
| Create backend | H | 5 Hr | 2 Hr |  
| Create skeleton of front end | H | 1 Hr |  |  
| Create login | H | 1 Hr | |  
| Create form | H | 1 Hr | 
| Display info | H | 1 Hr |  |  
| Style Components | H | 2 Hr |  |  
| Implement full CRUD to the front end | H |  |  |  
| PostMVP | | | 
| Select times | M | 2 Hr |  |
| Create appointment | M | 2 Hr |  |
| Send out information/Notification | M | 4 Hr |  |   
| Rating | M | 2 Hr |  |
| Private room/ chat box | M | 7 days |  |
| Deny an appointment | M | 4 Hr |  |