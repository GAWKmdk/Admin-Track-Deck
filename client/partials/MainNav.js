Template.MainNav.events({
    
   
    'click .logout': function(event){
        event.preventDefault();
        
        //identify simple user who logged out
        analytics.identify( Meteor.userId(), {
      email: Meteor.user().emails[0].address,
      name: Meteor.user().profile.name
    });
      
        //track simple user behavior to sign_out
      analytics.track( 'signed_out', {
      title: user signed out
    });  
        
         Meteor.logout();
    }
});


//ex 
//'click .dashboard, click .usersettings, click .contentfeed, click .peoplemanagement, click .home, click .login, click .logout
//then compile flow map of duration and time between clicks and where that user went to complete activity. 

