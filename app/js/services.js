'use strict';

angular.module('myApp.services', [])
    .factory('logservers', function() {
        // should replace this with a backend call. Hard coding is fine for now.
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
            }
        ];
    }
);

