Event Scheduler

This is a Event Scheduler application in angular version 18. which probably allows to addition of events or tasks with information like title, date, time, description. Users can add as many as the event they want and can edit and delete also

Installation

1. The user should have a node installed in their system
2. The user then can install the latest version of angular 18 with angular cli

Components
1. we have one major component of the event form where the user can fill in. This is template driven approach and it's a standalone component also so it will bell having the import of commonModule and FormsModule also
2. we have then the event list component where we can see the list of data in a table format. Users can also edit and delete the event also
3. The app module is the main module where both the above modules are imported and presented.
4. event.service.ts module where all the functionality of the application is there all the major functions of add update delete are present in the service file and letter used in the above components.

Style
 in the application we have used Css for styling the component
