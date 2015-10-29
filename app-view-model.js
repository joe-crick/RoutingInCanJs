import can from 'can';
import $ from 'jquery';
import 'node_modules/can/map/define/define';

var ApplicationViewModel = can.Map.extend({
    define: {
        page: {
            type: 'string'
        },
        color: {
            type: 'string'
        }
    }
});

export default ApplicationViewModel;
