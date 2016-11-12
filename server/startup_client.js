if (Meteor.isClient) {
   

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        
         Accounts.createUser({
            email: emailVar,
            password: passwordVar
             
             
        });
        
       // analytics.identify( Meteor.userId(), {
    //  email: Meteor.user().emails[0].address
    //});
        
      //  analytics.track ('generated_user', {
     // title: user created
   // });
         AnalyticsService.track( 'User_session created an account' ); 
        console.log("New Account created.");
    }
});

Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
                
        Meteor.loginWithPassword(emailVar, passwordVar);
        
       
        
        
         AnalyticsService.track( 'User_session logged in link' ); 
        console.log("User logged in with password.");
    }
});
    
}