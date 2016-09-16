@ECHO OFF
SET /p comment=Comment:
git commit -a -m "%comment%"
git push