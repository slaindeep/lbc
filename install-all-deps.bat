@echo off
echo Removing existing node_modules...
rd /s /q node_modules

echo Removing package-lock.json...
del package-lock.json

echo Installing all dependencies...
npm install

echo Installing map dependencies...
npm install --save react-leaflet@4.2.1 leaflet@1.9.4 @types/leaflet@1.9.8

echo Installing CSS loaders...
npm install --save-dev css-loader style-loader

echo All dependencies installed successfully!
pause