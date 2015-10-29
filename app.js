import can from 'can';
import $ from 'jquery';
import index from 'index.stache!';
import AppViewModel from 'app-view-model';
import "can/route/pushstate/pushstate";
import 'components/app-login/app-login';
import 'components/app-user-toolbar/app-user-toolbar';
import 'components/app-dashboard/app-dashboard';

// Create an instance of AppViewModel (appViewModel)
var appViewModel = new AppViewModel({});

// Make appState the route's internal can.Map
can.route.map(appViewModel);

// Each element that will be set on the app-state must be preceded by a colon
// Also, set a default value for page (the login page)
can.route(':page');
can.route(':page/:color');

// Initialize routing
can.route.ready();

// Render the base application
// Link appState to index.stache
$('#app').html(index(appViewModel));

appViewModel.attr('page', 'login');
