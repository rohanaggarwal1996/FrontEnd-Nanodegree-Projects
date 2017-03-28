var bio = {
    name: "Rohan Aggarwal",
    role: "Engineer",
    contacts: {
        mobile: "+91MOB",
        email: "rohan_aggarwal1996@gmail.com",
        github: "rohan_aggarwal1996",
        twitter: "string (optional)",
        location: "Ludhiana,Punjab,India",
    },
    welcomeMessage: "Welcome to the online resume project",
    skills: ["Web-Developer", "Event-Organiser", "Cooking", "App-Developer"],
    biopic: "images/fry.jpg",
};
var education = {
    schools: [{
            name: "Sacred Heart Sen. Sec. School",
            location: "Ludhiana",
            degree: "12-passed",
            majors: ["physics", "chemistry", "maths"],
            dates: "20/08/1996-23/03/2015",
            url: "www.sacredheartschool.com/"
        },
        {
            name: "Chitkara university",
            location: "chandigarh",
            degree: "B.E",
            majors: ["c", "c++", "html", "java"],
            dates: "20/08/2015-23/03/2019",
            url: "www.chitkara.com/"
        }
    ],
    onlineCourses: [{
        title: "Front-end-web devleopment",
        school: "chitkara",
        dates: "01/01/2017-01/04/2017",
        url: "https://classroom.udacity.com/"
    }]
};

var work = {
    jobs: [{
        employer: "chitkara",
        title: "teacher",
        location: " chandigarh,india",
        dates: "25-june-2016",
        description: "help students motivate",
    }, {
        employer: "google",
        title: "app developer",
        location: " bangalore,india",
        dates: "25-august-2016",
        description: "make appps of different kinds",
    }]
};


bio.display = function() {
    var newName = HTMLheaderName.replace("%data%", bio.name);
    var newRole = HTMLheaderRole.replace("%data%", bio.role);
    var newMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var newEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var newtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var newLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var newGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var newMobile1 = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var newEmail1 = HTMLemail.replace("%data%", bio.contacts.email);
    var newtwitter1 = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var newLocation1 = HTMLlocation.replace("%data%", bio.contacts.location);
    var newGithub1 = HTMLgithub.replace("%data%", bio.contacts.github);
    var newMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var newBiopic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(newRole);
    $("#header").prepend(newName);
    $("#topContacts").append(newMobile);
    $("#topContacts").append(newEmail);
    $("#topContacts").append(newtwitter);
    $("#topContacts").append(newLocation);
    $("#topContacts").append(newGithub);
    $("#footerContacts").append(newMobile1);
    $("#footerContacts").append(newEmail1);
    $("#footerContacts").append(newtwitter1);
    $("#footerContacts").append(newLocation1);
    $("#footerContacts").append(newGithub1);
    $("#header").append(newMessage);
    $("#header").append(newBiopic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            var newSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(newSkills);
        }
    }
};
bio.display();



education.display = function() {
    if (education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var newSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var newSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var newSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var newSchoolLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var newSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(newSchoolName + newSchoolDegree);
            $(".education-entry:last").append(newSchoolDate);
            $(".education-entry:first").append(newSchoolLoc);
            $(".education-entry:last").append(newSchoolMajor);
        }
    }
    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            var newonlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            var newonlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            var newonlineCourseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            var newonlineCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url).replace("#", education.onlineCourses[j].url);
            $(".education-entry:last").append(newonlineCourseTitle + newonlineCourseSchool);
            $(".education-entry:last").append(newonlineCourseDate);
            $(".education-entry:last").append(newonlineCourseUrl);
        }
    }
};
education.display();



work.display = function() {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            var newEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var newJobTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var newWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var newDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var newWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry").append(newEmployer + newJobTitle);
            $(".work-entry").append(newWorkLocation);
            $(".work-entry").append(newDate);
            $(".work-entry").append(newWorkDescription);
        }
    }
};
work.display();
var projects = {
    projects: [{
        title: "android robot",
        dates: "10/april/2016",
        description: "a robot that works with android app and all the controls are done by the application",
        images: ["images/1.jpg", "images/2.png"],
        url: "www.androidrobot.com",
    }]
};
$("#mapDiv").append(googleMap);
projects.display = function() {
    if (projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            var newProjectName = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var newProjectDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var newProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry").append(newProjectName);
            $(".project-entry").append(newProjectDate);
            $(".project-entry").append(newProjectDescription);

            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var newProjectImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry").append(newProjectImages);
            }
        }
    }
};
projects.display();

$(".super-header-wrapper").html("<img style='width:100%' src='http://goo.gl/WCrBmS'>");
