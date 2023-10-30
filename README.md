# plasma-panel-templates
Contains templates for my Plasma 5 panels for easily adding them to my desktop.

## Usage
Once cloned, you can install the templates with the following command:
```
> kpackagetool5 -t Plasma/LayoutTemplate -i ./topbarPanel
```
Which will copy the folder to `~/.local/share/plasma/layout-templates` with the
proper name.

If the template is already installed, but you want to apply the latest changes,
you can run the command with `-u` upgrade flag instead:
```
> kpackagetool5 -t Plasma/LayoutTemplate -u ./topbarPanel
```

After the template is installed the panel can be added easily from the `Add Panel`
desktop menu, where the `Topbar Panel` entry appears.

## Resources

* [KDE Desktop scripting](https://develop.kde.org/docs/plasma/scripting/templates/)
  - documentation about how to write the panel templates
