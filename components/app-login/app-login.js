import can from 'can';
import 'can/view/stache/stache';
import template from './app-login.stache!';

export default can.Component.extend({
    tag: 'app-login',
    template: template,
    viewModel: {}
});