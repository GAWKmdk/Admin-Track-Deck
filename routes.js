// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        //billboard header and footer
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});



// Home Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        //sidemenu 
        BlazeLayout.render("AppLayout", {main: "Dashboard"});
    }
});



// Home Page
FlowRouter.route('/peoplemanagement', {
    name: 'peoplemanagement',
    action() {
        //sidemenu 
        BlazeLayout.render("AppLayout", {main: "PeopleManagement"});
    }
});

// Home Page
FlowRouter.route('/contentfeeds', {
    name: 'contentfeeds',
    action() {
        //sidemenu 
        BlazeLayout.render("AppLayout", {main: "ContentFeeds"});
    }
});

// Home Page
FlowRouter.route('/usersettings', {
    name: 'usersettings',
    action() {
        //sidemenu 
        BlazeLayout.render("AppLayout", {main: "UserSettings"});
    }
});