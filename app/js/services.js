'use strict';

angular.module('myApp.services', [])
    .factory('logservers', function($http) {
        return {
            all : function() {
                return [
                    {
                        id: "google-pilot",
                        name: "Google Pilot",
                        urlPrefix: "ct.googleapis.com/pilot",
                        announceUrl: "https://www.imperialviolet.org/2013/08/01/ctpilot.html",
                        good: true
                    },
                    {
                        id: "google-aviator",
                        name: "Google Aviator",
                        urlPrefix: "ct.googleapis.com/aviator",
                        logId: "aPaY+B9kgr46jO65KB1M/HFRXWeT1ETRCmesu09P+8Q=",
                        announceUrl: "https://groups.google.com/forum/?fromgroups#!topic/certificate-transparency/I9czVN5LWps",
                        good: true
                    },
                    {
                        id: "alpha.ctlogs.org",
                        name: "alpha.ctlogs.org",
                        urlPrefix: "alpha.ctlogs.org",
                        announceUrl: "https://groups.google.com/forum/#!topic/certificate-transparency/uRemlJKb284",
                        good: true
                    }
                ];
            },
            lookupSthForLogServer: function(logserver) {
                return $http.get('//api.ct-watch.tom-fitzhenry.me.uk/logserver/' + logserver.id)
            }

        }
    });

