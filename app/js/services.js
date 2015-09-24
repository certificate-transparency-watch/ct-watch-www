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
                        logId: "pLkJkLQYWBSHuxOizGdwCjw1mAT5G9+443fNDsgN3BA=",
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
                        id: "google-rocketeer",
                        name: "Google Rocketeer",
                        urlPrefix: "ct.googleapis.com/rocketeer",
                        logId: "7ku9t3XOYLrhQmkfq+GeZqMPfl+wctiDAMR7iXqo/cs=",
                        announceUrl: "http://www.certificate-transparency.org/known-logs",
                        good: true
                    },
                    {
                        id: "ct1.digicert-ct.com",
                        name: "ct1.digicert-ct.com/log",
                        urlPrefix: "ct1.digicert-ct.com/log",
                        logId: "VhQGmi/XwuzT9eG9RLI+x0Z2ubyZEVzA75SYVdaJ0N0=",
                        announceUrl: "http://www.certificate-transparency.org/known-logs",
                        good: true
                    },
                    {
                        id: "ct.izenpe.com",
                        name: "ct.izenpe.com",
                        urlPrefix: "ct.izenpe.com",
                        logId: "dGG0oJz7PUHXUVlXWy52SaRFqNJ3CbDMVkpkgrfrQaM=",
                        announceUrl: "http://www.certificate-transparency.org/known-logs",
                        good: true
                    },
                    {
                        id: "log.certly.io",
                        name: "log.certly.io",
                        urlPrefix: "log.certly.io",
                        logId: "zbUXm3/BwEb+6jETaj+PAC5hgvr4iW/syLL1tatgSQA=",
                        announceUrl: "http://www.certificate-transparency.org/known-logs",
                        good: true
                    },
                    {
                        id: "ct.ws.symantec.com",
                        name: "ct.ws.symantec.com",
                        urlPrefix: "ct.ws.symantec.com",
                        logId: "3esdK3oNT6Ygi4GtgWhwfi6OnQHVXIiNPRHEzbbsvsw=",
                        announceUrl: "https://code.google.com/p/chromium/issues/detail?id=483625",
                        good: true
                    },
                    {
                        id: "ctlog.api.venafi.com",
                        name: "ctlog.api.venafi.com",
                        urlPrefix: "ctlog.api.venafi.com",
                        logId: "rDua7X+pZ0dXFZ5tfVdWcvnZgQCUHpve/+yhMTt1eC0=",
                        announceUrl: "https://code.google.com/p/chromium/issues/detail?id=499446",
                        good: true
                    }
                ];
            },
            lookupSthForLogServer: function(logserver) {
                return $http.get('//api.ctwatch.net/logserver/' + logserver.id)
            }

        }
    });

