var MY_IP =''
var BROADCAST_IP =''
//var network = require('network')

 console.log('1')
// console.log(network)

var needle       = require('needle'),
os_functions = require('./' + process.platform);


  os_functions.get_active_network_interface_name(function(err, nic_name) {
    if (err || !nic_name) return cb(err || new Error("No active interfaces detected."));

    nic_by_name(nic_name, function(err, nic) {
      if (err) return cb(err);

      os_functions.netmask_for(nic_name, function(err, netmask) {
        if (!err && netmask)
          nic.netmask = netmask.trim();

        os_functions.gateway_ip_for(nic_name, function(err, ip) {
          if (!err && ip)
            nic.gateway_ip = ip.toString().trim();

          cb(null, nic);
        })
      });
    });
});


