'use strict';

angular.module('myApp.services', [])
    .factory('logservers', function() {
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
                    }
                ];
            },
            lookupSthForLogServer: function(logserver) {
                switch (logserver.id) {
                    case "google-pilot":
                        return {
                            good: [
                                { timestamp: moment(1318781876406), signature: 456},
                                { timestamp: moment(1318781899999), signature: 457}
                            ],
                            bad: [
                                { timestamp: moment(1234), signature: 45}
                            ]
                        };
                    case "google-aviator":
                        return {
                            good: [
                                { timestamp: moment(1318781876406), signature: 456},
                                { timestamp: moment(1318781899999), signature: 457}
                            ],
                            bad: [
                                { timestamp: moment(1234), signature: 45}
                            ]
                        };
                }
            }

        }
    });

