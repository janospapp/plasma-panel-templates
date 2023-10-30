panel = new Panel;
panel.location = "top";

panel.addWidget("org.kde.plasma.kickoff");
panel.addWidget("org.kde.plasma.appmenu");
panel.addWidget("org.kde.plasma.panelspacer");
local_clock = panel.addWidget("org.kde.plasma.digitalclock");
local_clock.currentConfigGroup = ["Appearance"];
local_clock.writeConfig("dateDisplayFormat", "BesideTime");
local_clock.writeConfig("dateFormat", "isoDate");
local_clock.writeConfig("displayTimezoneFormat", "FullText");
local_clock.writeConfig("showLocalTimezone", "true");
local_clock.writeConfig("showWeekNumbers", "true");

london_clock = panel.addWidget("org.kde.plasma.digitalclock");
london_clock.currentConfigGroup = ["Appearance"];
london_clock.writeConfig("dateDisplayFormat", "BesideTime");
london_clock.writeConfig("displayTimezoneFormat", "FullText");
london_clock.writeConfig("lastSelectedTimezone", "Europe/London");
london_clock.writeConfig("selectedTimeZones", "Europe/London,Local");
london_clock.writeConfig("showDate", "false");
london_clock.writeConfig("showLocalTimezone", "true");

panel.addWidget("org.kde.plasma.panelspacer");
panel.addWidget("org.kde.plasma.systemtray");
