$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/DevEnvironment/IntelliJ Workspace/MPOS_Suite/./src/test/resources/features/Google.feature");
formatter.feature({
  "line": 2,
  "name": "Google Test",
  "description": "",
  "id": "google-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search keywords in Google",
  "description": "",
  "id": "google-test;search-keywords-in-google",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Google homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"\u003csearchKey\u003e\" in Search box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Google displays relevant search result",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "google-test;search-keywords-in-google;",
  "rows": [
    {
      "cells": [
        "searchKey"
      ],
      "line": 9,
      "id": "google-test;search-keywords-in-google;;1"
    },
    {
      "cells": [
        "USA"
      ],
      "line": 10,
      "id": "google-test;search-keywords-in-google;;2"
    },
    {
      "cells": [
        "Uganda"
      ],
      "line": 11,
      "id": "google-test;search-keywords-in-google;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Search keywords in Google",
  "description": "",
  "id": "google-test;search-keywords-in-google;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Google homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"USA\" in Search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Google displays relevant search result",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDef.googleHomepageIsOpen()"
});
formatter.result({
  "duration": 9094512006,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinitions.GoogleStepDef.googleHomepageIsOpen(GoogleStepDef.java:39)\r\n\tat ✽.Given Google homepage is open(C:/DevEnvironment/IntelliJ Workspace/MPOS_Suite/./src/test/resources/features/Google.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 7
    }
  ],
  "location": "GoogleStepDef.enterInSearchBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleStepDef.googleDisplaysRelevantSearchResult()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2057871781,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat stepDefinitions.Hooks.wrapUp(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.ExtendedRuntime.runHookIfTagsMatch(ExtendedRuntime.java:236)\r\n\tat cucumber.runtime.ExtendedRuntime.runHooks(ExtendedRuntime.java:224)\r\n\tat cucumber.runtime.ExtendedRuntime.runAfterHooks(ExtendedRuntime.java:218)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExecutionUnitRunner.run(ExtendedExecutionUnitRunner.java:32)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:21)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.run(ExtendedExamplesRunner.java:94)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:75)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.run(ExtendedScenarioOutlineRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:81)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:32)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.run(ExtendedCucumber.java:148)\r\n\tat com.github.mkolisnyk.cucumber.runner.parallel.CucumberRunnerThread.run(CucumberRunnerThread.java:25)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "Search keywords in Google",
  "description": "",
  "id": "google-test;search-keywords-in-google;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Google homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"USA\" in Search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Google displays relevant search result",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDef.googleHomepageIsOpen()"
});
formatter.result({
  "duration": 8101816701,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinitions.GoogleStepDef.googleHomepageIsOpen(GoogleStepDef.java:39)\r\n\tat ✽.Given Google homepage is open(C:/DevEnvironment/IntelliJ Workspace/MPOS_Suite/./src/test/resources/features/Google.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 7
    }
  ],
  "location": "GoogleStepDef.enterInSearchBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleStepDef.googleDisplaysRelevantSearchResult()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 256482003,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat stepDefinitions.Hooks.wrapUp(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.ExtendedRuntime.runHookIfTagsMatch(ExtendedRuntime.java:236)\r\n\tat cucumber.runtime.ExtendedRuntime.runHooks(ExtendedRuntime.java:224)\r\n\tat cucumber.runtime.ExtendedRuntime.runAfterHooks(ExtendedRuntime.java:218)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExecutionUnitRunner.run(ExtendedExecutionUnitRunner.java:32)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.retry(ExtendedExamplesRunner.java:151)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:120)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:21)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.run(ExtendedExamplesRunner.java:94)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:75)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.run(ExtendedScenarioOutlineRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:81)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:32)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.run(ExtendedCucumber.java:148)\r\n\tat com.github.mkolisnyk.cucumber.runner.parallel.CucumberRunnerThread.run(CucumberRunnerThread.java:25)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "Search keywords in Google",
  "description": "",
  "id": "google-test;search-keywords-in-google;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Google homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"USA\" in Search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Google displays relevant search result",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDef.googleHomepageIsOpen()"
});
formatter.result({
  "duration": 8115162385,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinitions.GoogleStepDef.googleHomepageIsOpen(GoogleStepDef.java:39)\r\n\tat ✽.Given Google homepage is open(C:/DevEnvironment/IntelliJ Workspace/MPOS_Suite/./src/test/resources/features/Google.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 7
    }
  ],
  "location": "GoogleStepDef.enterInSearchBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleStepDef.googleDisplaysRelevantSearchResult()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 315720983,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat stepDefinitions.Hooks.wrapUp(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.ExtendedRuntime.runHookIfTagsMatch(ExtendedRuntime.java:236)\r\n\tat cucumber.runtime.ExtendedRuntime.runHooks(ExtendedRuntime.java:224)\r\n\tat cucumber.runtime.ExtendedRuntime.runAfterHooks(ExtendedRuntime.java:218)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExecutionUnitRunner.run(ExtendedExecutionUnitRunner.java:32)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.retry(ExtendedExamplesRunner.java:151)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:120)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:21)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.run(ExtendedExamplesRunner.java:94)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:75)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.run(ExtendedScenarioOutlineRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:81)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:32)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.run(ExtendedCucumber.java:148)\r\n\tat com.github.mkolisnyk.cucumber.runner.parallel.CucumberRunnerThread.run(CucumberRunnerThread.java:25)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Search keywords in Google",
  "description": "",
  "id": "google-test;search-keywords-in-google;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Google homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"Uganda\" in Search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Google displays relevant search result",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDef.googleHomepageIsOpen()"
});
formatter.result({
  "duration": 6046008333,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinitions.GoogleStepDef.googleHomepageIsOpen(GoogleStepDef.java:39)\r\n\tat ✽.Given Google homepage is open(C:/DevEnvironment/IntelliJ Workspace/MPOS_Suite/./src/test/resources/features/Google.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uganda",
      "offset": 7
    }
  ],
  "location": "GoogleStepDef.enterInSearchBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleStepDef.googleDisplaysRelevantSearchResult()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 307294560,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat stepDefinitions.Hooks.wrapUp(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.ExtendedRuntime.runHookIfTagsMatch(ExtendedRuntime.java:236)\r\n\tat cucumber.runtime.ExtendedRuntime.runHooks(ExtendedRuntime.java:224)\r\n\tat cucumber.runtime.ExtendedRuntime.runAfterHooks(ExtendedRuntime.java:218)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExecutionUnitRunner.run(ExtendedExecutionUnitRunner.java:32)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:21)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.run(ExtendedExamplesRunner.java:94)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:75)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.run(ExtendedScenarioOutlineRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:81)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:32)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.run(ExtendedCucumber.java:148)\r\n\tat com.github.mkolisnyk.cucumber.runner.parallel.CucumberRunnerThread.run(CucumberRunnerThread.java:25)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Search keywords in Google",
  "description": "",
  "id": "google-test;search-keywords-in-google;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Google homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"Uganda\" in Search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Google displays relevant search result",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDef.googleHomepageIsOpen()"
});
formatter.result({
  "duration": 8118020800,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinitions.GoogleStepDef.googleHomepageIsOpen(GoogleStepDef.java:39)\r\n\tat ✽.Given Google homepage is open(C:/DevEnvironment/IntelliJ Workspace/MPOS_Suite/./src/test/resources/features/Google.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uganda",
      "offset": 7
    }
  ],
  "location": "GoogleStepDef.enterInSearchBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleStepDef.googleDisplaysRelevantSearchResult()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 274725138,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat stepDefinitions.Hooks.wrapUp(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.ExtendedRuntime.runHookIfTagsMatch(ExtendedRuntime.java:236)\r\n\tat cucumber.runtime.ExtendedRuntime.runHooks(ExtendedRuntime.java:224)\r\n\tat cucumber.runtime.ExtendedRuntime.runAfterHooks(ExtendedRuntime.java:218)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExecutionUnitRunner.run(ExtendedExecutionUnitRunner.java:32)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.retry(ExtendedExamplesRunner.java:151)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:120)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:21)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.run(ExtendedExamplesRunner.java:94)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:75)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.run(ExtendedScenarioOutlineRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:81)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:32)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.run(ExtendedCucumber.java:148)\r\n\tat com.github.mkolisnyk.cucumber.runner.parallel.CucumberRunnerThread.run(CucumberRunnerThread.java:25)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Search keywords in Google",
  "description": "",
  "id": "google-test;search-keywords-in-google;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Google homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"Uganda\" in Search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Google displays relevant search result",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleStepDef.googleHomepageIsOpen()"
});
formatter.result({
  "duration": 8117123162,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinitions.GoogleStepDef.googleHomepageIsOpen(GoogleStepDef.java:39)\r\n\tat ✽.Given Google homepage is open(C:/DevEnvironment/IntelliJ Workspace/MPOS_Suite/./src/test/resources/features/Google.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uganda",
      "offset": 7
    }
  ],
  "location": "GoogleStepDef.enterInSearchBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleStepDef.googleDisplaysRelevantSearchResult()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 243501532,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.162)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER1-PC\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.162, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63df9a59106bc59acb8ac5d61aa53b62\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat stepDefinitions.Hooks.wrapUp(Hooks.java:16)\r\n\tat sun.reflect.GeneratedMethodAccessor49.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.ExtendedRuntime.runHookIfTagsMatch(ExtendedRuntime.java:236)\r\n\tat cucumber.runtime.ExtendedRuntime.runHooks(ExtendedRuntime.java:224)\r\n\tat cucumber.runtime.ExtendedRuntime.runAfterHooks(ExtendedRuntime.java:218)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExecutionUnitRunner.run(ExtendedExecutionUnitRunner.java:32)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.retry(ExtendedExamplesRunner.java:151)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:120)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.runChild(ExtendedExamplesRunner.java:21)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExamplesRunner.run(ExtendedExamplesRunner.java:94)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:75)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.runChild(ExtendedScenarioOutlineRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedScenarioOutlineRunner.run(ExtendedScenarioOutlineRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:81)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:32)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.run(ExtendedCucumber.java:148)\r\n\tat com.github.mkolisnyk.cucumber.runner.parallel.CucumberRunnerThread.run(CucumberRunnerThread.java:25)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
});