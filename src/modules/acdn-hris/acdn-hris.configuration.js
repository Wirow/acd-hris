(function() {

    angular
        .module("acdn-hris")
        .config(acdnHrisConfig)
        .config(acdnHrisStateConfig);

    function acdnHrisConfig($ionicConfigProvider) {

        //Disable backButton text and enable only "left-arrow" icon
        $ionicConfigProvider.backButton.previousTitleText(false);
        $ionicConfigProvider.backButton.text('').icon('ion-chevron-left');

        //Align of
        $ionicConfigProvider.navBar.alignTitle('center');

    }

    function acdnHrisStateConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("auth", {
                url: "/auth",
                templateUrl: "templates/auth/auth.template.html",
                controller: "AuthCtrl",
                controllerAs: "auth"
            })
            .state("join", {
                url: "/join",
                templateUrl: "templates/join/join.template.html",
                controller: "JoinCtrl",
                controllerAs: "join"
            })
            .state("privacy", {
                url: "/privacy",
                templateUrl: "templates/privacy/privacy.template.html",
                controller: "PrivacyCtrl",
                controllerAs: "privacy"
            })
            .state("terms", {
                url: "/terms",
                templateUrl: "templates/terms/terms.template.html",
                controller: "TermsCtrl",
                controllerAs: "terms"
            })
            .state("reset", {
                url: "/reset-password",
                templateUrl: "templates/reset-password/reset-password.template.html",
                controller: "ResetPasswordCtrl",
                controllerAs: "reset"
            })
            .state("app", {
                url: "/app",
                abstract: true,
                templateUrl: "templates/app/app.template.html",
                controller: "AppCtrl",
                controllerAs: "app"
            })
            .state("app.dashboard", {
                url: "^/dashboard",
                views: {
                    "app-content": {
                        templateUrl: "templates/dashboard/dashboard.template.html",
                        controller: "DashboardCtrl",
                        controllerAs: "dashboard"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/auth');
    }

})();